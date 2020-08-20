import styled from "styled-components/macro";

export const LogoContainer = styled.div`
      display: flex;
      flex-direction: row; 
      justify-content: center;
`
export const LogoComponent = styled.div`
font-family: "Comfortaa", cursive;
font-size: 1.75rem;
padding: 10px 20px;
margin-top: 10px;
color: DODGERBLUE;
border: solid 3px DODGERBLUE;
border-radius: 50px;
height: 60%;
cursor: pointer;
&:hover {
    color: #bbbbbb;
    border-color: #bbbbbb;
}

align-self: ${props => props.alignment};
justify-self: ${props => props.justify};
`