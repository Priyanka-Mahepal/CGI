import React from "react";
import styled from "styled-components";
import contact from "../assests/contact_section_img.png";
import dot from "../assests/dots.png";

function Contact() {
  return (
    <Section id="contact">
      <div className="contact-container">
        <div className="content-box">
          <h3 className="small-title">Have Questions?</h3>
          <h2 className="main-title">Feel free to inquire!</h2>
          <form className="content-from">
            <div className="field">
              <input type="text" placeholder="Name" />
            </div>

            <div className="field">
              <input type="text" placeholder="Email" />
            </div>

            <div className="field">
              <input type="text" placeholder="Phone" />
            </div>
            <div className="field">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="field">
              <textarea placeholder="Message"></textarea>
            </div>

            <div className="button">
              <div className="btn">Get Free Quote</div>
            </div>
          </form>
        </div>
        <div className="img-sec">
          <div className="common-image-box">
            <span className="main-img">
              <img src={contact} alt="Contact" className="img-fluid" />
            </span>
            <span className="overlay-img">
              <img src={dot} alt="dot" className="dots" />
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Contact;

const Section = styled.section`
  padding: 85px 0 10px;
  .contact-container {
    width: 100%;
    max-width: 1199px;
    margin: 0 auto;
    display: flex;
    .content-box {
      padding-left: 0;
      .small-title {
        color: #f09733 !important;
        text-align: left;
        font-size: 30px;
        font-weight: 600;
        text-transform: capitalize;
      }

      .main-title {
        font-size: 46px;
        font-weight: 600;
        color: #cd362d;
        line-height: 4rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        font-family: "Archive";
      }
      .content-from {
        display: block;
        margin-right: 15px;
        .field {
          margin-bottom: 30px;
          display: flex;
          display: inline-block;
          padding-right: 2rem;
        }
        input[type="text"] {
          border: 1px solid #d1d1d1;
          border-style: solid;
          background-color: #fff;
          padding: 23px 46px 24px;
          height: 55px;
          width: 100%;
          outline: none;
          transition: 0.3s ease-in-out;
          &:hover {
            border: 1px solid #cd362d;
          }
        }
        textarea {
          width: 560px !important;
          height: 117px;
          border: 1px solid #d1d1d1;
          border-style: solid;
          background-color: #fff;
          padding: 23px 46px 24px;
          margin: 0;
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
          outline: none;
          transition: 0.3s ease-in-out;
          &:hover {
            border: 1px solid #cd362d;
          }
        }
        .button {
          background-color: #f09733;
          &:hover {
            background-color: #cd362d;
          }
          position: relative;
          width: 69%;
          padding-right: 15px;
          padding-left: 15px;
          .btn {
            color: #fefcfb;
            font-size: 20px;
            font-weight: 600;
            width: 100%;
            padding: 25px;
            position: relative;
            text-align: center;
          }
        }
      }
    }
    .img-sec {
      max-width: 50%;
      .common-image-box {
        position: relative;
        left: -13rem;
      }
      .main-img {
        display: inline-block;
        .img-fluid {
          max-width: 132%;
        }
      }
      .overlay-img {
        position: relative;
        display: inline-block;
        z-index: -1;
        bottom: 7rem;
        right: -23rem;

        img.dots {
          max-width: 100%;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .contact-container {
      .content-box {
        .main-title {
          font-size: 40px;
        }
        .content-from {
          display: -webkit-box !important;
          display: flex !important;
          flex-wrap: wrap;
          justify-content: space-between;
          .field {
            padding-right: 0;
          }
          input[type="text"] {
            width: 227px;
          }
          textarea {
            width: 485px !important;
            height: 99px;
          }
        }
      }
    }
  }
  @media (max-width: 1200px) {
    padding: 85px 0 80px;
    display: inline-block;
    width: 100%;
    position: relative;
    max-width: 100%;
    .contact-container {
      max-width: 100%;
      margin: 0 auto;
      padding: 0 15px;
      .content-box {
        flex: 0 0 50%;
        max-width: 50%;
        .content-from {
          display: flex !important;
          flex-wrap: wrap;
          justify-content: space-between;
          .field {
            padding-right: 0;
          }
          textarea {
            width: 484 !important;
            height: 99px;
          }
          .button {
            width: 100%;
          }
        }
      }
      .img-sec {
        flex: 0 0 50%;
        max-width: 50%;
        .main-img {
          width: 85%;
          margin-left: 40px;
          .img-fluid {
            max-width: 100%;
            object-fit: contain;
          }
        }
        .common-image-box {
          left: 0;
          width: 100%;
        }
        .overlay-img {
          right: 0;
          bottom: -40px;
          position: absolute;
          img.dots {
            max-width: 100px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .contact-container {
      .content-box {
        .main-title {
          font-size: 29px;
        }
        .content-from {
          display: -webkit-box !important;
          display: flex !important;
          flex-wrap: wrap;
          justify-content: space-between;
          .field {
            padding-right: 0;
          }
          input[type="text"] {
            width: 164px;
          }
          textarea {
            width: 352px !important;
            height: 99px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding: 36px 15px 28px;
    max-width: 100%;
    position: relative;
    width: 100%;
    .contact-container {
      width: 100%;
      flex-wrap: wrap;
      flex-direction: column;
      .content-box {
        flex: 0 0 100%;
        max-width: 100%;
        .small-title {
          text-align: center;
        }
        .main-title {
          text-align: center;
          font-size: 30px;
          line-height: 38px;
        }
        .content-from {
          .field {
            padding: 7px;
            width: 100%;
          }
          input[type="text"] {
            width: 100%;
          }
          textarea {
            width: 100% !important;
            height: 99px;
          }
          .button {
            bottom: 2px;
            .btn {
              padding: 13px;
            }
          }
        }
      }
      .img-sec {
        .main-img {
          margin-left: 54%;
          margin-top: 25px;
        }
        .common-image-box {
          left: -24px;
          width: 100%;
          top: 0;
        }
        .overlay-img {
          right: -52%;
          bottom: -19px;
          position: absolute;
        }
      }
    }
  }
`;
