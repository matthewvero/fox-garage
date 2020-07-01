import React                        from 'react'
import { CustomButtonInput, CustomButtonSlider, CustomButtonIcon }        from './custom-button.styles'
import { faPoundSign } from '@fortawesome/free-solid-svg-icons'

const CustomButton = ({children}) => {
      return (
            <CustomButtonInput>
                  <CustomButtonSlider/>
                  <CustomButtonIcon icon={faPoundSign}/>
                  {children}
            </CustomButtonInput>
      )
}

export default CustomButton
