import styled from 'styled-components'




export const BannerBackground = styled.div`
      width: 100%;
      height: 100%;
      background-image: url(${props => props.backgroundImage});
      background-position: center;
      background-size: cover;
      position: absolute;
      transition: transform ease-in-out 1s;
      border-radius: 10px;
`

export const BackgroundFade = styled.div`
      background-color: rgba(50,50,50, 0.6);
      position: absolute;
      height: 100%;
      width: 100%;
      transition: background-color ease 300ms;
`
export const BannerContainer = styled.div`
      cursor: pointer;
      width: 90%;
      min-height: 150px;
      margin: 50px 0;
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 0 10px #555555;
      border-radius: 10px;
      overflow: hidden;
      &:hover ${BannerBackground} {
            transform: scale(1.1);
      }
      &:hover ${BackgroundFade} {
            background-color: rgba(50,50,50, 0.8);

      }
      @media (max-width: 1000px) {
            min-height: 100px;
      }
`

export const BannerTitle = styled.div`
      font-size: 3vw;
      color: white;
      z-index: 2;
      margin: 0 50px;
      text-align: end;
      font-weight: 600;

`
export const BannerSubtitle = styled.div`
      font-size: 2.75vw;
      color: white;
      z-index: 2;
      margin: 0 50px;
      color: rgb(50, 255, 150);
      font-weight: 600;
      
`

export const BannerTextContainer = styled.div`
      font-size: 3vw;
      color: white;
      z-index: 2;
      display: flex;
      flex-direction: column;

`
export const BannerImage = styled.div`
      background-image: url(${props => props.backgroundImage});
      background-position: center;
      background-size: cover;
      width: 100px;
      height: 100px;
      margin: 0 50px;
      z-index: 2;
      border-radius: 5px;

      @media (max-width: 1000px) {
            height: 50px;
            width: 50px;
      }
`

