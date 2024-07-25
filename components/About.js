import { AboutContainer, AboutContent } from "@/styles/AboutStyles";
import TabsSection from "./TabsSection";

const { FlexContainer } = require("@/styles/FlexContainer");

const About = () => {
  return (
    <FlexContainer $maxWidth="1200px" key="about"  initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} $noMbPadding>
          <TabsSection/>
    </FlexContainer>
  );
};

export default About;
