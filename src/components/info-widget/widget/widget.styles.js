import styled from "styled-components/macro";

export const SectionContainer = styled.div`
      width: 100%;
      max-height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      flex-grow: ${props => props.large ? 1 : 1};
      flex-basis: 50%;
      
      color: ${props => props.color};
      background-color: ${props => props.backgroundcolor};
      font-size: 1.50rem;
      font-weight: 600;

      ${props => props.otherStyles};
      
      box-sizing: border-box;

      ${props => props.warning ? 
            'background-color: rgb(255, 60, 60); color: white;' : null}

      @media (max-width: 1000px){
            flex-basis: 100%;
            text-align: center;
      }
`