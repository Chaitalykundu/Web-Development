import React from "react";
import ProductCards from "./ProductCards";

export default function Product() {
  return (
    <>
      <h1>Products</h1>
      <div className="products">
        <ProductCards
          img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
          name="Cyxus"
          description="Non-Slip Fitness Leisure Running Sneakers"
          price="$29"
        />
        <ProductCards
          img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747"
          name="Vitike"
          description="Latest Men Sneakers -Black"
          price="$100"
        />
        <ProductCards
          img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437"
          name="Aomei"
          description="Men's Trend Casual Sports Shoe"
          price="$40"
        />
      </div>
    </>
  );
}
