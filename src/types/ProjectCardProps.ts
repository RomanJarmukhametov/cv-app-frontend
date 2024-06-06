import ImageProps from "@/types/ImageProps";

/* The `interface ProjectCardProps` in TypeScript is defining a structure or blueprint for an object
that represents the properties of a project card. Each project card object created using this
interface must have the following properties: */
interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  url: string;
  category: string;
  image: ImageProps;
}

export default ProjectCardProps;
