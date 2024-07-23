import { Modal, ModalInfo } from "@/styles/ProductsStyles"
import parse from "html-react-parser"
import { useClickAway } from "@uidotdev/usehooks";

const ModalComponent = ({modalData, setIsModalOpen}) => {
  const { 
    name,
    price,
    image,
    description
  } = modalData

  let CLPeso = new Intl.NumberFormat('es-CL', {
		style: 'currency',
		currency: 'CLP',
	});

  const ref = useClickAway(() => {
    setIsModalOpen(false);
  });

  return (
    <Modal ref={ref}>
      <div className="close-btn" onClick={() => setIsModalOpen(false)}>
        <img src="/close.svg"/>
      </div>
      <ModalInfo>
      <div className="img-container">
        <img src={image.url}/>
      </div>
      <div className="item-details">
        <h3>{name}</h3>
        <span>{CLPeso.format(price?.raw)}</span>
        <div className="item-text">{parse(description)}</div>
      </div>
      </ModalInfo>
    </Modal>
  )
}

export default ModalComponent
