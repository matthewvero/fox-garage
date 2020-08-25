import styled from "styled-components/macro";

export const InfoPageHeaderContainer = styled.div`
      width: 100vw;
      display: flex;
      flex-direction: row; 
      flex-wrap: nowrap; 
      @media (max-width: 1150px) {
            flex-direction: column;
      }
`

export const InfoPageHeaderTextContainer = styled.div`
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column; 
      flex-wrap: nowrap; 
      background-color: ${props => props.$color ? props.$color : 'DODGERBLUE'};
      align-items: flex-end;
      padding-top: 30px;
      @media (max-width: 1150px) {
            width: 100%;
            align-items: center;
      }
`

export const InfoPageTextList = styled.div`
      width: 40vw;
      height: 100%;
      display: flex;
      flex-direction: row; 
      flex-wrap: wrap; 
      justify-content: space-between;
      align-content: flex-start;
      color: white;
      padding: 20px 0;
      @media (max-width: 1150px) {
            width: 100%;
            align-content: center;
      }
`

export const InfoPageTextSubHeading = styled.div`
      width: 40vw;
      height: 30%;
      display: flex;
      flex-direction: column; 
      flex-wrap: wrap; 
      justify-content: space-around;
      align-content: flex-start;
      padding: 10px 0; 
      font-size: 2vw;
      color: white;
      font-weight: 400;
      @media (max-width: 1150px) {
            width: 100%;
            align-content: center;
            font-size: 3vw
      }
      @media (max-width: 500px) {
        font-size: 4vw;
      }
`

export const InfoPageTextHeading = styled(InfoPageTextSubHeading)`
      font-size: 2.3vw;
      font-weight: 600;
      @media (max-width: 1150px) {
            width: 100%;
            align-content: center;
            font-size: 3vw
      }
      @media (max-width: 500px) {
        font-size: 4vw;
    }
`


export const InfoPageTextListItem = styled.div`
      margin: 15px 0;
      text-align: start;
      width: 50%;
      font-weight: 600;
      font-size: 1.1vw;
      display: flex;
      flex-flow: row nowrap;
      justify-content: start;
      @media (max-width: 1150px) {
            font-size: 2vw;
            justify-content: center;
            text-align: left;
      }
      @media (max-width: 500px) {
        font-size: 3vw;
    }
`

export const InfoPageImageContainer = styled.div`
      width: 50%;
      position: relative;
      @media (max-width: 1150px) {
            width: 100%;
            height: 10vh;
            
      }
`