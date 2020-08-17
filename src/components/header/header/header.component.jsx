import React                    from "react";
import {
    HeaderContainer,
    HeaderSection,
    HeaderLogo,
    HeaderContactDetails,
    HeaderPhoneNo,
}                               from "./header.styles";

import MobileDropDownButton     from '../../mobile-dropdown/mobile-dropdown-button/mobile-dropdown-button.component';

import DropDownMenuItem         from "../../dropdown-menu-item/dropdown-menu-item.component.jsx";
import DropdownMenu             from '../../mobile-dropdown/mobile-dropdown-menu/dropdown-menu.component';
import DropdownMenuSection      from '../../mobile-dropdown/mobile-dropdown-menu-section/dropdown-menu-section.component';

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
    faBolt,
    faBriefcase,
}                               from "@fortawesome/free-solid-svg-icons";

import { CSSTransition }        from "react-transition-group";
import { connect }              from "react-redux";
import HeaderNav from "../header-nav/header-nav.component";
import { withRouter } from "react-router";
import { selectEngineType } from "../../../redux/engine-selector/engine-selector.actions";

class Header extends React.Component {
    state = {
        isMobile: window.innerWidth < 1150,
        menu: 'menu'

    };

    handleResize = () => {
        this.setState({ isMobile: window.innerWidth < 1150 });
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
                    <HeaderLogo onClick={() => this.props.history.push('/')}>F O X</HeaderLogo>
                </HeaderSection>
                <HeaderSection>
                    {this.state.isMobile ? null : <HeaderNav />}
                    <HeaderContactDetails>
                        <span>To Book Call:</span>{" "}
                        <HeaderPhoneNo>01276 704600</HeaderPhoneNo>
                    </HeaderContactDetails>
                    {this.state.isMobile ? (
                        <MobileDropDownButton>
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
                                            $action={'menu-link'}
                                            $menu='prices'
                                            rightIcon={faChevronRight}
                                        >
                                            Prices
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faAlignJustify}
                                            $action={'menu-link'}
                                            $menu='services'
                                            rightIcon={faChevronRight}
                                        >
                                            Services
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faComment}
                                            $action={'menu-link'}
                                            $menu='blog'
                                            rightIcon={faChevronRight}
                                        >
                                            Blog
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faCloud}
                                            $action={'menu-link'}
                                            $menu='about us'
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
                                            $action={'menu-link'}
                                            $menu='main'
                                        >
                                            Back
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            $action={'link'}
                                            $route={'/prices'}
                                            rightIcon={faChevronRight}
                                            $function={() => this.props.dispatch(selectEngineType('2L'))}
                                        >
                                            Less Than 2.0 Litres
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            $action={'link'}
                                            $route={'/prices'}
                                            rightIcon={faChevronRight}
                                            $function={() => this.props.dispatch(selectEngineType('2L-3L'))}
                                        >
                                            2.1 To 3.0 Litres
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            $action={'link'}
                                            $route={'/prices'}
                                            rightIcon={faChevronRight}
                                            $location={this.props.location.pathname}
                                            $function={() => this.props.dispatch(selectEngineType('3L+'))}
                                        >
                                            3.1 litres + 
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
                                            $action={'menu-link'}
                                            $menu='main'
                                        >
                                            Back
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faCheck}
                                            
                                        >
                                            MOT Test
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faOilCan}
                                            
                                        >
                                            Complete Servicing
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faOilCan}
                                            
                                        >
                                            Standard Servicing 
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faBolt}
                                            
                                        >
                                            Hybrid & Electric Cars 
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faSnowflake}
                                            
                                        >
                                            AirCon 
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faCircle}
                                            
                                        >
                                            Tyre Fitting
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faBriefcase}
                                            
                                        >
                                            Cam Belts
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faBriefcase}
                                            
                                        >
                                            Free Brake Check
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faBriefcase}
                                            
                                        >
                                            Clutch & Gearbox
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faBriefcase}
                                            
                                        >
                                            Exhausts
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faBriefcase}
                                            
                                        >
                                            Steering & Suspension
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            leftIcon={faBriefcase}
                                            
                                        >
                                            Other
                                        </DropDownMenuItem>
                                    </DropdownMenuSection>
                                </CSSTransition>
                                <CSSTransition
                                    in={this.props.activeMenu === "blog" ? true : false}
                                    timeout={500}
                                    classNames="menu-secondary"
                                    unmountOnExit
                                >
                                    <DropdownMenuSection>
                                        <DropDownMenuItem
                                            leftIcon={faChevronLeft}
                                            $action={'menu-link'}
                                            $menu='main'
                                        >
                                            Back
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            rightIcon={faChevronRight}
                                        >
                                            Car Maintainance
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            rightIcon={faChevronRight}
                                        >
                                            How To Guides
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            rightIcon={faChevronRight}
                                        >
                                            Motor Industry News
                                        </DropDownMenuItem>
                                    </DropdownMenuSection>
                                </CSSTransition>
                                <CSSTransition
                                    in={this.props.activeMenu === "about us" ? true : false}
                                    timeout={500}
                                    classNames="menu-secondary"
                                    unmountOnExit
                                >
                                    <DropdownMenuSection>
                                        <DropDownMenuItem
                                            leftIcon={faChevronLeft}
                                            $action={'menu-link'}
                                            $menu='main'
                                        >
                                            Back
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            rightIcon={faChevronRight}
                                        >
                                            Our Company
                                        </DropDownMenuItem>
                                        <DropDownMenuItem
                                            rightIcon={faChevronRight}
                                        >
                                            Our Loyalty Scheme
                                        </DropDownMenuItem>
                                    </DropdownMenuSection>
                                </CSSTransition>
                            </DropdownMenu>
                        </MobileDropDownButton>

                        
                    ) : null}
                </HeaderSection>
            </HeaderContainer>
        );
    }
}

const mapState = (state) => ({
    activeMenu: state.header.activeMobileMenu,
});

export default withRouter(connect(mapState)(Header))