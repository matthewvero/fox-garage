import React                        from 'react'
import { CustomButtonInput }        from './custom-button.styles'

const CustomButton = ({children}) => {
      return (
            <CustomButtonInput>{children}</CustomButtonInput>
      )
}

export default CustomButton
