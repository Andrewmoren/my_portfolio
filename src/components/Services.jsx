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

const Section = styled.section`
  min-height: 100vh;
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 100%;
    margin: 0 14rem;
    margin-top: 10rem;
    gap: 5rem;
    &__service {
      padding: 2rem;
      &:nth-of-type(3) {
        background-color: var(--primary-color);
        .services__service__title {
          span {
            color: white;
          }
        }
        .services__service__description {
          color: white;
        }
      }
      &__image {
        margin-bottom: 3rem;
      }
      &__title {
        span {
          color: var(--primary-color);
          font-weight: bolder;
        }
        h2 {
          font-size: 3rem;
          line-height: 2.5rem;
          margin-bottom: 5rem;
          color: var(--primary-color);
        }
      }
      &__description {
        color: var(--primary-color);
      }
    }
  }
`;

export default Services;
