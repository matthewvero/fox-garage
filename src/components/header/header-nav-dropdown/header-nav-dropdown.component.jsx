import React, {useState, useEffect, useRef} from 'react'
import { HeaderDropDownContainer } from './header-nav-dropdown.styles'

const HeaderNavDropdown = ({children}) => {
      const [height, setHeight] = useState(0)
      const dropDownRef = useRef(null) 

      useEffect(() => {
            setHeight(dropDownRef.current.firstChild.offsetHeight * dropDownRef.current.children.length)
      }, [height])


      return (
            <HeaderDropDownContainer ref={dropDownRef} height={height}> 
                  {children}
            </HeaderDropDownContainer>
      )
}

export default HeaderNavDropdown
