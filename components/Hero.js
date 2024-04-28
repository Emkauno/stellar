import { useRef } from "react";
import { HeroTitle, MbBackground } from "@/styles/HeroStyles";
import { useScroll, useTransform } from "framer-motion";
import { FlexContainer } from "@/styles/FlexContainer";
import HeroImages from "./HeroImages";
const Hero = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const lg = useTransform(scrollYProgress, [0, 3.5], [0, 400]);
  const sm = useTransform(scrollYProgress, [0, 1.5], [400, -200]);

  return (
    <>
        <MbBackground />
        <FlexContainer
      $firstSection={true}
      $overflow="hidden"
      ref={container}
      key="HeroContainer"
      $justifyContent="center"
      $minHeight="calc(100vh - 212px)"
      $direction="column"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      $gap="32px"
    >
      <FlexContainer $padding="0" key="HeroLabel" $minHeight="200px">
        <HeroTitle>
          <h1>
            <span>
              Impulsa el <span className="bold">Progreso</span>
            </span>
            <span>Desata el potencial</span>
          </h1>
          <span className="kicker">Eleva tu Cultivo, cosecha excelencia</span>
        </HeroTitle>
      </FlexContainer>
      <FlexContainer key="HeroImage" style={{ y: sm }} $padding="0">
        <HeroImages />
      </FlexContainer>
    </FlexContainer>
    </>
    
  );
};

export default Hero;
