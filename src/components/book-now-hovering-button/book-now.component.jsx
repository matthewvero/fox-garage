import React, { useEffect, useState } from 'react'
import {BookNowButtonContainer, BookNowIcon, BookNowText} from './book-now.styles'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router'
const HoveringBookNowButton = ({history}) => {
      const [animate, setAnimate] = useState(true);

      useEffect(() => {
            setTimeout(() => setAnimate(false), 2000);
      }, []) 
      return (
            <BookNowButtonContainer animate={animate} onClick={() => history.push('/prices')}>
                   <BookNowIcon icon={faPlus}/>
                  <BookNowText>
                        Book Now
                  </BookNowText>
            </BookNowButtonContainer>
      )
}

export default withRouter(HoveringBookNowButton) 
