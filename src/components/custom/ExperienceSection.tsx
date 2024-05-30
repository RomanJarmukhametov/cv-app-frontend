import Wrapper from "@/components/custom/Wrapper";
import TheHeading from "@/components/custom/TheHeading";

import ExperienceSectionProps from "@/types/ExperienceSectionProps";

export function ExperienceSection({
  data,
}: {
  readonly data: ExperienceSectionProps;
}) {
  const { title, description, sectionId } = data;

  return (
    <Wrapper
      as="section"
      id={sectionId}
      className="mb-8">
      <TheHeading level="2">{title}</TheHeading>
    </Wrapper>
  );
}
