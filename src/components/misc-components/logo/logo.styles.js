import styled from 'styled-components'

export const LogoContainer = styled.div`
margin: 20px;
      display: flex;
      flex-direction: row; 
      justify-content: center;
`
export const LogoComponent = styled.div`
font-family: "Comfortaa", cursive;
font-size: 1.75rem;
padding: 15px 20px;
color: DODGERBLUE;
border: solid 3px DODGERBLUE;
border-radius: 50px;
height: 60%;
&:hover {
    background-color: white;
    color: #bbbbbb;
    border-color: #bbbbbb;
}

align-self: ${props => props.alignment};
justify-self: ${props => props.justify};
`