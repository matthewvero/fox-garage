import styled from "styled-components/macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CardIconElement = styled(FontAwesomeIcon)`
      color: DODGERBLUE;
      z-index: 2;
      margin: 0 10px;
      ${props => props.mini ? 
            `
                font-size: 1.5rem;
            `
            :
            `
                  font-size: 2rem;

            `
            }
`