import styled from "styled-components/macro";

export const WidgetParagraphContainer = styled.div`
      margin: ${props => props.$margin ? props.$margin : '10px 0'};

`

export const WidgetParagraphContent = styled.p`
      padding-left: 50px;
      padding: 0 20px;
      margin: 0;
      
      color: ${props => props.$color};
      line-height: 1.3;
      text-align: ${props => props.$textAlign ? props.$textAlign : 'center'};
      font-size: ${props => props.$fontSize ? props.$fontSize : '1.25vw'};
      font-weight: ${props => props.$fontWeight ? props.$fontWeight : '400'};

      @media (max-width: 1000px) {
            font-size: 2.5vw;
      }
      @media (max-width: 550px) {
            font-size: 3.5vw;
      }
      
`

