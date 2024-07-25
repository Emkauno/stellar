import { FlexContainer } from "@/styles/FlexContainer";
import { ContactContainer } from "@/styles/ContactStyles";
import Image from "next/image";

const Contact = () => {
  return (
    <FlexContainer $firstSection $direction="column" key="contact" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} $noMbPadding>
      <ContactContainer>
        <h2>Conversemos</h2>
        <p>
          ¿Tienes preguntas, comentarios o necesitas asesoramiento? ¡Estamos aquí para ayudarte en todo lo que necesites! No dudes en contactarnos a través de WhatsApp para recibir una atención personalizada y resolver cualquier inquietud que tengas.
        </p>
        <p>
          Para realizar una compra, envíanos un mensaje por WhatsApp o un correo electrónico a <strong>ventas@stellartienda.cl</strong> <br/> A partir de ahí finalizamos con boleta o factura y organizaremos el envío.

        </p>
        <a href="https://wa.me/56983269643?text=Hola,%20me%20interesa%20un%20producto%20de%20Stellar%20Tienda">Contactar Ahora
          <Image src="/whatsapp.png" width={24} height={24} />
        </a>
      </ContactContainer>
    </FlexContainer>
  );
};

export default Contact;
