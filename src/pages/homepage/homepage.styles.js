import styled from 'styled-components'

export const HomepageContainer = styled.div`
      width: 100%;
      height: auto;
      min-height: 100vh;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-content: start;
      @media (max-width: 800px) {
            flex-direction: column;
            align-content: center;
      }
`