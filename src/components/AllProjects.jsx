import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ProjectsCard from "./ProjectsCard";
const AllProjects = () => {
  const [allRepos, setAllRepos] = useState([]);
  const fetchAllRepos = async () => {
    const resp = await fetch(
      "https://api.github.com/users/bagfaceasadkhan/repos"
    );
    const data = await resp.json();
    setAllRepos(data);
  };

  useEffect(() => {
    fetchAllRepos();
  }, []);
  return (
    <Container>
      <div className="allprojects-section-name">
        <div className="name">All Projects</div>
        <div className="home">
          <a href="/">Home</a>
        </div>
      </div>
      <div className="allprojects-section-description">
        Here all projects are listed that are uploaded in github repositories.
      </div>
      <div className="allprojects-section-projectgallery">
        {allRepos && allRepos.map((val) => <ProjectsCard data={val} />)}
      </div>
    </Container>
  );
};

export default AllProjects;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  .allprojects-section-name {
    width: 700px;
    display: flex;
    justify-content: space-between;
    .name {
      font-size: 18px;
      font-weight: 500;
    }
    .home {
      a {
        font-size: 18px;
        font-weight: 500;
        text-decoration: none;
        &:hover {
          color: #2966bc;
        }
      }
    }
  }
  .allprojects-section-description {
    width: 700px;
    font-size: 18px;
    margin-top: 30px;
  }
  .allprojects-section-projectgallery {
    display: flex;
    width: 700px;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    .allprojects-section-projectgallery {
      width: 100%;
    }
    .allprojects-section-name {
      width: 100%;
    }
    .allprojects-section-description {
      width: 100%;
    }
  }
`;
