import React from 'react'
import {DropdownMenuBox } from './dropdown-menu.styles'
const DropdownMenu = ({children}) => {
      return (
            <DropdownMenuBox>
                  {children}
            </DropdownMenuBox>
      )
}

export default DropdownMenu
