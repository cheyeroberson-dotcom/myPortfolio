import React, { useLayoutEffect } from 'react'
import './Projects.scss';
import PortfolioImg from '../images/web-dev-portfolio.png'
import Proj1Before from '../images/dominicks1-before.jpg'
import Proj1After from '../images/dominicks-after.jpg'
import Proj2Before from '../images/brac-before.jpg'
import Proj2After from '../images/brac-after.jpg'
import Proj3Before from '../images/Old-BCM-Media-img.png'
import Proj3After from '../images/bcm-media-after.jpg'





const Projects = () => {

  useLayoutEffect(() => {

    const projectsUpItems = document.querySelectorAll('.projects-up-slide');

    const projectsUpOptions = {
        threshold: .2,
        rootMargin: '0px -100px'
    };

    const projectsUpOnScroll = new IntersectionObserver(function(entries, projectsUpOnScroll) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('projects-animate-up');
                projectsUpOnScroll.unobserve(entry.target);
            }
        })
    }, projectsUpOptions);

    projectsUpItems.forEach(projectsUpItem => {
        projectsUpOnScroll.observe(projectsUpItem);
    })

});


    return (
      <div id='projects' className='projects'>
          <h1 className='projects__header projects-up-slide'>Projects:</h1>
          <div className='projects__long-bg-div'>
          </div>


          {/* PORTFOLIO PROJECT DISPLAY */}
          <div className='portfolio projects-up-slide'>

            <div className='portfolio__bg'>
            <img className='portfolio__bg__img' src={PortfolioImg} alt='software developer portfolio'/>
            </div>
            <h2 className='portfolio__title'><nobr>Portfolio</nobr></h2>
            <p className='portfolio__text'>
            Even though Create React App is overkill and libraries like Gatsby.js or your basic html, css, and vanilla javascript would be ideal, I wanted to touch up on my React development skills with this project after working in other libraries/frameworks for a bit. 
            </p>

            <ul className='portfolio__tech-stack projects-up-slide'>
              <h2 className='portfolio__tech-stack__header'><nobr>Tech Stack</nobr></h2>
              <li className='portfolio__tech-stack__item'>Figma</li>
              <li className='portfolio__tech-stack__item'>Photoshop/Pixlr</li>
              <li className='portfolio__tech-stack__item'>HTML</li>
              <li className='portfolio__tech-stack__item'>CSS/SASS</li>
              <li className='portfolio__tech-stack__item'>JavaScript</li>
              <li className='portfolio__tech-stack__item'>React</li>
            </ul>
          </div>



          {/* PROJECT #1 DISPLAY */}
          <div className='proj1 projects-up-slide'>
            <h1 className='proj1__before__header'>Before</h1>
            <div className='proj1__before__bg'>
              <img className='proj1__before__bg__img' src={Proj1Before} alt='Dominicks before design'/>
            </div>
            <p className='proj1__greater-sign'>&#60;</p>

            <h1 className='proj1__after__header'>After</h1>
            <div className='proj1__after__bg'>
            <img className='proj1__after__bg__img' src={Proj1After} alt='Dominicks after design'/>
            </div>
            <h2 className='proj1__title'>Dominick's</h2>
            <p className='proj1__text'>
              Unfussy, decades-old Italian eatery serving up family-style pastas and entrees to communal tables. This project was built in light of the pandemic to capture the energy of the restaurant for the web so that potential customers can order online or learn more about which entrees Dominick's has to offer.  
            </p>
          </div>
          <ul className='proj1__tech-stack projects-up-slide'>
            <h2 className='proj1__tech-stack__header'><nobr>Tech Stack</nobr></h2>
            <li className='proj1__tech-stack__item'>Figma</li>
            <li className='proj1__tech-stack__item'>Photoshop/Pixlr</li>
            <li className='proj1__tech-stack__item'>HTML</li>
            <li className='proj1__tech-stack__item'>CSS/SASS</li>
            <li className='proj1__tech-stack__item'>JavaScript</li>
            <li className='proj1__tech-stack__item'>Gatsby.js</li>
            <li className='proj1__tech-stack__item'>GraphQL</li>
            <li className='proj1__tech-stack__item'>Git/Github</li>
            <li className='proj1__tech-stack__item'>NPM</li>
          </ul>

                    {/* PROJECT #2 DISPLAY */}
          <div className='proj2 projects-up-slide'>
            <h1 className='proj2__before__header'>Before</h1>
            <div className='proj2__before__bg'>
              <img className='proj2__before__bg__img' src={Proj2Before} alt='BRAC before design'/>
            </div>
            <p className='proj2__greater-sign'>&#60;</p>

            <h1 className='proj2__after__header'>After</h1>
            <a href='https://reverent-banach-13541c.netlify.app/' className='proj2__after__bg'>
            <img className='proj2__after__bg__img' src={Proj2After} alt='BRAC before design'/>
            </a>
            <h2 className='proj2__title'>BRAC</h2>
            <p className='proj2__text'>
              Bronx River Art Center (BRAC) is a non-profit organization that provides a forum for artists and youth to transform creativity into vision. The website has become dense and difficult to navigate. The new version is meant to be easily and enjoyably navigated by its target users including log-in/log-out features. <span className='not-responsive'>NOT YET FULLY RESPONSIVE</span>
            </p>
          </div>
          <ul className='proj2__tech-stack projects-up-slide'>
            <h2 className='proj2__tech-stack__header'><nobr>Tech Stack</nobr></h2>
            <li className='proj2__tech-stack__item item-1'>Figma</li>
            <li className='proj2__tech-stack__item'>Photoshop/Pixlr</li>
            <li className='proj2__tech-stack__item'>HTML</li>
            <li className='proj2__tech-stack__item'>CSS/SASS</li>
            <li className='proj2__tech-stack__item'>JavaScript</li>
            <li className='proj2__tech-stack__item'>Gatsby.js</li>
            <li className='proj2__tech-stack__item'>GraphQL</li>
            <li className='proj2__tech-stack__item'>Git/Github</li>
            <li className='proj2__tech-stack__item'>NPM</li>
            <li className='proj2__tech-stack__item'>Auth0</li>
          </ul>

                              {/* PROJECT #3 DISPLAY */}
          <div className='proj3 projects-up-slide'>
            <h1 className='proj3__before__header'>Before</h1>
            <div className='proj3__before__bg'>
              <img className='proj3__before__bg__img' src={Proj3Before} alt='BRAC before design'/>
            </div>
            <p className='proj3__greater-sign'>&#60;</p>

            <h1 className='proj3__after__header'>After</h1>
            <a href='http://www.bcmmedia.biz/' className='proj3__after__bg'>
            <img className='proj3__after__bg__img' src={Proj3After} alt='BRAC before design'/>
            </a>
            <h2 className='proj3__title'><nobr>BCM Media</nobr></h2>
            <p className='proj3__text'>
              BCM Media, an advertising firm in Darien, CT provides strategic media planning and buying services. The introductory version of the website was text heavy. The updated version focuses on small easily consumable paragraphs and plenty of images while retaining the original branding of the business. 
            </p>
          </div>
          <ul className='proj3__tech-stack projects-up-slide'>
            <h2 className='proj3__tech-stack__header'><nobr>Tech Stack</nobr></h2>
            <li className='proj3__tech-stack__item proj3__tech-stack__item--1'>Photoshop/Pixlr</li>
            <li className='proj3__tech-stack__item 
            proj3__tech-stack__item--2'>CSS</li>
            <li className='proj3__tech-stack__item 
            proj3__tech-stack__item--3'>WordPress</li>
            <li className='proj3__tech-stack__item 
            proj3__tech-stack__item--4'>WAMP&nbsp;Server</li>
          </ul>
       </div>
    );
  }
  
  export default Projects;
  
