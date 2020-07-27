import React, { useRef, useEffect, useState } from 'react'
import { ComponentContainer, ComponentSlider, ComponentScrollHint } from './appear-hoc.styles'
import { CSSTransition } from 'react-transition-group'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export const AppearHOC = ({children}) => {

      const [isVisible, setVisible] = useState(false)
      const [height, setHeight] = useState(400)
      const myRef = useRef()
      const childRef = useRef()
      const checkChildHeight = (ref) => {
            if (ref.current) {
                  const childHeight = ref.current.firstChild.offsetHeight
                  setHeight(childHeight)
            }
      }
      
      useEffect(() => {

                  const checkOffsetHeight = (ref) => {
                        
                        const elementHeight = ref.current.offsetTop - 500
                        
                        if (window.pageYOffset > elementHeight && isVisible === false) {
                              setVisible(true)
                        } else if (window.pageYOffset < elementHeight && isVisible === true) {
                              setVisible(false)
                        }
                  }
                  // Check scroll height and change visible state if necessary

                  checkChildHeight(childRef)

                  
                  const handler = () => checkOffsetHeight(myRef)

                  window.addEventListener('scroll', handler, {passive: true})
                  return () => {
                        window.removeEventListener('scroll', handler);
                  }
            
      }, [myRef, isVisible])

      return(
            <ComponentContainer ref={myRef} height={height}>
                  <CSSTransition
                        in={isVisible ? true : false}
                        classNames={'appear'}
                        timeout={1000}
                        unmountOnExit
                        ref={myRef}
                  >
                        <ComponentSlider ref={childRef}>
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



