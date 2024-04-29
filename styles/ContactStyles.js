import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 32px 0;
  gap: 32px;
  h2 {
    color: rgb(34, 34, 34);
    font-size: 45px;
    text-transform: uppercase;
    font-weight: 200;
    background: #fcfcf7;
    padding: 6px 18px;
  }
  
  p {
    color: white;
    font-size: 16px;
    text-align: center;
    @media(max-width: 500px){
      text-align: left;
    }
  }

  button {
    background: #fcfcf7;
    padding: 12px 24px;
    outline: none;
    border: none;
    color: rgb(34, 34, 34);
    font-weight: 800;
    text-transform: uppercase;
    font-size: 18px;
    transform: scale(1);
    transition: all .3s ease;
    &:hover {
      cursor: pointer;
      transform: scale(1.12);
    }
  }
`