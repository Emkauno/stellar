import Image from "next/image";
import { FlexContainer } from "@/styles/FlexContainer";
import { ProductCard, ProductWindow } from "@/styles/ProductCard";

const ProductItem = ({ product, isModalOpen, setIsModalOpen, setModalData }) => {

	let CLPeso = new Intl.NumberFormat('es-CL', {
		style: 'currency',
		currency: 'CLP',
	});

	const modalHandler = () => {
		setIsModalOpen(!isModalOpen)
		setModalData(product)
	}

	return (
		<ProductCard onClick={() => modalHandler()}>
			<ProductWindow>
				<img src={product.image.url}/>
			</ProductWindow>
			<h3>{product.name}</h3>
			<p>{CLPeso.format(product?.price?.raw)}</p>
		</ProductCard>

	);
};

export default ProductItem;
