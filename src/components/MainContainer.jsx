import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import HeaderContent from "./HeaderContent";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Footer from "./Footer";
const MainContainer = () => {
  return (
    <Container>
      <NavBar />
      <HeaderContent />
      <Projects />
      <About />
      <Skills />
      <Footer />
    </Container>
  );
};

export default MainContainer;

const Container = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  @media only screen and (max-width: 600px) {
    margin-top: 15px;
    width: 100%;
  }
`;
