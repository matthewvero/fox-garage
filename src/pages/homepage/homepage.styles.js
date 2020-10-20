import styled from "styled-components/macro";

export const HomepageContainer = styled.div`
      width: 100%;
      min-height: 100vh;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-content: start;
      @media (max-width: 800px) {
            flex-direction: column;
            align-content: center;
      }
      overflow: auto;
      background-color: #444444;

`