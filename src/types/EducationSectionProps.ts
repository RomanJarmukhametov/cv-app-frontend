/* The `interface EducationInfo` is defining a structure for representing information about education.
It specifies that an `EducationInfo` object should have properties `id` of type number, `year` of
type string, `degree` of type string, and `institution` of type string. This interface can be used
to ensure consistency and type safety when working with education information in TypeScript code. */
interface EducationInfo {
  id: number;
  year: string;
  degree: string;
  institution: string;
}

/* The `interface EducationSectionProps` is defining a structure for representing a section of
education information. It specifies that an `EducationSectionProps` object should have properties
`id` of type number, `__component` of type string, `title` of type string, `sectionId` of type
string, and `educationInfo` which is an array of objects that follow the structure defined by the
`EducationInfo` interface. This interface can be used to ensure consistency and type safety when
working with education section information in TypeScript code. */
interface EducationSectionProps {
  id: number;
  __component: string;
  title: string;
  sectionId: string;
  educationInfo: EducationInfo[];
}

export default EducationSectionProps;
