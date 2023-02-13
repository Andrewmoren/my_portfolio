import React from "react";
import styled from "styled-components";
import home from "../assets/home.png";
import play from "../assets/play.png";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <Section id="home">
      <Navbar />
      <div className="home">
        <div className="content">
          <div className="title">
            <h1>Digital Crafters</h1>
          </div>
          <div className="subTitle">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              accusantium nobis ad architecto ipsa, totam eveniet! Sequi
              aspernatur nihil illum voluptatum.
            </p>
          </div>
          <img src={play} alt="Play" />
        </div>
      </div>
      <div className="info">
        <div className="grid">
          <div className="col">
            <strong>Agency</strong>
            <p>Digital Crafters</p>
          </div>
          <div className="col">
            <strong>Email</strong>
            <p>example@gmail.com</p>
          </div>
          <div className="col">
            <strong>Mobile</strong>
            <p>+23423423325</p>
          </div>
          <div className="col">
            <strong>Address</strong>
            <p>Some Street India</p>
          </div>
          <div className="col">
            <strong>Services</strong>
            <p>Corporate identity Full cooding</p>
            <p>Full cooding</p>
          </div>
          <div className="col">
            <strong>Working Hours</strong>
            <p>Monday to Friday 08:00</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  background-image: url(${home});
  background-size: cover;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  .home {
    height: 100%;
    .content {
      height: 100%;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      margin-top: 8rem;
      padding-left: 18rem;
      width: 60%;
      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }
      .subTitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
        }
      }
    }
  }
  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    color: white;
    padding: 4rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
    }
  }
`;

export default Home;
