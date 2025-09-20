import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { useMediaQuery } from '@material-ui/core'

import './Header.scss'
import Github from '../images/github-logo-png-transparent.png'
import Linkedin from '../images/LinkedIn-Logo.wine-1.png'
import GithubSmall from '../images/GitHub-Logo.small.svg'
import LinkedinSmall from '../images/LinkedIn-Icon-Logo.small.svg'
import HamburgerMenu from '../images/HamburgerMenu.svg'
import Close_Hamburger from '../images/svg/close_big-blue.svg'


const Header = (props) => {

  const changeLogo = useMediaQuery('(min-width: 1220px)')

  const viewLinks = useMediaQuery('(min-width: 1015px)')

  const { showSlideNav, setShowSlideNav, showOverlay, setShowOverlay, closeNav } = props

  const handleClick = e => {
    setShowSlideNav(!showSlideNav)
    setShowOverlay(!showOverlay)
  }

  // State for header scroll
  const [stickyNav, setStickyNav] = useState(false)

  // Event listener for header scroll
  const stickyNavScroll = () => {
    if(window.scrollY >= 5) {
        setStickyNav(true)
    } else {
        setStickyNav(false)
    }
  }

window.addEventListener('scroll', stickyNavScroll)

  return (
    <header className={ stickyNav ? 'header active' : 'header' }>
      <Link activeClass='active'
      to='main-showcase'
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      className='header__name--link'>
        <p className='header__name'>Chéye</p>
      </Link>

      <Link activeClass='active'
      to='main-showcase'
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      className='header__title--link'>
        <p className='header__title'>Portfolio</p>
      </Link>

      {
        viewLinks ? (
          <>
            <Link activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className='header__nav-item header__nav-item--1'>
              About
            </Link>

            <Link activeClass='active'
            to='projects'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className='header__nav-item header__nav-item--2'>
              Projects
            </Link>
              
            <Link activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className='header__nav-item header__nav-item--3'>
              Contact
            </Link>


            <a href='https://www.linkedin.com/in/ch%C3%A9ye-roberson-883318b7/'
            className='header__nav-logo--1'>
              { changeLogo ? <img className='header__img--1' src={Linkedin} /> : <img className='header__img--1--small' src={LinkedinSmall} /> }
            </a>
            
            <a href='https://github.com/EndofLine4/dominicksBuild.git'
            className='header__nav-logo--2'>
              { changeLogo ? <img className='header__img--2' src={Github} /> : <img className='header__img--2--small' src={GithubSmall} /> }
            </a>
          </>
        )
        :
        <>
          { showSlideNav ?  <img className='close-hamburger' src={Close_Hamburger} onClick={handleClick, closeNav} /> 
          : 
          <img className='hamburger-menu' src={HamburgerMenu} onClick={handleClick} /> }
        </>
      }

    </header>
    
  )
}

export default Header