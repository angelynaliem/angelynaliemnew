import React from "react";

//Import styling
import styled from "styled-components";
import {
  AboutStyled,
  DescStyled,
  ImageStyled,
} from "../pages/styles";

//Import icon images to be used in this component.
import diceOne from "../img/diceOne.svg";
import diceTwo from "../img/diceTwo.svg";
import diceThree from "../img/diceThree.svg";
import diceFour from "../img/diceFour.svg";

//Import images
import projectPhoto from "../img/projectPhoto.jpg";

const Projects = () => {
  return (
    <ProjectsStyled>
      <ProjectDescStyled>
        <h2>
          Check out my <span>real-life</span> projects.
        </h2>
        <Icons>
          <Icon>
            <div className="iconImage">
              <img className="diceOne" src={diceOne} alt="dice one" />
              <h3>Cubscout (coming soon)</h3>
            </div>
            <p>A Program of Boy Scouts of America.</p>
          </Icon>
          <Icon>
            <div className="iconImage">
              <img className="diceTwo" src={diceTwo} alt="dice two" />
              <h3>Beall ES (coming soon)</h3>
            </div>
            <p>An Elementary School in MoCo, Maryland.</p>
          </Icon>
          <Icon>
            <div className="iconImage">
              <img className="diceThree" src={diceThree} alt="dice three" />
              <h3>Fu Xing (coming soon)</h3>
            </div>
            <p>A Chinese language school in Makassar, Indonesia.</p>
          </Icon>
          <Icon>
            <div className="iconImage">
              <img className="diceFour" src={diceFour} alt="dice four" />
              <h3>Project Four (coming soon)</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Icon>
        </Icons>
      </ProjectDescStyled>
      <ProjectImageStyled>
        <img src={projectPhoto} alt="a woman working on laptop" />
      </ProjectImageStyled>
    </ProjectsStyled>
  );
};

const ProjectsStyled = styled(AboutStyled)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 90%;
    padding: 2rem 0rem 4rem 0rem;
    text-align: center;
  }
  @media (max-width: 1300px) {

    h3 {
      font-size: 2rem;
    }

    p {
      width: 100%;
    }
  }
`;

const ProjectDescStyled = styled(DescStyled)``;

const Icons = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1300px) {
    justify-content: center;

  }
`;

const Icon = styled.div`
  flex-basis: 20rem;

  .iconImage {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
      border-radius: 1rem;
    }

    img {
      width: 15%;
      height: 10vh;
      margin-left: 1rem;
    }

    .diceOne {
      animation: dice 1.5s ease infinite alternate;
    }
    .diceTwo {
      animation: dice 1.5s ease infinite alternate 0.5s;
    }
    .diceThree {
      animation: dice 1.5s ease infinite alternate 1s;
    }
    .diceFour {
      animation: dice 1.5s ease infinite alternate 1.5s;
    }

    @keyframes dice {
      from {
        transform: translateY(0%);
      }
      to {
        transform: translateY(-60%);
      }
    }
  }
`;

const ProjectImageStyled = styled(ImageStyled)``;

export default Projects;
