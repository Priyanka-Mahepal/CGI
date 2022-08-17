import React from "react";
import styled from "styled-components";
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

function Footer() {
  return (
    <div className="footer">
      <Section>
        <div className="footer-container">
          <div className="address-container">
            <div class="footer-detail">
              <p className="property"> MM Property Services LLC. </p>
              <address className="add">
                <MdLocationPin />
                <div>
                  <p className="icon"> 2825 Crocker Ave.</p>
                  <p>Redwood City 94063</p>
                  <p> California</p>
                </div>
              </address>
              <div className="email">
                <MdEmail />
                <p>info@mmpropertyservices.com</p>
              </div>
              <div className="call-me">
                <MdPhone />
                <p>650-518-4194</p>
              </div>
            </div>
          </div>

          <div className="service-container">
            <div class="footer-detail">
              <h4 class="footer-link-title">Services</h4>
              <div className="list">
                <ul>
                  <li>
                    <a href="#">Handyman Services</a>
                  </li>
                  <li>
                    <a href="#">Maintenance & repairs</a>
                  </li>
                  <li>
                    <a href="#">Lighting</a>
                  </li>
                  <li>
                    <a href="#">Gardening</a>
                  </li>
                  <li>
                    <a href="#">Hauling</a>
                  </li>
                  <li>
                    <a href="#">Moving Out</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">Cleaning</a>
                  </li>
                  <li>
                    <a href="#">Power Washing</a>
                  </li>
                  <li>
                    <a href="#">Painting</a>
                  </li>
                  <li>
                    <a href="#">Metal Fabrication</a>
                  </li>
                  <li>
                    <a href="#">Installation</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="project-container">
            <div class="footer-detail">
              <h4 class="footer-link-title">Projects</h4>
              <ul>
                <li>
                  <a href="#">Handyman Services</a>
                </li>
                <li>
                  <a href="#">Maintenance & repairs</a>
                </li>
                <li>
                  <a href="#">Lighting</a>
                </li>
                <li>
                  <a href="#">Gardening</a>
                </li>
                <li>
                  <a href="#">Hauling</a>
                </li>
                <li>
                  <a href="#">Moving Out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      <LowerFooter className="lower__footer">
        <h2 className="copy">
          Copyright &copy;{" "}
          <span>MM Property Servies LLC. All rights Reserved</span>
        </h2>
      </LowerFooter>
    </div>
  );
}

export default Footer;

const Section = styled.footer`
  background-color: #cd362d;
  padding: 70px 0 60px;
  width: 100%;
  .footer-container {
    width: 100%;
    max-width: 1199px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    .address-container {
      .footer-detail {
        .property {
          color: white;
          font-size: 20px;
          line-height: 2;
          text-align: left;
          margin-bottom: 30px;
        }
        .add {
          display: flex;
          line-height: 2;
          font-size: 18px;
          text-align: left;
          margin-bottom: 30px;
          color: white;
          .icon {
            line-height: 18px;
          }
        }
        .email {
          display: flex !important;
          line-height: 18px;
          font-size: 18px;
          text-align: left;
          margin-bottom: 30px;
          color: white;
        }
        .call-me {
          display: flex !important;
          line-height: 18px;
          font-size: 18px;
          text-align: left;
          margin-bottom: 30px;
          color: white;
        }
        p {
          /* position: relative;
          right: -1rem; */
        }
      }
    }
    .service-container {
      .footer-detail {
        .footer-link-title {
          display: block;
          width: 100%;
          font-weight: 700;
          font-size: 26px;
          color: #f4f4f4;
          margin-bottom: 30px;
        }
        .list {
          display: flex;
          gap: 2rem;
          ul {
            margin-top: 0;
            margin-bottom: 1rem;
            padding-left: 0;
          }
          li {
            list-style: none;
            width: 100%;
            /* text-align: left; */
            left: 0;
          }
          a {
            font-size: 16px;
            margin-bottom: 12px;
            font-weight: bold;
            /* text-align: left; */
            left: 0;
            text-transform: capitalize;
            color: white;
            text-decoration: none;
            line-height: 2rem;
          }
        }
      }
    }
    .project-container {
      .footer-detail {
        .footer-link-title {
          display: block;
          width: 100%;
          font-weight: 700;
          font-size: 26px;
          color: #f4f4f4;
          margin-bottom: 30px;
        }
        ul {
          margin-top: 0;
          margin-bottom: 1rem;
          padding-left: 0;
        }
        li {
          list-style: none;
          width: 100%;
          /* text-align: left; */
          left: 0;
        }
        a {
          font-size: 16px;
          margin-bottom: 12px;
          font-weight: bold;
          text-align: left;
          text-transform: capitalize;
          color: white;
          text-decoration: none;
          line-height: 2rem;
        }
      }
    }
    @media (max-width: 1200px) {
      max-width: 100%;
      padding: 0 50px;
      margin: 0 auto;
      justify-content: space-between;
      gap: 0;
      .address-container {
        flex: 0 0 35%;
        max-width: 35%;
      }
      .service-container {
        flex: 0 0 40%;
        max-width: 40%;
      }
      .project-container {
        flex: 0 0 25%;
        max-width: 25%;
      }
    }

    @media (max-width: 768px) {
      .address-container {
        .footer-detail {
          .property {
            font-size: 15px;
          }
          .add {
            font-size: 15px;
          }
          .email {
            font-size: 14px;
          }
          .call-me {
            font-size: 15px;
          }
        }
      }
      .service-container {
        .footer-detail {
          .footer-link-title {
            font-size: 22px;
          }
          .list {
            li {
              a {
                font-size: 14px;
              }
            }
          }
        }
      }
      .project-container {
        .footer-detail {
          .footer-link-title {
            font-size: 22px;
          }
          a {
            font-size: 14px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    max-width: 100%;
    padding: 50px 0;
    margin: 0 auto;
    justify-content: space-between;

    .footer-container {
      .address-container {
        flex: 0 0 100%;
        max-width: 100%;
        position: relative;
        top: 0;
        width: 100%;
        text-align: center;
        .footer-detail {
          .property {
            color: white;
            font-size: 13px;
            text-align: center;
          }
          .add {
            display: flex;
            line-height: 2;
            font-size: 15px;
            position: relative;
            left: 0;
            top: 0;
            justify-content: center;
            width: 100%;
            text-align: center;
          }
          .email {
            position: relative;
            gap: 0.5rem;
            top: 0;
            font-size: 15px;
            justify-content: center;
            text-align: center;
          }
          .call-me {
            display: flex !important;
            line-height: 18px;
            gap: 0.5rem;
            font-size: 15px;
            color: white;
            justify-content: center;
            position: relative;
            left: 0;
            top: 0;
            text-align: center;
          }
        }
      }
      .service-container {
        flex: 0 0 100%;
        max-width: 100%;
        position: relative;
        top: 0;
        width: 100%;
        .footer-detail {
          .footer-link-title {
            display: block;
            width: 100%;
            font-weight: 700;
            font-size: 22px;
            color: #f4f4f4;
            text-align: center;
          }
          .list {
            display: flex;
            flex-direction: column;
            li {
              a {
                font-size: 14px;
                margin-bottom: 12px;
                font-weight: bold;
                text-transform: capitalize;
                color: white;
                text-decoration: none;
                line-height: 1.5;
                width: 100%;
                text-align: center;
                display: block;
              }
            }
          }
        }
      }
      .project-container {
        flex: 0 0 100%;
        max-width: 100%;
        position: relative;
        top: 0;
        text-align: center;
        width: 100%;
        .footer-detail {
          .footer-link-title {
            display: block;
            width: 100%;
            font-weight: 700;
            font-size: 22px;
            color: #f4f4f4;
            margin-bottom: 10px;
          }
          a {
            font-size: 14px;
            width: 100%;
            text-align: center;
            line-height: 1.5;
            display: block;
          }
        }
      }
    }
  }
`;

const LowerFooter = styled.div`
  background-color: #cd362d;
  text-align: center;
  padding: 4rem;
  .copy {
    color: white;
    font-size: 14px;
    font-weight: 500;
  }
`;
