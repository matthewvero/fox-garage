import styled from "styled-components/macro";
export const ImageMain = styled.img`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
`

export const ImagePreLoad = styled(ImageMain)`
      transition: opacity 400ms ease;
      opacity: ${props => props.loaded ? '0' : '1'};
`