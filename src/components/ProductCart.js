import React from "react";

const ProductCart = ({ img, title }) => {
  return (
    <div className="card" style={{ border: "none" }}>
      <img className="card-img-top" src={img} alt="Card image cap" />
      <div className="card-body">
        <h4 className="card-title text-center">{title}</h4>
      </div>
    </div>
  );
};

export default ProductCart;
