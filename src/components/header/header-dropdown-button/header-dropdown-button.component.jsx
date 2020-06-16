import React from "react";
import { DropDownButton, HamburgerLine } from "./header-dropdown-button.styles";
import { HeaderNavComponent } from "../header-component/header.styles";
import { CSSTransition } from "react-transition-group";

class HeaderDropDownButton extends React.Component {
    state = {
        open: false,
    };

    render() {
        return (
            <HeaderNavComponent>
                <DropDownButton
                    open={this.state.open}
                    onClick={() => this.setState({ open: !this.state.open })}
                >
                    <HamburgerLine />
                    <HamburgerLine />
                    <HamburgerLine />
                </DropDownButton>
                <CSSTransition
                    in={this.state.open}
                    classNames='dropdown'
                    timeout={500}
                    unmountOnExit
                >
                    {this.props.children}
                </CSSTransition>
            </HeaderNavComponent>
        );
    }
}

export default HeaderDropDownButton;
