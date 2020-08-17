import styled from 'styled-components';
export const ServicesContainer = styled.div`
      width: 100%;
      display: flex;
      flex-direction: row; 
      flex-wrap: nowrap; 
      background-color: #666666;
      justify-content: space-around;
      margin: 30px 0;
      @media (max-width: 1150px) {
            flex-wrap: wrap;
      }
`

export const ServiceTileContainer = styled.div`
      width: 20%;
      box-shadow: 0 0 15px #444444;
      display: flex;
      flex-direction: column;
      justify-content: space-around; 
      height: 15vw;
      margin: 10px;
      box-sizing: border-box;
      background-color: ${props => props.$backgroundColor ? props.$backgroundColor : 'background-color: #222222'};
      
      padding: 20px;
      background-image: url(${props => props.$backgroundImage});
      background-size: cover;
      background-position: center;
      position: relative;
      @media (max-width: 1150px) {
            width: 40%;
            ${props => !props.$titleBlock && 'width: 100%;'}
            height: 20vw;
      }
      @media (max-width: 800px) {
            width: 100%;
            padding: 0;
      }
`

export const ServiceTileTitle = styled.div`
      font-size: 1.5vw;
      @media (max-width: 1150px) {
            font-size: 2.5vw;
      }
      @media (max-width: 800px) {
            font-size: 4vw;
      }
      color: white;
      z-index: 1;
`

export const ServiceTileBackgroundFader = styled.div`
      width: 100%;
      height: 100%;
      background-color: rgba(50, 50, 50, 0.7);
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;

`

export const ServiceTileButton = styled.div`
      width: 80%;
      height: 30%;
      background-color: DODGERBLUE;
      font-size: 1.2vw;
      box-shadow: 0 0 10px #222222;
      border-radius: 5px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      z-index: 1;
      color: white;
      cursor: pointer;
      margin: 0 10%;
      @media (max-width: 1150px) {
            font-size: 1.4vw;
            width: 90%;
            
      }
      @media (max-width: 800px) {
            font-size: 4vw;
            width: 50%;
            margin: 0 25%;

      }
`