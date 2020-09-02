import React from "react";
import { HeaderDropDownIcon, HeaderSection } from "../header/header.styles";
import {
    faChevronDown,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { HeaderNavComponent } from "./header-nav.styles";
import { CSSTransition } from "react-transition-group";
import HeaderNavDropdown from "../header-nav-dropdown/header-nav-dropdown.component";
import DropDownMenuItem from "../../dropdown-menu-item/dropdown-menu-item.component";
import { connect } from "react-redux";
import { selectEngineType } from "../../../redux/engine-selector/engine-selector.actions";
import { setActiveNavBarMenu } from "../../../redux/header/header.actions";

class HeaderNav extends React.Component {
    state = {
        activeMenu: "none",
        
    };

    

    render() {
        const {setActiveNavBarMenu, selectEngineType} = this.props;
        return (
            <HeaderSection>
                <HeaderNavComponent
                    dropdown
                    onMouseEnter={() => setActiveNavBarMenu( "prices")}
                    onMouseLeave={() => setActiveNavBarMenu( "none")}
                >
                    Prices
                    <HeaderDropDownIcon icon={faChevronDown} />
                    <CSSTransition
                        in={this.props.activeNavBarMenu === "prices" ? true : false}
                        timeout={500}
                        classNames="nav-menu"
                        unmountOnExit
                    >
                        <HeaderNavDropdown>
                            <DropDownMenuItem 
                                header
                                rightIcon={faChevronRight}
                                $action='link'
                                $route='prices'
                                $function={() => {
                                    selectEngineType('2L')
                                    setActiveNavBarMenu( "none")
                                }}
                            >
                                Less Than 2.0 Litres
                            </DropDownMenuItem>
                            <DropDownMenuItem 
                                header
                                rightIcon={faChevronRight}
                                $action='link'
                                $route='prices'
                                $function={() => {
                                    selectEngineType('2L-3L') 
                                    setActiveNavBarMenu( "none")
                                }}
                            >
                                2.1 To 3.0 Litres
                            </DropDownMenuItem>
                            <DropDownMenuItem 
                                header
                                rightIcon={faChevronRight}
                                $action='link'
                                $route='prices'
                                $function={() => {
                                    selectEngineType('3L+')
                                    setActiveNavBarMenu( "none")
                                }}
                            >
                                3.1 litres +
                            </DropDownMenuItem>
                        </HeaderNavDropdown>
                    </CSSTransition>
                </HeaderNavComponent>
                <HeaderNavComponent
                    dropdown
                    onMouseEnter={() =>
                        setActiveNavBarMenu( "services" )
                    }
                    onMouseLeave={() => setActiveNavBarMenu( "none" )}
                >
                    Services
                    <HeaderDropDownIcon icon={faChevronDown} />
                    <CSSTransition
                        in={this.props.activeNavBarMenu === "services" ? true : false}
                        timeout={500}
                        classNames="nav-menu"
                        unmountOnExit
                    >
                        <HeaderNavDropdown>
                            <DropDownMenuItem 
                                header
                                rightIcon={faChevronRight}
                                $action='link'
                                $route='mot'
                                $function={() => setActiveNavBarMenu( "none")}
                            >
                                MOT Test
                            </DropDownMenuItem>
                            <DropDownMenuItem 
                                rightIcon={faChevronRight} 
                                header
                                $action='link'
                                $route='completeservice'
                                $function={() => setActiveNavBarMenu( "none")}
                            >
                                Complete Servicing
                            </DropDownMenuItem>
                            <DropDownMenuItem 
                                rightIcon={faChevronRight} 
                                header
                                $action='link'
                                $route='standardservice'
                                $function={() => setActiveNavBarMenu( "none")}
                            >
                                Standard Servicing
                            </DropDownMenuItem>
                            <DropDownMenuItem 
                                rightIcon={faChevronRight} 
                                header
                                $action='link'
                                $route='hybridandev'
                                $function={() => setActiveNavBarMenu( "none")}
                            >
                                Hybrid & Electric Cars
                            </DropDownMenuItem>
                            <DropDownMenuItem 
                                rightIcon={faChevronRight} 
                                header
                                $action='link'
                                $route='aircon'
                                $function={() => setActiveNavBarMenu( "none")}
                            >
                                AirCon
                            </DropDownMenuItem>
                            <DropDownMenuItem 
                                rightIcon={faChevronRight} 
                                header
                                $action='link'
                                $route='tyrefitting'
                                $function={() => setActiveNavBarMenu( "none")}
                            >
                                Tyre Fitting
                            </DropDownMenuItem>
                            <DropDownMenuItem 
                                rightIcon={faChevronRight} 
                                header
                                $action='link'
                                $route='cambelts'
                                $function={() => setActiveNavBarMenu( "none")}
                            >
                                Cam Belts
                            </DropDownMenuItem>
                            <DropDownMenuItem 
                                rightIcon={faChevronRight} 
                                header
                                $action='link'
                                $route='brakecheck'
                                $function={() => setActiveNavBarMenu( "none")}
                            >
                                Free Brake Check
                            </DropDownMenuItem>
                            <DropDownMenuItem 
                                rightIcon={faChevronRight} 
                                header
                                $action='link'
                                $route='clutchandgearbox'
                                $function={() => setActiveNavBarMenu( "none")}
                            >
                                Clutch & Gearbox
                            </DropDownMenuItem>
                            <DropDownMenuItem 
                                rightIcon={faChevronRight} 
                                header
                                $action='link'
                                $route='exhaust'
                                $function={() => setActiveNavBarMenu( "none")}
                            >
                                Exhausts
                            </DropDownMenuItem>
                            <DropDownMenuItem 
                                rightIcon={faChevronRight} 
                                header
                                $action='link'
                                $route='steeringandsuspension'
                                $function={() => setActiveNavBarMenu( "none")}
                            >
                                Steering & Suspension
                            </DropDownMenuItem>
                            <DropDownMenuItem 
                                rightIcon={faChevronRight} 
                                header
                                $action='link'
                                $route='other'
                                $function={() => setActiveNavBarMenu( "none")}
                            >
                                Other
                            </DropDownMenuItem>
                        </HeaderNavDropdown>
                    </CSSTransition>
                </HeaderNavComponent>
                <HeaderNavComponent
                    dropdown
                    onMouseEnter={() => setActiveNavBarMenu( "blog" )}
                    onMouseLeave={() => setActiveNavBarMenu( "none" )}
                >
                    Blog
                    <HeaderDropDownIcon icon={faChevronDown} />
                    <CSSTransition
                        in={this.props.activeNavBarMenu === "blog" ? true : false}
                        timeout={500}
                        classNames="nav-menu"
                        unmountOnExit
                    >
                        <HeaderNavDropdown>
                            <DropDownMenuItem rightIcon={faChevronRight} header>
                                Car Maintainance
                            </DropDownMenuItem>
                            <DropDownMenuItem rightIcon={faChevronRight} header>
                                How To Guides
                            </DropDownMenuItem>
                            <DropDownMenuItem rightIcon={faChevronRight} header>
                                Motor Industry News
                            </DropDownMenuItem>
                        </HeaderNavDropdown>
                    </CSSTransition>
                </HeaderNavComponent>
                <HeaderNavComponent
                    dropdown
                    onMouseEnter={() => setActiveNavBarMenu( "about" )}
                    onMouseLeave={() => setActiveNavBarMenu( "none" )}
                >
                    About Fox
                    <HeaderDropDownIcon icon={faChevronDown} />
                    <CSSTransition
                        in={this.props.activeNavBarMenu === "about" ? true : false}
                        timeout={500}
                        classNames="nav-menu"
                        unmountOnExit
                    >
                        <HeaderNavDropdown>
                            <DropDownMenuItem rightIcon={faChevronRight} header>
                                Our Company
                            </DropDownMenuItem>
                            <DropDownMenuItem rightIcon={faChevronRight} header>
                                Our Loyalty Scheme
                            </DropDownMenuItem>
                        </HeaderNavDropdown>
                    </CSSTransition>
                </HeaderNavComponent>

                <HeaderNavComponent>Contact Us</HeaderNavComponent>
            </HeaderSection>
        );
    }
}

const mapDispatch = dispatch => ({
    setActiveNavBarMenu: menu => dispatch(setActiveNavBarMenu(menu)),
    selectEngineType: engine => dispatch(selectEngineType(engine))
})

const mapProps = state => ({
    activeNavBarMenu: state.header.activeNavBarMenu
})

export default connect(mapProps, mapDispatch)(HeaderNav)
