import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const LineAnim = () => {
  return (
    <LineAnimStyled layout width="1000" height="900" viewBox="0 0 628 581" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_3_30)">
    <motion.path initial={{ pathLength: 0, pathOffset: 1 }}
                  animate={{ pathLength: 1, pathOffset: 0 }}
                  transition={{ duration: 1 }} d="M417 5C-26 284 -216 790 409 460C909 196 399.333 68.6667 82 38" stroke="#F3960A" stroke-opacity="0.5" stroke-width="10" shape-rendering="crispEdges"/>
    </g>
    <defs>
    <filter id="filter0_d_3_30" x="0.113647" y="0.769165" width="627.737" height="580.195" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_30"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_30" result="shape"/>
    </filter>
    </defs>
    </LineAnimStyled>
    
  );
};

const LineAnimStyled = styled(motion.svg)`
  position: absolute;
  top: 0;
  left: 0;

  z-index: 200;

`;

export default LineAnim;




