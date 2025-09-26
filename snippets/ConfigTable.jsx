export const ConfigField = ({
  title,
  type,
  cel = false,
  defaultValue = false,
  required = false,
  children,
}) => {
  const id = `config-${title.replace(/\.|\s|\*/g, "_")}`;
  return (
    <div className="field pt-2.5 pb-5 my-2.5 border-gray-50 dark:border-gray-800/50 border-b" style={{ scrollMarginTop: '120px' }} id={id}>
      <div className="flex font-mono group/param-head param-head break-all relative">
        <div className="flex-1 flex content-start py-0.5 mr-5">
          <div className="flex items-center flex-wrap gap-2">
            <div class="absolute -top-1.5">
              <a href={`#${id}`} className="-ml-10 flex items-center opacity-0 border-0 group-hover/param-head:opacity-100 py-2 [.expandable-content_&amp;]:-ml-[2.1rem]" aria-label="Navigate to header">
                ​<div className="w-6 h-6 rounded-md flex items-center justify-center shadow-sm text-gray-400 dark:text-white/50 dark:bg-background-dark dark:brightness-[1.35] dark:ring-1 dark:hover::rightness-150 bg-white ring-1 ring-gray-400/30 dark:ring-gray-700/25 hover:ring-gray-400/60 dark:hover:ring-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="gray" height="12px" viewBox="0 0 576 512"><path d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path></svg>
                </div>
              </a>
            </div>
            <div className="font-semibold text-primary dark:text-primary-light overflow-wrap-anywhere">{title}</div>
            <div className="inline items-center gap-2 text-xs font-medium [&_div]:inline [&_div]:mr-2 [&_div]:leading-5 [&_a]:inline [&_a]:mr-2 [&_a]:leading-5">
              {type && (<div className="flex items-center px-2 py-0.5 rounded-md bg-gray-100/50 dark:bg-white/5 break-all">
                <span className="text-gray-600 dark:text-gray-200 !font-medium">{type}</span>
              </div>)}
              {defaultValue && (
                <div className="flex items-center px-2 py-0.5 rounded-md bg-gray-100/50 dark:bg-white/5 break-all">
                  <span class="text-gray-400 dark:text-gray-500">default:</span>
                  <span className="text-gray-600 dark:text-gray-200 !font-medium">{defaultValue}</span>
                </div>
              )}
              {required && (<div className="px-2 py-0.5 rounded-md bg-red-100/50 dark:bg-red-400/10 whitespace-nowrap">
                <span className="text-red-600 dark:text-red-300 !font-medium">Required</span>
              </div>)}
              {cel && (<a className="px-2 py-0.5 rounded-md !border-none bg-blue-100/50 dark:bg-blue-400/10 whitespace-nowrap" href="/traffic-policy/concepts/cel-interpolation">
                <span className="text-blue-600 dark:text-blue-300 !font-medium">Supports CEL</span>
              </a>)}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 prose-sm prose-gray dark:prose-invert [&_.prose>p:first-child]:mt-0 [&_.prose>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
};

export const ConfigEnum = ({ label, children }) => {
  return (
    <div className="m-0 flex flex-shrink-0 list-none flex-col divide-y divide-gray-200 self-start rounded-md border border-gray-200 p-0 dark:divide-gray-800 dark:border-gray-800 [&_li+li]:mt-0 [&_li]:py-2 list-none">
      <div className="px-4 py-2 font-semibold list-none">
        {label ? label : "Possible enum values"}
      </div>
      {children}
    </div>
  );
};

export const ConfigEnumOption = ({ children }) => {
  return <div className="space-y-2 px-4 py-2 list-none">{children}</div>;
};

export const Config = ({ children }) => {
  return (
    <div className="m-0 flex flex-shrink-0 list-none flex-col divide-y divide-gray-200 self-start p-0 dark:divide-gray-800">
      {children}
    </div>
  );
};

export const OldConfigItem = ({
  title,
  type,
  cel = false,
  defaultValue = false,
  required = false,
  children,
}) => {
  const id = `config-${title.replace(/\.|\s|\*/g, "_")}`;
  return (
    <div className="p-4 px-2 pb-3" style={{ scrollMarginTop: '100px' }} id={id}>
      <div className="flex font-mono text-sm group/param-head param-head break-all relative">
        <div className="flex-1 flex content-start py-0.5 mr-5">
          <div className="flex items-center gap-2">
            <div class="absolute -top-1.5">
              <a href={`#${id}`} className="-ml-10 flex items-center opacity-0 border-0 group-hover/param-head:opacity-100 py-2 [.expandable-content_&amp;]:-ml-[2.1rem]" aria-label="Navigate to header">
                ​<div className="w-6 h-6 rounded-md flex items-center justify-center shadow-sm text-gray-400 dark:text-white/50 dark:bg-background-dark dark:brightness-[1.35] dark:ring-1 dark:hover::rightness-150 bg-white ring-1 ring-gray-400/30 dark:ring-gray-700/25 hover:ring-gray-400/60 dark:hover:ring-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="gray" height="12px" viewBox="0 0 576 512"><path d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path></svg>
                </div>
              </a>
            </div>
            <div className="font-semibold text-primary dark:text-primary-light overflow-wrap-anywhere">{title}</div>
            <div className="inline items-center gap-2 text-xs font-medium [&_div]:inline [&_div]:mr-2 [&_div]:leading-5 [&_a]:inline [&_a]:mr-2 [&_a]:leading-5">
              {type && (<div className="flex items-center px-2 py-0.5 rounded-md bg-gray-100/50 dark:bg-white/5 break-all">
                <span className="text-gray-600 dark:text-gray-200 !font-medium">{type}</span>
              </div>)}
              {defaultValue && (
                <div className="flex items-center px-2 py-0.5 rounded-md bg-gray-100/50 dark:bg-white/5 break-all">
                  <span class="text-gray-400 dark:text-gray-500">default:</span>
                  <span className="text-gray-600 dark:text-gray-200 !font-medium">{defaultValue}</span>
                </div>
              )}
              {required && (<div className="px-2 py-0.5 rounded-md bg-red-100/50 dark:bg-red-400/10 whitespace-nowrap">
                <span className="text-red-600 dark:text-red-300 !font-medium">Required</span>
              </div>)}
              {cel && (<a className="px-2 py-0.5 rounded-md !border-none bg-blue-100/50 dark:bg-blue-400/10 whitespace-nowrap" href="/traffic-policy/concepts/cel-interpolation">
                <span className="text-blue-600 dark:text-blue-300 !font-medium">Supports CEL</span>
              </a>)}
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-2 text-sm [&_p]:mb-0">{children}</div>
    </div>
  );
};

export const ConfigChildren = ({
  open = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(open);
  return (
    <div>
      <button
        type="button"
        className="flex items-center rounded-xl px-3 py-1.5 overflow-hidden text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/[0.07] bg-background-light dark:bg-background-dark hover:bg-gray-600/5 dark:hover:bg-gray-200/5"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen && "Show Child Properties"}
        {isOpen && "Hide Child Properties"}
      </button>
      {isOpen && (
        <div className="m-0 mt-2 flex flex-shrink-0 list-none flex-col divide-y divide-gray-200 self-start rounded-md border border-gray-200 p-0 dark:divide-gray-800 dark:border-gray-800 [&_li]:p-4">
          {children}
        </div>
      )}
    </div>
  );
};