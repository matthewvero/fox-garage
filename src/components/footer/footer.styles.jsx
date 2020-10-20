import styled from "styled-components/macro";

export const FooterContainer = styled.div`
      max-width: 100vw;
      padding: 20px;
      display: flex;
      flex-flow: row nowrap; 
      justify-content: space-between;
      align-items: space-between;
      background-color: #666666;
      
      @media (max-width: 1000px) {
            flex-flow: column nowrap; 
            align-items: center;
            justify-content: space-between;
      }
`

export const FooterSection = styled.div`
      width: 40%;
      padding: 20px;
      display: flex; 
      flex-flow: row wrap; 
      justify-content: space-between;
      background-color: #444444;
      box-shadow: inset 0 0 10px #222222;
      
      @media (max-width: 1000px){
            width: 80%;
            margin: 20px 0;
      }
`

export const FooterList = styled.div`
      display: flex;
      width: 50%;
      flex-flow: column wrap;
      text-align: left;
`

export const FooterListItem = styled.div`
      margin: 10px 0;
      display: flex; 
      justify-content: space-between;
      color: white;
      font-size: 1rem;
`

export const FooterContactSection  = styled.div`
      display: flex; 
      width: 100%;
      height: 30%;
      flex-wrap: wrap;
      justify-content: space-around;
      align-content: space-around;

`

export const FooterHeader = styled.div`
      margin: 20px 0;
      color: DODGERBLUE;
      font-size: 2rem;

`

export const FooterCopyRightSection = styled.div`
      width: 100%;
      height: 50px;
      display: flex;
      flex-direction: columm;
      justify-content: center; 
      align-items: center;
      background-color: #222222;
      color: white;
      font-size: 1rem;
`