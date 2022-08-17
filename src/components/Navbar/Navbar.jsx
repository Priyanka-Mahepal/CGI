import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  return (
    <>
      <Nav>
        <div className="brand">
          <h2 className="prop"> MM PROPERTY Services LLC.</h2>

          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services"> Services</a>
            </li>
            <li>
              <a href="#gallery"> Gallery</a>
            </li>
            <li>
              <a href="#contact"> Contact </a>
            </li>
          </ul>
        </div>
      </Nav>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <ul>
          <li>
            <a
              href="#home"
              className="active"
              onClick={() => setNavbarState(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setNavbarState(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setNavbarState(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={() => setNavbarState(false)}>
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setNavbarState(false)}>
              Contact
            </a>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}

export default Navbar;

const Nav = styled.nav`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  min-height: 80px;
  padding: 10px;

  .brand {
    color: #fc4958;
    flex: 0 0 15%;
    max-width: 15%;
    .prop {
      cursor: pointer;
      font-size: 22px;
    }
    .toggle {
      display: none;
    }
  }

  .links {
    flex: 0 0 60%;
    max-width: 60%;
    ul {
      display: flex;
      list-style-type: none;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        a {
          text-decoration: none;
          color: black;
          font-weight: 600;
          font-size: 15px;
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          transition: 0.3s ease-in-out;
          &:hover {
            color: #fc4958;
          }
        }
        .active {
          color: #fc4958;
        }
      }
    }
  }
  @media screen and (max-width: 1200px){
    .brand{
      .prop{
        font-size: 20px;
      }
    }
  }
  @media screen and (max-width: 768px){
    .brand{
      .prop{
        font-size: 15px;
      }
    }
    .links{
      ul{
        li{
          a{
            font-size: 13px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) and (orientation: landscape) {
    .brand {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      top: 0;
      flex: 0 0 28%;
      max-width: 28%;
      .prop {
        font-size: 18px;
      }
      .toggle {
        display: block;
        z-index: 12;
        position: absolute;
        right: 15px;
        top: 35px;
      }
    }
    .links {
      display: none;
    }
  }
  @media screen and (max-width: 767px) and (orientation: portrait) {
    .brand {
      flex: 0 0 40%;
      max-width: 40%;
      .prop {
        font-size: 15px;
      }
      .toggle {
        display: block;
        z-index: 12;
        position: absolute;
        right: 15px;
        top: 35px;
      }
    }
    .links {
      display: none;
    }
  }
`;
const ResponsiveNav = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  background-color: white;
  height: 100vh;
  width: ${({ state }) => (state ? "40%" : "0%")};
  transition: 0.3s ease-in-out;
  display: flex;
  ul {
    list-style-type: none;
    width: 100%;
    margin-top: 3rem;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: #f9c74f;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #fc4958;
        }
      }
      &:first-of-type {
        a {
          color: #fc4958;
          font-weight: 900;
        }
      }
    }
  }
`;
