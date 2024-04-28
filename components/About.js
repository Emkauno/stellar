import { AboutContainer, AboutContent } from "@/styles/AboutStyles";

const { FlexContainer } = require("@/styles/FlexContainer");

const About = () => {
  return (
    <FlexContainer $minHeight="500px" $maxWidth="1200px">
      <AboutContainer>
      <FlexContainer $padding="0 32px" $maxWidth="100%" $margin="0 auto">
        <AboutContent>
          <h2>Test title</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            assumenda minima non veritatis nobis ea mollitia enim vel amet vero!
          </p>
        </AboutContent>
    </FlexContainer>
    </AboutContainer>

    </FlexContainer>
  );
};

export default About;
