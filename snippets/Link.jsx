export const Link = ({ to, className, children }) => {
  return (
    <a href={to} className={`${className}`}>
      {children}
    </a>
  );
};
