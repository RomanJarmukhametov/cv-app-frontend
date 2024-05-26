import React from "react";

/**
 * Props for the Heading component.
 *
 * @typedef {Object} HeadingProps
 * @property {"2" | "3"} level - The heading level, either "2" or "3".
 * @property {React.ReactNode} [children] - The content to be displayed within the heading.
 */

interface HeadingProps {
  level: "2" | "3";
  children?: React.ReactNode;
}

/**
 * Heading component for rendering different levels of headings with specific styles.
 *
 * This component renders an `h2` or `h3` element based on the `level` prop,
 * applying specific styles for each level.
 *
 * @component
 * @param {HeadingProps} props - The properties for the Heading component.
 * @returns {JSX.Element} The rendered Heading component.
 */
const Heading: React.FC<HeadingProps> = ({ level, children }) => {
  /**
   * Returns the CSS class string based on the heading level.
   *
   * @returns {string} The CSS class string for the specified heading level.
   */
  const getHeadingClass = (): string => {
    switch (level) {
      case "2":
        return "antialiased font-bold text-primary text-lg md:text-xl lg:text-2xl leading-7 md:leading-8 lg:leading-9 mb-4";
      case "3":
        return "antialiased font-bold text-gray-800 text-base md:text-lg lg:text-xl leading-tight md:leading-snug lg:leading-relaxed mb-3";
      default:
        return "";
    }
  };

  return React.createElement(
    `h${level}`,
    { className: getHeadingClass() },
    children || "Heading"
  );
};

export default Heading;
