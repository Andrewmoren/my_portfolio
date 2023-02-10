import React, { useState } from "react";

import styled from "styled-components";
import logo from "../assets/logo.png";
import { GiHamBurgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <Nav>
      <div className="brand__container">
        <a href="#">
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
        </a>
        <div className="toggle"></div>
      </div>
      <div className="links">
        <ul>
          <li className="active">
            <a href="#home">Home</a>
          </li>
          <li className="active">
            <a href="#services">Services</a>
          </li>
          <li className="active">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="active">
            <a href="#blog">Blog</a>
          </li>
          <li className="active">
            <a href="#skills">Skills</a>
          </li>
          <li className="active">
            <a href="#skills">Contact</a>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 12rem;
  padding-top: 2rem;
  color: white;
  .brand__container {
    margin: 0 2rem;
    .toggle {
      display: none;
    }
  }
  .links {
    ul {
      list-style-type: none;
      display: flex;
      gap: 3rem;
      li {
        a {
          color: white;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1rem;
        }
      }
    }
  }
`;

export default Navbar;
