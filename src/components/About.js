import React from "react";
import { Link } from "react-router-dom";

//Import styling
import styled from "styled-components";
import {
  AboutStyled,
  DescStyled,
  ImageStyled,
  HideStyled,
} from "../pages/styles";

//Import the images used in this component
import homePhoto from "../img/homePhoto.jpg";

//Import framer motion
import { motion } from "framer-motion";
import { subjectAnim, fadeAway, imageAnim } from "../animation";
import LineAnim from "./LineAnim";

const About = () => {
  return (
    <AboutStyled>
      <DescStyled>
        <motion.div className="subject">
          <HideStyled>
            <motion.h2 variants={subjectAnim}>So glad you're here.</motion.h2>
          </HideStyled>
          <HideStyled>
            <motion.h2 variants={subjectAnim}>
              Welcome to <span>Angelyn's</span> portfolio.
            </motion.h2>
          </HideStyled>
        </motion.div>
        <motion.p variants={fadeAway}>
          Here, you'll learn more about me and some of the projects I've coded
          from scratch.
        </motion.p>
        <Link to="/projects">
          <motion.button href="/projects" variants={fadeAway}>
            Learn more
          </motion.button>
        </Link>
      </DescStyled>
      <ImageStyled>
        <motion.img
          layout
          variants={imageAnim}
          src={homePhoto}
          alt="a woman coding"
        />
      </ImageStyled>
      <LineAnim id="LineAnimId" />
    </AboutStyled>
  );
};

//Styling is moved to independent file so that it can be used in other components.

export default About;
