import Link from "next/link";
import { useEffect, useState } from 'react'
import ProductItem from "./ProductItem";
import { FlexContainer } from "@/styles/FlexContainer";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import "splide-nextjs/splide/dist/css/themes/splide-default.min.css";
import { ModalContainer, ProductsContainer } from "@/styles/ProductsStyles";
import ModalComponent from "./ModalComponent";
import { AnimatePresence } from "framer-motion";
const Products = ({ products }) => {
  const { data } = products;
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState({hola: 'holi'})

  return (
    <ProductsContainer $direction="column" $width="100%" $gap="32px" $maxWidth="1200px" $minHeight="350px"  key="products"  initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}}>
      <h2 className="products-header">Productos</h2>
      <AnimatePresence mode="wait">
        {isModalOpen && 
          <ModalContainer initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .3}}>
            <ModalComponent modalData={modalData} setIsModalOpen={setIsModalOpen}/>
          </ModalContainer>
        }
      </AnimatePresence>

      <Splide   options={{
        rewind: true,
        gap   : '5px',
        perMove: 1,
        width: '90vw',
        perPage: 4,
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
              <ProductItem product={product} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setModalData={setModalData}/>
            {/* </Link> */}
          </SplideSlide>
        ))}
      </Splide>
    </ProductsContainer>
  );
};

export default Products;
