import styled from "styled-components/macro";

export const CardSectionContainer = styled.div`
      display: flex; 
      height: 30%;
      width: 100%;
      justify-content: center;
      align-items: center;
      align-content: center;
      ${props => props.row ? 'flex-direction: row;' : 'flex-direction: column;'}
      

`