import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100vw;
  height: 800px;
  background: rgb(33,34,33);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 50px;
  top: 0;
  z-index: -2;
`

export const AboutContent = styled.div`
background:
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 auto;
    h2 {
    color: #FCFCF7;
  }
  p {
    color: #FCFCF7;
  }
`