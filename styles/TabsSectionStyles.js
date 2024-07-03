import styled from "styled-components";
import { motion } from "framer-motion";
export const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    height: 400px;
    width: 100%;
  }
`;
export const TabsHolder = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 64px 32px;
  @media (max-width: 768px) {
    padding: 32px;
  }
`;

export const TabsHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  @media(max-width: 580px){
    flex-direction: column;
  }
  button {
    padding: 0;
    border: none;
    background: none;
    position: relative;
    width: 50%;
    -webkit-tap-highlight-color: transparent;
    @media(max-width: 580px){
    width: 100%;
  }
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 1px solid rgba(255,255,255,.2);
    }
    &:hover {
      cursor: pointer;
    }
    .underline {
      width: 100%;
      height: 2px;
      position: absolute;
      bottom: 0;
      background-color: #fcfcf7;
    }
    &.active {
      h3 {
        color: #fcfcf7;
      }
    }
    h3 {
      width: 100%;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      margin: 0;
      letter-spacing: 0.15px;
      text-align: center;
      position: relative;
      padding: 10px 0;
      color: rgba(255,255,255,.5);
      transition: color 0.5s ease;
      text-transform: uppercase;
      font-weight: 200;
    }
  }
`;
export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 32px;
  background: rgb(34, 34, 34);
  box-shadow: rgba(0, 17, 51, 0.05) 0px 3px 15px 0px;
  p {
    color: white;
    font-size: 16px;
    margin-bottom: 32px;
  }
  @media(max-width: 750px){
    padding: 32px 20px;
  }
  h2 {
    color: rgb(34,34,34);
    font-size: 45px;
    margin-bottom: 48px;
    text-transform: uppercase;
    font-weight: 200;
    background: #fcfcf7;
    padding: 6px 18px;

    @media(max-width: 750px){
      font-size: 5vw;
      margin-bottom: 32px;
    }
    @media(max-width: 500px){
      font-size: 7vw;
    }
  }
`;

export const TabContainer = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  margin-top: 32px;
  display: flex;
  flex-direction: ${(props) =>
    props.$tabReverse === true ? "row-reverse" : "row"};
  align-items: flex-start;
  gap: 30px;
  min-height: 400px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    align-items: flex-start;
  }
  h3, span {
    width: 100%;
    font-size: 31px;
    font-weight: 800;
    letter-spacing: 0.15px;
    line-height: 40px;
    text-align: center;
    margin-bottom: 24px;
    z-index: 2;
    @media (max-width: 768px) {
      text-align: left;
      margin-bottom: 16px;
    }
    @media (max-width: 500px) {
      font-size: 22px;
      line-height: 28.6px;
      margin-bottom: 16px;
    }
  }
`;

export const Description = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 190px;
  span {
    text-align: left;
    color: #fcfcf7;
    text-transform: uppercase;
    font-weight: 200;
  }
  p {
    margin: 0;
  }
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;
export const ImageHolder = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 100%;
    height: 400px;
    object-fit: contain;
    @media (max-width: 768px) {
      width: 80%;
      height: 300px;
    }
    @media (max-width: 500px) {
      width: 100%;
    }
  }
`;
