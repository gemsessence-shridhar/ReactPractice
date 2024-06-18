"use client";

const Product = ({ id, name, imageUrl, details, price }) => {
  return (
    <>
      <br />
      <div>
        <img src={imageUrl} style={{ width: "100px", height: "100px"  }} />
        <div>
          <h1>#{id}</h1>
          <h2>{name}</h2>
          <h1>{price}</h1>
          <p>{details}</p>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Product;
