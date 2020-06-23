import styled from "styled-components";

export const BannerBackground = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.backgroundImage});
    background-position: center;
    background-size: cover;
    position: absolute;
    transition: transform ease-in-out 1s;
`;

export const BackgroundFade = styled.div`
    background-color: rgba(50, 50, 50, 0.6);
    position: absolute;
    height: 100%;
    width: 100%;
    transition: background-color ease 1s;
    
`;
export const BannerContainer = styled.div`
    cursor: pointer;
    width: 90%;
    min-height: 150px;
    margin: 50px 0;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-self: flex-start;
    justify-content: space-between;
    box-shadow: 0 0 10px #222222;
    overflow: hidden;
    &:hover ${BannerBackground} {
        transform: scale(1.1);
    }
    &:hover ${BackgroundFade} {
        background-color: rgba(50, 50, 50, 0.2);
    }

    ${props => props.animate ? 
        `
        &:hover ${BackgroundFade}{
            background-color: rgba(75, 75, 75, 0.8);
        }
        ${BannerBackground} {
            transform: scale(1.1);
        }
        ${BackgroundFade} {
            transition: background-color ease 1s;
            background-color: rgba(50, 50, 50, 0.2);
            
        }
        ` 
        : null
    }

    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
`;

export const BannerTitle = styled.div`
    font-size: 3vw;
    color: white;
    z-index: 2;
    margin: 0 40px;
    text-align: end;
    font-weight: 600;
    text-align: center;
    @media (max-width: 1000px) {
        margin: 0;
    }

    @media (max-width: 800px) {
        font-size: 4vw;
    }
`;
export const BannerSubtitle = styled.div`
    font-size: 2.75vw;
    color: white;
    z-index: 2;
    margin: 0 40px;
    color: rgb(50, 255, 150);
    font-weight: 600;
    @media (max-width: 1000px) {
        margin: 0;
    }

    @media (max-width: 800px) {
        font-size: 4vw;
    }
`;

export const BannerTextContainer = styled.div`
    color: white;
    z-index: 2;
    width: 60%;
    display: flex;
    flex-direction: column;

    @media (max-width: 1000px) {
        width: 80%;
    }
`;
export const BannerImage = styled.div`
    background-image: url(${(props) => props.backgroundImage});
    background-position: center;
    background-size: cover;
    width: 100px;
    height: 100px;
    margin: 0 40px;
    z-index: 2;
    border-radius: 5px;

    @media (max-width: 1000px) {
        height: 50px;
        width: 50px;
    }
`;
