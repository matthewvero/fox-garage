import styled from "styled-components/macro";

export const Wrapper = styled.div`
.page-enter {
      opacity: 0;
    }
    .page-enter-active {
      opacity: 1;
      transition: opacity 400ms;
    }
    .page-exit {
      opacity: 1;
    }
    .page-exit-active {
      opacity: 0;
      transition: opacity 400ms;
    }

`