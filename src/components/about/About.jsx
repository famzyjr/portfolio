import "aos/dist/aos.css";
import "./about.css";
import AOS from "aos";
import famzy from "../famzy.jpg"
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { VscFolderLibrary } from "react-icons/vsc";

// ..
AOS.init({
  duration: 2000,
});

const about = () => {
  return (
    <section id="about" data-aos="zoom-in-up">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="underline"></div>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={famzy} alt="Abdulrafiu Mubarak" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years </small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5> Clients </h5>
              <small> 10+ Worldwide </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5> Projects </h5>
              <small> 20+ Completed </small>
            </article>
          </div>
          <p>
            I'm a skilled software developer with experience in Javascript and
            expertise in framework like React I'm a quick learner and
            collaborate closely with clients to create efficient, scalable,
            user-friendly solutions that solve real-world problems. I love being
            part of a solution driven tech community. I love to teach others
            about web development and I've made a lot of projects with multiple
            web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default about;
