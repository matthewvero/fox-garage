import React, { useRef, useEffect, useState } from 'react'
import { ComponentContainer, ComponentSlider, ComponentScrollHint } from './appear-hoc.styles'
import { CSSTransition } from 'react-transition-group'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export const AppearHOC = ({children}) => {

      const [isVisible, setVisible] = useState(false)
      const myRef = useRef()
      
      useEffect(() => {

                  const checkHeight = (ref) => {
                        
                        const elementHeight = ref.current.offsetTop - 500
                        
                        if (window.pageYOffset > elementHeight && isVisible === false) {
                              setVisible(true)
                        } else if (window.pageYOffset < elementHeight && isVisible === true) {
                              setVisible(false)
                        }
                  }
                  // Check scroll height and change visible state if necessary
                  
                  const handler = () => checkHeight(myRef)

                  window.addEventListener('scroll', handler, {passive: true})
                  return () => {
                        window.removeEventListener('scroll', handler);
                  }
            
      }, [myRef, isVisible])

      return(
            <ComponentContainer ref={myRef}>
                  <CSSTransition
                        in={isVisible ? true : false}
                        classNames={'appear'}
                        timeout={1000}
                        unmountOnExit
                        ref={myRef}
                  >
                        <ComponentSlider>
                              {children}
                        </ComponentSlider>
                  </CSSTransition>
                  <CSSTransition
                        in={isVisible ? false : true}
                        classNames={'appear'}
                        timeout={1000}
                        unmountOnExit
                        
                  >
                        <ComponentScrollHint icon={faChevronDown}/>
                  </CSSTransition>
            </ComponentContainer>
      )
}



