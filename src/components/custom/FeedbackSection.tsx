import Wrapper from "@/components/custom/Wrapper";
import TheHeading from "@/components/custom/TheHeading";
import BodyText from "@/components/custom/BodyText";
import { Button } from "@/components/ui/button";

import FeedbackData from "@/components/custom/FeedbackData";

import FeedbackSectionProps from "@/types/FeedbackSectionProps";

export function FeedbackSection({
  data,
}: {
  readonly data: FeedbackSectionProps;
}) {
  const { title, sectionId, description, buttonText } = data;

  return (
    <Wrapper
      as="section"
      id={sectionId}
      className="mb-8">
      <TheHeading level="2">{title}</TheHeading>
      <FeedbackData />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mt-10 bg-primary/10 p-5 rounded">
        <BodyText>{description}</BodyText>
        <Button>{buttonText}</Button>
      </div>
    </Wrapper>
  );
}
