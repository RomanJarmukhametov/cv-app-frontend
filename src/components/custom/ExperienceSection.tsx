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
  const { title, sectionId, workExperience } = data;

  return (
    <Wrapper
      as="section"
      id={sectionId}
      className="mb-8">
      <TheHeading level="2">{title}</TheHeading>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-trangray-x-px md:before:ml-[8.75rem] md:before:trangray-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
        {workExperience.map((experience) => (
          <div
            key={experience.id}
            className="relative">
            <div className="md:flex items-center md:space-x-4 mb-3">
              <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                  <svg
                    className="fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}>
                    <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                  </svg>
                </div>
                {/* Date */}
                <time className="font-caveat font-medium text-xl text-primary md:w-28">
                  {experience.period}
                </time>
              </div>
              {/* Title */}
              <div className="ml-14 flex flex-col lg:flex-row gap-2 items-baseline">
                <TheHeading level="3">{experience.company}</TheHeading>
                <BodyText>{experience.position}</BodyText>
              </div>
            </div>
            {/* Card */}
            <div className="bg-white p-4 rounded border border-gray-200 text-gray-500 shadow ml-14 md:ml-44">
              {experience.description}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 md:gap-6">
        {/* {workExperience.map((experience) => (
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
        ))} */}
      </div>
    </Wrapper>
  );
}
