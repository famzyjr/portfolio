import "aos/dist/aos.css";
import "./portfolio.css";
import AOS from "aos";
import Github from "../../assets/GithubSearch.JPG";
import Img1 from "../../assets/MinuteApp.PNG";
import Img2 from "../../assets/Home.JPG";
import Img3 from "../../assets/wages.PNG";
import Img6 from "../../assets/IgClone.JPG";
import React from "react";
import Blog from "../../assets/Blog.png"
import wordle from "../../assets/wordle.JPG";

// ..
AOS.init({
  duration: 2000,
});

const data = [
  {
    id: 1,
    img: Blog ,
    title: "Blog",
    github: "https://github.com/famzyjr/Blog-.git",
    desc: "A blog website is a platform where individuals or organizations can share their thoughts, ideas, experiences, and information with an online audience. ",
    demo: "https://blog-two-mauve-79.vercel.app/"
  },
  {
    id: 2,
    img: Img2,
    title: "Binary Social Media Application UI",
    // github: "https://github.com/BINARY-TECH001/SocialMedia-UI",
    desc: "A Web Social media User Interface designed using React.Js. It contains the authentication pages (Login & Register), Story/Home page, comment, like, post and profile page.",
    demo: "#"
  },
  {
    id: 3,
    img: Img3,
    title: "Employees wages Calculator & Report",
    // github: "https://github.com//BINARY-TECH001/",
    desc: "A web based application designed using PHP that helps manage employee wages and calculations.",
    demo: "#"
  },
 
  
  
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> My Recent Works </h5>
      <h2> Portfolio </h2>
      <div className="underline"></div>

      <div className="container portfolio__container">
        {
          data.map(({id, img, title, github, demo, desc})=>{
            return(
          <article className="portfolio__item" key={id} data-aos="flip-left">
          <div className="portfolio__item-image">
            <img src={img} alt={title} />
          </div>
          <h3> {title} </h3>
          <p className='porfolio__desc'> {desc}</p>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target="_blank" rel='noopener noreferrer'>Github</a>
          <a href={demo} className='btn btn-primary' target="_blank" rel='noopener noreferrer'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio