import Wrapper from "@/components/custom/Wrapper";
import TheHeading from "@/components/custom/TheHeading";
import BodyText from "@/components/custom/BodyText";

import ExperienceSectionProps from "@/types/ExperienceSectionProps";

/**
 * The function `ExperienceSection` renders a section displaying work experience data in a structured
 * format.
 * @param  - The `ExperienceSection` component takes in a single prop `data` which should be an object
 * of type `ExperienceSectionProps`. The `data` object should have properties `title` and `sectionId`.
 * @returns The `ExperienceSection` component is being returned. It renders a section with a title and
 * a list of work experiences. Each work experience includes the company name, period, position, and
 * description.
 */
export function ExperienceSection({
  data,
}: {
  readonly data: ExperienceSectionProps;
}) {
  const { title, sectionId } = data;

  return (
    <Wrapper
      as="section"
      id={sectionId}
      className="mb-8">
      <TheHeading level="2">{title}</TheHeading>
      <div className="flex flex-col gap-4 md:gap-6">
        {data.workExperience.map((experience) => (
          <div
            key={experience.id}
            className="flex flex-col lg:flex-row gap-4 mb-3 md:mb-6">
            <div
              key={experience.id}
              className="flex flex-col md:flex-row gap-4 mb-3 md:mb-6">
              <div className="md:w-1/4 flex flex-col gap-1 md:gap-2">
                <TheHeading level="3">{experience.company}</TheHeading>
                <BodyText>{experience.period}</BodyText>
              </div>

              <div className="md:w-3/4 flex flex-col gap-1 md:gap-2">
                <TheHeading level="3">{experience.position}</TheHeading>
                <BodyText>{experience.description}</BodyText>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
