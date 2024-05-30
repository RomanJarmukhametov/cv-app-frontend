/* The `interface workExperience` is defining a structure for representing work experience data in
TypeScript. It specifies that a `workExperience` object should have four properties: `company`
(string), `position` (string), `period` (string), and `description` (string). This interface serves
as a blueprint for creating objects that store information about an individual's work experience,
with each property representing a different aspect of that experience. */
interface workExperience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
}

/* The `interface ExperienceSectionProps` is defining a structure for representing a section of work
experience data in TypeScript. It specifies that an object of type `ExperienceSectionProps` should
have the following properties: */
interface ExperienceSectionProps {
  id: number;
  __component: string;
  title: string;
  description: string;
  sectionId: string;
  workExperience: workExperience[];
}

export default ExperienceSectionProps;
