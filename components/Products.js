import Link from "next/link";
import ProductItem from "./ProductItem";
import { FlexContainer } from "@/styles/FlexContainer";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import "splide-nextjs/splide/dist/css/themes/splide-default.min.css";
import { ProductsContainer } from "@/styles/ProductsStyles";

const Products = ({ products }) => {
  const { data } = products;
  return (
    <ProductsContainer $direction="column" $width="100%" $gap="32px" $maxWidth="1200px" $minHeight="350px"  key="products"  initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}}>
      <h2 className="products-header">Productos</h2>
      <Splide   options={{
        rewind: true,
        gap   : '5px',
        type: 'loop',
        perMove: 1,
        width: '90vw',
        fixedWidth: '250px',
        fixedHeight: '300px',
        perPage: 4,
        focus: 'center',
        breakpoints: {
          900: {
            perPage: 3
          },
          600: {
            perPage:2
          }
        }
      } }>
        {data?.map((product) => (
          <SplideSlide key={product.id}>
            {/* <Link href={`/product/${product.permalink}`} key={product.id}> */}
              <ProductItem product={product} />
            {/* </Link> */}
          </SplideSlide>
        ))}
      </Splide>
    </ProductsContainer>
  );
};

export default Products;
