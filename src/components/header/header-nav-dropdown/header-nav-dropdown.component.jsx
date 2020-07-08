import React, {useState, useLayoutEffect, useRef} from 'react'
import { HeaderDropDownContainer } from './header-nav-dropdown.styles'

const HeaderNavDropdown = ({children}) => {
      const [height, setHeight] = useState()
      const dropDownRef = useRef(null) 

      useLayoutEffect(() => {
            window.setTimeout(() => setHeight(dropDownRef.current.firstChild.offsetHeight * dropDownRef.current.children.length), 10) 
      }, [height])


      return (
            <HeaderDropDownContainer ref={dropDownRef} height={height}> 
                  {children}
            </HeaderDropDownContainer>
      )
}

export default HeaderNavDropdown
