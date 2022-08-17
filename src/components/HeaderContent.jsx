import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const HeaderContent = () => {
  return (
    <Container>
      <div className="name-info">
        Creative front-end developer,
        <span id="span">
          {" "}
          designer and illustrator building interactive websites that run across
          platforms and devices
        </span>
        .
      </div>

      <div className="social-info">
        <a href="https://github.com/bagfaceasadkhan" target={"_blank"}>
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/asadkhanpathan/" target={"_blank"}>
          <LinkedInIcon style={{ fill: "#2966BC" }} />
        </a>
        <a href="https://www.instagram.com/asadkhan1536" target={"_blank"}>
          <InstagramIcon style={{ fill: "#EE7470" }} />
        </a>
      </div>
    </Container>
  );
};

export default HeaderContent;

const Container = styled.div`
  width: 700px;
  margin-top: 50px;
  .name-info {
    font-size: 28px;
    font-weight: 600;
    word-break: break-all;
    #span {
      font-size: 28px;
      font-weight: 600;
      opacity: 60%;
    }
  }

  .social-info {
    display: flex;
    font-size: 18px;

    margin-top: 30px;

    a {
      display: flex;
      margin-right: 30px;
      align-items: center;
      text-decoration: none;
    }
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
