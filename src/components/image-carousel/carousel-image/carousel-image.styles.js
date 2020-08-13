import styled from 'styled-components';

export const CarouselImageContainer = styled.img`
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;

      ${props => props.preload && 'z-index: 1'}
      &.preLoadImage-enter {
            opacity: 0;
          }
          &.preLoadImage-enter-active {
            opacity: 1;
            transition: opacity 400ms ease;
          }
          &.preLoadImage-exit {
            opacity: 1;
          }
          &.preLoadImage-exit-active {
            opacity: 0;
            transition: opacity 400ms ease;
          }
`