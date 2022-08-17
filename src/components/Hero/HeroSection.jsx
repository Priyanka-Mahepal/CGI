import React from "react";
import styled from "styled-components";
import red from "../assests/red.png";

function HeroSection() {
  return (
    <Section>
      <div className="content">
        <div>
          <img src={red} alt="" />
          <h1>we help Building your dream</h1>
        </div>
        <div className="button">
          <div className="btn">View Projects</div>
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;

const Section = styled.section`
  background: url(bg.jpg);
  min-height: 700px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  position: relative;
  display: inline-block;
  .content {
    position: absolute;
    left: 0;
    width: 100%;
    display: block;
    height: 100%;
    max-width: 50%;
    margin: 0 auto;
    text-align: left;
    padding: 0 0 0 21%;
    img {
      position: absolute;
      left: 0;
      object-fit: cover;
      width: auto;
      height: 100%;
    }

    h1 {
      color: white;
      position: absolute;
      text-transform: uppercase;
      font-size: 67px;
      letter-spacing: 0.5rem;
      padding: 25% 0;
      font-weight: 800;
      font-family: "Archieve";
    }
    .button {
      background-color: #f09733;
      position: relative;
      max-width: 175px;
      top: 68%;
      left: 12px;

      .btn {
        color: #fefcfb;
        font-size: 20px;
        font-weight: 600;
        width: 100%;
        padding: 10%;
        position: relative;
        text-align: center;
      }
    }
  }

  @media (max-width: 1200px) {
    min-height: 445px;
    .content {
      max-width: 60%;
      padding: 0 0 0 17%;
      h1 {
        font-size: 51px;
        padding: 18% 0;
      }
      .button {
        max-width: 125px;
        top: 67%;
        left: 18px;
        .btn {
          padding: 10%;
          font-size: 14px;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    min-height: 364px;
    .content {
      max-width: 78%;
      padding: 0 0 0 24%;
      h1 {
        font-size: 42px;
        padding: 18% 0;
      }
      .button {
        max-width: 125px;
        top: 72%;
        left: 7px;
      }
    }
    @media screen and (max-width: 767px) and (orientation: portrait) {
      min-height: 300px;
      .content {
        padding: 50px 50px;
        max-width: 80%;
        img {
          display: none;
        }
        h1 {
          padding: 5% 5%;
          font-size: 35px;
          background-color: #eb6d6da1;
        }
        .button {
          max-width: 125px;
          top: 98%;
          left: 12px;
          .btn {
            padding: 7%;
            font-size: 15px;
          }
        }
      }
    }
    @media screen and (max-width: 767px) and (orientation: landscape) {
      min-height: 300px;
      .content {
        max-width: 75%;

        h1 {
          padding: 15% 0;
          font-size: 35px;
        }
        .button {
          max-width: 145px;
          left: 12px;
          .btn {
            padding: 7%;
            font-size: 15px;
          }
        }
      }
    }
  }
`;
