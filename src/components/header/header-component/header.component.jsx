import React from "react";
import {
    HeaderContainer,
    HeaderSection,
    HeaderLogo,
    HeaderContactDetails,
    HeaderPhoneNo,
} from "./header.styles";

import HeaderDropDownButton from "../header-dropdown-button/header-dropdown-button.component";
import HeaderNav from "../Header-Nav/header-nav.component";
import DropDownMenuItem from "../../dropdown-menu-item/dropdown-menu-item.component";

import DropdownMenu from "../../dropdown-menu/dropdown-menu.component";

import {
    faPoundSign,
    faPhone,
    faCloud,
    faComment,
    faChevronLeft,
    faOilCan,
    faCheck,
    faSnowflake,
    faCircle,
    faChevronRight,
    faAlignJustify,
} from "@fortawesome/free-solid-svg-icons";

import { CSSTransition } from "react-transition-group";
import DropdownMenuSection from "../../dropdown-menu-section/dropdown-menu-section.component";
import { connect } from "react-redux";

class Header extends React.Component {
    state = {
        isMobile: window.innerWidth < 850,
        menu: 'menu'

    };

    handleResize = () => {
        this.setState({ isMobile: window.innerWidth < 850 });
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    render() {
        return (
            <HeaderContainer>
                <HeaderSection>
                    <HeaderLogo>F O X</HeaderLogo>
                </HeaderSection>
                <HeaderSection>
                    {this.state.isMobile ? null : <HeaderNav />}
                    <HeaderContactDetails>
                        <span>To Book Call:</span>{" "}
                        <HeaderPhoneNo>01276 704600</HeaderPhoneNo>
                    </HeaderContactDetails>
                    {this.state.isMobile ? (
                        <HeaderDropDownButton>
                            <DropdownMenu>
                                <CSSTransition
                                    in={this.props.activeMenu === 'main' ? true : false}
                                    timeout={500}
                                    classNames="menu-primary"
                                    unmountOnExit
                                >
                                    <DropdownMenuSection>
                                        <DropDownMenuItem
                                            leftIcon={faPoundSign}
                                            action={'menu-link'}
                                            menu='prices'
                                            rightIcon={faChevronRight}
                                        >
                                            Prices
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faAlignJustify}
                                            action={'menu-link'}
                                            menu='services'
                                            rightIcon={faChevronRight}

                                        >
                                            Services
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faComment}
                                            action={'menu-link'}
                                            menu='blog'
                                            rightIcon={faChevronRight}
                                        >
                                            Blog
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faCloud}
                                            action={'menu-link'}
                                            menu='about us'
                                            rightIcon={faChevronRight}

                                        >
                                            About Us
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faPhone}
                                        >
                                            Contact Us
                                        </DropDownMenuItem>
                                    </DropdownMenuSection>
                                </CSSTransition>

                                <CSSTransition
                                    in={this.props.activeMenu === "prices" ? true : false}
                                    timeout={500}
                                    classNames="menu-secondary"
                                    unmountOnExit
                                >
                                    <DropdownMenuSection>
                                        <DropDownMenuItem
                                            leftIcon={faChevronLeft}
                                            action={'menu-link'}
                                            menu='main'
                                        >
                                            Back
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faOilCan}
                                            
                                        >
                                            Service
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faCheck}
                                            
                                        >
                                            MOT
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faSnowflake}
                                            
                                        >
                                            AirCon 
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faCircle}
                                            
                                        >
                                            Tyres
                                        </DropDownMenuItem>
                                    </DropdownMenuSection>
                                </CSSTransition>
                                <CSSTransition
                                    in={this.props.activeMenu === "services" ? true : false}
                                    timeout={500}
                                    classNames="menu-secondary"
                                    unmountOnExit
                                >
                                    <DropdownMenuSection>
                                    <DropDownMenuItem
                                            leftIcon={faChevronLeft}
                                            action={'menu-link'}
                                            menu='main'
                                        >
                                            Back
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faOilCan}
                                            
                                        >
                                            Service
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faCheck}
                                            
                                        >
                                            MOT
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faSnowflake}
                                            
                                        >
                                            AirCon 
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faSnowflake}
                                            
                                        >
                                            AirCon 
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faSnowflake}
                                            
                                        >
                                            AirCon 
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faCircle}
                                            
                                        >
                                            Tyres
                                        </DropDownMenuItem>
                                    </DropdownMenuSection>
                                </CSSTransition>
                            </DropdownMenu>
                        </HeaderDropDownButton>
                    ) : null}
                </HeaderSection>
            </HeaderContainer>
        );
    }
}

const mapState = (state) => ({
    activeMenu: state.header.activeMobileMenu,
});

export default connect(mapState)(Header)