"use client";

import Product from "./Product";

const ProductList = ({ products }) => {
  return products.map(product => <Product key={product.id} {...product} />)
}

export default ProductList;
