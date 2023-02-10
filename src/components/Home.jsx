import React from "react";
import styled from "styled-components";
import home from "../assets/home.png";
import play from "../assets/play.png";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <Section id="home">
      <Navbar />
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
