import React from "react";
import styled from "styled-components";
const Skills = () => {
  return (
    <Container>
      <div id="skills" className="skills-section-name">
        Skills
      </div>
      <div className="skills-section-list">
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
          <li>React-Router</li>
          <li>ReduxToolkit</li>
          <li>Html-Css</li>
        </ul>
      </div>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  width: 700px;
  margin-top: 30px;
  font-size: 18px;
  .skills-section-name {
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
