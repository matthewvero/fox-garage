import React from "react";
import {
    HeaderContainer,
    HeaderNavComponent,
    HeaderSection,
    HeaderLogo,
    HeaderContactDetails,
    HeaderDropDownIcon,
    HeaderPhoneNo,
} from "./header.styles";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import HeaderDropDownButton from "../header-dropdown-button/header-dropdown-button.component";

export default class Header extends React.Component  {
    state = {
        isMobile: window.innerWidth < 850
    }

    handleResize = () => {
        this.setState({isMobile: window.innerWidth < 850})
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    render() {
        return (
        <HeaderContainer>
            <HeaderSection>
                <HeaderLogo>F O X</HeaderLogo>
            </HeaderSection>
            <HeaderSection>
            <HeaderNavComponent collapse>
                Prices 
                <HeaderDropDownIcon icon={faChevronDown}/>
            </HeaderNavComponent>
            <HeaderNavComponent collapse>
                Services
                <HeaderDropDownIcon icon={faChevronDown}/>
            </HeaderNavComponent>
            <HeaderNavComponent collapse>
                Blog
                <HeaderDropDownIcon icon={faChevronDown}/>    
            </HeaderNavComponent>
            <HeaderNavComponent collapse>
                About Fox
                <HeaderDropDownIcon icon={faChevronDown}/>
            </HeaderNavComponent>
            <HeaderNavComponent collapse>Contact Us</HeaderNavComponent>
            <HeaderContactDetails>
                <span>To Book Call:</span> <HeaderPhoneNo>01276 704600</HeaderPhoneNo>
            </HeaderContactDetails>
            {
                this.state.isMobile ? 
                        <HeaderDropDownButton/>
                : null
            }
            </HeaderSection>
        </HeaderContainer>
    )
}
}