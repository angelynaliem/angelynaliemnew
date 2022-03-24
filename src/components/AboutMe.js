import React from "react";

//Import styling
import styled from "styled-components";
import { AboutStyled } from "../pages/styles.js";
import AboutMeToggle from "./AboutMeToggle";
import { AnimateSharedLayout } from "framer-motion";

const AboutMe = () => {
  return (
    <AboutMeStyled>
      <h2>
        Get to know <span>Angelyn</span>
      </h2>

      <AnimateSharedLayout>
        <AboutMeToggle category="Professional Experience">
          <div className="question">
            <div className="answer">
              <p>
                I spent 3 years at Berita Satu, a media company in Indonesia. I
                started out as a Management Trainee and was promoted to Social
                Media Manager a year later for helping turn its English-language
                newspaper's presence on Facebook into the largest
                English-language newspaper community on Facebook in Souteast
                Asia at the time. After that, I became a Project Manager and
                launched the company's first English-language media program for
                highschoolers. 2008-2011
              </p>
              <p>
                I also worked for almost 3 years at Global Entrepreneurship
                Program Indonesia, a U.S. State Department initiated
                not-for-profit organization to promote peace and
                entrepreneurship in developing countries. I started out as a
                Program Manager to help launch the organization's incubator
                space then was promoted to Executive Director a year later where
                I turned the organization into a more financially sustainable
                organization by increasing its annual revenue by 385% and making
                it the top "go-to" organization for those wanting to learn about
                entrepreneurship in Indonesia. 2013-2016
              </p>
            </div>
          </div>
        </AboutMeToggle>

        <AboutMeToggle category="Educational Experience">
          <div className="question">
            <div className="answer">
              <p>
                Master of Science in Social Enterprise Administration from
                Columbia University, NY. I obtained scholarships and financial
                aids from Pelita Harapan Foundation, YCAB Foundation, and P.E.O
                International. I interned at UNICEF and NYC Department of
                Education. 2011-2013
              </p>
              <p>
                Bachelor of Science in Education from Pelita Harapan University,
                Indonesia. Throughout my undergraduate years, I worked as an
                English Teacher at English First in Jakarta, Indonesia and
                Beijing, China. 2004-2008
              </p>
            </div>
          </div>
        </AboutMeToggle>

        <AboutMeToggle category="Software Engineering Background">
          <div className="question">
            <div className="answer">
              <p>
                I am a Grow With Google Scholarship Recipient for its Android
                Basics Nano Degree program at Udacity which I completed in 2018.
              </p>
              <p>
                I completed my Full Stack Web Development certificate from Bloom
                Institute of Technology, formerly known as Lambda School, in
                2021.
              </p>
            </div>
          </div>
        </AboutMeToggle>

        <AboutMeToggle category="Computer Programming Languages aka My Stack">
          <div className="question">
            <div className="answer">
              <p>
                Web Development: HTML, CSS, Java Script, React, Node, Python
              </p>
              <p>Android: Java, XML, Sqlite</p>
            </div>
          </div>
        </AboutMeToggle>
      </AnimateSharedLayout>
    </AboutMeStyled>
  );
};

const AboutMeStyled = styled(AboutStyled)`
  display: block;

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .question-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;

    p {
      padding: 1rem 0rem;
    }
  }
`;

export default AboutMe;
