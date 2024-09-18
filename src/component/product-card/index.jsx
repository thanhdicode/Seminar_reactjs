import React from "react";
import api from "../../config/axios";
import "./index.scss";
function ProductCard({ koiFish }) {
  const handleAddToCart = async () => {
    try {
      const response = await api.post("cart", {
        productId: koiFish.id,
        quantity: 1,
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="product-card">
      <img src={koiFish.image} alt="" />

      <p className="name">{koiFish.name}</p>
      <p className="price">{koiFish.price}</p>

      <center>
        <button onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
      </center>
    </div>
  );
}

export default ProductCard;
