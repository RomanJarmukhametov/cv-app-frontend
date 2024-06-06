import ImageProps from "@/types/ImageProps";

import ProjectCardProps from "@/types/ProjectCardProps";

/* The `interface PortfolioSectionProps` in TypeScript is defining a structure or blueprint for an
object that represents the properties of a portfolio section. Each portfolio section object created
using this interface must have the following properties: */
interface PortfolioSectionProps {
  id: number;
  __component: string;
  title: string;
  sectionId: string;
  projectCard: ProjectCardProps[];
}

export default PortfolioSectionProps;
