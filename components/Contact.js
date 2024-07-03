import { FlexContainer } from "@/styles/FlexContainer";
import { ContactContainer } from "@/styles/ContactStyles";
import Image from "next/image";

const Contact = () => {
  return (
    <FlexContainer $marginBottom="64px" $firstSection $direction="column" $background="rgba(34,34,34)"  key="contact" initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}}>
      <ContactContainer>
        <h2>Conversemos</h2>
        <p>
        ¿Tienes preguntas, comentarios o necesitas asesoramiento? ¡Estamos aquí para ayudarte en todo lo que necesites! No dudes en contactarnos a través de WhatsApp para recibir una atención personalizada y resolver cualquier inquietud que tengas.
        </p>
        <button>Contactar Ahora 
    <Image src="/whatsapp.png" width={24} height={24}/>

        </button>
      </ContactContainer>
    </FlexContainer>
  );
};

export default Contact;
