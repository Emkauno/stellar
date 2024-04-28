import { useRef } from 'react' 
import { HeroTitle } from "@/styles/HeroStyles"
import { useScroll, useTransform } from "framer-motion"
import { FlexContainer } from '@/styles/FlexContainer'
import HeroImages from './HeroImages'
const Hero = () => {

  const container = useRef(null)
  const { scrollYProgress } = useScroll({

    target: container,
    offset: ['start end', 'end start']

})

const lg = useTransform(scrollYProgress, [0, 3.5], [0, 400]);
const sm = useTransform(scrollYProgress, [0, 1.5], [400, -200]);




  return (
    <FlexContainer $maxWidth="95vw" $firstSection={true} $overflow="hidden" ref={container} key="HeroContainer" $justifyContent="flex-start" $minHeight="calc(100vh - 212px)" $direction="column" $padding="32px 0" initial={{y:20,opacity: 0}} animate={{y:0,opacity: 1}} transition={{duration: .3}} $gap="32px">
      <FlexContainer $padding="0" key="HeroLabel" style={{y: lg}}>
        <HeroTitle>
          <h1><span>Impulsa el <span className="bold">Progreso</span></span><span>Desata el potencial</span></h1>
          <span className="kicker-two">Eleva tu Cultivo, cosecha excelencia</span>
        </HeroTitle>
      </FlexContainer>
      <FlexContainer key="HeroImage" style={{y: sm}}>
        <HeroImages/>
      </FlexContainer>
    </FlexContainer>
  )
}

export default Hero