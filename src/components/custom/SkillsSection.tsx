import Wrapper from "@/components/custom/Wrapper";
import TheHeading from "@/components/custom/TheHeading";
import BodyText from "@/components/custom/BodyText";

import SkillsSectionProps from "@/types/SkillsSectionProps";

/* The `export function SkillsSection` code block is defining a React functional component called
`SkillsSection`. This component takes a single prop `data` of type `SkillsSectionProps`. Inside the
component function, it extracts `title`, `sectionId`, and `skillDegree` from the `data` prop. */
export function SkillsSection({ data }: { readonly data: SkillsSectionProps }) {
  const { title, sectionId, skillDegree } = data;

  /* The `const scaleLabels` array is defining labels and positions for different skill levels on a
  visual scale representation. Each object in the array represents a skill level with a label (e.g.,
  "Beginner", "Proficient") and a position on the scale (e.g., "left-0", "left-1/4"). These labels
  and positions are used later in the component to render the skill scale with corresponding labels
  at specific positions to indicate different skill levels visually. */
  const scaleLabels = [
    { label: "Beginner", position: "left-0" },
    { label: "Proficient", position: "left-1/4" },
    { label: "Expert", position: "left-1/2" },
    { label: "Master", position: "left-3/4" },
  ];

  return (
    <Wrapper
      as="section"
      id={sectionId}
      className="mb-8">
      <TheHeading level="2">{title}</TheHeading>

      {skillDegree.map((skill) => (
        <div
          key={skill.id}
          className="w-full bg-gray-200 dark:bg-gray-700 mb-4">
          <div
            className="bg-primary text-sm sm:text-base lg:text-xl font-medium text-white text-start uppercase p-2 sm:p-3 lg:p-4 leading-none"
            style={{ width: `${skill.degree}%` }}>
            {skill.name}
          </div>
        </div>
      ))}

      {/* This part of the code is rendering a visual representation of a skill scale with labels
      indicating different skill levels. */}
      <div className="relative w-full h-6 mt-4">
        {scaleLabels.map(({ label, position }) => (
          <div
            key={label}
            className={`absolute ${position} w-1/4 border-t border-gray-400 text-center text-xs sm:text-sm lg:text-base text-gray-500`}>
            {label}
          </div>
        ))}

        {scaleLabels.slice(1).map(({ position }) => (
          <div
            key={position}
            className={`absolute ${position} bottom-0 h-2 border-l border-gray-400`}></div>
        ))}
      </div>
    </Wrapper>
  );
}
