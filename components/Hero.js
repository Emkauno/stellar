'use client'
const { FlexContainer } = require("@/styles/Containers.styles")

const Hero = () => {
  return (
    <FlexContainer $minHeight="calc(100vh - 212px)"  $padding="32px 0" initial={{y:20,opacity: 0}} animate={{y:0,opacity: 1}} transition={{duration: .3}} $gap="32px">
      <h1>wena</h1>
      <h2>hola</h2>
      <h3>hola</h3>
      <h4>hola</h4>
      <h5>hola</h5>
      <h6>hola</h6>
    </FlexContainer>
  )
}

export default Hero