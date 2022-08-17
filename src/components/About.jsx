import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <div id="about" className="about-section-name">
        About
      </div>
      <div className="about-section-description">
        Hey👋, I'm Asad (techname:bagfaceak) I'm a web developer and designer
        🔥. I'm currently based in India, and working towards improving my
        development skills every day. I have a particular passion for design and
        development in general. In the free time I like to draw digital art,
        listen to music 🎶 or play football ⚽.
      </div>
      <div className="about-section-resume">
        <a href="./resume/AsadKhanResume.pdf" download="AsadKhan-Resume">
          Resume
        </a>
      </div>
    </Container>
  );
};

export default About;

const Container = styled.div`
  width: 700px;
  margin-top: 30px;
  .about-section-name {
    font-size: 18px;
  }
  .about-section-resume {
    margin-top: 30px;
    a {
      font-size: 18px;
      text-decoration: none;
      color: #2966bc;
    }
  }
  .about-section-description {
    font-size: 18px;
    margin-top: 30px;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
