import React from 'react'
import {BookNowButtonContainer, BookNowIcon, BookNowText} from './book-now.styles'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const BookNowButton = () => {
      return (
            <BookNowButtonContainer>
                   <BookNowIcon icon={faPlus}/>
                  <BookNowText>
                        Book Now
                  </BookNowText>
            </BookNowButtonContainer>
      )
}

export default BookNowButton
