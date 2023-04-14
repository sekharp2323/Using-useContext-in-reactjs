import React from 'react'
import Product from './pages/Product'
import ProductContextProvider from './context/ProductContext'

const App = () => {
  return (
    <div>
      <ProductContextProvider>
        <Product />
      </ProductContextProvider>
    </div>
  )
}

export default App
