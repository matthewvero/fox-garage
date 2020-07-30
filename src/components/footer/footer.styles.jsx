import styled from 'styled-components';

export const FooterContainer = styled.div`
      max-width: 100vw;
      height: 400px;
      display: flex;
      flex-flow: row no-wrap; 
      justify-content: space-between;
      background-color: #666666;
      padding: 20px;
      align-items: space-between;
`

export const FooterSection = styled.div`
      display: flex; 
      flex-flow: row wrap; 
      width: 30%;
      padding: 20px;
      justify-content: space-between;
      background-color: #444444;
      box-shadow: inset 0 0 10px #222222;
`

export const FooterList = styled.div`
      display: flex;
      flex-flow: column wrap;
      width: 50%;
      text-align: left;
`

export const FooterListItem = styled.div`
      font-size: 1rem;
      color: white;
      margin: 10px 0;
      display: flex;
      flex-direction: row; 
      justify-content: space-between;
`

export const FooterContactSection  = styled.div`
      display: flex; 
      width: 100%;
      height: 30%;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-content: space-around;

`

export const FooterHeader = styled.div`
      font-size: 2rem;
      color: DODGERBLUE;
      margin: 20px 0;

`

export const FooterCopyRightSection = styled.div`
      width: 100%;
      height: 50px;
      background-color: #222222;
      color: white;
      font-size: 1rem;
      display: flex;
      flex-direction: columm;
      justify-content: center; 
      align-items: center;
`