import React, { useState } from 'react'
import { useMediaQuery } from '@material-ui/core'
import './App.scss'
import Header from './components/Header'
import MainShowcase from './components/MainShowcase'
import About from './components/About'
import Projects from './components/Projects'
import MiniProjects from './components/MiniProjects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SlideNav from './components/SlideNav'



function App() {

  ////// MEDIA QUERY FOR NAV
  const hideNav = useMediaQuery('(max-width: 1015px)')

  ////// RENDER SLIDE NAV
  const renderSlideNav = () => {
    if (showSlideNav && hideNav ) {
      return (
        <SlideNav className='slide-open slideNav' 
                  showSlideNav={showSlideNav} setShowSlideNav={setShowSlideNav}
                  showOverlay={showOverlay} setShowOverlay={setShowOverlay} 
                  closeNav={closeNav}
        />
      )
    } else {
      return null
    }
  }

  ////// RENDER OVERLAY
  const renderOverlay = () => {
    if (showOverlay && hideNav ) {
      return (
          <div id='overlay' className='openOverlay'></div>
      )
    } else {
      return null
    }
  }



  ///// STATE TO OPEN/CLOSE SLIDE NAV /////
  const [showSlideNav, setShowSlideNav] = useState(false)


  ///// STATE TO OPEN/CLOSE OVERLAY /////
  const [showOverlay, setShowOverlay] = useState(false)


    //////// TO CLOSE THE SLIDE NAV ////////
    const closeNav = () => {
      //REMOVES/ADDS SLIDE NAV ANIMATION CLASSES
      document.getElementById('slideNav').classList.remove('slide-open')
      document.getElementById('slideNav').classList.add('slide-away')
  
      //REMOVES/ADDS OVERLAY ANIMATION CLASSES
      document.getElementById('overlay').classList.remove('openOverlay')
      document.getElementById('overlay').classList.add('closeOverlay')
  
      
      //TO REMOVE OVERLAY
      setTimeout(() => setShowOverlay(false), 700)
  
      //TO CLOSE NAV
      setTimeout(() => setShowSlideNav(false), 700)
      
    }


  return (
    <div className='container'>
        <Header showSlideNav={showSlideNav} setShowSlideNav={setShowSlideNav}
                showOverlay={showOverlay} setShowOverlay={setShowOverlay} 
                closeNav={closeNav}
        />
        <MainShowcase />
        {renderSlideNav()}
        {renderOverlay()}
        <About />
        <Projects />
        <MiniProjects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
