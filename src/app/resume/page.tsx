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
