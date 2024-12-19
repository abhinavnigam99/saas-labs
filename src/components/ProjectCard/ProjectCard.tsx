import { Project } from "../../models/Project";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { project } = props;
  return (
    <div className={styles.projectCard}>
      <div className={styles.cardHeader}>
        <span className={styles.sNo}>#{project["s.no"]}</span>
        <h3 className={styles.projectTitle}>{project.title}</h3>
      </div>
      <p className={styles.projectBlurb}>{project.blurb}</p>
      <div className={styles.cardInfo}>
        <span className={styles.percentageFunded}>
          {project["percentage.funded"]}% Funded
        </span>
        <span className={styles.amountPledged}>
          ${new Intl.NumberFormat().format(project["amt.pledged"])} Pledged
        </span>
      </div>
      <div className={styles.cardFooter}>
        <span className={styles.projectAuthor}>By: {project.by}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
