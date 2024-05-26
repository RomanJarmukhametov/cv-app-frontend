// /app/resume/page.tsx

import TheHeading from "@/components/custom/TheHeading";

import BodyText from "@/components/custom/BodyText";

const ResumePage = () => {
  return (
    <>
      <section
        id="about"
        className="mb-8">
        <TheHeading level="2">About me</TheHeading>
        <BodyText>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
        </BodyText>
      </section>
      <section
        id="skills"
        className="mb-8">
        <TheHeading level="2">Skills</TheHeading>
        <BodyText>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
          </ul>
        </BodyText>
      </section>
      <section
        id="experience"
        className="mb-8">
        <TheHeading level="2">Experience</TheHeading>
        <BodyText>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
        </BodyText>
      </section>
      <section
        id="education"
        className="mb-8">
        <TheHeading level="2">Education</TheHeading>
        <BodyText>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
        </BodyText>
      </section>
      <section
        id="portfolio"
        className="mb-8">
        <TheHeading level="2">Portfolio</TheHeading>
        <BodyText>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
        </BodyText>
      </section>
      <section
        id="contacts"
        className="mb-8">
        <TheHeading level="2">Contacts</TheHeading>
        <BodyText>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
        </BodyText>
      </section>
      <section
        id="feedbacks"
        className="mb-8">
        <TheHeading level="2">Feedbacks</TheHeading>
        <BodyText>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
        </BodyText>
      </section>
    </>
  );
};

export default ResumePage;
