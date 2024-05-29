import WrapperProps from "@/types/WrapperProps";

/**
 * Wrapper component for rendering a section or div with specific padding and optional additional classes.
 *
 * This component renders a `section` or `div` element based on the `as` prop,
 * applying specific padding styles and any additional class names passed through the `className` prop.
 *
 * @component
 */
const Wrapper: React.FC<WrapperProps> = ({
  as = "div",
  children,
  className,
}) => {
  const Component = as;

  return (
    <Component
      className={`px-4 py-6 md:px-8 md:py-10 lg:px-12 lg:py-14 ${className}`}>
      {children}
    </Component>
  );
};

export default Wrapper;
