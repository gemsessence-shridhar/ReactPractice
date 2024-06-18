const Reviews = (props) => {
  const { params: { productId }, searchParams } = props;
  console.log(searchParams)

  return (<div>
    <h1>Reviews Page for Produc {productId}</h1>
    <h3>Review1</h3>
    <h3>Review2</h3>
    <h3>Review3</h3>
  </div>)
}

export default Reviews;