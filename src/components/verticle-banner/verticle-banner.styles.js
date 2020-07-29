import styled from 'styled-components'

export const VerticleBannerHeading = styled.div`
      font-size: 2rem;
      color: white;
      font-weight: 600;
      text-align: left;
      z-index: 2;
      position: absolute
      top: 20px;
      left: 20px;
      transition: all 200ms 200ms ease;
`

export const VerticleBannerSlidingText = styled(VerticleBannerHeading)`
      transform: translateX(20vw);
      transition: all 200ms  ease;

`
export const VerticleBannerFader = styled.div`
      position: absolute;
      height: 100%;
      width: 100%;
      transition: all 200ms ease;
      margin: -20px;
      background-color: rgba(55,55,55, 0);
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
      padding: 20px;
      overflow: hidden;
      &:hover ${VerticleBannerFader} {
            background-color: rgba(55,55,55, 0.5);

      }

      &:hover ${VerticleBannerHeading} {
            transition: all 200ms ease;

            transform: translateY(29vw);

      }
      &:hover ${VerticleBannerSlidingText} {
            transform: translateX(0);
            transition: all 200ms 200ms ease;

      }

`