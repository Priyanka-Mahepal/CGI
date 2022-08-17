import React from "react";
import styled from "styled-components";
// import servicesbg from "../assests/services_bg.png";
import gardening from "../assests/gardening.png";
import powerwashing from "../assests/power_washing.png";
import handiman from "../assests/handiman.png";
import metalfabrication from "../assests/metal_fabrication.png";
import Slider from "react-slick";

function Services() {
  let settings = {
    dot: true,
    Infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "50px",
    cssEase: "linear",
    autoPlay: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Section id="services">
      <div className="services">
        {/* <div className="background-img">
          <img src={servicesbg} alt="" />
        </div> */}
        <div className="heading">
          <h3 className="small-title">What We Do</h3>
          <h2 className="main-title">Our Services</h2>
          <div className="slider-section">
            <Slider {...settings}>
              <div className="bg">
                <div className="service-box-img">
                  <img src={gardening} alt="" />
                  <h3 className="service-box-title">Gardening</h3>
                </div>
              </div>

              <div className="bg">
                <div className="service-box-img">
                  <img src={metalfabrication} alt="" />
                  <h3 className="service-box-title">Metal Fabrication</h3>
                </div>
              </div>

              <div className="bg">
                <div className="service-box-img">
                  <img src={powerwashing} alt="" />
                  <h3 className="service-box-title">Power Washing</h3>
                </div>
              </div>

              <div className="bg">
                <div className="service-box-img">
                  <img src={handiman} alt="" />
                  <h3 className="service-box-title">Handiman Services</h3>
                </div>
              </div>

              <div className="bg">
                <div className="service-box-img">
                  <img src={gardening} alt="" />
                  <h3 className="service-box-title">Gardening</h3>
                </div>
              </div>

              <div className="bg">
                <div className="service-box-img">
                  <img src={metalfabrication} alt="" />
                  <h3 className="service-box-title">Metal Fabrication</h3>
                </div>
              </div>

              <div className="bg">
                <div className="service-box-img">
                  <img src={powerwashing} alt="" />
                  <h3 className="service-box-title">Power Washing</h3>
                </div>
              </div>

              <div className="bg">
                <div className="service-box-img">
                  <img src={handiman} alt="" />
                  <h3 className="service-box-title">Handiman Services</h3>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Services;

const Section = styled.section`
  background: url(services_bg.png);
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-size: 100% 100%;
  position: relative;
  background-repeat: no-repeat;
  overflow-x: hidden;
  padding: 5rem 0 35rem;
  .services {
    .heading {
      width: 100%;
      margin: 0 auto;
      text-align: center;
      display: inline-block;
      position: absolute;
      top: 7%;
      .small-title {
        color: #fff;
        font-size: 30px;
        text-transform: capitalize;
        font-weight: 600;
        text-align: center;
      }
      .main-title {
        font-size: 48px;
        color: #fff;
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
        line-height: 5rem;
      }
      .slider-section {
        max-width: 1600px;
        margin: 0 auto;

        .bg {
          background-color: #cd362d;
          height: 332px;
          text-align: center;
          max-width: 96%;
          position: relative;
          top: 5rem;
        }
        .service-box-img {
          display: inline-block;
          position: relative;

          img {
            position: relative;
            top: -125px;
            margin: 0 auto;
            display: block;
          }
          .service-box-title {
            position: relative;
            display: block;
            color: #fff;
            font-size: 27px;
            top: -4rem;
          }
        }
        @media (max-width: 1200px) {
          .bg {
            max-width: 80%;
            height: auto;
            position: relative;
            top: 0;
            margin-top: 100px;
          }
          .service-box-img {
            display: block;
            position: relative;
            height: auto;
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    .services {
      .heading {
        .main-title {
          line-height: 58px !important;
          font-size: 37px !important;
        }
        .slider-section {
          .bg {
            max-width: 100%;
          }
          .service-box-img {
            img {
              top: -112px;
              max-width: 80%;
            }
          }
        }
      }
    }
  }

  .slick-prev:before,
  .slick-next:before {
    color: #000;
  }

  .slick-list {
    padding: 5% 0 0;
  }

  .slick-slide {
    padding: 0 30px;
  }

  .slick-prev:before {
    background: url(left_arrow.png);
    background-repeat: no-repeat;
    background-position: center;
  }

  .slick-next:before {
    background: url(right_arrow.png);
    background-repeat: no-repeat;
    background-position: center;
  }

  .slick-prev,
  .slick-next {
    top: 62%;
  }

  .slick-prev:before,
  .slick-next:before {
    height: 55px;
    width: 55px;
    display: inline-block;
    color: transparent;
  }

  .slick-prev {
    left: -100px;
  }

  .slick-next {
    right: -70px;
  }

  .slick-dots {
    padding-top: 70px;
    top: auto;
    bottom: -18%;
  }

  .testimonial-slider .slick-prev,
  .testimonial-slider .slick-next {
    display: none !important;
  }

  .slick-dots li.slick-active button:before {
    color: #cd362d;
    opacity: 1;
  }

  .slick-dots li button:before {
    color: #e59686;
    font-size: 35px;
    height: 15px;
    width: 15px;
  }
  /* @media screen and (max-width: 767px) {
    padding: 2rem 0 35rem;
    .services {
      .heading {
        .small-title {
          font-size: 25px;
        }
        .main-title {
          font-size: 32px;
          line-height: 3rem;
        }
      }
    }
  } */
`;
