import React from "react";
import {
    CustomButtonInput,
    CustomButtonSlider,
    CustomButtonIcon,
} from "./custom-button.styles";
import { faPoundSign } from "@fortawesome/free-solid-svg-icons";

const CustomButton = ({ children, $fontsize, $function, $opacity }) => {
    return (
        <CustomButtonInput
            $opacity={$opacity}
            $fontsize={$fontsize}
            onClick={$function}
        >
            <CustomButtonSlider />
            <CustomButtonIcon icon={faPoundSign} />
            {children}
        </CustomButtonInput>
    );
};

export default CustomButton;
