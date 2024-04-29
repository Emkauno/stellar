import styled from 'styled-components'

export const SmokeContainer = styled.div`
  width: 100vw;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  position: fixed;
  z-index: -3;
  opacity: 0.4;
  filter: invert(1);
`
export const WhiteBg = styled.div`
  width: 100vw;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  position: fixed;
  z-index: -4;
  background: #fcfcf7;
`