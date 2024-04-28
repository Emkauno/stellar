import Image from "next/image";
import { FlexContainer } from "@/styles/FlexContainer";
import { ProductCard, ProductWindow } from "@/styles/ProductCard";

const ProductItem = ({ product }) => {
  console.log(product);
  return (
		<ProductCard>
			<ProductWindow $image={product.image.url}/>
			{/* <Image src={product.image.url} alt={product.name} fill/> */}
			<h3>{product.name}</h3>
		</ProductCard>

  );
};

export default ProductItem;
