import React from 'react'
import { Link } from 'react-scroll'

import GithubSmall from '../images/GitHub-Logo.small.svg'
import LinkedinSmall from '../images/LinkedIn-Icon-Logo.small.svg'

import './SlideNav.scss'


const SlideNav = (props) => {

    const { showSlideNav, setShowSlideNav, showOverlay, setShowOverlay, closeNav } = props

    const handleClick = e => {
      setShowSlideNav(!showSlideNav)
      setShowOverlay(!showOverlay)
    }

    return (

        <div id='slideNav' className={props.className}>

            <Link activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className='slideNav__item slideNav__item--1' 
            onClick={handleClick, closeNav} >
            About
            </Link>

            <Link activeClass='active'
            to='projects'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className='slideNav__item slideNav__item--2' 
            onClick={handleClick, closeNav} >
            Projects
            </Link>
            
            <Link activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className='slideNav__item slideNav__item--3' 
            onClick={handleClick, closeNav} >
            Contact
            </Link>


            <a href='https://www.linkedin.com/in/ch%C3%A9ye-roberson-883318b7/'
            className='slideNav__logo--1'>
                <img className='slideNav__img--1' src={LinkedinSmall} /> 
            </a>
            
            <a href='https://github.com/EndofLine4/dominicksBuild.git'
            className='slideNav__logo--2'>
                <img className='slideNav__img--2' src={GithubSmall} /> 
            </a>

        </div>

    );
    
};

export default SlideNav