import Wrapper from "@/components/custom/Wrapper";
import TheHeading from "@/components/custom/TheHeading";
import ProjectCard from "@/components/custom/ProjectCard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TabsSeparator,
} from "@/components/ui/tabs";

import PortfolioSectionProps from "@/types/PortfolioSectionProps";

/* This code snippet defines a React functional component named `PortfolioSection`. It takes an object
as a parameter with a property `data` that should be of type `PortfolioSectionProps`. */
export function PortfolioSection({
  data,
}: {
  readonly data: PortfolioSectionProps;
}) {
  const { title, sectionId, projectCard } = data;

  console.dir(projectCard, { depth: null });

  return (
    <Wrapper
      as="section"
      id={sectionId}
      className="mb-8">
      <TheHeading level="2">{title}</TheHeading>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsSeparator />
          <TabsTrigger value="react">React</TabsTrigger>
          <TabsSeparator />
          <TabsTrigger value="vue">Vue</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="flex gap-4 flex-col lg:flex-row">
            {projectCard.map((project) => (
              <ProjectCard
                key={project.id.toString()}
                project={{ ...project, id: project.id.toString() }}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="react">
          {/* Cards with react projects */}
          <div className="flex gap-4 flex-col lg:flex-row">
            {projectCard.map(
              (project) =>
                project.category === "react" && (
                  <ProjectCard
                    key={project.id.toString()}
                    project={{ ...project, id: project.id.toString() }}
                  />
                )
            )}
          </div>
        </TabsContent>
        <TabsContent value="vue">
          {/* Cards with vue projects */}
          <div className="flex gap-4 flex-col lg:flex-row">
            {projectCard.map(
              (project) =>
                project.category === "vue" && (
                  <ProjectCard
                    key={project.id.toString()}
                    project={{ ...project, id: project.id.toString() }}
                  />
                )
            )}
          </div>
        </TabsContent>
      </Tabs>
    </Wrapper>
  );
}
