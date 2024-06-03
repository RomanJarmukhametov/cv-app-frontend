import React from "react";

/**
 * Props for the BodyText component.
 *
 * @typedef {Object} BodyTextProps
 * @property {React.ReactNode} [children] - The content to be displayed within the paragraph.
 * @property {string} [className] - Additional CSS class names to apply to the paragraph.
 */
interface BodyTextProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * BodyText component for rendering paragraph text with specific styles.
 *
 * This component renders a paragraph (`<p>`) element with default styles for font,
 * text color, and line height. It accepts optional children and additional class names.
 * If no children are provided, it displays a default placeholder text.
 *
 * @component
 * @param {BodyTextProps} props - The properties for the BodyText component.
 * @returns {JSX.Element} The rendered BodyText component.
 */
const BodyText: React.FC<BodyTextProps> = ({
  children,
  className,
  ...attrs
}) => {
  return (
    <p
      className={`antialiased font-normal text-gray-500 text-base leading-6 md:text-lg md:leading-7 ${className}`}
      {...attrs}>
      {children ||
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit blanditiis veritatis molestias ducimus minus iste nobis ipsam facere, velit asperiores quod sequi hic eveniet laborum similique tempore animi nihil ut!"}
    </p>
  );
};

export default BodyText;
