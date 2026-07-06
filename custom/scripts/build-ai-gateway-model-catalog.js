#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const yaml = require("js-yaml");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const PROVIDER_DATA_FILE_PATH = path.join(
  REPO_ROOT,
  "snippets",
  "ai-gateway",
  "AIGatewayModelCatalogProvider.jsx",
);
const GENERATED_DATA_START_MARKER = "//-- GENERATED PROVIDERS DATA START --//";
const GENERATED_DATA_END_MARKER = "//-- GENERATED PROVIDERS DATA END --//";
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
// The docs UI expects a stable provider order instead of raw filesystem order.
const PROVIDER_OUTPUT_ORDER = [
  "openai",
  "anthropic",
  "google",
  "deepseek",
  "groq",
  "openrouter",
  "hyperbolic",
  "inceptionlabs",
  "inference.net",
];
// Requests to these providers can be billed through ngrok.ai inference, so they
// do not require a user-supplied upstream provider key in the catalog output.
const NGROK_MANAGED_PROVIDER_IDS = new Set(["openai", "anthropic"]);
class CatalogError extends Error {
  constructor(message) {
    super(message);
    this.name = "CatalogError";
  }
}

class Helpers {
  static toUniqueStrings(values) {
    return [...new Set((values ?? []).map(String))];
  }

  static combineModalities(modelData) {
    return Helpers.toUniqueStrings([
      ...(modelData.input_modalities ?? []),
      ...(modelData.output_modalities ?? []),
    ]);
  }

  static normalizeOptionalNumber(value) {
    // In the source catalog, 0 is used as a sentinel for "not specified".
    return value === 0 ? null : value ?? null;
  }

  static displayPath(filePath, inputRoot) {
    const repoRelativePath = path.relative(REPO_ROOT, filePath);

    if (!repoRelativePath.startsWith("..") && !path.isAbsolute(repoRelativePath)) {
      return Helpers.toPosixPath(repoRelativePath);
    }

    return Helpers.toPosixPath(
      path.join(path.basename(inputRoot), path.relative(inputRoot, filePath)),
    );
  }

  static isPlainObject(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
  }

  static compareStrings(left, right) {
    return left < right ? -1 : left > right ? 1 : 0;
  }

  static refKey(authorId, modelId) {
    // A single delimiter keeps alias/snapshot lookups in one flat map.
    return `${authorId}\u0000${modelId}`;
  }

  static asString(value, fallback) {
    return value === undefined || value === null || value === ""
      ? String(fallback)
      : String(value);
  }

  static indentBlock(value, spaces) {
    const prefix = " ".repeat(spaces);
    return value
      .split("\n")
      .map((line) => `${prefix}${line}`)
      .join("\n");
  }

  static escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  static formatError(error) {
    return error instanceof Error ? error.message : String(error);
  }

  static toPosixPath(filePath) {
    return filePath.split(path.sep).join("/");
  }

  static providerSlug(providerId, sourcePath) {
    return providerId === "inference.net"
      ? "inference-net"
      : path.basename(sourcePath, ".yaml");
  }
}

class Cli {
  static parseArguments(rawArgs) {
    const args = rawArgs.filter((arg) => arg !== "--");

    if (args.length !== 1) {
      throw new CatalogError(
        "usage: node custom/scripts/build-ai-gateway-model-catalog.js <catalog-root>",
      );
    }

    return path.resolve(process.cwd(), args[0]);
  }
}

class SourceCatalog {
  constructor({ inputRoot, authorsById, modelsByReference, providerFiles }) {
    this.inputRoot = inputRoot;
    this.authorsById = authorsById;
    this.modelsByReference = modelsByReference;
    this.providerFiles = providerFiles;
  }
}

class ProviderFile {
  constructor({ sourceIndex, sourcePath, data }) {
    this.sourceIndex = sourceIndex;
    this.sourcePath = sourcePath;
    this.data = data;
  }
}

class ModelRecord {
  constructor({ authorId, modelId, sourcePath, data }) {
    this.authorId = authorId;
    this.modelId = modelId;
    this.sourcePath = sourcePath;
    this.data = data;
  }

  get ref() {
    return `${this.authorId}/${this.modelId}`;
  }
}

class AuthorRecord {
  constructor({ authorId, sourcePath, data }) {
    this.authorId = authorId;
    this.sourcePath = sourcePath;
    this.data = data;
  }
}

class CatalogSummary {
  constructor({ providerCount, modelCount }) {
    this.provider_count = providerCount;
    this.model_count = modelCount;
  }
}

class CatalogModel {
  constructor({
    id,
    ref,
    authorId,
    providerId,
    providerDisplayName,
    displayName,
    releasedAt,
    deprecatedAt,
    retiredAt,
    aliases,
    modalities,
    maxContextWindow,
    maxOutputTokens,
    catalogIndex,
  }) {
    this.id = id;
    this.ref = ref;
    this.author_id = authorId;
    this.provider_id = providerId;
    this.provider_display_name = providerDisplayName;
    this.display_name = displayName;
    this.released_at = releasedAt;
    this.deprecated_at = deprecatedAt;
    this.retired_at = retiredAt;
    this.aliases = aliases;
    this.modalities = modalities;
    this.max_context_window = maxContextWindow;
    this.max_output_tokens = maxOutputTokens;
    this.sort = {
      catalog_index: catalogIndex,
      provider_index: 0,
    };
  }

  toOutputData() {
    return {
      id: this.id,
      display_name: this.display_name,
      author_id: this.author_id,
      released_at: this.released_at,
      deprecated_at: this.deprecated_at,
      retired_at: this.retired_at,
      aliases: this.aliases,
      modalities: this.modalities,
      max_context_window: this.max_context_window,
      max_output_tokens: this.max_output_tokens,
    };
  }
}

class CatalogProvider {
  constructor({
    id,
    slug,
    displayName,
    baseUrl,
    website,
    aliases,
    providerKeyRequired,
    source,
    models,
  }) {
    this.id = id;
    this.slug = slug;
    this.display_name = displayName;
    this.base_url = baseUrl;
    this.website = website;
    this.aliases = aliases;
    this.provider_key_required = providerKeyRequired;
    this.source = source;
    this.models = models;
  }

  get modelCount() {
    return this.models.length;
  }

  toOutputData() {
    return {
      id: this.id,
      slug: this.slug,
      display_name: this.display_name,
      base_url: this.base_url,
      website: this.website,
      aliases: this.aliases,
      provider_key_required: this.provider_key_required,
      description: this.source.provider_description ?? "",
      models: [...this.models]
        .sort(CatalogBuilder.compareModelsDescendingForOutput)
        .map((model) => model.toOutputData()),
    };
  }
}

class CatalogData {
  constructor({ schemaVersion, generatedFrom, providers, authorsById }) {
    this.schema_version = schemaVersion;
    this.generated_from = generatedFrom;
    this.providers = providers;
    this.authorsById = authorsById;
    this.summary = new CatalogSummary({
      providerCount: providers.length,
      modelCount: providers.reduce((sum, provider) => sum + provider.modelCount, 0),
    });
  }

  toOutputData() {
    return {
      schema_version: this.schema_version,
      generated_from: this.generated_from,
      providers: this.providers.map((provider) => provider.toOutputData()),
      summary: this.summary,
    };
  }
}

class SourceCatalogLoader {
  static load(inputRoot) {
    const authorsDirectory = path.join(inputRoot, "authors");
    const providersDirectory = path.join(inputRoot, "providers");

    SourceCatalogLoader.assertDirectoryExists(authorsDirectory, inputRoot, "authors");
    SourceCatalogLoader.assertDirectoryExists(providersDirectory, inputRoot, "providers");

    return new SourceCatalog({
      inputRoot,
      authorsById: SourceCatalogLoader.loadAuthorsById(authorsDirectory, inputRoot),
      modelsByReference: SourceCatalogLoader.loadModelsByReference(
        authorsDirectory,
        inputRoot,
      ),
      providerFiles: SourceCatalogLoader.loadProviderFiles(providersDirectory, inputRoot),
    });
  }

  static assertDirectoryExists(directoryPath, inputRoot, label) {
    let stats;

    try {
      stats = fs.statSync(directoryPath);
    } catch {
      throw new CatalogError(
        `Missing required input directory under ${inputRoot}: ${label}`,
      );
    }

    if (!stats.isDirectory()) {
      throw new CatalogError(
        `Missing required input directory under ${inputRoot}: ${label}`,
      );
    }
  }

  static loadProviderFiles(providersDirectory, inputRoot) {
    return SourceCatalogLoader.listYamlFiles(providersDirectory)
      // Provider definitions live directly under providers/, not nested below it.
      .filter((filePath) => path.dirname(filePath) === providersDirectory)
      .map((sourcePath, sourceIndex) => new ProviderFile({
        sourceIndex,
        sourcePath,
        data: SourceCatalogLoader.loadYamlFile(sourcePath, inputRoot),
      }));
  }

  static loadAuthorsById(authorsDirectory, inputRoot) {
    const authorsById = new Map();

    for (const sourcePath of SourceCatalogLoader.listYamlFiles(authorsDirectory)) {
      const authorLocation = SourceCatalogLoader.inferAuthorLocation(
        sourcePath,
        authorsDirectory,
      );

      if (!authorLocation) {
        continue;
      }

      authorsById.set(authorLocation.authorId, new AuthorRecord({
        authorId: authorLocation.authorId,
        sourcePath,
        data: SourceCatalogLoader.loadYamlFile(sourcePath, inputRoot),
      }));
    }

    return authorsById;
  }

  static loadModelsByReference(authorsDirectory, inputRoot) {
    const modelsByReference = new Map();

    for (const sourcePath of SourceCatalogLoader.listYamlFiles(authorsDirectory)) {
      const modelLocation = SourceCatalogLoader.inferModelLocation(
        sourcePath,
        authorsDirectory,
      );

      if (!modelLocation) {
        continue;
      }

      const data = SourceCatalogLoader.loadYamlFile(sourcePath, inputRoot);
      const modelId = Helpers.asString(data.id, path.basename(sourcePath, ".yaml"));
      const modelRecord = new ModelRecord({
        authorId: modelLocation.authorId,
        modelId,
        sourcePath,
        data,
      });

      for (const key of SourceCatalogLoader.buildModelReferenceKeys(
        modelLocation.authorId,
        modelId,
        data,
      )) {
        modelsByReference.set(key, modelRecord);
      }
    }

    return modelsByReference;
  }

  static buildModelReferenceKeys(authorId, modelId, data) {
    const keys = new Set([Helpers.refKey(authorId, modelId)]);

    // Provider catalog refs may point at the canonical ID, an alias, or a snapshot.
    for (const alias of Helpers.toUniqueStrings(data.id_aliases)) {
      keys.add(Helpers.refKey(authorId, alias));
    }

    for (const snapshot of data.snapshots ?? []) {
      if (Helpers.isPlainObject(snapshot) && snapshot.id) {
        keys.add(Helpers.refKey(authorId, String(snapshot.id)));
      }
    }

    return keys;
  }

  static inferModelLocation(sourcePath, authorsDirectory) {
    const relativeParts = path.relative(authorsDirectory, sourcePath).split(path.sep);

    // Only authors/<author>/models/*.yaml files define catalog-resolvable models.
    if (relativeParts.length < 2 || relativeParts[1] !== "models") {
      return null;
    }

    return { authorId: relativeParts[0] };
  }

  static inferAuthorLocation(sourcePath, authorsDirectory) {
    const relativeParts = path.relative(authorsDirectory, sourcePath).split(path.sep);

    // Author metadata lives at authors/<author>/<author>.yaml.
    if (
      relativeParts.length !== 2 ||
      relativeParts[1] !== `${relativeParts[0]}.yaml`
    ) {
      return null;
    }

    return { authorId: relativeParts[0] };
  }

  static loadYamlFile(sourcePath, inputRoot) {
    const contents = fs.readFileSync(sourcePath, "utf8");
    const value = yaml.load(contents) ?? {};

    if (!Helpers.isPlainObject(value)) {
      throw new CatalogError(
        `${Helpers.displayPath(sourcePath, inputRoot)} must contain a YAML mapping`,
      );
    }

    return value;
  }

  static listYamlFiles(rootDirectory) {
    const yamlFiles = [];
    const pendingDirectories = [rootDirectory];

    while (pendingDirectories.length > 0) {
      const currentDirectory = pendingDirectories.pop();
      const entries = fs.readdirSync(currentDirectory, { withFileTypes: true });

      entries.sort((left, right) => Helpers.compareStrings(left.name, right.name));

      for (const entry of entries) {
        const entryPath = path.join(currentDirectory, entry.name);

        if (entry.isDirectory()) {
          pendingDirectories.push(entryPath);
        } else if (entry.isFile() && entry.name.endsWith(".yaml")) {
          yamlFiles.push(entryPath);
        }
      }
    }

    yamlFiles.sort(Helpers.compareStrings);
    return yamlFiles;
  }
}

class CatalogBuilder {
  static build(sourceCatalog) {
    const errors = [];
    const providers = sourceCatalog.providerFiles.map((providerFile) =>
      CatalogBuilder.buildProvider(providerFile, sourceCatalog, errors),
    );

    if (errors.length > 0) {
      throw new CatalogError(errors.join("\n"));
    }

    return new CatalogData({
      schemaVersion: 1,
      generatedFrom: path.basename(sourceCatalog.inputRoot),
      providers,
      authorsById: sourceCatalog.authorsById,
    });
  }

  static buildProvider(providerFile, sourceCatalog, errors) {
    const providerId = Helpers.asString(
      providerFile.data.id,
      path.basename(providerFile.sourcePath, ".yaml"),
    );
    const catalogEntries = Array.isArray(providerFile.data.catalog)
      ? providerFile.data.catalog
      : [];
    const models = [];

    for (const [catalogIndex, catalogEntry] of catalogEntries.entries()) {
      if (!Helpers.isPlainObject(catalogEntry)) {
        continue;
      }

      const model = CatalogBuilder.resolveProviderModel({
        providerFile,
        providerId,
        inputRoot: sourceCatalog.inputRoot,
        catalogEntry,
        catalogIndex,
        modelsByReference: sourceCatalog.modelsByReference,
        errors,
      });

      if (model) {
        models.push(model);
      }
    }

    models.sort(CatalogBuilder.compareModelsAscendingByRelease);

    return new CatalogProvider({
      id: providerId,
      slug: Helpers.providerSlug(providerId, providerFile.sourcePath),
      displayName: Helpers.asString(providerFile.data.display_name, providerId),
      baseUrl: providerFile.data.base_url ?? null,
      website: providerFile.data.website ?? null,
      aliases: Helpers.toUniqueStrings(providerFile.data.id_aliases),
      providerKeyRequired: !NGROK_MANAGED_PROVIDER_IDS.has(providerId),
      source: {
        provider_file: Helpers.displayPath(providerFile.sourcePath, sourceCatalog.inputRoot),
        provider_index: providerFile.sourceIndex,
        provider_description: providerFile.data.description ?? null,
      },
      models,
    });
  }

  static resolveProviderModel({
    providerFile,
    providerId,
    inputRoot,
    catalogEntry,
    catalogIndex,
    modelsByReference,
    errors,
  }) {
    const reference = Helpers.asString(catalogEntry.ref, "");

    // Catalog refs are always author/model so they can resolve through the shared model index.
    if (!reference.includes("/")) {
      errors.push(
        `${Helpers.displayPath(providerFile.sourcePath, inputRoot)}: invalid catalog ref ${JSON.stringify(reference)}`,
      );
      return null;
    }

    const [authorId, modelId] = reference.split("/", 2);
    const modelRecord = modelsByReference.get(Helpers.refKey(authorId, modelId));

    if (!modelRecord) {
      errors.push(
        `${Helpers.displayPath(providerFile.sourcePath, inputRoot)}: unresolved catalog ref ${JSON.stringify(reference)}`,
      );
      return null;
    }

    try {
      return CatalogBuilder.buildModel({
        providerId,
        providerDisplayName: Helpers.asString(providerFile.data.display_name, providerId),
        inputRoot,
        catalogIndex,
        modelRecord,
      });
    } catch (error) {
      errors.push(Helpers.formatError(error));
      return null;
    }
  }

  static buildModel({
    providerId,
    providerDisplayName,
    inputRoot,
    catalogIndex,
    modelRecord,
  }) {
    const modelData = modelRecord.data;
    const modelSourcePath = modelRecord.sourcePath;

    return new CatalogModel({
      id: modelRecord.modelId,
      ref: modelRecord.ref,
      authorId: modelRecord.authorId,
      providerId,
      providerDisplayName,
      displayName: Helpers.asString(modelData.display_name, modelRecord.modelId),
      releasedAt: CatalogBuilder.normalizeDate(
        modelData.released_at,
        "released_at",
        true,
        modelSourcePath,
        inputRoot,
      ),
      deprecatedAt: CatalogBuilder.normalizeDate(
        modelData.deprecated_at,
        "deprecated_at",
        false,
        modelSourcePath,
        inputRoot,
      ),
      retiredAt: CatalogBuilder.normalizeDate(
        modelData.retired_at,
        "retired_at",
        false,
        modelSourcePath,
        inputRoot,
      ),
      aliases: CatalogBuilder.collectModelAliases(modelData),
      modalities: Helpers.combineModalities(modelData),
      maxContextWindow: Helpers.normalizeOptionalNumber(modelData.max_context_window),
      maxOutputTokens: Helpers.normalizeOptionalNumber(modelData.max_output_tokens),
      catalogIndex,
    });
  }

  static collectModelAliases(modelData) {
    const aliases = [
      ...Helpers.toUniqueStrings(modelData.id_aliases),
      ...(modelData.snapshots ?? [])
        .filter((snapshot) => Helpers.isPlainObject(snapshot) && snapshot.id)
        .map((snapshot) => String(snapshot.id)),
    ];

    return Helpers.toUniqueStrings(aliases).sort(Helpers.compareStrings);
  }

  static normalizeDate(value, fieldName, required, sourcePath, inputRoot) {
    if (value === null || value === undefined || value === "") {
      if (required) {
        throw new CatalogError(
          `${Helpers.displayPath(sourcePath, inputRoot)}: missing required ${fieldName}`,
        );
      }

      return null;
    }

    const normalizedValue = String(value);

    if (!DATE_PATTERN.test(normalizedValue)) {
      throw new CatalogError(
        `${Helpers.displayPath(sourcePath, inputRoot)}: ${fieldName} must be YYYY-MM-DD, got ${JSON.stringify(normalizedValue)}`,
      );
    }

    return normalizedValue;
  }

  static compareModelsAscendingByRelease(left, right) {
    return (
      // Ties fall back to provider catalog order so output stays stable across runs.
      Helpers.compareStrings(left.released_at, right.released_at) ||
      left.sort.catalog_index - right.sort.catalog_index ||
      Helpers.compareStrings(left.id, right.id)
    );
  }

  static compareModelsDescendingForOutput(left, right) {
    return (
      Helpers.compareStrings(right.released_at, left.released_at) ||
      right.sort.catalog_index - left.sort.catalog_index ||
      Helpers.compareStrings(left.id, right.id)
    );
  }
}

class ProviderDataFileBuilder {
  static shouldIncludeModelAlias(alias, resolvesTo) {
    // Only drop exact self-aliases (including casing-only variants). Punctuation
    // changes like "claude-opus-4.7" -> "claude-opus-4-7" are meaningful aliases.
    return alias.toLowerCase() !== resolvesTo.toLowerCase();
  }

  static buildFileContents(catalogData) {
    const fileTemplate = fs.readFileSync(PROVIDER_DATA_FILE_PATH, "utf8");
    const serializedData = Helpers.indentBlock(
      JSON.stringify(ProviderDataFileBuilder.buildOutputData(catalogData), null, 2),
      2,
    );

    return ProviderDataFileBuilder.replaceGeneratedSection(
      fileTemplate,
      GENERATED_DATA_START_MARKER,
      GENERATED_DATA_END_MARKER,
      serializedData,
      PROVIDER_DATA_FILE_PATH,
    );
  }

  static buildOutputData(catalogData) {
    const providersById = new Map(
      catalogData.providers.map((provider) => [provider.id, provider]),
    );
    const extraProviders = catalogData.providers.filter(
      (provider) => !PROVIDER_OUTPUT_ORDER.includes(provider.id),
    );
    const orderedProviders = [
      ...PROVIDER_OUTPUT_ORDER.map((providerId) => providersById.get(providerId)).filter(Boolean),
      ...extraProviders,
    ];

    return {
      schema_version: catalogData.schema_version,
      generated_from: catalogData.generated_from,
      providers: orderedProviders.map((provider) => provider.toOutputData()),
      aliases: ProviderDataFileBuilder.buildAliasesOutput(catalogData, orderedProviders),
      summary: catalogData.summary,
    };
  }

  static buildAliasesOutput(catalogData, orderedProviders) {
    const modelAliasGroups = new Map();
    const seenModels = new Set();

    for (const provider of orderedProviders) {
      for (const model of [...provider.models].sort(
        CatalogBuilder.compareModelsDescendingForOutput,
      )) {
        const modelKey = `${model.author_id}\u0000${model.id}`;

        if (seenModels.has(modelKey) || model.aliases.length === 0) {
          continue;
        }

        seenModels.add(modelKey);

        const existingGroup = modelAliasGroups.get(model.author_id);
        const authorDisplayName = Helpers.asString(
          catalogData.authorsById.get(model.author_id)?.data?.display_name,
          model.author_id,
        );
        const group = existingGroup ?? {
          author_id: model.author_id,
          author_display_name: authorDisplayName,
          aliases: [],
        };
        const resolvesTo = model.id;

        for (const alias of model.aliases) {
          if (!ProviderDataFileBuilder.shouldIncludeModelAlias(alias, resolvesTo)) {
            continue;
          }

          group.aliases.push({
            alias,
            resolves_to: resolvesTo,
          });
        }

        modelAliasGroups.set(model.author_id, group);
      }
    }

    return {
      provider_aliases: orderedProviders
        .filter((provider) => provider.aliases.length > 0)
        .map((provider) => ({
          provider_id: provider.id,
          aliases: provider.aliases,
        })),
      model_alias_groups: [...modelAliasGroups.values()]
        .map((group) => ({
          ...group,
          aliases: [...new Map(
            group.aliases.map((entry) => [
              `${entry.alias}\u0000${entry.resolves_to}`,
              entry,
            ]),
          ).values()],
        }))
        .sort((left, right) =>
          Helpers.compareStrings(left.author_display_name, right.author_display_name) ||
          Helpers.compareStrings(left.author_id, right.author_id),
        ),
    };
  }

  static replaceGeneratedSection(
    source,
    startMarker,
    endMarker,
    replacement,
    sourcePath,
  ) {
    const pattern = new RegExp(
      `(${Helpers.escapeRegExp(startMarker)}\\n)([\\s\\S]*?)(\\n\\s*${Helpers.escapeRegExp(endMarker)})`,
    );

    if (!pattern.test(source)) {
      throw new CatalogError(
        `${path.relative(REPO_ROOT, sourcePath)} is missing generated data markers`,
      );
    }

    return source.replace(pattern, `$1${replacement}$3`);
  }
}

class SummaryReporter {
  static print(catalogData) {
    const providersById = new Map(
      catalogData.providers.map((provider) => [provider.id, provider]),
    );
    const extraProviders = catalogData.providers.filter(
      (provider) => !PROVIDER_OUTPUT_ORDER.includes(provider.id),
    );
    const orderedProviders = [
      ...PROVIDER_OUTPUT_ORDER.map((providerId) => providersById.get(providerId)).filter(Boolean),
      ...extraProviders,
    ];

    console.log(`providers: ${catalogData.summary.provider_count}`);
    console.log(`models: ${catalogData.summary.model_count}`);

    for (const provider of orderedProviders) {
      console.log(`- ${provider.id}: ${provider.models.length} models`);

      if (provider.models.length === 0) {
        continue;
      }

      for (const model of [...provider.models].reverse()) {
        console.log(`  - ${model.id} (${model.released_at})`);
      }
    }
  }
}

function writeProviderDataFile(providerDataFileContents) {
  fs.mkdirSync(path.dirname(PROVIDER_DATA_FILE_PATH), { recursive: true });
  fs.writeFileSync(PROVIDER_DATA_FILE_PATH, providerDataFileContents, "utf8");
}

function main() {
  try {
    const inputRoot = Cli.parseArguments(process.argv.slice(2));
    const sourceCatalog = SourceCatalogLoader.load(inputRoot);
    const catalogData = CatalogBuilder.build(sourceCatalog);
    const providerDataFileContents = ProviderDataFileBuilder.buildFileContents(catalogData);

    writeProviderDataFile(providerDataFileContents);
    SummaryReporter.print(catalogData);

    console.log(`\nwrote ${path.relative(REPO_ROOT, PROVIDER_DATA_FILE_PATH)}`);
  } catch (error) {
    process.exitCode = 1;
    console.error(Helpers.formatError(error));
  }
}

main();
