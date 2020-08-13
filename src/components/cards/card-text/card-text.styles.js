import styled from "styled-components";

export const CardTextDiv = styled.div`
    color: white;
    z-index: 2;
    font-size: 1.75vw;
    @media (max-width: 750px) {
        font-size: ${props => props.mini ? `2vw` : `2.75vw`};
    }

    @media (min-width: 1150px) {
        font-size: ${props => props.mini ? `1vw` : `1.4vw`};
    }


`;
