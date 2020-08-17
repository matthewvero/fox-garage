import styled from 'styled-components';
export const ImageMain = styled.img`
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
`

export const ImagePreLoad = styled(ImageMain)`
      transition: opacity 400ms ease;
      opacity: ${props => props.loaded ? '0' : '1'};
`