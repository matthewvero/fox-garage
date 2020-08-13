import { screenSizeTypes } from "./screen-size.types";

export const setIsMobile = ( payload) => ({
      type: screenSizeTypes.setIsMobile,
      payload
});
