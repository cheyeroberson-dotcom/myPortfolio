import React, { useLayoutEffect } from 'react'
import './MiniProjects.scss';
import TicTacToeImg from '../images/halloween-tictacttoegame.png'




const MiniProjects = () => {

  useLayoutEffect(() => {

    const miniProjectsUpItems = document.querySelectorAll('.mini-projects-up-slide');

    const miniProjectsUpOptions = {
        threshold: .2,
        rootMargin: '0px -100px'
    };

    const miniProjectsUpOnScroll = new IntersectionObserver(function(entries, miniProjectsUpOnScroll) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('mini-projects-animate-up');
                miniProjectsUpOnScroll.unobserve(entry.target);
            }
        })
    }, miniProjectsUpOptions);

    miniProjectsUpItems.forEach(miniProjectsUpItem => {
        miniProjectsUpOnScroll.observe(miniProjectsUpItem);
    })

});


    return (
      <div id='mini-projects' className='mini-projects'>
          <h1 className='mini-projects__header mini-projects-up-slide'><nobr>Mini Projects:</nobr></h1>
          <div className='mini-projects__long-bg-div'>
          </div>


          {/* MINI PROJECT #1 */}
          <div className='mini-project mini-projects-up-slide'>


            <a href='https://endofline4.github.io/halloween-tic-tac-toe/' className='mini-project__bg'>
                <img className='mini-project__bg__img' src={TicTacToeImg} alt='software developer portfolio'/>
            </a>
        
            <h2 className='mini-project__title'><nobr>Halloween Tic Tac Toe</nobr></h2>
            <p className='mini-project__text'>
            Halloween themed Tic Tac Toe game built with HTML, CSS, and Vanilla JavaScript to exercise logic writing and problem solving skills while having some fun. 
            </p>

            <ul className='mini-project__tech-stack projects-up-slide'>
              <h2 className='mini-project__tech-stack__header'><nobr>Tech Stack</nobr></h2>
              <li className='mini-project__tech-stack__item'>HTML</li>
              <li className='mini-project__tech-stack__item'>CSS/SASS</li>
              <li className='mini-project__tech-stack__item'>JavaScript</li>
            </ul>
          </div>
       </div>
    );
  }
  
  export default MiniProjects;
  