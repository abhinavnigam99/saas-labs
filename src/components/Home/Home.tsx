import { useState } from "react";
import styles from "./Home.module.css";
import useFetchProjects from "../../hooks/useFetchProjects";
import Pagination from "../Pagination/Pagination";
import ProjectGrid from "../ProjectGrid/ProjectGrid";

const Home = () => {
  const { projects, isLoading, error } = useFetchProjects();
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  const totalPages = Math.ceil(projects.length / recordsPerPage);
  const currentRecords = projects.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <>
      <h1 className={styles.title}>Kickstarter Projects</h1>
      {isLoading && <p role="alert">Loading projects...</p>}
      {error ? (
        <p role="alert">Error loading projects: {error.message}</p>
      ) : null}
      {!isLoading && !error && projects.length === 0 && (
        <p role="alert">No projects available.</p>
      )}
      {!isLoading && !error && projects.length > 0 && (
        <>
          <ProjectGrid projects={currentRecords} />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
};

export default Home;
