import styled from "styled-components/macro";

export const WidgetBox = styled.div`
      width: ${props => props.width};
      min-height: 35vw;
      margin: 0 10%;
      display: flex;
      flex-wrap: wrap; 
      overflow: hidden;
      margin: 20px;
      background-color: #666666;
      box-shadow: 0 0 20px #222222;
      @media (max-width: 1000px){
            width: 90vw;
            flex-direction: column;
            min-height: 35vw;
            max-height: none;
      }
`
