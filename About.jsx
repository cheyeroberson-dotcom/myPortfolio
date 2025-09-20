import React, { useLayoutEffect } from 'react'
import './About.scss';
import Me from '../images/AboutPic.jpg'



const About = () => {

  useLayoutEffect(() => {
    
    ////////// FIRST OBSERVER

    const aboutLeftItems = document.querySelectorAll('.about-left-slide');

    const aboutLeftOptions = {
        threshold: 1
    };

    const aboutLeftOnScroll = new IntersectionObserver(function(entries, aboutLeftOnScroll) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('about-animate-left');
                aboutLeftOnScroll.unobserve(entry.target);
            }
        })
    }, aboutLeftOptions);

    aboutLeftItems.forEach(aboutLeftItem => {
        aboutLeftOnScroll.observe(aboutLeftItem);
    })

    ////////// SECOND OBSERVER

    const aboutUpItems = document.querySelectorAll('.about-up-slide');

    const aboutUpOptions = {
        threshold: 1
    };

    const aboutUpOnScroll = new IntersectionObserver(function(entries, aboutUpOnScroll) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('about-animate-up');
                aboutUpOnScroll.unobserve(entry.target);
            }
        })
    }, aboutUpOptions);

    aboutUpItems.forEach(aboutUpItem => {
        aboutUpOnScroll.observe(aboutUpItem);
    })

    ////////// THIRD OBSERVER

    const bgLineItems = document.querySelectorAll('.line-slide-right');

    const bgLineOptions = {
        threshold: 1
    };

    const bgLineOnScroll = new IntersectionObserver(function(entries, bgLineOnScroll) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('slide-in-right');
                bgLineOnScroll.unobserve(entry.target);
            }
        })
    }, bgLineOptions);

    bgLineItems.forEach(bgLineItem => {
        bgLineOnScroll.observe(bgLineItem);
    })

        ////////// FOURTH OBSERVER
    
        const bgLine2Item = document.querySelector('.about__line--2');

        const bgLine2Options = {
            threshold: 1
        };
    
        const bgLine2OnScroll = new IntersectionObserver(function(entries, bgLine2OnScroll) {
            entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('slide-in-left');
                    bgLine2OnScroll.unobserve(entry.target);
                }
            })
        }, bgLine2Options);

            bgLine2OnScroll.observe(bgLine2Item);


});

    return (
      <div id='about' className='about'>
        <div className='about__bg-top-left-div'></div>
        <div className='about__bg-top-right-div'></div>
        <div className='about__bg-bottom-left-div'></div>
        <div className='about__me'>
          <h1 className='about__me__header about-up-slide'>Hello</h1>
          <p></p>
          <p className='about__me__p1 about-up-slide'>
          I partner my history in media with hands-on web development experience building user interfaces in Figma and developing single page web applications with React and Gatsby.js. As a Journalist I have learned the advantage of keen research, analytics, and evaluating information while making sure to deliver it to readers in a clever and creative way. This means that I understand the language of my teammates, designers and developers alike, and can make complex ideas easy to understand. 
          </p>
        </div>
        <div className='about__line'>
          <div className='about__line--1 line-slide-right'></div>
          <div className='about__line--2'></div>
          <div className='about__line--3 line-slide-right'></div>
        </div>
        <div className='about__img-top-frame about-left-slide'>
          <h1 className='about__img-top-frame__header'>About:</h1>
        </div>
        <div className='about__img-box about-left-slide'>
          <div className='about__img-box__top-div'></div>
          <div className='about__img-box__pic'>
            <img className='about__img-box__pic-me' src={Me} />
          </div>
          <p className='about__img-box__first-name'>Chéye</p>
          <p className='about__img-box__last-name'>Roberson</p>
        </div>
        <div className='about__img-bottom-frame about-left-slide'>
          <h1 className='about__img-bottom-frame__title'><nobr> Writer | Figure-outter</nobr></h1>
        </div>
        <div className='about__section-bottom-div'></div>
      </div>
    );
  }
  
  export default About;
  
