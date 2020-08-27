import React from 'react'
import { EVIconContainer, EVIconComponent, EVIconLeft, EVIconRight } from './evicon.styles'
import { faBolt } from '@fortawesome/free-solid-svg-icons'

const EVIcon = () => {
      return (
            <EVIconContainer>
                  <EVIconLeft icon={faBolt}/>
                  <EVIconComponent icon={faBolt}/>
                  <EVIconRight icon={faBolt}/>
            </EVIconContainer>
      )
}

export default EVIcon
