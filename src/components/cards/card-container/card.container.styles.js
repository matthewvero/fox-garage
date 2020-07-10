import styled from 'styled-components';

export const CardContainer = styled.div`
      margin: 20px;
      background-color: #444444;
      display: flex;
      flex-direction: column;
      padding: 10px;
      justify-content: space-evenly;
      align-items: center;
      box-shadow: inset 0 0 10px #222222;
      ${
            props => props.mini ? 
            `
                  height: 5vw;
                  width: 20%; 
                  flex-direction: row;
                  flex-wrap: wrap;
            `
            :
            `
                  height: 20vw;
                  width: 20%;
            `
      
      }
`



