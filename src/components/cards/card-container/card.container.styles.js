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
      background-image: url('${props => props.backgroundImage}');
      background-size: cover;
      background-position: center;
      position: relative;
      ${
            props => props.mini ? 
            `
                  height: 5vw;
                  width: 25%; 
                  flex-direction: row;
                  flex-wrap: wrap;
                  
                  padding: 0 20px;
                  @media (max-width: 1000px) {
                        width: 80%;
                        height: 10vw;
                        justify-content: space-between;
                  }
            `
            :
            `
                  height: 20vw;
                  width: 20%;
            `
      
      }
`



