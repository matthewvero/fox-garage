import styled from "styled-components/macro";
export const BannerBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    background-image: url(${(props) => props.backgroundImage}) cover center;
    transition: transform ease-in-out 1s;
`;

export const BackgroundFade = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;

    background-color: rgba(50, 50, 50, 0.6);
    transition: background-color ease 1s;
    
`;
export const BannerContainer = styled.div`

    position: relative;
    width: 95vw;
    min-height: 150px;
    margin: 50px 0;
    display: flex;
    align-items: center;
    justify-self: flex-start;
    justify-content: space-between;
    overflow: hidden;
 
    box-shadow: 0 0 10px #222222;
    cursor: pointer;

    &:hover ${BackgroundFade} {
        background-color: rgba(50, 50, 50, 0.2);
    }
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
`;

export const BannerTitle = styled.div`
    z-index: 2;
    margin: 0 40px;

    color: white;
    font-size: 3vw;
    text-align: end;
    font-weight: 400;
    text-align: center;
    @media (max-width: 1000px) {
        margin: 0;
    }

    @media (max-width: 800px) {
        font-size: 4vw;
    }
`;
export const BannerSubtitle = styled.div`
    z-index: 2;
    margin: 0 40px;

    color: rgb(50, 255, 150);
    
    font-size: 2.75vw;
    font-weight: 400;

    @media (max-width: 1000px) {
        margin: 0;
    }

    @media (max-width: 800px) {
        font-size: 4vw;
    }
`;

export const BannerTextContainer = styled.div`
    z-index: 2;
    width: 60%;
    
    color: white;
    display: flex;
    flex-direction: column;

    @media (max-width: 1000px) {
        width: 80%;
    }
`;
export const BannerImage = styled.div`
    z-index: 2;
    
    width: 100px;
    height: 100px;
    margin: 0 40px;
    border-radius: 5px;
    
    background: url(${(props) => props.backgroundImage}) center cover;

    @media (max-width: 1000px) {
        height: 50px;
        width: 50px;
    }
`;
