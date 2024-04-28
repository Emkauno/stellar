import Link from "next/link";
import ProductItem from "./ProductItem";
import { FlexContainer } from "@/styles/FlexContainer";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import "splide-nextjs/splide/dist/css/themes/splide-default.min.css";

const Products = ({ products }) => {
  const { data } = products;
  return (
    <FlexContainer $width="100%" $maxWidth="1200px" $minHeight="350px">
      <Splide   options={{
        rewind: true,
        gap   : '1rem',
        perPage: 4,
        type: 'loop',
        perMove: 1,
        width: '90vw',
        fixedWidth: '200px',
        fixedHeight: '250px',
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
    </FlexContainer>
  );
};

export default Products;
