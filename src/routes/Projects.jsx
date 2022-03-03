import styled from "styled-components";
import AnimatedPage from "../AnimatedPage/AnimatedPage";
const ProjectsPage = styled.button`
  background-color: blue;
`

function Projects() {


  return (
    <AnimatedPage>
      <ProjectsPage className="Projects">
        <h1>Projects</h1>
      </ProjectsPage>
    </AnimatedPage>
  )
}

export default Projects
