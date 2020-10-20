import styled from "styled-components/macro";

export const EngineSelectorButtonHighlight = styled.div`
      z-index: 1;
      position: absolute;
      right: 0;
      top: 0px;
      height: 100%;
      width: 33.33%;
      box-shadow: inset 0 0 10px #999999;
      transition: all 200ms ease;
      ${props => {
            if(props.activeEngine === '2L'){
                  return 'transform: translateX(-40vw);'
            } else if (props.activeEngine === '2L-3L') {
                  return 'transform: translateX(-20vw);'
            } else {
                  return 'transform: translateX(0);'
            }
      }}

`
