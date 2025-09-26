export const ThemeImage = ({
	darkSrc,
	lightSrc,
	alt,
	className,
}) => {

return (
    <>
     <img alt={alt} className={`${className} block dark:hidden`} src={darkSrc} />
     <img alt={alt} className={`${className} block light:hidden`} src={lightSrc} />
    </>
)
};
  