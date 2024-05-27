import Wrapper from "@/components/custom/Wrapper";
import TheHeading from "@/components/custom/TheHeading";
import BodyText from "@/components/custom/BodyText";

/**
 * Props for the AboutSection component.
 *
 * @typedef {Object} AboutSectionProps
 * @property {number} id - The unique identifier for the section.
 * @property {string} __component - The component type.
 * @property {string} title - The title of the section.
 * @property {string} description - The description of the section.
 * @property {string} sectionId - The HTML id attribute for the section.
 */

interface AboutSectionProps {
  id: number;
  __component: string;
  title: string;
  description: string;
  sectionId: string;
}

/**
 * AboutSection component for rendering a section with a title and description.
 *
 * This component renders a section with a specified title and description,
 * wrapped in a styled `Wrapper` component. The section can be identified
 * using the `sectionId` prop.
 *
 * @component
 * @param {Object} props - The properties for the AboutSection component.
 * @param {AboutSectionProps} props.data - The data for the section.
 * @returns {JSX.Element} The rendered AboutSection component.
 */
export function AboutSection({ data }: { readonly data: AboutSectionProps }) {
  const { title, description, sectionId } = data;

  return (
    <Wrapper
      as="section"
      id={sectionId}
      className="mb-8">
      <TheHeading level="2">{title}</TheHeading>
      <BodyText>{description}</BodyText>
    </Wrapper>
  );
}
