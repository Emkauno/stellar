import { HeroImagesContainer, HeroImageHolder } from "@/styles/HeroStyles"
import Image from "next/image"

const HeroImages = () => {
  return (
    <HeroImagesContainer>
      <HeroImageHolder>
        <Image src="/bud.avif" alt="hero-image-one" fill/>
      </HeroImageHolder>
      <HeroImageHolder>
        <Image src="/leaf.avif" alt="hero-image-one" fill/>
      </HeroImageHolder>
      <HeroImageHolder>
        <Image src="/budone.avif" alt="hero-image-one" fill/>
      </HeroImageHolder>
    </HeroImagesContainer>
  )
}

export default HeroImages