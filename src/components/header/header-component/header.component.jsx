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

export default class Header extends React.Component {
    state = {
        isMobile: window.innerWidth < 850,
        activeMenu: "main",
    };

    goToMenu = (menu) => {
        console.log("activeMenu", this.state.activeMenu);
        this.setState({ activeMenu: menu });
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
                        
                            <DropdownMenu onClick={() => console.log('clicked')}>
                                <CSSTransition
                                    in={this.state.activeMenu === "main"}
                                    timeout={500}
                                    classNames="menu-primary"
                                    unmountOnExit
                                >
                                    <DropdownMenuSection>
                                        <DropDownMenuItem
                                            leftIcon={faPoundSign}
                                            action={this.goToMenu}
                                            menu='prices'
                                            rightIcon={faChevronRight}
                                        >
                                            Prices
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faAlignJustify}
                                            action={this.goToMenu}
                                            menu='services'
                                            rightIcon={faChevronRight}

                                        >
                                            Services
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faComment}
                                            action={this.goToMenu}
                                            menu='blog'
                                            rightIcon={faChevronRight}
                                        >
                                            Blog
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faCloud}
                                            action={this.goToMenu}
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
                                    in={this.state.activeMenu === "prices"}
                                    timeout={500}
                                    classNames="menu-secondary"
                                    unmountOnExit
                                >
                                    <DropdownMenuSection>
                                    <DropDownMenuItem
                                            leftIcon={faChevronLeft}
                                            action={this.goToMenu}
                                            menu='main'
                                        >
                                            Back
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faOilCan}
                                            action={this.goToMenu}
                                            menu='service'
                                        >
                                            Service
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faCheck}
                                            action={this.goToMenu}
                                            menu='MOT'
                                        >
                                            MOT
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faSnowflake}
                                            goTomenu="Blog"
                                            action={this.goToMenu}
                                            menu='aircon'
                                        >
                                            AirCon 
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faCircle}
                                            action={this.goToMenu}
                                            menu='tyres'
                                        >
                                            Tyres
                                        </DropDownMenuItem>
                                    </DropdownMenuSection>
                                </CSSTransition>
                                <CSSTransition
                                    in={this.state.activeMenu === "services"}
                                    timeout={500}
                                    classNames="menu-secondary"
                                    unmountOnExit
                                >
                                    <DropdownMenuSection>
                                    <DropDownMenuItem
                                            leftIcon={faChevronLeft}
                                            action={this.goToMenu}
                                            menu='main'
                                        >
                                            Back
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faOilCan}
                                            action={this.goToMenu}
                                            menu='service'
                                        >
                                            Service
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faCheck}
                                            action={this.goToMenu}
                                            menu='MOT'
                                        >
                                            MOT
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faSnowflake}
                                            goTomenu="Blog"
                                            action={this.goToMenu}
                                            menu='aircon'
                                        >
                                            AirCon 
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faCircle}
                                            action={this.goToMenu}
                                            menu='tyres'
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
