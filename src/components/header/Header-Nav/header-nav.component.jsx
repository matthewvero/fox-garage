import React                  from 'react'
import {
      HeaderDropDownIcon,
      HeaderSection,
}                             from '../header/header.styles'
import { faChevronDown, faChevronRight, faCheck, faOilCan, faBolt, faSnowflake, faCircle, faBriefcase }      from "@fortawesome/free-solid-svg-icons";
import {HeaderNavComponent}   from './header-nav.styles'
import { CSSTransition } from 'react-transition-group';
import HeaderNavDropdown from '../header-nav-dropdown/header-nav-dropdown.component';
import DropDownMenuItem from '../../dropdown-menu-item/dropdown-menu-item.component';

class HeaderNav extends React.Component {
      state = { 
            activeMenu: 'none'
      }

      render() {

            return (
                  <HeaderSection>
                  <HeaderNavComponent 
                        dropdown 
                        onMouseEnter={() => this.setState({activeMenu: 'prices'})}
                        onMouseLeave={() => this.setState({activeMenu: 'none'})}
                  >
                        Prices 
                        <HeaderDropDownIcon icon={faChevronDown}/>
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
                                    >
                                          Less Than 2.0 Litres
                                    </DropDownMenuItem>
                                    <DropDownMenuItem
                                    header
                                    rightIcon={faChevronRight}
                                    >
                                          2.1 To 3.0 Litres
                                    </DropDownMenuItem>
                                    <DropDownMenuItem
                                    header
                                    rightIcon={faChevronRight}
                                    >
                                          3.1 litres + 
                                    </DropDownMenuItem>
                                    
                              </HeaderNavDropdown>
                        </CSSTransition>
                                
                  </HeaderNavComponent>
                  <HeaderNavComponent 
                        dropdown 
                        onMouseEnter={() => this.setState({activeMenu: 'services'})}
                        onMouseLeave={() => this.setState({activeMenu: 'none'})}
                        >
                        Services 
                        <HeaderDropDownIcon icon={faChevronDown}/>
                        <CSSTransition
                                    in={this.state.activeMenu === "services" ? true : false}
                                    timeout={500}
                                    classNames="nav-menu"
                                    unmountOnExit
                              >
                              <HeaderNavDropdown>
                                    <DropDownMenuItem
                                          leftIcon={faCheck}
                                          header
                                    >
                                          MOT Test
                                    </DropDownMenuItem>
                                    <DropDownMenuItem
                                          leftIcon={faOilCan}
                                          header
                                    >
                                          Complete Servicing
                                    </DropDownMenuItem>
                                    <DropDownMenuItem
                                          leftIcon={faOilCan}
                                          header
                                    >
                                          Standard Servicing 
                                    </DropDownMenuItem>
                                    <DropDownMenuItem
                                          leftIcon={faBolt}
                                          header
                                    >
                                          Hybrid & Electric Cars 
                                    </DropDownMenuItem>
                                    <DropDownMenuItem
                                          leftIcon={faSnowflake}
                                          header
                                    >
                                          AirCon 
                                    </DropDownMenuItem>
                                    <DropDownMenuItem
                                          leftIcon={faCircle}
                                          header
                                    >
                                          Tyre Fitting
                                    </DropDownMenuItem>
                                    <DropDownMenuItem
                                          leftIcon={faBriefcase}
                                          header
                                    >
                                          Cam Belts
                                    </DropDownMenuItem>
                                    <DropDownMenuItem
                                          leftIcon={faBriefcase}
                                          header
                                    >
                                          Free Brake Check
                                    </DropDownMenuItem>
                                    <DropDownMenuItem
                                          leftIcon={faBriefcase}
                                          header
                                    >
                                          Clutch & Gearbox
                                    </DropDownMenuItem>
                                    <DropDownMenuItem
                                          leftIcon={faBriefcase}
                                          header
                                    >
                                          Exhausts
                                    </DropDownMenuItem>
                                    <DropDownMenuItem
                                          leftIcon={faBriefcase}
                                          header
                                    >
                                          Steering & Suspension
                                    </DropDownMenuItem>
                                    <DropDownMenuItem
                                          leftIcon={faBriefcase}
                                          header
                                    >
                                          Other
                                    </DropDownMenuItem>
                              </HeaderNavDropdown>
                        </CSSTransition>
                                
                  </HeaderNavComponent>
                  <HeaderNavComponent 
                        dropdown 
                        onMouseEnter={() => this.setState({activeMenu: 'blog'})}
                        onMouseLeave={() => this.setState({activeMenu: 'none'})}
                        >
                        Blog 
                        <HeaderDropDownIcon icon={faChevronDown}/>
                        <CSSTransition
                                    in={this.state.activeMenu === "blog" ? true : false}
                                    timeout={500}
                                    classNames="nav-menu"
                                    unmountOnExit
                              >
                              <HeaderNavDropdown>
                                    <DropDownMenuItem
                                          rightIcon={faChevronRight}
                                          header
                                    >
                                          Car Maintainance
                                    </DropDownMenuItem>
                                    <DropDownMenuItem
                                          rightIcon={faChevronRight}
                                          header
                                    >
                                          How To Guides
                                    </DropDownMenuItem>
                                    <DropDownMenuItem
                                          rightIcon={faChevronRight}
                                          header
                                    >
                                          Motor Industry News
                                    </DropDownMenuItem>
                                    
                              </HeaderNavDropdown>
                        </CSSTransition>
                                
                  </HeaderNavComponent>
                  <HeaderNavComponent 
                        dropdown 
                        onMouseEnter={() => this.setState({activeMenu: 'about'})}
                        onMouseLeave={() => this.setState({activeMenu: 'none'})}
                        >
                        About Fox 
                        <HeaderDropDownIcon icon={faChevronDown}/>
                        <CSSTransition
                                    in={this.state.activeMenu === "about" ? true : false}
                                    timeout={500}
                                    classNames="nav-menu"
                                    unmountOnExit
                              >
                              <HeaderNavDropdown>
                                    <DropDownMenuItem
                                          rightIcon={faChevronRight}
                                          header
                                    >
                                          Our Company
                                    </DropDownMenuItem>
                                    <DropDownMenuItem
                                          rightIcon={faChevronRight}
                                          header
                                    >
                                          Our Loyalty Scheme
                                    </DropDownMenuItem>
                                    
                              </HeaderNavDropdown>
                        </CSSTransition>
                                
                  </HeaderNavComponent>

                  <HeaderNavComponent>Contact Us</HeaderNavComponent>
                  </HeaderSection>
                  )
            }
      }

export default HeaderNav
