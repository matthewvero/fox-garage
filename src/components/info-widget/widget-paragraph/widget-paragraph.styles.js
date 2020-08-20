import styled from "styled-components/macro";

export const WidgetParagraphContainer = styled.div`
      margin: ${props => props.$margin ? props.$margin : '10px 0'};

`

export const WidgetParagraphContent = styled.p`
      font-size: 1.25vw;
      font-weight: 400;
      color: ${props => props.$color};
      padding: 0 20px;
      margin: 0;
      text-align: ${props => props.$textAlign ? props.$textAlign : 'center'};
      line-height: 1.3;
      padding-left: 50px;
      @media (max-width: 1000px) {
            font-size: 2.5vw;
      }
      @media (max-width: 550px) {
            font-size: 3.5vw;
      }
      
`

