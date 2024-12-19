import { Project } from "../../models/Project";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./ProjectGrid.module.css";

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid = (props: ProjectGridProps) => {
  const { projects } = props;
  return (
    <div className={styles.projectGrid}>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
