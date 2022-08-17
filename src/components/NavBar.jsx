import React from "react";
import { useState } from "react";
import styled from "styled-components";
const NavBar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80 && window.screen.width <= 600) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <Container
      style={{
        background: colorChange ? "#212023" : "",
        transition: "1s ease",
      }}
    >
      <div className="nav-links">
        <div className="name-link">
          <a href="#header">Asad Khan</a>
        </div>
        <div className="page-link">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
        </div>
      </div>
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  width: 700px;
  height:40px;
  display:flex;
  z-index:100;
  align-items:center;
  font-size: 18px;
position:fixed;

top:0;
  .nav-links {
width:100%;
    display: flex;
    justify-content: space-between;
    background:transparent;
  }
  .name-link{
    background:transparent;
  a{
      font-weight:500;
      background:transparent;
      text-decoration:none;
      &:hover{
        color:#2966BC;
      }
  }
  }
  .page-link {
    display: flex;
    justify-content: space-between;
    width: 250px;
      background:transparent;
    a {
      text-decoration: none;
      background:transparent;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 16px;
    .page-link {

    width: 180px;

  }
  .nav-links{
  padding:13px;
}

`;
