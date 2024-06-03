import Wrapper from "@/components/custom/Wrapper";
import TheHeading from "@/components/custom/TheHeading";
import BodyText from "@/components/custom/BodyText";
import EducationSectionProps from "@/types/EducationSectionProps";

export function EducationSection({
  data,
}: {
  readonly data: EducationSectionProps;
}) {
  const { title, sectionId, educationInfo } = data;

  return (
    <Wrapper
      as="section"
      id={sectionId}
      className="mb-8">
      <TheHeading level="2">{title}</TheHeading>

      <div className="-my-6">
        {/* Item #1 */}
        {educationInfo.map((education) => (
          <div
            key={education.id}
            className="relative pl-8 sm:pl-32 py-6 group">
            {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-emerald-500 after:border-4 after:box-content after:border-gray-300 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                {education.year}
              </time>
              <TheHeading level="3">{education.degree}</TheHeading>
            </div>
            {/* Content */}
            <div className="bg-gray-50 p-4 rounded shadow">
              <BodyText>{education.institution}</BodyText>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
