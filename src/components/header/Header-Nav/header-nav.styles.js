import styled from 'styled-components';

export const HeaderNavComponent = styled.div`
    padding: 0px 1.5vw;
    height: 100%;
    background-color: #666666;
    display: flex;
    font-size: 1.2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    transition: all 200ms ease;
      width: 8vw;
    ${props => props.dropdown? 
      `
            &:hover {
                  background-color: #444444;
                  width: 200px;
            }
      ` : null
}      
`;