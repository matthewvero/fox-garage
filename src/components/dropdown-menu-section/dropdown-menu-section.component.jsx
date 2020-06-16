import React from 'react'
import { DropdownMenuSectionContainer } from './dropdown-menu-section.styles'

const DropdownMenuSection = ({children}) => {
      return (
           <DropdownMenuSectionContainer>
                  {children}
           </DropdownMenuSectionContainer>
      )
}

export default DropdownMenuSection
