import React from "react";
import styled from "styled-components";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
const ProjectsCard = (props) => {
  return (
    <Container>
      <div className="project-card">
        <a href={props.data.gh || props.data.html_url}>{props.data.name}</a>

        {props.data.desc && <p>{props.data.desc}</p>}
        <div className="icon-container">
          <a href={props.data.gh || props.data.html_url} target={"_blank"}>
            <GitHubIcon style={{ background: "#212023" }} />
          </a>
          {props.data.live && (
            <a href={props.data.live} target={"_blank"}>
              <LaunchIcon style={{ background: "#212023" }} />
            </a>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ProjectsCard;

const Container = styled.div`
  margin-top: 30px;
  background-color: #212023;
  border-radius: 3px;
  .project-card {
    display: flex;
    padding: 10px;
    flex-direction: column;

    justify-content: space-evenly;
    width: 335px;
    height: 160px;

    background-color: transparent;
    .icon-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: transparent;
    }
    a {
      font-size: 18px;
      font-weight: 500;
      text-decoration: none;
      color: #2966bc;
      background-color: transparent;
      &:hover {
        color: #2966bc;
      }
    }
    p {
      background-color: transparent;
    }
    span {
      background-color: transparent;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    .project-card {
      width: 100%;
    }
  }
`;
