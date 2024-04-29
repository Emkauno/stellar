import styled from 'styled-components'

export const SmokeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -3;
  opacity: 0.4;
  filter: invert(1);
  @media(max-width: 500px){
    display: none;
  }
`
export const WhiteBg = styled.div`
  width: 100vw;
  height: 100vh; 
  position: fixed;
  z-index: -4;
  background: #fcfcf7;
`