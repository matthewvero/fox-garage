import styled from 'styled-components'

export const HomepageContainer = styled.div`
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-content: stretch;
      @media (max-width: 800px) {
            flex-direction: column;
      }
`