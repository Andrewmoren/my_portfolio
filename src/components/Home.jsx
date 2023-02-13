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
            <strong></strong>
            <p></p>
          </div>
          <div className="col">
            <strong></strong>
            <p></p>
          </div>
          <div className="col">
            <strong></strong>
            <p></p>
          </div>
          <div className="col">
            <strong></strong>
            <p></p>
          </div>
          <div className="col">
            <strong></strong>
            <p></p>
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
`;

export default Home;
