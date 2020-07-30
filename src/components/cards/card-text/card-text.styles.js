import styled from "styled-components";

export const CardTextDiv = styled.div`
    color: white;
    z-index: 2;
    margin: 5px 0;
    @media (max-width: 750px) {
        font-size: ${props => props.mini ? `2vw` : `3vw`};
    }

    @media (min-width: 1150px) {
        font-size: ${props => props.mini ? `1vw` : `1.4vw`};
    }


`;
