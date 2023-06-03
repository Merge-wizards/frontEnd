/*import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Carousel from "react-bootstrap/Carousel";

import img1 from "../../assets/background1.jpg";
import img2 from "../../assets/background2.jpg";
import img3 from "../../assets/background3.jpg";
import "./TeamHero.css";

const TeamHero = () => {
 
    return (
        <section className="section">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Home is where you are 'Player 1'.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Eat. Sleep. Game. Repeat.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>
                            I'm not a player. I'm a gamer. Players get chicks. I
                            get achievements.
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};
export default TeamHero;*/

import React from 'react';
import styled from 'styled-components';

import letsgetintouch from '../../assets/letsgetintouch1.png';

const TeamHero = () => {
  return (
    <HeroContainer className='h-50'>
      <TeamPhoto src={letsgetintouch} alt="Team Photo" />
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  width: 100%;
  height: 50vh; 
`;

const TeamPhoto = styled.img`
  width:100%;
  height: 60vh;
  object-fit: cover;
`;

export default TeamHero;






