import { headerTypes } from "./header.types";

const INITIAL_STATE = {
    mobileMenuVisible: false,
    activeMobileMenu: "main",
    priceMenuVisible: false,
    servicesMenuVisible: false,
    mobileMenuHeight: 250,
    activeNavbarMenu: 'none'
};

const headerReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case headerTypes.toggleMobileMenu:
            return {
                ...state,
                mobileMenuVisible: !state.mobileMenuVisible,
            };
        case headerTypes.setActiveMobileMenu:
            return {
                ...state,
                activeMobileMenu: payload,
            };
        case headerTypes.togglePricesMenu:
            return {
                ...state,
                pricesMenuVisible: !state.pricesMenuVisible,
            };
        case headerTypes.toggleServicesMenu:
            return {
                ...state,
                servicesMenuVisible: !state.servicesMenuVisible,
            };
        case headerTypes.setMobileMenuHeight:
            return {
                ...state,
                mobileMenuHeight: payload,
            };
        case headerTypes.setActiveNavBarMenu:
            return {
                ...state,
                activeNavBarMenu: payload,
            };

        default: {
            return state;
        }
    }
};

export default headerReducer;
