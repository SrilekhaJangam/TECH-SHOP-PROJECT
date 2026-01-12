import { useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../Products/productsData";
import "./SingleProduct.css";

const SingleProduct = () => {
  const { id } = useParams();

  const product = productsData.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <p className="sp-notfound">Product not found</p>;
  }

  const [activeImage, setActiveImage] = useState(product.images[0]);

  return (
    <section className="single-product">
      <div className="sp-wrapper">

        <div className="sp-images">
          <div className="sp-thumbnails">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="thumbnail"
                className={activeImage === img ? "active" : ""}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>

          <div className="sp-main-image">
            <img src={activeImage} alt={product.title} />
          </div>
        </div>

        <div className="sp-info">
          <h2>{product.title}</h2>
          <p className="sp-subtitle">{product.info}</p>

          <div className="sp-rating">
            {"★".repeat(product.rateCount)}
            <span> | 1234 Ratings</span>
          </div>

          <hr />

          <div className="sp-price">
            <span className="final">₹{product.finalPrice}</span>
            <span className="original">₹{product.originalPrice}</span>
          </div>

          <p className="sp-save">
            You save: ₹{product.originalPrice - product.finalPrice} (33%)
          </p>

          <p className="sp-stock">✔ In Stock</p>

          <div className="sp-offers">
            <div>No Cost EMI on Credit Card</div>
            <div>Pay Later & Avail Cashback</div>
          </div>

          <button className="sp-cart-btn">Add to cart</button>
        </div>
      </div>

      <div className="sp-tabs">
        <button className="active">Specifications</button>
        <button>Overview</button>
        <button>Reviews</button>
      </div>

      <div className="sp-specs">
        <div><span>Brand</span><span>{product.brand}</span></div>
        <div><span>Model</span><span>{product.title}</span></div>
        <div><span>Category</span><span>{product.category}</span></div>
        <div><span>Connectivity</span><span>Wireless</span></div>
        <div><span>Microphone</span><span>Yes</span></div>
      </div>
    </section>
  );
};

export default SingleProduct;
