import React from "react";
import product from "../assets/product.jpg";
import product1 from "../assets/Product1.jpeg";
import product2 from "../assets/Product2.jpeg";
import ProductCart from "./ProductCard";

const ProductSection = () => {
  return (
    <div className="row">
      <div className="col-12 col-md-3 rounded ">Category</div>

      <div className="col-12 col-md-6">
        {" "}
        <h1 style={{ textAlign: "center", color: "blue" }} className="my-3">
          Min 60% OFF
        </h1>
        <div className="row my-3">
          <div className="col-12 col-sm-12 col-md-6 ">
            <ProductCart img={product} title="Shirt" />
          </div>

          <div className="col-12 col-sm-12 col-md-6 ">
            <ProductCart img={product1} title="Flip-Flop" />
          </div>
        </div>
        <h2 style={{ textAlign: "center", color: "blue" }} className="my-3">
          SHOP MORE
        </h2>
      </div>

      <div className="col-12 col-md-3 rounded ">BestSellers</div>
    </div>
  );
};

export default ProductSection;
