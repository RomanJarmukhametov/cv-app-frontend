// /app/resume/page.tsx

import { getResumePageData } from "@/data/loaders";

import { AboutSection } from "@/components/custom/AboutSection";

import { ExperienceSection } from "@/components/custom/ExperienceSection";

import { EducationSection } from "@/components/custom/EducationSection";

import { SkillsSection } from "@/components/custom/SkillsSection";

import { PortfolioSection } from "@/components/custom/PortfolioSection";

import { ContactsSection } from "@/components/custom/ContactsSection";

import { FeedbackSection } from "@/components/custom/FeedbackSection";

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
    case "layout.experience-section":
      return (
        <ExperienceSection
          key={block.id}
          data={block}
        />
      );

    case "layout.education-section":
      return (
        <EducationSection
          key={block.id}
          data={block}
        />
      );

    case "layout.skills-section":
      return (
        <SkillsSection
          key={block.id}
          data={block}
        />
      );

    case "layout.portfolio-section":
      return (
        <PortfolioSection
          key={block.id}
          data={block}
        />
      );

    case "layout.contacts-section":
      return (
        <ContactsSection
          key={block.id}
          data={block}
        />
      );

    case "layout.feedback-section":
      return (
        <FeedbackSection
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
