import styled from "styled-components/macro";
export const ServicesContainer = styled.div`
      width: 100%;
      margin: 30px 0;
      display: flex;
      justify-content: space-around;
      background-color: #666666;
      @media (max-width: 1150px) {
            flex-wrap: wrap;
      }
`

export const ServiceTileContainer = styled.div`
      position: relative;
      height: 15vw;
      width: 20%;
      margin: 10px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around; 
      box-sizing: border-box;

      background-color: ${props => props.$backgroundColor ? props.$backgroundColor : 'background-color: #222222'};
      background-image: url(${props => props.$backgroundImage}) cover center;
      box-shadow: 0 0 15px #444444;

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
      z-index: 1;
      color: white;
      font-size: 1.5vw;
      
      @media (max-width: 1150px) {
            font-size: 2.5vw;
      }
      @media (max-width: 800px) {
            font-size: 4vw;
      }
`

export const ServiceTileBackgroundFader = styled.div`
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(50, 50, 50, 0.7);

`

export const ServiceTileButton = styled.div`
      z-index: 1;
      width: 80%;
      height: 30%;
      margin: 0 10%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      background-color: DODGERBLUE;
      color: white;
      box-shadow: 0 0 10px #222222;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1.2vw;
      
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