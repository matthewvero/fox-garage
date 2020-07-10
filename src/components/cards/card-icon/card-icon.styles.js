import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CardIconElement = styled(FontAwesomeIcon)`
      color: DODGERBLUE;
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