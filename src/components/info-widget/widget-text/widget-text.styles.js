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
      color: ${props => props.color};
      padding: 0 20px;
      margin: 0;
`