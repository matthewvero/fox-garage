import styled from 'styled-components';

export const ImageContentBoxContainer = styled.div`
      background-color: rgba(40, 40, 40, 0.7);
      border-top: solid 5px ${props => props.topColor};
      position: absolute; 
      height: 60%; 
      width: 100%;
      left: 0px;
      top: 20%;
      z-index: 1;
`