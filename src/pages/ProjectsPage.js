import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//Import Scrolling Page Transition
import ScrollTransition from "../components/ScrollTransition";

//Import images
import cubscout from "../img/cubscout.jpg";
import elementarySchool from "../img/elementarySchool.jpg";
import chineseSchool from "../img/chineseSchool.jpg";

//Animation
import { motion } from "framer-motion";
import { pageAnim, fadeAway, imageAnim, lineAnim } from "../animation";

const ProjectsPage = () => {
  return (
    <ProjectsPageStyled
      variants={pageAnim}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <ProjectStyled>
        <motion.h2 variants={fadeAway}>Cubscout Project</motion.h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/">
          <motion.img variants={imageAnim} src={cubscout} alt="cubscout" />
        </Link>
      </ProjectStyled>
      <ProjectStyled>
        <motion.h2 variants={fadeAway}>Beall ES Project</motion.h2>
        <div className="line"></div>
        <Link to="/">
          <Constrain>
            <img src={elementarySchool} alt="elementary school" />
          </Constrain>
        </Link>
      </ProjectStyled>
      <ProjectStyled>
        <h2>Fu Xing Project</h2>
        <div className="line"></div>
        <Link to="/">
          <img src={chineseSchool} alt="chinese school" />
        </Link>
      </ProjectStyled>

      <ScrollTransition></ScrollTransition>
    </ProjectsPageStyled>
  );
};

const ProjectsPageStyled = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background: white;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;

const ProjectStyled = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #f08607;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Constrain = styled.div`
  overflow: hidden;
`;

export default ProjectsPage;
