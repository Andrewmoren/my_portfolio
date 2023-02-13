import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import play from "../assets/play.png";

import Title from "./Title";

const Services = () => {
  const data = [
    {
      type: "Design",
      text: "dsfsfsfferfsf sdfs ds sdf sdddsfsdfsd fsdf sd sdf sf sdf sf ",
      image: service1,
    },
    {
      type: "Code",
      text: "dsfsfsfferfsf sdfs ds sdf sdddsfsdfsd fsdf sd sdf sf sdf sf ",
      image: service2,
    },
    {
      type: "Support",
      text: "dsfsfsfferfsf sdfs ds sdf sdddsfsdfsd fsdf sd sdf sf sdf sf ",
      image: service3,
    },
  ];
  return (
    <Section id="services">
      <Title value="Services" />
      <div className="services">
        {data.map(({ type, text, image, index }) => {
          return (
            <div className="services__service">
              <div className="services__service__image">
                <img src={image} alt="Services" />
              </div>
              <div className="services__service__title">
                <span>0{index + 1}</span>
                <h2>{type}</h2>
              </div>
              <p className="services__service__description">{text}</p>
              <img src={play} alt="Play" />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

const Section = styled.section``;

export default Services;
