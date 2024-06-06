import Link from "next/link";
import StrapiImage from "@/components/custom/StrapiImage";
import TheHeading from "@/components/custom/TheHeading";
import BodyText from "@/components/custom/BodyText";

/* The `interface ProjectCardProps` is defining the structure of the props that the `ProjectCard`
component expects to receive. In this case, it specifies that the `ProjectCard` component should
receive an object as a prop named `project`, which has the following properties: */
interface ProjectCardProps {
  project: {
    id: string;
    url: string;
    image: { url: string };
    title: string;
    description: string;
  };
}

/**
 * The ProjectCard component in TypeScript React displays project details with an image, title,
 * description, and a link to find out more.
 * @param  - The code you provided is a React functional component called `ProjectCard` that renders a
 * card for a project. It takes a prop `project` which contains information about the project such as
 * `id`, `url`, `image`, `title`, and `description`.
 * @returns The `ProjectCard` component is being returned. It is a functional component that displays a
 * project card with an image, project details, and a link to the project URL. The project details
 * include the project title, description, and a "Find out more" link. The image and project details
 * are displayed within a styled container.
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link
      key={project.id}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full lg:w-1/3">
      <div className="relative overflow-hidden">
        <StrapiImage
          src={project.image.url}
          alt="image"
          width={500}
          height={500}
          className="w-full transition-opacity duration-300 lg:group-hover:opacity-0"
        />
        {/* project card details */}
        <div className="w-full lg:absolute lg:inset-0 px-5 flex flex-col items-start justify-center bg-white border-[1px] border-gray-200 lg:opacity-0 lg:transition-opacity lg:duration-300 lg:group-hover:opacity-100">
          <TheHeading level="3">
            <span className="text-primary">{project.title}</span>
          </TheHeading>
          <BodyText>{project.description}</BodyText>
          <p className="mt-3 text-primary text-medium">Find out more</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
