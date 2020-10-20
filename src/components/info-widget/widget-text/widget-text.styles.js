import styled from "styled-components/macro";

export const WidgetTextContainer = styled.div`
      width: 100%;

`

export const WidgetTextContent = styled.p`
      padding: 5px 20px;
      margin: 0.5%;
      font-size: ${props => {
            switch(props.$textSize) {
                  case 'subtext':
                        return '1.5vw'
                  case 'heading':
                        return '2.5vw'
                  default :
                  return '2vw'
            }
      }};
      @media (max-width: 1000px) {
            
            font-size: ${props => {
                  switch(props.$textSize) {
                        case 'subtext':
                              return '3vw'
                        case 'heading':
                              return '4vw'
                        default :
                        return '3vw'
                  }
            }};
      }
      @media (max-width: 500px) {
            font-size: ${props => {
                  switch(props.$textSize) {
                        case 'subtext':
                              return '4vw'
                        case 'heading':
                              return '5vw'
                        default :
                        return '3.5vw'
                  }
            }};
      }
      color: ${props => props.$color};
      text-align: ${props => props.$textAlign ? props.$textAlign : 'centre'};
      line-height: 1.2;
      font-weight: ${props => props.$fontWeight ? props.$fontWeight : 400};
`

// background-color: #555555;
// box-shadow: 0 0 10px #333333;