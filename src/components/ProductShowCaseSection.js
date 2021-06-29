import React from "react";
import ProductCart from "../components/ProductCart";
import product1 from "../assets/Product1.jpeg";
import product2 from "../assets/Product2.jpeg";

const ProductShowCaseSection = () => {
  return (
    <div className="row my-3">
      <div className="col-6 col-sm-6 col-md-3">
        <ProductCart img={product1} title="T-Shirt" />
      </div>

      <div className="col-6 col-sm-6 col-md-3 ">
        <ProductCart img={product2} title="Shirt" />
      </div>

      <div className="col-6 col-sm-6 col-md-3 ">
        <ProductCart img={product1} title="Flip-Flop" />
      </div>

      <div className="col-6 col-sm-6 col-md-3 ">
        <ProductCart img={product2} title="Shorts" />
      </div>
    </div>
  );
};

export default ProductShowCaseSection;
