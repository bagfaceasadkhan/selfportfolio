import React from "react";
import styled from "styled-components";
import ProjectsCard from "./ProjectsCard";
import { projectsArr } from "../constants/constants";
const Projects = () => {
  return (
    <Container>
      <div id="projects" className="project-section-name">
        Projects{" "}
      </div>
      <div className="project-section-gallery">
        {projectsArr.map((val) => (
          <ProjectsCard data={val} />
        ))}
      </div>
      <div className="project-section-moreprojects">
        <a href="/allprojects">More Projects</a>
      </div>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  width: 700px;
  margin-top: 30px;
  .project-section-name {
    font-size: 18px;
  }
  .project-section-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .project-section-moreprojects {
    font-size: 18px;
    margin-top: 30px;
    a {
      text-decoration: none;
      color: #2966bc;
    }
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    .project-section-gallery {
      display: flex;
      justify-content: center;
    }
  }
`;
