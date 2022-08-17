import React from "react";
import styled from "styled-components";
import john from "../assests/john.png";
import comma from "../assests/comma.png";
import mike from "../assests/mike.png";
import Slider from "react-slick";

function Testomonial() {
  let setting = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        setting: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Section id="gallery">
      <div className="container">
        <div className="main-title">
          <h2>Thoughts of our satisfied clients</h2>
        </div>
        <Slider {...setting}>
          <div className="testimonial-slider">
            <div className="testimonials-box">
              <div className="testi-img">
                <img src={john} alt="" />
              </div>
              <div className="testi-content">
                <img src={comma} alt="" />
                <h3 className="title">John</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>
            <div className="testimonials-box">
              <div className="testi-img">
                <img src={mike} alt="" />
              </div>
              <div className="testi-content">
                <img src={comma} alt="" />
                <h3 className="title">Mike</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      
      </div>
     
    </Section>
  );
}

export default Testomonial;

const Section = styled.section`
  padding: 49px 0 185px;
  background-color: #fcf7e0;
  width: 100%;
  .container {
    width: 100%;
    max-width: 1199px;
    margin: 0 auto;
    .main-title {
      font-weight: bold;
      margin-top: 60px;
      text-align: center;
      font-size: 28px;
      color: #cd362d;
      text-transform: uppercase;
    }
    .testimonial-slider {
      display: flex !important;
      gap: 10rem;

      .testimonials-box {
        background-color: #cd362d;
        /* width: 50%; */
        position: relative;
        top: 5rem;
        left: 2rem;
        text-align: center;
        max-width: 28rem;
        min-height: 25rem;
      }
      .testi-img {
        position: absolute;
        top: 26px;
        left: -57px;
      }
      .testi-content {
        text-align: left;
        padding: 96px 89px;
        .title {
          font-size: 30px;
          font-weight: 600;
          color: #fcf7e0;
          left: -6rem;
          line-height: 4.2rem;
        }
        p {
          color: #fff;
          font-weight: 400;
          font-size: 18px;
          margin-bottom: 0;
          font-family: "Inter";
          line-height: 1.584;
        }
      }
    }
    @media (max-width: 1200px) {
      max-width: 100%;
      .testimonial-slider {
        justify-content: center;
        width: 100%;
        max-width: 80%;
        margin: 0 auto;
        .testi-content {
          padding: 100px 75px;
        }

      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 50px 0 70px;
    .container {
      .main-title {
        font-weight: bold;
        margin-top: 16px;
        text-align: center;
        font-size: 23px;
        color: #cd362d;
        text-transform: uppercase;
      }
      .testimonial-slider {
        display: flex !important;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 100%;
        gap: 2rem;
        justify-content: center;
        .testimonials-box {
          background-color: #cd362d;
          position: relative;
          top: 40px;
          left: 0;
          text-align: center;
          max-width: 55%;
          min-height: 80%;
        }
        .testi-img {
          position: relative;
          top: 3px;
          text-align: center;
          display: block;
          width: 100%;
          left: 0;
          img {
            display: inline-block;
          }
        }
        .testi-content {
          text-align: left;
          padding: 52px 30px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding: 50px 0 70px;
    .container {
      .main-title {
        font-weight: bold;
        margin-top: 16px;
        text-align: center;
        font-size: 23px;
        color: #cd362d;
        text-transform: uppercase;
      }
      .testimonial-slider {
        display: flex !important;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 100%;
        gap: 2rem;
        justify-content: center;
        .testimonials-box {
          background-color: #cd362d;
          position: relative;
          top: 40px;
          left: 0;
          text-align: center;
          max-width: 55%;
          min-height: 100%;
        }
        .testi-img {
          position: relative;
          top: 10px;
          text-align: center;
          display: block;
          width: 100%;
          left: 0;
          img {
            display: inline-block;
          }
        }
        .testi-content {
          text-align: left;
          padding: 65px 14px;
        }
      }
    }
  }
`;
