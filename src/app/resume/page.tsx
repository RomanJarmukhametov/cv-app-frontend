// /app/resume/page.tsx

import { getResumePageData } from "@/data/loaders";

import { AboutSection } from "@/components/custom/AboutSection";

/**
 * Renders a block based on its component type.
 *
 * @param block - The block object to be rendered.
 * @returns The rendered block component.
 */
function blockRenderer(block: any) {
  switch (block.__component) {
    case "layout.about-section":
      return (
        <AboutSection
          key={block.id}
          data={block}
        />
      );
  }
}

/**
 * Renders the Resume page component.
 * Retrieves data from the Strapi API and renders the blocks.
 * @returns The rendered Resume page component.
 */
export default async function Resume() {
  const strapiData = await getResumePageData();

  const { blocks } = strapiData;
  if (!blocks) return <p>No sections found</p>;

  return <>{blocks.map(blockRenderer)}</>;
}

// const ResumePage = () => {
//   return (
//     <>
//       <Wrapper
//         as="section"
//         id="about"
//         className="mb-8">
//         <TheHeading level="2">About me</TheHeading>
//         <BodyText>
//           Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
//         </BodyText>
//       </Wrapper>

//       <section
//         id="skills"
//         className="mb-8">
//         <TheHeading level="2">Skills</TheHeading>
//         <BodyText>
//           <ul>
//             <li>HTML</li>
//             <li>CSS</li>
//             <li>JavaScript</li>
//             <li>React</li>
//             <li>Next.js</li>
//           </ul>
//         </BodyText>
//       </section>
//       <section
//         id="experience"
//         className="mb-8">
//         <TheHeading level="2">Experience</TheHeading>
//         <BodyText>
//           Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
//         </BodyText>
//       </section>
//       <section
//         id="education"
//         className="mb-8">
//         <TheHeading level="2">Education</TheHeading>
//         <BodyText>
//           Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
//         </BodyText>
//       </section>
//       <section
//         id="portfolio"
//         className="mb-8">
//         <TheHeading level="2">Portfolio</TheHeading>
//         <BodyText>
//           Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
//         </BodyText>
//       </section>
//       <section
//         id="contacts"
//         className="mb-8">
//         <TheHeading level="2">Contacts</TheHeading>
//         <BodyText>
//           Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
//         </BodyText>
//       </section>
//       <section
//         id="feedbacks"
//         className="mb-8">
//         <TheHeading level="2">Feedbacks</TheHeading>
//         <BodyText>
//           Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
//         </BodyText>
//       </section>
//     </>
//   );
// };

// export default ResumePage;
