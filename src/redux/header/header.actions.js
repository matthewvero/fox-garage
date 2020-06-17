import { headerTypes } from "./header.types";

export const toggleMobileMenu = () => ({
    type: headerTypes.toggleMobileMenu,
});

export const setActiveMenu = (payload) => ({
    type: headerTypes.setActiveMobileMenu,
    payload: payload,
});

export const setMobileMenuHeight = (payload) => ({
    type: headerTypes.setMobileMenuHeight,
    payload: payload,
});
