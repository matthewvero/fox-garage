import styled from "styled-components/macro";

export const CardContainer = styled.div`
      position: relative;
      margin: 10px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      
      background-color: #444444;
      box-shadow: inset 0 0 10px #222222;
      background-image: url('${props => props.$backgroundImage}') cover center;
      ${
            props => props.$mini ? 
            `
                  height: 5vw;
                  width: 45%; 
                  flex-direction: column;
                  flex-wrap: wrap;
                  
                  padding: 0 20px;
                  @media (max-width: 1000px) {
                        width: 80%;
                        height: 10vw;
                        justify-content: space-between;
                        margin: 5px;
                  }
            `
            :
            `
            @media (max-width: 1000px) {
                  margin: 20px 0;
                  width: 40%;
                  justify-content: center;
            }
                  height: 20vw;
                  width: 40%;
            `
      
      }
`



