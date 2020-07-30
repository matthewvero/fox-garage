import styled from "styled-components";

export const CardHeaderDiv = styled.div`
    font-size: 3vw;
    color: ${(props) => (props.color ? props.color : "DODGERBLUE")};
    font-weight: 600;
    z-index: 2;
    margin: 5px 0;
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
            font-size: 1.75vw;
        }
    `
    }

`;
