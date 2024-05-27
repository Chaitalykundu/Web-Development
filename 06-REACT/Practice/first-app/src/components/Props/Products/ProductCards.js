import React from 'react'

export default function ProductCards(props) {
  return (
    <>
      <div className="products">
      <img src= {props.img} alt="products"/>
        
        <h3>Name = {props.name}</h3>
        <p> {props.description}</p>
        <h3>Price = {props.price}</h3>
      </div>
    </>
  )
}



// ALTERNATIVE ( Read props inside the child component )

// function ProductCards  ({ img, name, description, price}) {
//   return (
//     <div>
//     <img src={img} alt="products" />
//       <h4>{name}</h4>
//       <p>{description}</p>
//       <h4>{price}</h4>
//     </div>
//   );
// }

// export default ProductCards