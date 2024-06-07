/* The `interface ContactDetails` is defining a structure for representing contact details. It
specifies that a `ContactDetails` object should have three properties: `id` of type string, `type`
of type string, and `name` of type string. This interface can be used to ensure consistency and type
safety when working with contact details in TypeScript code. */
interface ContactDetails {
  id: string;
  type: string;
  name: string;
}

/* The `interface ContactsSectionProps` is defining a structure for representing a section of contacts.
It specifies that a `ContactsSectionProps` object should have five properties: */
interface ContactsSectionProps {
  id: string;
  __component: string;
  title: string;
  sectionId: string;
  contactDetails: ContactDetails[];
}

export default ContactsSectionProps;
