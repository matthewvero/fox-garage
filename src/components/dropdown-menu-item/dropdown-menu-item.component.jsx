import React from "react";

import {
    DropdownMenuItemContainer,
    DropdownMenuItemText,
    DropdownMenuItemIcon,
    IconContainer,
} from "./dropdown-menu-item.styles";
import { connect } from "react-redux";
import { setActiveMenu } from "../../redux/header/header.actions";

class DropDownMenuItem extends React.Component {
    handleClick = () => {

        if(this.props.action === 'menu-link') {
            this.props.setActiveMenu(this.props.menu)
        }
    }
    
    render() {
        const {children, leftIcon, rightIcon} = this.props
        return (
            <DropdownMenuItemContainer onClick={this.handleClick}>
                <IconContainer>
                    <DropdownMenuItemIcon icon={leftIcon} />
                </IconContainer>
                <DropdownMenuItemText>{children}</DropdownMenuItemText>
                {
                    rightIcon ?  
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
    setActiveMenu: menu => dispatch(setActiveMenu(menu))

})

export default connect(null, dispatchProps)(DropDownMenuItem);
