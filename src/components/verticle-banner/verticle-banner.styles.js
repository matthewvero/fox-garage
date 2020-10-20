import styled from "styled-components/macro";

export const VerticleBannerHeading = styled.div`
      position: absolute;
      z-index: 1;
      top: 20px;
      left: 20px;
      color: white;
      font-weight: 600;
      text-align: left;
      transition: all 200ms 200ms ease;
      font-size: 2rem;
`

export const VerticleBannerSlidingText = styled(VerticleBannerHeading)`
      transform: translateX(20vw);
      transition: all 200ms  ease;

`
export const VerticleBannerFader = styled.div`
      position: absolute;
      height: 100%;
      width: 100%;
      margin: -20px;
      transition: all 200ms ease;
      background-color: rgba(55,55,55, 0);
`

export const VerticleBannerContainer = styled.div`
      position: relative;
      width: 15vw;
      height: 35vw;
      padding: 20px;
      overflow: hidden;
      cursor: pointer;
      box-shadow: 0 0 10px #222222;
      
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