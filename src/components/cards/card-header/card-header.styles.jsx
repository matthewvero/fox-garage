import styled from "styled-components/macro";

export const CardHeaderDiv = styled.div`
    z-index: 2;
    color: ${(props) => (props.color ? props.color : "DODGERBLUE")};
    font-size: 3vw;
    font-weight: 600;
    ${props => props.mini ? 
    `
        @media (max-width: 750px) {
            font-size: 3vw;
        }

        @media (min-width: 750px) {
            font-size: 2vw;
        }

    `
    :
    `
        @media (max-width: 750px) {
            font-size: 3vw;
        }

        @media (min-width: 750px) {
            font-size: 2vw;
        }
    `
    }

`;
