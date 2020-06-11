import styled from 'styled-components'

export const SectionContainer = styled.div`
      width: 100%;
      max-height: 100%;
      color: ${props => props.color};
      background-color: ${props => props.backgroundcolor};
      font-size: 1.50rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      flex-grow: ${props => props.large ? 1 : 1};
      flex-basis: 50%;
      font-weight: 600;
      ${props => props.otherStyles};
      box-sizing: border-box;
      ${props => props.warning ? 
            'background-color: rgb(255, 100, 100); color: white;' : null}

      @media (max-width: 1000px){
            flex-basis: 100%;
            text-align: center;
      }
`