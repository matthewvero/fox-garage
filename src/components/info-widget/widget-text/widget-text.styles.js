import styled from 'styled-components';

export const WidgetTextContainer = styled.div`
      

`

export const WidgetTextContent = styled.p`
      font-size: ${props => {
            switch(props.textSize) {
                  case 'subtext':
                        return '1.25vw'
                  case 'heading':
                        return '2.5vw'
                  default :
                  return '2vw'
            }
      }};
      @media (max-width: 1000px) {
            font-size: ${props => {
                  switch(props.textSize) {
                        case 'subtext':
                              return '3.2vw'
                        case 'heading':
                              return '4.7vw'
                        default :
                        return '3.5vw'
                  }
            }};
      }
      color: ${props => props.color};
      padding: 5px 20px;
      margin: 2%;
`

// background-color: #555555;
// box-shadow: 0 0 10px #333333;