import styled from "styled-components";
import AnimatedPage from "../AnimatedPage/AnimatedPage";
const HomePage = styled.button`
  background-color: red;
`

function Projects() {


  return (
    <AnimatedPage>
      <HomePage className="Home">
        <h1>Home</h1>
      </HomePage>
    </AnimatedPage>
  )
}

export default Projects
