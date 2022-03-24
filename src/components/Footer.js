import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <h5>Angelyn &copy; 2022</h5>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/angelynaliem" target="_blank">
            <i class="fa-brands fa-linkedin-in fa-2x"></i>
          </a>
          <a href="https://www.twitter.com/angelynliem" target="_blank">
            <i class="fa-brands fa-twitter fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/angelynaliem_" target="_blank">
            <i class="fa-brands fa-instagram fa-2x"></i>
          </a>
        </li>
      </ul>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  color: white;
  background: #282828;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
  width: 100%;
  margin: auto;
  min-height: 10vh;
  flex-wrap: wrap;

  h5 {
    font-size: 1.5rem;
  }

  ul {
    list-style: none;
  }

  a {
    margin-right: 2rem;
    text-decoration: none;
    color: white;
    cursor: pointer;

    &:hover {
      color: #f08607;
    }
  }
`;

export default Footer;
