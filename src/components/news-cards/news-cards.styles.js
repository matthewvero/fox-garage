import styled from 'styled-components/macro';

export const NewsCardsContainer = styled.div`
      width: 100vw;
      display: flex;
      align-items: space-around;
      flex-direction: row;
      justify-content: space-around;
      @media (max-width: 1200px) {flex-wrap: wrap;}      
      
`;

export const NewsCard = styled.div`
      margin: 20px;
      height: 300px;
      width: 25%;
      background-color: #444444;
      box-shadow: inset 0 0 10px #222222;
      position: relative;
      box-shadow: 0 0 10px #222222;
      cursor: pointer;
`;

export const NewCardInfoBox = styled.div`
      position: absolute;
      top: 30%;
      left: 0;
      height: 40%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      background-color: rgba(50,50,50, 0.8);
      border-top: solid 5px ${props => props.$color ? props.$color : 'white'};
      z-index: 2;
`;

export const NewsCardTypeText = styled.div`
      color: ${props => props.$color ? props.$color : 'white'};
      font-size: 2vw;

`;

export const NewsCardText = styled.div`
      color: white;
      font-size: 1.5vw;
  
`;
