import React from 'react'
import { EngineSelectorButtonHighlight } from './engine-selector-highlight.styles'
import { connect } from 'react-redux'

const EngineSelectorHighlight = ({activeEngineType}) => {
      return (
            <EngineSelectorButtonHighlight activeEngine={activeEngineType}/>
      )
}

const mapProps = state => ({
      activeEngineType: state.engineSelector.selectedEngine
})

export default connect(mapProps)(EngineSelectorHighlight) 
