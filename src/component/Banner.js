import React from "react";
import styled from "styled-components";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

function Banner() {
  return (
    <BannerContainer>
      <div className="image_container">
        <img src="./images/1.png" height="50px" alt="images" />
        <img src="./images/2.png" height="30px" alt="images" />
        <img src="./images/4.png" height="50px" alt="images" />
        <img src="./images/7.png" height="50px" alt="images" />
        <img src="./images/5.png" height="50px" alt="images" />
        <img src="./images/6.png" height="30px" alt="images" />
      </div>
      <div className="container-fluid mt-md-0 mt-sm-5 mt-0 h-100 w-100 d-flex align-align-items-center justify-content-center px-0">
        <div className="row w-100 d-flex justify-content-md-between align-items-center gap-md-0 gap-5 mt-md-0 mt-sm-5 mt-0">
          <div id="Left" className="col-md-7 col-12 px-0">
            <h5>Hello</h5>
            <h1>I'm Nilesh Rathod</h1>
            <h5 className="webDevs">as a Web Developer</h5>
            <div className="buttons">
              <a href="./Resume_2.pdf" className="Buttons" download="nrResume">
                Download CV
              </a>
            </div>
            {/* buttons End */}
            <div id="social_links">
              <a
                href="https://github.com/nilesh01011"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="icons" />
              </a>

              <a
                href="https://www.linkedin.com/in/nilesh-rathod-0bb62b223/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin className="icons" />
              </a>

              <a
                href="https://twitter.com/Nilesh1011000/"
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitter className="icons" />
              </a>
            </div>
          </div>
          <div
            id="Right"
            className="col-md-5 col-12 px-0 d-flex justify-content-center align-items-center"
          >
            <div className="images">
              <img src="./images/about_1.png" alt="images" />
            </div>
          </div>
        </div>
      </div>
    </BannerContainer>
  );
}

export default Banner;

const BannerContainer = styled.div`
  width: 100%;
  // max-width: 1280px;
  margin: 0 auto;
  height: 100vh;
  color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 3rem;

  @media screen and (max-width: 1280px) {
    & {
      height: 650px;
    }
  }

  @media screen and (max-width: 768px) {
    & {
      padding: 0 2rem;
    }
  }

  @media screen and (max-width: 480px) {
    & {
      padding: 0 1.5rem;
    }
  }

  #Right {
    @media screen and (max-width: 880px) {
      & {
        display: none !important;
      }
    }
  }

  & .buttons {
    width: 15vw;
    height: 45px;
    min-height: 8vh;
    margin: 1.8rem 0;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    @media screen and (max-width: 1280px) {
      & {
        width: 180px;
      }
    }
    @media screen and (max-width: 1038px) {
      & {
        min-height: 45px;
      }
    }

    @media screen and (max-width: 992px) {
      & {
        margin: 1.5rem 0;
      }
    }

    & a.Buttons {
      width: 100%;
      height: 100%;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1vw;
      padding: 0.8rem 0;
      border-radius: 30px;
      text-decoration: none;
      background: linear-gradient(
        324deg,
        rgba(240, 178, 175, 1) 20%,
        rgba(251, 131, 158, 1) 80%
      );
      color: #fff;
      user-select: none;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      animation: pulse_01 2s ease infinite;
      outline: 1px solid #fb839e !important;

      @media screen and (max-width: 992px) {
        & {
          font-size: 1rem;
        }
      }

      &:hover {
        background: transparent;
        color: #fb839e;
      }

      &:active {
        position: relative;
        top: 1px;
      }
    }
  }

  ${"" /* Buttons End */}

  & #social_links {
    justify-content: flex-start;
  }
`;
