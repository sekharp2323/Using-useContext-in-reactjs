import React,{useState,useContext, createContext} from 'react';

export const ProductContext=createContext();

const ProductContextProvider = ({children}) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 20 },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 30 },
  ]);
  const [cartItems,setCartItems] =useState([]);
  
  const addToCart = (product) => {
    console.log(`Adding ${product.name} to cart`);
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      // If item already exists in the cart, increase the quantity by 1
      const updatedCartItems = cartItems.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      // If item does not exist in the cart, add it with a quantity of 1
      const newCartItem = { ...product, quantity: 1 };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  return (
    <ProductContext.Provider value={{products,addToCart}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider;
