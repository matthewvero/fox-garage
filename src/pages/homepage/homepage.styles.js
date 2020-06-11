import styled from 'styled-components'

export const HomepageContainer = styled.div`
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      
      @media (max-width: 800px) {
            flex-direction: column;
      }
`