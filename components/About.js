import { AboutContainer, AboutContent } from "@/styles/AboutStyles";
import TabsSection from "./TabsSection";

const { FlexContainer } = require("@/styles/FlexContainer");

const About = () => {
  return (
    <FlexContainer $maxWidth="1200px">
          <TabsSection/>
    </FlexContainer>
  );
};

export default About;
