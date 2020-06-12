import styled from 'styled-components'

export const CustomButtonContainer = styled.div`
      width: 100%;
`

export const CustomButtonInput = styled.button`
      margin: 0 10%;
      padding: 10px 0;
      width: 80%;
      outline: none; 
      border-radius: 5px;
      border: none;
      box-shadow: 0 2px 5px #777777;
      background-color: DODGERBLUE;
      color: white;
      font-size: 2vw;
      transform: translate(0px, -5px);
      cursor: pointer;
      &:hover {
            transform: translate(0px, 0px);
            box-shadow: none;
            background-color: #778899;
      }

      @media (max-width: 1000px) {
            font-size: 4vw;
            width: 50%;
            align-self: center;
            margin: 20px;
      }
`