import styled from "styled-components";

export const CardHeaderDiv = styled.div`
    font-size: 1.75vw;
    color: ${(props) => (props.color ? props.color : "DODGERBLUE")};
    font-weight: 600;
    @media (max-width: 750px) {
        font-size: 5vw;
    }

    @media (max-width: 1150px) {
        font-size: 3vw;
    }
`;
