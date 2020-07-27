import styled from 'styled-components';

export const CardsWidgetcontainer = styled.div`
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      ${props => props.mini ? 
            'flex-flow: row wrap;'
            :
            'flex-flow: row nowrap' 
            
      }

      @media (max-width: 1000px){
            flex-flow: column nowrap;
            height: auto;
      }
`