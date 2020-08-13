import { screenSizeTypes } from "./screen-size.types"


const initialState = {
      isMobile: window.innerWidth > 1150 ? true : false
}

const screenSizeReducer = (state = initialState, { type, payload }) => {
      switch (type) {

      case screenSizeTypes.setIsMobile:
            return { 
                  ...state, 
                  isMobile: payload }

      default:
            return state
      }
}

export default screenSizeReducer;