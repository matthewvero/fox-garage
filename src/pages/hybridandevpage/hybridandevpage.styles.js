import styled from 'styled-components/macro';

export const EVServiceContainer = styled.div`
      background-color: #444444;
      box-shadow: inset 0 0 15px #222222;
      width: 40%; 
      display: flex; 
      flex-direction: column;
      position: relative;
      margin: 5%;
      @media (max-width: 1150px) {
            width: 90%;
            box-sizing: border-box;
      }
`;