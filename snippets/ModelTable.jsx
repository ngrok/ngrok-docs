// Model tables for the AI Gateway model catalog.
//
// <ModelTable>
//   <ModelRow id="gpt-5" name="GPT-5" context={400000} output={128000} modalities="text,image,file" />
//   <ModelRow id="glm-5" name="GLM-5" context={200000} modalities="text" byok />
// </ModelTable>
//
// context and output are token counts. Leave one out to show a dash.
// modalities is a comma-separated list of text, image, audio, video, and file.
// byok marks a model that needs your own provider key.

// The wrapper and table classes match what Mintlify renders for markdown tables,
// so wide tables scroll sideways on narrow screens. The inline font sizes
// override the prose defaults (0.875rem tables, 0.75rem table code) so the
// table matches the body text.
export const ModelTable = ({ children }) => (
  <div className="overflow-x-auto">
    <table
      style={{ fontSize: "inherit", lineHeight: "inherit" }}
      className="m-0 min-w-full w-full max-w-none table [&_th]:text-left [&_td]:min-w-[150px]"
    >
      <thead>
        <tr>
          <th>Model ID</th>
          <th>Context</th>
          <th>Max Output</th>
          <th>Modalities</th>
          <th>
            <Tooltip tip="Needs your own provider key">Needs BYOK?</Tooltip>
          </th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </div>
);

export const ModelRow = ({
  id,
  name,
  context,
  output,
  modalities = "",
  byok = false,
}) => {
  const icons = {
    text: ["Text", "align-left"],
    image: ["Image", "image"],
    audio: ["Audio", "volume-high"],
    video: ["Video", "video"],
    file: ["File", "file"],
  };

  // Round thousands use decimal units (128,000 is 128K). Other multiples of
  // 1024 use binary units (65,536 is 64K). Anything else rounds down in decimal.
  const tokens = (n) => {
    if (n === undefined || n === null) return "—";
    if (n < 1000) return String(n);
    const base = n % 1000 !== 0 && n % 1024 === 0 ? 1024 : 1000;
    const label =
      n >= base * base
        ? `${Math.floor(n / (base * base))}M`
        : `${Math.floor(n / base)}K`;
    return (
      <Tooltip tip={`${n.toLocaleString("en-US")} tokens`}>{label}</Tooltip>
    );
  };

  // Left-align cells like markdown tables. A native <button> child becomes the
  // tooltip trigger itself, so the ID gets no dotted underline and its wrapped
  // lines stay left-aligned.
  const left = { textAlign: "left" };
  const idButton = {
    background: "none",
    border: 0,
    padding: 0,
    font: "inherit",
    textAlign: "left",
    cursor: "default",
  };

  return (
    <tr>
      <td style={left}>
        <Tooltip tip={name || id}>
          <button type="button" style={idButton}>
            <code style={{ fontSize: "0.875em" }}>{id}</code>
          </button>
        </Tooltip>
      </td>
      <td style={left}>{tokens(context)}</td>
      <td style={left}>{tokens(output)}</td>
      <td style={left}>
        {modalities
          .split(",")
          .map((m) => m.trim())
          .filter((m) => icons[m])
          .map((m, i) => (
            <span key={m}>
              {i > 0 && " "}
              <Tooltip tip={icons[m][0]}>
                <Icon icon={icons[m][1]} size={16} />
                <span className="sr-only">{icons[m][0]}</span>
              </Tooltip>
            </span>
          ))}
      </td>
      <td style={left}>{byok ? "Yes" : "No"}</td>
    </tr>
  );
};
