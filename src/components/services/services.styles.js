import styled from 'styled-components';

export const ServicesContainer = styled.div`
      width: 100%;
      display: flex;
      flex-direction: row; 
      flex-wrap: nowrap; 
      background-color: #666666;
      justify-content: space-around;
      margin: 30px 0;
`

export const ServiceTileContainer = styled.div`
      width: 20%;
      box-shadow: 0 0 15px #444444;
      display: flex;
      flex-direction: column;
      justify-content: space-around; 
      height: 25vh;
      margin: 10px;
      box-sizing: border-box;
      background-color: ${props => props.$backgroundColor ? props.$backgroundColor : 'background-color: #222222'};
      padding: 20px;
      background-image: url(${props => props.$backgroundImage});
      background-size: cover;
      background-position: center;
      position: relative;
`

export const ServiceTileTitle = styled.div`
      font-size: 1.5vw;
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