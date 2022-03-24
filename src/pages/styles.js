import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutStyled = styled.div`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
color: white;

@media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
    
}
`;

export const DescStyled = styled.div`
flex: 1;
padding-right: 5rem;
z-index: 200;

h2 {
    font-weight: lighter;
   
}

@media (max-width: 1300px) {
    padding: 0;
    button {
        margin: 1rem 0rem 5rem 0rem;
    }

    h2 {
    font-weight: lighter;
    margin-bottom: 2rem;
    margin-top: 2rem;
}

p {
    font-size: 2rem;
}
    
}
`;

export const ImageStyled = styled.div`
z-index: 2;
flex: 1;
overflow: hidden;

img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
}

@media (max-width: 1300px) {

    img {
        height: 60vh;
    }
`;

export const HideStyled = styled.div`
overflow: hidden;
`;
