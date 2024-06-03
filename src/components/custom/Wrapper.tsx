import WrapperProps from "@/types/WrapperProps";

/* This code snippet defines a functional component called `Wrapper` in TypeScript with React. The
component takes in props of type `WrapperProps` which includes `as`, `children`, and `className`. */
const Wrapper: React.FC<WrapperProps> = ({
  as = "div",
  children,
  className,
  id,
}) => {
  const Component = as;

  const paddingClasses =
    Component === "section"
      ? "px-6 py-8 md:px-10 md:py-12 lg:px-14 lg:py-16"
      : "px-4 py-6 md:px-8 md:py-10 lg:px-12 lg:py-14";

  return (
    <Component
      className={`${paddingClasses} ${className}`}
      id={id}>
      {children}
    </Component>
  );
};

export default Wrapper;
