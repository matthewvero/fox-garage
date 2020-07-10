import styled from 'styled-components'

export const VerticleBannerHeading = styled.div`
      font-size: 2rem;
      color: DODGERBLUE;


`

export const VerticleBannerFader = styled.div`
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 1;
      transition: all 200ms ease;
`
export const VerticleBannerContainer = styled.div`
      width: 15vw;
      height: 35vw;
      background-image: url(${props => props.backgroundImage});
      background-position: center;
      background-size: cover; 
      position: relative;
      box-shadow: 0 0 10px #222222;
      cursor: pointer;
      &:hover ${VerticleBannerFader} {
            background-color: rgba(55,55,55, 0.5);

      }
`