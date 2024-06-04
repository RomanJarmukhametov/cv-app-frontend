/* The `SkillInfo` interface in TypeScript is defining the structure of an object that represents
information about a particular skill. It has three properties:
1. `id` of type number: This property represents the unique identifier of the skill.
2. `name` of type string: This property represents the name or title of the skill.
3. `degree` of type number: This property represents the proficiency level or degree of expertise in
the skill. */
interface SkillInfo {
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
  skillInfo: SkillInfo[];
}

export default SkillsSectionProps;
