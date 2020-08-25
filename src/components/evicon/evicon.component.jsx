import React from 'react'
import { EVIconContainer, EVIconComponent } from './evicon.styles'
import { faBolt } from '@fortawesome/free-solid-svg-icons'

const EVIcon = () => {
      return (
            <EVIconContainer>
                  <EVIconComponent icon={faBolt}/>
            </EVIconContainer>
      )
}

export default EVIcon
