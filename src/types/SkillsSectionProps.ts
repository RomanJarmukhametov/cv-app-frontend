/* The `interface skillDegree` in TypeScript is defining the structure of an object that represents a
skill with three properties: `id` of type number, `name` of type string, and `degree` of type
number. This interface is used to define the structure of individual skills within the `skillDegree`
array property of the `SkillsSectionProps` interface. */
interface skillDegree {
  id: number;
  name: string;
  degree: number;
}

/* The `interface SkillsSectionProps` in TypeScript is defining the structure of an object that
represents a section of skills. It has the following properties: */
interface SkillsSectionProps {
  id: number;
  __component: string;
  title: string;
  sectionId: string;
  skillDegree: skillDegree[];
}

export default SkillsSectionProps;
