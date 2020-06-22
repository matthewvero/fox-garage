import styled from 'styled-components';

export const WidgetParagraphContainer = styled.div`
      margin: 20px 0;

`

export const WidgetParagraphContent = styled.p`
      font-size: 1vw;
      @media (max-width: 1000px) {
            font-size: 3vw;
      }
      color: ${props => props.color};
      padding: 0 20px;
      margin: 0;
`