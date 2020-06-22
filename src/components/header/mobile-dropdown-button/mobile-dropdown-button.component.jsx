import React from "react";
import { DropDownButton, HamburgerLine } from "./mobile-dropdown-button.styles";
import { HeaderNavComponent } from "../header/header.styles";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { toggleMobileMenu } from "../../../redux/header/header.actions";

class MobileDropDownButton extends React.Component {
    
    render() {
        return (
            <HeaderNavComponent>
                <DropDownButton
                    open={this.props.mobileMenuOpen}
                    onClick={() => this.props.toggleMobileMenu()}
                >
                    <HamburgerLine />
                    <HamburgerLine />
                    <HamburgerLine />
                </DropDownButton>
                <CSSTransition
                    in={this.props.mobileMenuOpen}
                    classNames="dropdown"
                    timeout={500}
                    unmountOnExit
                >
                    {this.props.children}
                </CSSTransition>
            </HeaderNavComponent>
        );
    }
}

const mapState = (state) => ({
    mobileMenuOpen: state.header.mobileMenuVisible,
});

const mapDispatch = (dispatch) => ({
    toggleMobileMenu: () => dispatch(toggleMobileMenu())
});

export default connect(mapState, mapDispatch)(MobileDropDownButton);
