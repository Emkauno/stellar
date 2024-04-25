import Link from 'next/link';
import ProductItem from './ProductItem';

const Products = ({ products }) => {
  return (
    <div className="products" id="products">
    {products?.map((product) => (
        <Link href={`/product/${product.permalink}`} key={product.id}>
            <a>
              <ProductItem
                product={product}
           />
         </a>
      </Link>
    ))}
</div>
  )
}

export default Products