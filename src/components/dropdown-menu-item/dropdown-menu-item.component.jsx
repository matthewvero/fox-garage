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

    state = {
        animate: false
    }
    handleClick = () => {
        this.setState({animate: true})

        if(this.props.action === 'menu-link') {
            this.props.setActiveMenu(this.props.menu)

        }
    }
    
    render() {
        const {children, leftIcon, rightIcon} = this.props
        return (
            <DropdownMenuItemContainer animate={this.state.animate} onClick={this.handleClick}>
                <IconContainer>
                    {leftIcon ? <DropdownMenuItemIcon icon={leftIcon} /> : null}
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
