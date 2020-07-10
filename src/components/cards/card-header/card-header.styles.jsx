import styled from "styled-components";

export const CardHeaderDiv = styled.div`
    font-size: 1.75vw;
    color: ${(props) => (props.color ? props.color : "DODGERBLUE")};
    font-weight: 600;
    ${props => props.mini ? 
    `
        @media (max-width: 750px) {
            font-size: 3vw;
        }

        @media (min-width: 1150px) {
            font-size: 1.25vw;
        }

    `
    :
    `
        @media (max-width: 750px) {
            font-size: 2vw;
        }

        @media (min-width: 1150px) {
            font-size: 1.75vw;
        }
    `
    }

`;
