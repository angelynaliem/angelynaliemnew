
import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

//Import images
import sortDown from "../img/sort-down-solid.svg";

const AboutMeToggle = ({ children, category }) => {
    
    const [toggle, setToggle] = useState(false);

    return (
        <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
            <SubcategoryStyled layout>
                <motion.h4 layout>{category}</motion.h4>
                <img src={sortDown} alt="sort down arrow" />
            </SubcategoryStyled>
            {toggle ? children : ""}
            <div className="question-line"></div>
        </motion.div>
    )
}

const SubcategoryStyled = styled(motion.div)`
display: flex;
justify-content: space-between;
img {
  margin-right: 1rem;
  width: 1%;
}

@media (max-width: 1300px) {
    img {
        width: 2.5%;
    }
}
`;



export default AboutMeToggle;