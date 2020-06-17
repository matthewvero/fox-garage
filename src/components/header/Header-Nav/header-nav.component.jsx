import React                        from 'react'
import {
      HeaderNavComponent,
      HeaderDropDownIcon,
      HeaderSection,
}                                   from '../header-component/header.styles'
import { faChevronDown }        from "@fortawesome/free-solid-svg-icons";


const HeaderNav = () => {
      return (
            <HeaderSection>
            <HeaderNavComponent>
                  Prices 
                  <HeaderDropDownIcon icon={faChevronDown}/>
            </HeaderNavComponent>
            <HeaderNavComponent>
                  Services
                  <HeaderDropDownIcon icon={faChevronDown}/>
            </HeaderNavComponent>
            <HeaderNavComponent>
                  Blog
                  <HeaderDropDownIcon icon={faChevronDown}/>    
            </HeaderNavComponent>
            <HeaderNavComponent>
                  About Fox
                  <HeaderDropDownIcon icon={faChevronDown}/>
            </HeaderNavComponent>
            <HeaderNavComponent>Contact Us</HeaderNavComponent>
            </HeaderSection>
      )
}

export default HeaderNav
