import React from "react";

const ProductCart = ({ img, title }) => {
  return (
    <div className="card m-5" style={{ width: "18rem", border: "none" }}>
      <img className="card-img-top" src={img} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

export default ProductCart;
