import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ productImg }) => {
  return (
    <div className="product-card">
      <small className="product-category">Category</small>
        <Link to="" className="product-img-holder">
        <img className="product-img" src={productImg} alt="" />
        </Link>
      <div className="product-data">
        <h2 className="product-name"><Link to="">Product Name</Link></h2>
        <h2 className="product-price">$ 200.00</h2>
        <div className="product-btns">
        <Link className="product-btn product-buy-btn" to="/all-product/1">
          Buy Now
        </Link>
        <button className="product-btn product-atc-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
