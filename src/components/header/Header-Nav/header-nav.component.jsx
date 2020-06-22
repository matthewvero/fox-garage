import React                  from 'react'
import {
      HeaderDropDownIcon,
      HeaderSection,
}                             from '../header/header.styles'
import { faChevronDown }      from "@fortawesome/free-solid-svg-icons";
import {HeaderNavComponent}   from './header-nav.styles'

const HeaderNav = () => {
      return (
            <HeaderSection>
            <HeaderNavComponent dropdown>
                  Prices 
                  <HeaderDropDownIcon icon={faChevronDown}/>
            </HeaderNavComponent>
            <HeaderNavComponent dropdown>
                  Services
                  <HeaderDropDownIcon icon={faChevronDown}/>
            </HeaderNavComponent>
            <HeaderNavComponent dropdown>
                  Blog
                  <HeaderDropDownIcon icon={faChevronDown}/>    
            </HeaderNavComponent>
            <HeaderNavComponent dropdown >
                  About Fox
                  <HeaderDropDownIcon icon={faChevronDown}/>
            </HeaderNavComponent>
            <HeaderNavComponent>Contact Us</HeaderNavComponent>
            </HeaderSection>
      )
}

export default HeaderNav
