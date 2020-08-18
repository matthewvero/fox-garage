import styled from 'styled-components';

export const InfoPageHeaderContainer = styled.div`
      width: 100vw;
      display: flex;
      flex-direction: row; 
      flex-wrap: nowrap; 
      background-color: red;
`

export const InfoPageHeaderTextContainer = styled.div`
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column; 
      flex-wrap: nowrap; 
      background-color: DODGERBLUE;
      align-items: flex-end;
      padding-top: 30px;
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
`

export const InfoPageTextHeadingSection = styled.div`
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
      font-weight: 600;
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
`

export const InfoPageImageContainer = styled.div`
      width: 50%;
      position: relative;
`