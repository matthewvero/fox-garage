import React                        from 'react'
import { CustomButtonInput, CustomButtonSlider, CustomButtonIcon }        from './custom-button.styles'
import { faPoundSign } from '@fortawesome/free-solid-svg-icons'

const CustomButton = ({children, $fontsize}) => {
      return (
            <CustomButtonInput $fontsize={$fontsize}>
                  <CustomButtonSlider/>
                  <CustomButtonIcon icon={faPoundSign}/>
                  {children}
            </CustomButtonInput>
      )
}

export default CustomButton
