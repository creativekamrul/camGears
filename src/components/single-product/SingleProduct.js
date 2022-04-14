import React from "react";
import DslrCam from "../../images/dslr_cam.png";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  return (
    <div>
      <div className="prodct-single-page-section-1">
        <div className="product-image">
          <img src={DslrCam} alt="" />
        </div>
        <div className="product-single-data">
          <h1>Product Title</h1>
          <h2>$200</h2>
          <p className="product-short-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque gravida dolor non ullamcorper blandit. Nam euismod
            pretium purus sit amet pharetra. Aenean vel odio nunc. Nunc turpis
            enim,
          </p>
          <div className="product-btns">
            <Link className="product-btn product-buy-btn" to="/all-products/1">
              Buy Now
            </Link>
            <button className="product-btn product-atc-btn">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="product-single-page-section-2">
      <p className="product-long-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          gravida dolor non ullamcorper blandit. Nam euismod pretium purus sit
          amet pharetra. Aenean vel odio nunc. Nunc turpis enim, dictum at elit
          eget, consectetur gravida ipsum. Etiam in viverra ligula. Sed laoreet,
          quam in pellentesque posuere, purus purus pharetra massa, vitae cursus
          ex nunc sit amet urna. Sed sed enim ornare, vehicula erat a, pretium
          erat. Suspendisse molestie vehicula lorem vel tempus. In mollis
          dapibus diam sed lobortis.
        </p>

      </div>
    </div>
  );
};

export default SingleProduct;
