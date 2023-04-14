import React,{useContext} from 'react';
import { ProductContext } from '../context/ProductContext';

const Product = () => {
  const { products, addToCart } = useContext(ProductContext);

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

export default Product;
