import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <Container>
      <div className="section-footer-name">© AsadKhan</div>
      <div className="section-footer-links">
        <a href="https://github.com/bagfaceasadkhan" target={"_blank"}>
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/asadkhanpathan/" target={"_blank"}>
          <LinkedInIcon />
        </a>
        <a href="https://www.instagram.com/asadkhan1536" target={"_blank"}>
          <InstagramIcon />
        </a>
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 700px;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  .section-footer-links {
    a {
      margin-left: 30px;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
