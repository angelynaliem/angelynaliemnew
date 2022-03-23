
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
                <img src={sortDown} alt="sort down arrow" style={{ width: "1%" }} />
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
}
`;



export default AboutMeToggle;