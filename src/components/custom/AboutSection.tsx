import Wrapper from "@/components/custom/Wrapper";
import TheHeading from "@/components/custom/TheHeading";
import BodyText from "@/components/custom/BodyText";
import AboutSectionProps from "@/types/AboutSectionProps";

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
