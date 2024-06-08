import Wrapper from "@/components/custom/Wrapper";
import TheHeading from "@/components/custom/TheHeading";
import BodyText from "@/components/custom/BodyText";

import FeedbackSectionProps from "@/types/FeedbackSectionProps";

export function FeedbackSection({
  data,
}: {
  readonly data: FeedbackSectionProps;
}) {
  const { title, sectionId } = data;

  return (
    <Wrapper
      as="section"
      id={sectionId}
      className="mb-8">
      <TheHeading level="2">{title}</TheHeading>
    </Wrapper>
  );
}
