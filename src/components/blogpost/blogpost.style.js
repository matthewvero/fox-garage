import styled, { keyframes } from 'styled-components';

export const BlogPostContainer = styled.div`
      min-height: 15vh;
      width: 98%;
      margin: 1% 1%;
      margin-right: 1vw;
      display: flex;

      background-color: #666666;
      box-shadow: 0 0 15px #222222;
      border-radius: 10px;
      

`;

export const BlogPostImageContainer = styled.div`
      position: relative;
      height: 13vh;
      min-width: 13vh;
      margin: 1vh;
      overflow: hidden;
      
      box-shadow: 0 0 5px #222222;
      border-radius: 15px;
`;

export const BlogPostContentBox = styled.div`
      width: 100%;
      padding: 1vh 3vh;
      display: flex;
      flex-direction: column; 
      align-items: start;
      justify-content: space-around;
      
      text-align: left;
      color: white;
`;

const slider = keyframes`
      0%{background-position: 100% 0%}
      50%{background-position: 0% 0%}
      100%{background-position: 100% 0%}

`;

export const BlogPostContentPlaceholder = styled.div`
      width: 100%;
      height: 20px; 
      display: flex;
      align-items: center;
      
      border-radius: 15px;
      background: linear-gradient(90deg, #444444, #777777,  #444444);
      background-size: 400% 400%;
      box-shadow: inset 0 0 5px #222222;
      opacity: 1;
      animation: ${slider} 10s linear infinite reverse;

`


