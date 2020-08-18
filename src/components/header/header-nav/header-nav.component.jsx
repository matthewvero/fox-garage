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

class HeaderNav extends React.Component {
    state = {
        activeMenu: "none",
    };

    render() {
        return (
            <HeaderSection>
                <HeaderNavComponent
                    dropdown
                    onMouseEnter={() => this.setState({ activeMenu: "prices" })}
                    onMouseLeave={() => this.setState({ activeMenu: "none" })}
                >
                    Prices
                    <HeaderDropDownIcon icon={faChevronDown} />
                    <CSSTransition
                        in={this.state.activeMenu === "prices" ? true : false}
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
                                $function={() => this.props.dispatch(selectEngineType('2L'))}
                            >
                                Less Than 2.0 Litres
                            </DropDownMenuItem>
                            <DropDownMenuItem 
                                header
                                rightIcon={faChevronRight}
                                $action='link'
                                $route='prices'
                                $function={() => this.props.dispatch(selectEngineType('2L-3L'))}
                            >
                                2.1 To 3.0 Litres
                            </DropDownMenuItem>
                            <DropDownMenuItem 
                                header
                                rightIcon={faChevronRight}
                                $action='link'
                                $route='prices'
                                $function={() => this.props.dispatch(selectEngineType('3L+'))}
                            >
                                3.1 litres +
                            </DropDownMenuItem>
                        </HeaderNavDropdown>
                    </CSSTransition>
                </HeaderNavComponent>
                <HeaderNavComponent
                    dropdown
                    onMouseEnter={() =>
                        this.setState({ activeMenu: "services" })
                    }
                    onMouseLeave={() => this.setState({ activeMenu: "none" })}
                >
                    Services
                    <HeaderDropDownIcon icon={faChevronDown} />
                    <CSSTransition
                        in={this.state.activeMenu === "services" ? true : false}
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
                            >
                                MOT Test
                            </DropDownMenuItem>
                            <DropDownMenuItem rightIcon={faChevronRight} header>
                                Complete Servicing
                            </DropDownMenuItem>
                            <DropDownMenuItem rightIcon={faChevronRight} header>
                                Standard Servicing
                            </DropDownMenuItem>
                            <DropDownMenuItem rightIcon={faChevronRight} header>
                                Hybrid & Electric Cars
                            </DropDownMenuItem>
                            <DropDownMenuItem rightIcon={faChevronRight} header>
                                AirCon
                            </DropDownMenuItem>
                            <DropDownMenuItem rightIcon={faChevronRight} header>
                                Tyre Fitting
                            </DropDownMenuItem>
                            <DropDownMenuItem rightIcon={faChevronRight} header>
                                Cam Belts
                            </DropDownMenuItem>
                            <DropDownMenuItem rightIcon={faChevronRight} header>
                                Free Brake Check
                            </DropDownMenuItem>
                            <DropDownMenuItem rightIcon={faChevronRight} header>
                                Clutch & Gearbox
                            </DropDownMenuItem>
                            <DropDownMenuItem rightIcon={faChevronRight} header>
                                Exhausts
                            </DropDownMenuItem>
                            <DropDownMenuItem rightIcon={faChevronRight} header>
                                Steering & Suspension
                            </DropDownMenuItem>
                            <DropDownMenuItem rightIcon={faChevronRight} header>
                                Other
                            </DropDownMenuItem>
                        </HeaderNavDropdown>
                    </CSSTransition>
                </HeaderNavComponent>
                <HeaderNavComponent
                    dropdown
                    onMouseEnter={() => this.setState({ activeMenu: "blog" })}
                    onMouseLeave={() => this.setState({ activeMenu: "none" })}
                >
                    Blog
                    <HeaderDropDownIcon icon={faChevronDown} />
                    <CSSTransition
                        in={this.state.activeMenu === "blog" ? true : false}
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
                    onMouseEnter={() => this.setState({ activeMenu: "about" })}
                    onMouseLeave={() => this.setState({ activeMenu: "none" })}
                >
                    About Fox
                    <HeaderDropDownIcon icon={faChevronDown} />
                    <CSSTransition
                        in={this.state.activeMenu === "about" ? true : false}
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

export default connect()(HeaderNav)
