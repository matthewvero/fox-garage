import styled from 'styled-components';

export const CarouselImageContainer = styled.img`
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;

      ${props => props.preload ? 'z-index: 1;' : 'z-index: 0;'}
      &.preloadimage-enter {
            opacity: 0;
      }
      &.preloadimage-enter-active {
            opacity: 1;
            transition: opacity 500ms linear;
      }
      &.preloadimage-exit {
            transform: translateY(0%);
      }
      &.preloadimage-exit-active {
            transition: transform 500ms linear;
            transform: translateY(100%);
      }
`