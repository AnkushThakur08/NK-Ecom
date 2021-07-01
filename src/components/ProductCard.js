import React from "react";

const ProductCart = ({ img, title }) => {
  const PCard = () => {
    return (
      <div class="card" style="width: 18rem;">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">{title}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <img
        src={img}
        className="card-img-top overflow-hidden"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        alt="product"
      />
      <div className="card-body">
        <p className="card-text">{title}</p>
      </div>
    </div>
  );
};

export default ProductCart;
