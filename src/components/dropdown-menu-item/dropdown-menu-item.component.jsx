import React from "react";

import {
    DropdownMenuItemContainer,
    DropdownMenuItemText,
    DropdownMenuItemIcon,
    IconContainer,
} from "./dropdown-menu-item.styles";
import { connect } from "react-redux";
import { setActiveMenu, toggleMobileMenu } from "../../redux/header/header.actions";
import { withRouter } from "react-router";


class DropDownMenuItem extends React.Component {

    state = {
        animate: false
    }
    handleClick = () => {
        this.setState({animate: true})

        switch(this.props.$action) {
            case('menu-link'):
                this.props.setActiveMenu(this.props.$menu)
                break;
            case('link'):
                this.props.history.push(this.props.$route)
                break;
            case('mobile-menu-link'):
                this.props.history.push(`${this.props.$route}`)
                this.props.toggleMobileMenu()
                break;
            default:
                return;
        }

        if(this.props.$function) {
            this.props.$function()
        }

        

    }
    
    render() {
        const {children, leftIcon, rightIcon, header} = this.props
        return (
            <DropdownMenuItemContainer header={header} animate={this.state.animate} onClick={this.handleClick}>

                <IconContainer>
                    {leftIcon ? <DropdownMenuItemIcon icon={leftIcon} /> : null}
                </IconContainer>

                <DropdownMenuItemText header={header}>{children}</DropdownMenuItemText>

                { rightIcon ?  

                    <IconContainer>
                        <DropdownMenuItemIcon icon={rightIcon} />
                    </IconContainer>
                    
                    : null
                }

            </DropdownMenuItemContainer>
        );
    }
};

const dispatchProps = (dispatch) => ({
    setActiveMenu: menu => dispatch(setActiveMenu(menu)),
    toggleMobileMenu: () => dispatch(toggleMobileMenu())

})

export default withRouter(connect(null, dispatchProps)(DropDownMenuItem));
