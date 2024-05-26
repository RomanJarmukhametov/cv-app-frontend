import { getHomePageData } from "@/data/loaders";

import { HeroSection } from "@/components/custom/HeroSection";

/**
 * Renders a block based on its component type.
 *
 * @param block - The block object to be rendered.
 * @returns The rendered block component.
 */
function blockRenderer(block: any) {
  switch (block.__component) {
    case "layout.hero-section":
      return (
        <HeroSection
          key={block.id}
          data={block}
        />
      );
  }
}

/**
 * Renders the Home page component.
 * Retrieves data from the Strapi API and renders the blocks.
 * @returns The rendered Home page component.
 */
export default async function Home() {
  const strapiData = await getHomePageData();

  const { blocks } = strapiData;
  if (!blocks) return <p>No sections found</p>;

  return <main>{blocks.map(blockRenderer)}</main>;
}
