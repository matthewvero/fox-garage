import React from "react";

import {
    DropdownMenuItemContainer,
    DropdownMenuItemText,
    DropdownMenuItemIcon,
    IconContainer,
} from "./dropdown-menu-item.styles";

const DropDownMenuItem = ({ children, leftIcon,  action, menu, rightIcon}) => {
    return (
        <DropdownMenuItemContainer onClick={() => action(menu)}>
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
};

export default DropDownMenuItem;
