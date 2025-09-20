import React from 'react'
import { useMediaQuery } from '@material-ui/core'

import './MainShowcase.scss'
import Typewriter from '../images/svg/Typewriter-and-shadow.svg'
import Brain from '../images/BRAIN_OUTLINE/brain_filled_white_sm.png'


const MainShowcase = (props) => {

  const changeShowcaseBoxes = useMediaQuery('(min-width: 750px)')

  return (
    <div id='main-showcase' className='main-showcase'>
        
        
        {
          changeShowcaseBoxes ? 
          (
            <>
            <p className='main-showcase__equal-sign'>=</p>
            <div className='journalism__box'>
                <p className='journalism__box__header'>Journalism</p>
                <p className='journalism__box__quote'>
                  “I always wanted to be some kind of writer or newspaper reporter. But after college... I did other things.”
                </p>
                  <span className='journalism__box__quote__name'>
                  <nobr>- Jacqueline Kennedy Onassis</nobr>
                  </span>
                  <div className='journalism__box__typewriter'>
                    <img className='journalism__box__typewriter__img' src={Typewriter} />
                  </div>
                <div className='journalism__box__bottom-div'>
                </div>
            </div>
            <div className='software__box'>
                <p className='software__box__header'><nobr>Software Development</nobr></p>

                  <div className='software__box__header__code' cursorClassName='software__box__header__code__cursor'>
                    <p className='software__box__header__code__1st-line'>
                        <span className='software__box__header__code__blue-text'>
                          const&nbsp;
                        </span> 
                        <span className='software__box__header__code__green-text'>
                          <nobr>Chéye Roberson&nbsp;</nobr>
                        </span> 
                        <span className='software__box__header__code__blue-text'>
                          =&nbsp; 
                        </span> 
                        <span className='software__box__header__code__yellow-text'>
                          &#40;&nbsp;&#41;
                        </span> 
                        <span className='software__box__header__code__blue-text'>
                          &#61;&#62;&nbsp;
                        </span>
                        <span className='software__box__header__code__yellow-text'>
                          &#123;
                        </span>
                    </p>

                    <p className='software__box__header__code__2nd-line'>
                        <span className='software__box__header__code__blue-text'>
                          if&nbsp;
                        </span>
                        <span className='software__box__header__code__yellow-text'>
                          &#40;
                        </span>
                        <span className='software__box__header__code__purp-text'>
                          morningDay&nbsp; 
                        </span>
                        <span className='software__box__header__code__blue-text'>
                          ===&nbsp; 
                        </span>
                        <span className='software__box__header__code__cran-text'>
                          '
                        </span>
                        <span className='software__box__header__code__purp-text'>
                          bored
                        </span> 
                        <span className='software__box__header__code__cran-text'>
                          '
                        </span>
                        <span className='software__box__header__code__yellow-text'>
                          &#41;
                        </span>
                    </p>

                    <p className='software__box__header__code__3rd-line'>
                        <span className='software__box__header__code__yellow-text'>
                          startCoding&#40;&#41;
                        </span>
                    </p>

                    <p className='software__box__header__code__4th-line'>
                        <span className='software__box__header__code__yellow-text'>
                          getActive&#40;&#41;
                        </span>
                    </p>

                    <p className='software__box__header__code__5th-line'>
                        <span className='software__box__header__code__blue-text'>
                          return&nbsp; 
                        </span>
                        <span className='software__box__header__code__purp-text'>
                          progess
                        </span>
                    </p> 

                    <p className='software__box__header__code__6th-line'>
                        <span className='software__box__header__code__yellow-text'>
                          &#125;
                        </span>
                        <span className='software__box__header__code__anim'>
                          |
                        </span>
                    </p>
                  </div>
            
            </div>
            <div className='showcase-brain'>
              <img className='showcase-brain__img' src={Brain} />
            </div>
          </>
          )
          :
          (
            <>
            <div className='software__box2'>
                <p className='software__box2__header'><nobr>Software Development</nobr></p>

                  <div className='software__box2__header__code' cursorClassName='software__box2__header__code__cursor'>
                    <p className='software__box2__header__code__1st-line'>
                        <span className='software__box2__header__code__blue-text'>
                          const&nbsp;
                        </span> 
                        <span className='software__box2__header__code__green-text'>
                          <nobr>Chéye Roberson&nbsp;</nobr>
                        </span> 
                        <span className='software__box2__header__code__blue-text'>
                          =&nbsp; 
                        </span> 
                        <span className='software__box2__header__code__yellow-text'>
                          &#40;&nbsp;&#41;
                        </span> 
                        <span className='software__box2__header__code__blue-text'>
                          &#61;&#62;&nbsp;
                        </span>
                        <span className='software__box2__header__code__yellow-text'>
                          &#123;
                        </span>
                    </p>

                    <p className='software__box2__header__code__2nd-line'>
                        <span className='software__box2__header__code__blue-text'>
                          if&nbsp;
                        </span>
                        <span className='software__box2__header__code__yellow-text'>
                          &#40;
                        </span>
                        <span className='software__box2__header__code__purp-text'>
                          morningDay&nbsp; 
                        </span>
                        <span className='software__box2__header__code__blue-text'>
                          ===&nbsp; 
                        </span>
                        <span className='software__box2__header__code__cran-text'>
                          '
                        </span>
                        <span className='software__box2__header__code__purp-text'>
                          static
                        </span> 
                        <span className='software__box2__header__code__cran-text'>
                          '
                        </span>
                        <span className='software__box2__header__code__yellow-text'>
                          &#41;
                        </span>
                    </p>

                    <p className='software__box2__header__code__3rd-line'>
                        <span className='software__box2__header__code__yellow-text'>
                          startCoding&#40;&#41;
                        </span>
                    </p>

                    <p className='software__box2__header__code__4th-line'>
                        <span className='software__box2__header__code__yellow-text'>
                          getActive&#40;&#41;
                        </span>
                    </p>

                    <p className='software__box2__header__code__5th-line'>
                        <span className='software__box2__header__code__blue-text'>
                          return&nbsp; 
                        </span>
                        <span className='software__box2__header__code__purp-text'>
                          progess
                        </span>
                    </p> 

                    <p className='software__box2__header__code__6th-line'>
                        <span className='software__box2__header__code__yellow-text'>
                          &#125;
                        </span>
                        <span className='software__box2__header__code__anim'>
                          |
                        </span>
                    </p>
                  </div>
            </div>

            <div className='showcase-brain'>
              <img className='showcase-brain__img' src={Brain} />
            </div>
          </>
          )
        }
        <div className='city-box'>
        </div>
        <div className='showcase__lines'>
          <div className='showcase__line--1'></div>
          <div className='showcase__line--2'></div>
          <div className='showcase__line--3'></div>
        </div>
    </div>
  );
}

export default MainShowcase;
