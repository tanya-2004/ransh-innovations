import { Projects} from "../containers";

const ProjectsPage = () => {
  return (
    <div className="app">
      <main role="main" aria-label="Projects showcase" className="mb-[8rem]">
        <Projects />
      </main>
    </div>
  );
};

export default ProjectsPage;