import styled from 'styled-components'

export const WidgetBox = styled.div`
      width: ${props => props.width === 'wide' ? '60vw' : '40vw'};
      min-height: 35vw;
      margin: 0 10%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap; 
      box-shadow: 0 0 10px #aaaaaa;
      overflow: hidden;
      margin: 20px;
      background-color: white;

      @media (max-width: 1000px){
            width: 90vw;
            flex-direction: column;
      }
`