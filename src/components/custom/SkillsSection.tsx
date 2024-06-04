import Wrapper from "@/components/custom/Wrapper";
import TheHeading from "@/components/custom/TheHeading";
import BodyText from "@/components/custom/BodyText";

import SkillsSectionProps from "@/types/SkillsSectionProps";

export function SkillsSection({ data }: { readonly data: SkillsSectionProps }) {
  const { title, sectionId, skillInfo } = data;

  return (
    <Wrapper
      as="section"
      id={sectionId}
      className="mb-8">
      <TheHeading level="2">{title}</TheHeading>
    </Wrapper>
  );
}
