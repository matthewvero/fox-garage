import React                    from "react";
import {
    HeaderContainer,
    HeaderSection,
    HeaderLogo,
    HeaderContactDetails,
    HeaderPhoneNo,
}                               from "./header.styles";

import HeaderDropDownButton     from "../header-dropdown-button/header-dropdown-button.component";
import HeaderNav from "../Header-Nav/header-nav.component";

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
            {
                this.state.isMobile ? 
                null : 
                <HeaderNav/> 
            }
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