import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CarouselContainer = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    
    background-color: white;
    background-color: #666666;
    overflow: hidden;
`;

export const CarouselCard = styled.div`
    position: absolute;
    left: 20%;
    top: 10%;
    width: 60%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
    
    background-color: #444444;
    box-shadow: inset 0 0 10px #222222;
`;

export const CarouselCardSection = styled.div`
    z-index: 2;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &.carouselcard-enter {
        position: absolute;
        transform: translate(${(props) => props.inDirection}300%, 0);
    }
    &.carouselcard-enter-active {
        transition: all 400ms ease;
        transform: translate(0%, 0);
    }
    &.carouselcard-exit {
        position: absolute;
    }
    &.carouselcard-exit-active {
        transition: all 400ms ease;
        transform: translate(${(props) => props.outDirection}300%, 0);
    }
`;

export const CarouselButton = styled(FontAwesomeIcon)`
    position: absolute;
    top: 40%;
    padding: 30px 20px;
    color: DODGERBLUE;
    &:hover {
        background-color: rgba(55, 55, 55, 0.6);
    }
    cursor: pointer;
    font-size: 3rem;
    @media (max-width: 1150px) {
        &:hover {
            background-color: rgba(55, 55, 55, 0);
        }

        &:active {
            background-color: rgba(55, 55, 55, 0.6);
            box-shadow: inset 0 0 5px #222222;
        }
    }
`;

export const CarouselButtonLeft = styled(CarouselButton)`
    left: 0%;
`;

export const CarouselButtonRight = styled(CarouselButton)`
    right: 0%;
`;
