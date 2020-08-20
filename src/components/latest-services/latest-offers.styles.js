import styled from "styled-components/macro";

export const LatestOffersContainer = styled.div`
    width: 70%;

    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-self: flex-end;
    box-sizing: border-box;
    margin: 1vh 3vw;
    @media (max-width: 1150px) {
        width: 90%;
        margin: 1vh 0;
        align-self: center;
    }
`;

export const LatestOffersSection = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    box-sizing: border-box;
`;

export const LatestOfferItem = styled.div`
    width: 100%;
    height: 4vh;
    font-size: 1.2vw;
    color: white;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: #444444;
    margin: 1vh;
    padding: 5px 10px;
    box-shadow: inset 0 0 10px #222222;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 10px #000000;
    }
    @media (max-width: 1150px) {
        width: 90%;
        margin: 1vh 0;
        align-self: center;
        font-size: 2vw;
    };
`;

export const LatestOfferSectionTitle = styled.div`
    width: 100%;
    height: 5vh;
    font-size: 1.5vw;
    color: dodgerblue;
    text-align: left;
    padding: 0 1vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 1150px) {
        font-size: 2vw;
    }
    @media (max-width: 500px) {
        font-size: 3vw;
    }
`;

export const LatestOffersTitle = styled.div`
    font-size: 2.5vw;
    color: dodgerblue;
    margin: 5px 0;
    @media (max-width: 500px) {
        font-size: 4vw;
    }
    @media (max-width: 1150px) {
        font-size: 4vw;
    }
`
