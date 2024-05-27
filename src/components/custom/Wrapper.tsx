/**
 * Props for the Wrapper component.
 *
 * @typedef {Object} WrapperProps
 * @property {"section" | "div"} [as="div"] - The HTML element to render, either "section" or "div".
 * @property {React.ReactNode} [children] - The content to be wrapped by the component.
 * @property {string} [className] - Additional CSS class names to apply to the component.
 */
interface WrapperProps {
  as?: "section" | "div";
  id?: string;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Wrapper component for rendering a section or div with specific padding and optional additional classes.
 *
 * This component renders a `section` or `div` element based on the `as` prop,
 * applying specific padding styles and any additional class names passed through the `className` prop.
 *
 * @component
 * @param {WrapperProps} props - The properties for the Wrapper component.
 * @returns {JSX.Element} The rendered Wrapper component.
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
