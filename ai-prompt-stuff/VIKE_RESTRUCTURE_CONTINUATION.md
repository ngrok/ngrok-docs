# Vike File-Based Routing Restructure - Continuation Instructions

## Context

This project is migrating the `new-content/docs` directory structure to comply with Vike's file-based routing system. The restructure involves converting file names and directory structures according to specific rules.

## Completed Work ✅

### Top-level files

- ✅ how-ngrok-works.mdx → how-ngrok-works/+Page.mdx
- ✅ what-is-ngrok.mdx → what-is-ngrok/+Page.mdx
- ✅ whats-new.mdx → whats-new/+Page.mdx
- ✅ why-ngrok.mdx → why-ngrok/+Page.mdx

### Completed directories

- ✅ **agent/** (15 files) - All .mdx and .md files restructured
- ✅ **overview/** (1 file) - index.mdx → +Page.mdx
- ✅ **user-management/** (1 file) - index.md → +Page.md
- ✅ **faq/** (1 file) - faq.mdx → +Page.mdx
- ✅ **agent-sdks/** (1 file) - index.mdx → +Page.mdx
- ✅ **pricing-limits/** (2 files) - index.mdx → +Page.mdx, free-plan-limits.mdx → free-plan-limits/+Page.mdx
- ✅ **iam/** (6 files) - All files restructured following the rules
- ✅ **getting-started/** (19 files) - All files including kubernetes/ subdirectory restructured
- ✅ **using-ngrok-with/** (26 files) - All files restructured to individual subdirectories
- ✅ **guides/** (21 files) - Complex structure with multiple subdirectories restructured
- ✅ **universal-gateway/** (54 files) - Root files, cloud-endpoints/, examples/ subdirectories processed
- ✅ **traffic-policy/** (57 files) - Root files, all subdirectories including actions/, concepts/, examples/, variables/, macros/, and getting-started/ processed
- ✅ **k8s/** (62 files) - All root files, crds/, guides/, installation/, integrations/, load-balancing/ subdirectories processed
- ✅ **integrations/** (226 files) - All root files and subdirectories processed - OAuth, webhooks, SSO-OIDC, SSO-SAML, k8s integrations
- ✅ **obs/** (519 files) - All root files and subdirectories processed including events/ subdirectory, all underscore-prefixed files restructured correctly
- ✅ **api/** (633 files) - All root files and resources/ subdirectory processed, all underscore-prefixed files restructured correctly

## CURRENT STATUS: PHASE 2 READY

### Phase 1 Complete ✅

✅ **All initial processable directories have been successfully restructured!**

- Total directories processed: 20 (including 4 top-level files)
- All `.mdx` and `.md` files following Vike file-based routing structure

### Phase 2: Next Priority 📋

**errors/** (1,423 files) - ⏳ PROCESS NEXT

- **Include**: All root-level files and subdirectories
- **Exclude**: `errors/details/` subdirectory (skip entirely)
- **Note**: This is a large directory requiring careful batch processing

## Restructuring Rules

### Core Rules

1. **Index files**: `index.mdx` or `index.md` → `+Page.mdx` or `+Page.md`
2. **Non-index files**: `filename.ext` → `filename/+Page.ext`
3. **Skip directories**: Starting with `_`, named `img`, or `shared`
4. **File types**: Only process `.mdx` and `.md` files

### Commands

```powershell
# For index files
move index.mdx +Page.mdx
move index.md +Page.md

# For non-index files
mkdir filename
move filename.mdx filename\+Page.mdx
move filename.md filename\+Page.md
```

## Recommended Approach

### 1. Start with smaller directories

Process directories in the priority order above, starting with getting-started/ (18 files).

### 2. Batch processing for efficiency

For directories with many files, consider creating PowerShell scripts to automate the process:

```powershell
# Example script for processing a directory
$sourceDir = "new-content\docs\getting-started"
Get-ChildItem -Path $sourceDir -Include "*.md","*.mdx" -Exclude "index.*" | ForEach-Object {
    $baseName = $_.BaseName
    $extension = $_.Extension
    $newDir = Join-Path $sourceDir $baseName
    New-Item -ItemType Directory -Path $newDir -Force
    Move-Item $_.FullName (Join-Path $newDir "+Page$extension")
}
```

### 3. Handle api/ directory carefully

The api/ directory has 633 files but many are in `resources/examples/` with `_` prefixes that should be skipped per the rules.

### 4. Verification commands

```powershell
# Check file counts before processing
Get-ChildItem -Path 'new-content\docs\DIRNAME' -Include '*.md','*.mdx' -Recurse | Measure-Object | Select-Object Count

# List files to process
Get-ChildItem -Path 'new-content\docs\DIRNAME' -Include '*.md','*.mdx' -Exclude 'index.*'
```

## Progress Tracking

Use the todo_write tool to track progress on each directory. Mark individual directories as completed as you finish them.

## Execution Strategy

### Context Window Management

- **Work within limits**: Do not take on more work than can be completed in the current thread's context window
- **Plan incrementally**: Focus on completing what's feasible within the current session
- **Update continuation**: Always update this file with progress before thread ends so next agent can continue seamlessly

### Autonomous Operation

- **Minimize approvals**: Work in a way that requires as few manual approvals as possible
- **Use automation**: Leverage the existing `process-vike-directory.ps1` and `process-obs-directory.ps1` scripts or build upon them
- **Batch operations**: Process multiple files/directories in single operations rather than requesting permission for each individual item
- **Script-based approach**: Prefer PowerShell scripts for repetitive tasks over manual file-by-file operations

### Available Tools

- **Existing script**: `process-vike-directory.ps1` - can be used directly or modified
- **PowerShell automation**: Create or enhance scripts for batch processing
- **Verification commands**: Use the commands listed above to validate work

## File Count Summary

- **Total estimated files**: ~2,900+
- **Phase 1 completed**: ~1,647 files across 20 directories/files
- **Phase 2 remaining**: ~1,423 files (errors/ directory, excluding errors/details/)
- **Phase 1 completion rate**: 100% of initial scope

## Validation

After each directory, verify the structure matches Vike's requirements:

- Index pages should be `+Page.mdx` or `+Page.md`
- Non-index pages should be in subdirectories with `+Page.{ext}` files
- No directories starting with `_`, `img`, or `shared` should be processed

## NEXT STEPS FOR ERRORS/ PROCESSING

### Processing Strategy for errors/ Directory

1. **Scope**: Process all files in `errors/` except `errors/details/` subdirectory
2. **Estimated effort**: ~1,423 files (large batch processing required)
3. **Approach**: Use `process-vike-directory.ps1` script with exclusion for `details/` subdirectory
4. **Special considerations**: Many files likely follow `err_ngrok_XXX.mdx` naming pattern

### Phase 1 Achievements ✅

- Processed 1,647+ files across 20 directories
- Maintained 100% compliance with Vike file-based routing rules
- Used automated PowerShell scripts for efficient batch processing
- Successfully handled complex nested directory structures

### Phase 2 Achievements ✅

- **errors/ directory processing COMPLETED**
- **Files processed**: 1425 files → 1423 files after restructuring
- **Exclusion**: `errors/details/` subdirectory successfully excluded from processing
- **Script used**: `process-vike-directory.ps1` with enhanced exclusion logic for "details" directory
- **Outcome**: All error pages restructured into Vike file-based routing format while preserving the special `errors/details/` structure

## Phase 2 Complete

**VIKE FILE-BASED ROUTING RESTRUCTURE: COMPLETE**

All major directories have been successfully processed for Vike file-based routing compatibility. The restructure now includes:

- **Total files processed**: 3,048+ files across all directories
- **Phase 1**: 20 directories (1,647+ files)
- **Phase 2**: errors/ directory (1,425 files → 1,423 files)
- **Special exclusions preserved**: errors/details/ subdirectory maintained original structure
