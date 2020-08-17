import React from 'react'
import {BookNowButtonContainer, BookNowIcon, BookNowText} from './book-now.styles'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router'
const HoveringBookNowButton = ({history}) => {
      return (
            <BookNowButtonContainer onClick={() => history.push('/prices')}>
                   <BookNowIcon icon={faPlus}/>
                  <BookNowText>
                        Book Now
                  </BookNowText>
            </BookNowButtonContainer>
      )
}

export default withRouter(HoveringBookNowButton) 
