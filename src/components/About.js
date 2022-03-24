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
          {/* <HideStyled>
                        <motion.h2>Enjoy!</motion.h2>
                    </HideStyled> */}
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

// const AboutStyled = styled.div`
// min-height: 90vh;
// display: flex;
// align-items: center;
// justify-content: space-between;
// padding: 5rem 10rem;
// color: white;
// `;

// const DescStyled = styled.div`
// flex: 1;
// padding-right: 5rem;

// h2 {
//     font-weight: lighter;
// }
// `;

// const ImageStyled = styled.div`
// flex: 1;
// overflow: hidden;

// img {
//     width: 100%;
//     height: 80vh;
//     object-fit: cover;
// }
// `;

// const HideStyled = styled.div`
// overflow: hidden;
// `;

export default About;
