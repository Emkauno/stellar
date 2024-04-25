import { AnimatePresence } from "framer-motion"
const { FlexContainer } = require("@/styles/FlexContainer")

const Hero = () => {
  return (
    <FlexContainer $minHeight="calc(100vh - 212px)" $direction="row" $padding="32px 0" initial={{y:20,opacity: 0}} animate={{y:0,opacity: 1}} transition={{duration: .3}} $gap="32px">
      <FlexContainer $maxWidth="50%">
        Hola
      </FlexContainer>
      <FlexContainer $maxWidth="50%">
        Chao
      </FlexContainer>
    </FlexContainer>
  )
}

export default Hero