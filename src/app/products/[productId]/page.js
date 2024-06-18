"use client"

const Product = (props) => {
  const { params: { productId }, searchParams } = props;
  console.log(searchParams)

  return (<div>
    <h1>Product Page</h1>
    <h3>Product { productId }</h3>
  </div>)
}

export default Product;