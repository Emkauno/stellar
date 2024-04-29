import Image from "next/image";
import { FlexContainer } from "@/styles/FlexContainer";
import { ProductCard, ProductWindow } from "@/styles/ProductCard";

const ProductItem = ({ product }) => {

	let CLPeso = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
});


  return (
		<ProductCard>
			<ProductWindow $image={product.image.url}>
			</ProductWindow>
			<h3>{product.name}</h3>
			<p>{CLPeso.format(product?.price?.raw)}</p>
		</ProductCard>

  );
};

export default ProductItem;
