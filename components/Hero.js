import { useRef, useState } from "react";
import { HeroTitle, MbBackground, Gradient } from "@/styles/HeroStyles";
import { useScroll, useTransform } from "framer-motion";
import { FlexContainer } from "@/styles/FlexContainer";
import HeroImages from "./HeroImages";

const Hero = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const [coordinates, setCoordinates] = useState({firstValue: -1, secondValue: 5, thirdValue: -100, fourthValue: 700})

  const lg = useTransform(scrollYProgress, [0, 3.5], [0, 400]);
  const sm = useTransform(scrollYProgress, [coordinates?.firstValue, coordinates.secondValue], [coordinates.thirdValue, coordinates.fourthValue]);


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
      <Gradient/>
      <FlexContainer $padding="0" key="HeroLabel" $minHeight="200px">
        <HeroTitle>
          <h1>
            <span>
              PRODUCTOS FINOS Y DISTINTOS
            </span>
            <span>PARA LOS <span className="bold">CULTIVADORES</span> Y LA <span className="bold">CULTURA</span></span>
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
