import React, { useState } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

//import link to enable routes
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  // const [navTransparency, setNavTransparency] = useState(false);

  // const changeNavTransparency = () => {
  //     if (window.scrollY >= 80) {
  //         setNavTransparency(true);
  //     } else {
  //         setNavTransparency(false);
  //     }
  // }

  // window.addEventListener("scroll", changeNavTransparency);

  return (
    // <NavStyled className={navTransparency ? "" : "navTrans"}>
    <NavStyled>
      <h1>
        <Link id="Logo" to="/">
          _Angelyn_
        </Link>
      </h1>
      <ul>
        <li>
          <Link id="NavLinks" to="/">
            About
          </Link>
          <HoverLine
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>

        <li>
          <Link id="NavLinks" to="/projects">
            Projects
          </Link>
          <HoverLine
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/projects" ? "50%" : "0%" }}
          />
        </li>

        <li>
          <Link id="NavLinks" to="/contact">
            Contact
          </Link>
          <HoverLine
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </NavStyled>
  );
};

const NavStyled = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  position: -webkit-sticky;
  z-index: 100;

  a {
    color: white;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #f08607;
    }
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 5rem;
    position: relative;
  }

  #Logo {
    font-size: 2.5rem;
    font-weight: lighter;
    font-family: "Fredericka the Great", cursive;
  }

  #NavLinks {
    font-size: 1.5rem;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 1rem;

    #Logo {
      /* margin: 2rem; //cannot add margin/padding to 'a' tag */
      display: inline-block; //for inline element, cannot add padding top/bottom
      margin: 1rem;
      font-size: 4rem;
    }

    #NavLinks {
      font-size: 2rem;
      padding: 3rem;
    }

    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;

      li {
        padding: 0;
      }
    }
  }

  /* .navTrans {
    opacity: 0.2;
} */
`;

const HoverLine = styled(motion.div)`
  height: 0.3rem;
  width: 0%;
  background: #f08607;
  position: absolute;
  bottom: -80%;
  left: 60%;

  @media (max-width: 1300px) {
    left: 30%;
  }
`;

export default Nav;
