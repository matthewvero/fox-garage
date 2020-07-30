import React                  from 'react'
import { 
      PhoneNumberContainer,
      PhoneNumberText 
}                             from './phone-number.styles'

const PhoneNumber = ({children}) => {
      return (
            <PhoneNumberContainer>
                  <PhoneNumberText>{children}</PhoneNumberText>
            </PhoneNumberContainer>
      )
}

export default PhoneNumber
