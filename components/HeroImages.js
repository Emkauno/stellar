import { HeroImagesContainer, HeroImageHolder } from "@/styles/HeroStyles"
import Image from "next/image"

const HeroImages = () => {
  return (
    <HeroImagesContainer>
      <HeroImageHolder>
        <Image src="/vape.jpg" alt="hero-image-one" fill/>
      </HeroImageHolder>
      <HeroImageHolder>
        <Image src="/greenhouse.jpg" alt="hero-image-one" fill/>
      </HeroImageHolder>
      <HeroImageHolder>
        <Image src="/pipe.jpg" alt="hero-image-one" fill/>
      </HeroImageHolder>
    </HeroImagesContainer>
  )
}

export default HeroImages