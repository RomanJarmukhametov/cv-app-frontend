import Wrapper from "@/components/custom/Wrapper";
import TheHeading from "@/components/custom/TheHeading";
import BodyText from "@/components/custom/BodyText";

import ContactsSectionProps from "@/types/ContactsSectionProps";

export function ContactsSection({
  data,
}: {
  readonly data: ContactsSectionProps;
}) {
  const { title, sectionId, contactDetails } = data;

  return (
    <Wrapper
      as="section"
      id={sectionId}
      className="mb-8">
      <TheHeading level="2">{title}</TheHeading>
    </Wrapper>
  );
}
