import styled from 'styled-components';

export const EngineSelectorButtonHighlight = styled.div`
      height: 100%;
      width: 33.33%;
      box-shadow: inset 0 0 10px #999999;
      position: absolute;
      ${props => {
            if(props.activeEngine === '2L'){
                  return 'transform: translateX(-40vw);'
            } else if (props.activeEngine === '2L-3L') {
                  return 'transform: translateX(-20vw);'
            } else {
                  return 'transform: translateX(0);'
            }
      }}

      ${props => console.log(props)}
      right: 0;
      top: 0px;
      z-index: 1;
      transition: all 200ms ease;

`
