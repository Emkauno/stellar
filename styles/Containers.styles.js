import styled from 'styled-components'
import { motion } from 'framer-motion'


export const SiteWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: red;
`

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: blue;
`

export const FlexContainer = styled(motion.div)`
  width: 100%;
  padding: ${props => props.$padding || "0 32px"};
  display: flex;
  justify-content: ${props => props.$justifyContent || 'center'};
  align-items: ${props => props.$alignItems || 'center'};
  flex-direction: ${props => props.$direction || 'row'};
  background: ${props => props.$background || "transparent"};
  max-width: ${props => props.$maxWidth || "100%"};
  color: ${props => props.$color || "var(--primaryColor)"};
  gap: ${props => props.$gap || "0"};
  margin-top: ${props => props.$firstSection ? "32px" : "0"};
  min-height: ${props => props.$minHeight || 'unset'};
  @media(max-width: 900px){
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    padding: ${props => props.$padding || "0 12px"};
    margin-top: ${props => props.$firstSection ? "24px" : "0"};
    gap: ${props => props.$gap ? props.$gap : "48px"};
  }
  @media(max-width: 500px){
        padding: ${props => props.$padding || "0"};

  }

  .logo {
    width: 120px;
  }
  h1 {
    color: var(--primaryColor);
    text-align: center;
    span {
      color: var(--secondaryColor);
    }
  }
    form {
    width: 100%
  }
`;