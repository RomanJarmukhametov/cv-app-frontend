/* The `interface ProjectCardProps` in TypeScript is defining a structure or blueprint for an object
that represents the properties of a project card. Each project card object created using this
interface must have the following properties: */
interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  category: string;
}

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
