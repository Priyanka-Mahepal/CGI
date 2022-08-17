import React from "react";
import styled from "styled-components";
import cgi_fabrication from "../assests/cgi_fabrication.png";
import dots from "../assests/dots.png";

function Header() {
  return (
    <Section id="about">
      <div className="h-container">
        <div className="first">
          <div className="images">
            <div className="image-box">
              <img src={cgi_fabrication} alt="Cgi_fabrication" />
            </div>
            <div className="dots-img">
              <img src={dots} alt="Dots" />
            </div>
          </div>
          <div className="content">
            <h2 className="title">CGI INDUSTRIAL & CUSTOM FABRICATION</h2>
            <p>
              We are your one stop shop for superior wrought iron craftsmanship,
              quality iron materials, knowledgeable staff, timely installation
              and excellence you can count on. Please browse our Gallery or if
              you are looking for the most up to date projects then you are
              welcome to view our blog, on our blog you will find recent
              projects that we have finished in the San Francisco area. Any type
              of wrought iron gate, railing or fence you can imagine we can hand
              forge with wrought iron and make it a reality today!
            </p>
          </div>
        </div>

        <div className="paragraph-content">
          <p>
            At CGI Industrial and on behalf of all our iron contractors in San
            Francisco we take a different approach to creating beautiful looking
            wrought iron gates, railings, doors and iron fence projects. Our
            collection of wrought iron wall decorations, wrought iron flower
            boxes, wrought iron candle holders, wrought iron house decorations
            and much more will give your home an inviting and unique feel. Come
            and see our many other wrought iron art items and accessories.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Header;

const Section = styled.section`
  padding: 120px 160px 95px;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  .h-container {
    max-width: 1140px;
    margin: 0 auto;
    .first {
      display: flex;

      .images {
        position: relative;
        box-sizing: border-box;
        display: inline-block;
        /* padding: 0 15px; */
        .image-box {
          img {
            max-width: 540px;
          }
        }
        .dots-img {
          position: absolute;
          display: inline-block;
          z-index: -1;
          left: -80px;
          top: -67px;
          img {
            max-width: 190px;
            height: auto;
          }
        }
      }
      .content {
        min-width: 590px;
        padding-left: 22px;
        // width: 100%;
        padding: 0 15px 0 35px;
        .title {
          font-size: 48px;
          margin-bottom: 25px;
          color: #f09733;
          font-weight: 500;
          line-height: 1.166;
          font-family: "Archive";
        }
        p {
          font-size: 17px;
          font-weight: 500;
          color: #000;
          line-height: 2rem;
          margin-bottom: 0;
          padding-right: 14px;
        }
      }
    }
    .paragraph-content {
      padding-top: 40px;
      min-width: 58vw;
      p {
        font-size: 17px;
        font-weight: 500;
        color: #000;
        line-height: 2rem;
        margin-bottom: 0;
      }
    }
  }
  @media (max-width: 1200px) {
    padding: 55px 0 50px;
    width: 100%;
    position: relative;
    overflow-x: hidden;
    max-width: 80%;
    margin: 0 auto;
    display: block;
    .h-container {
      .first {
        .images {
          padding: 85px 15px 0 15px;
          .image-box {
            text-align: center;
            img {
              max-width: 91%;
              position: relative;
              left: 17px;
              top: -31px;
            }
          }
          .dots-img {
            left: 11px;
            top: 18px;
            img {
              max-width: 100px;
            }
          }
        }

        .content {
          min-width: auto;
          width: 100%;
          padding: 0 15px;
          .title {
            font-size: 40px;
            line-height: 45px;
            margin-bottom: 10px;
          }
          p {
            padding: 0;
            font-size: 15px;
            line-height: 30px;
          }
        }
      }
      .paragraph-content {
        padding-top: 10px;
        p {
          padding: 0;
          font-size: 15px;
          line-height: 30px;
        }
      }
    }
  }
@media screen and (max-width: 768px) {
  .h-container {
      .first {
        display: flex;
        flex-wrap: wrap;
        .images {
          padding: 40px 15px 0 15px;
          .image-box {
            img {
              max-width: 100%;
              width: 100%;
              left: 16px;
              top: -31px;
            }
          }
          .dots-img {
            left: 0;
            top: -19px;
            img{
              max-width: 77px
            }
          }
        }
        .content{
          padding: 0 0;
          .title{
            font-size: 21px;
            line-height: 28px;
          }
          p{
            font-size: 17px;
          }
        }
      }
      .paragraph-content {
        p {
         
          font-size: 17px;
       
        }
      }
    }
}

  @media (max-width: 767px) {
    .h-container {
      .first {
        display: flex;
        flex-wrap: wrap;
        .images {
          padding: 40px 15px 0 15px;
          .image-box {
            img {
              max-width: 100%;
              width: 100%;
              left: 16px;
              top: -31px;
            }
          }
          .dots-img {
            left: 0;
            top: -19px;
            img{
              max-width: 77px
            }
          }
        }
        .content{
          padding: 0 0;
          .title{
            font-size: 21px;
            line-height: 28px;
          }
          p{
            font-size: 17px;
          }
        }
      }
      .paragraph-content {
        p {
         
          font-size: 17px;
       
        }
      }
    }
  }

  /* @media (max-width: 767px) {
    .footer-container{
      .add{
        .email{
          word-break: break-all;

        }
      }
    }
  } */
`;
