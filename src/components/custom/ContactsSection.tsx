import Link from "next/link";
import Wrapper from "@/components/custom/Wrapper";
import TheHeading from "@/components/custom/TheHeading";
import BodyText from "@/components/custom/BodyText";
import { getIcon } from "@/lib/icons";
import ContactsSectionProps from "@/types/ContactsSectionProps";

/**
 * The ContactsSection component in TypeScript React renders a section with contact details, including
 * links for email and phone contacts.
 * @param  - The `ContactsSection` component takes in a single prop `data` of type
 * `ContactsSectionProps`, which includes the following properties:
 * @returns The `ContactsSection` component is being returned. It renders a section with a title,
 * contact details, and links for each contact. The contact details are mapped to generate links with
 * appropriate href attributes based on the contact type (mail, phone, or other). Each link includes an
 * icon corresponding to the contact type and the contact name.
 */
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
      <div className="flex flex-col items-start gap-5">
        {contactDetails.map((contact) => {
          const href =
            contact.type === "mail"
              ? `mailto:${contact.name}`
              : contact.type === "phone"
              ? `tel:${contact.name}`
              : contact.name;

          return (
            <Link
              href={href}
              key={contact.id}
              {...(contact.type !== "mail" &&
                contact.type !== "phone" && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}>
              <div
                className="flex items-center gap-4 text-primary transition-transform transform hover:scale-105 hover:text-secondary"
                key={contact.id}>
                <div className="hidden lg:inline-block">
                  {getIcon(contact.type)}
                </div>
                <BodyText>
                  <span className="text-sm md:text-base lg:text-lg">
                    {contact.name}
                  </span>
                </BodyText>
              </div>
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
}
