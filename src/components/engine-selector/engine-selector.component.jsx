import React from 'react'
import { EngineSelectorContainer, EngineSelectorButtonGroup, EngineSelectorButton, EngineSelectorButtonTitle, EngineSelectorButtonIcon, EngineSelectorTitle } from './engine-selector.styles'
import { faCarAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import { selectEngineType } from '../../redux/engine-selector/engine-selector.actions'
import { connect } from 'react-redux'
import EngineSelectorHighlight from './engine-selector-highlight/engine-selector-hightlight.component'
import { CSSTransition } from 'react-transition-group'
import { useEffect } from 'react'
import { useState } from 'react'

const EngineSelector = ({changeEngine}) => {
      const [engineSelectorVisible, setEngineSelectorVisible] = useState(false)
      useEffect(() => {
            setTimeout(() => setEngineSelectorVisible(true), 10)
            return () => {
                  setEngineSelectorVisible(false)
            }
      }, [])
       return (
             <CSSTransition
                  in={engineSelectorVisible === true ? true : false}
                  unmountOnExit
                  timeout={500}
                  classNames='engineSelector'
             >
             
            <EngineSelectorContainer>
                  <EngineSelectorTitle>Select Your Engine Size</EngineSelectorTitle>
                  <EngineSelectorButtonGroup>
                       <EngineSelectorHighlight/>
                        <EngineSelectorButton onClick={() => changeEngine('2L')}>
                              <EngineSelectorButtonIcon icon={faCarAlt}/>
                              <EngineSelectorButtonTitle>2L-</EngineSelectorButtonTitle>
                        </EngineSelectorButton>
                        <EngineSelectorButton onClick={() => changeEngine('2L-3L')}> 
                              <EngineSelectorButtonIcon icon={faCarAlt}/>
                              <EngineSelectorButtonIcon icon={faPlus}/>
                              <EngineSelectorButtonTitle>2L - 3L</EngineSelectorButtonTitle>

                        </EngineSelectorButton>
                        <EngineSelectorButton onClick={() => changeEngine('3L+')}>
                              <EngineSelectorButtonIcon icon={faCarAlt}/>
                              <EngineSelectorButtonIcon icon={faPlus}/>
                              <EngineSelectorButtonIcon icon={faPlus}/>
                              <EngineSelectorButtonTitle>3L+</EngineSelectorButtonTitle>

                        </EngineSelectorButton>

                  </EngineSelectorButtonGroup>
            </EngineSelectorContainer>
            </CSSTransition>
      )
}

const mapDispatch = dispatch => ({
      changeEngine: engine => dispatch(selectEngineType(engine))
})


export default connect(null, mapDispatch)(EngineSelector) 
