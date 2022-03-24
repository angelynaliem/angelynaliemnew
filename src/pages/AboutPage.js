import React from "react";

//Import all the components that will go under the Home page.
import About from "../components/About";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";

//Animation
import { motion } from "framer-motion";
import { pageAnim } from "../animation";

//Import Scrolling Page Transition
import ScrollTransition from "../components/ScrollTransition";

const AboutPage = () => {
  return (
    <motion.div variants={pageAnim} initial="hidden" animate="show" exit="exit">
      <About />
      <Projects />
      <AboutMe />
      <ScrollTransition />
    </motion.div>
  );
};

export default AboutPage;
