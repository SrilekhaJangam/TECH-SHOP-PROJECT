import { useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../Products/productsData";
import "./SingleProduct.css";
import reviewsData from "./reviewsData";

import { useDispatch } from "react-redux";
import { addToCart } from "../Cart/CartSlice";

import RelatedProducts from "../RelatedProducts/RelatedProduct";



const SingleProduct = () => {

  const dispatch = useDispatch();

  const { id } = useParams();

  const [activeTab, setActiveTab] = useState("specifications");


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

         <div className="sp-stock-discount">
           <p className="sp-save">
            You save: ₹{product.originalPrice - product.finalPrice} (33%)
            <p>(Inclusive of all taxes)</p>
          </p>
          <p className="sp-stock">✔ In Stock</p>
         </div>
          <hr/>

          
          <div className="sp-offers-title">

              <h3>Offers and Discounts</h3>

          </div>
            
          <div className="sp-offers">
      
            <div>No Cost EMI on Credit Card</div>
            <div>Pay Later & Avail Cashback</div>
          </div>

          <button className="sp-cart-btn"  onClick={() => dispatch(addToCart(product))}>Add to cart</button>
        </div>
      </div>

      <div className="sp-tabs">
        <button
          className={activeTab === "specifications" ? "active" : ""}
          onClick={() => setActiveTab("specifications")}
        >
          Specifications
        </button>

        <button
          className={activeTab === "overview" ? "active" : ""}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>

        <button
          className={activeTab === "reviews" ? "active" : ""}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>


      {/* TAB CONTENT */}
      <div className="sp-tab-content">

        {/* SPECIFICATIONS */}
        {activeTab === "specifications" && (
          <div className="sp-specs">
            <div><span>Brand</span><span>{product.brand}</span></div>
            <div><span>Model</span><span>{product.title}</span></div>
            <div><span>Category</span><span>{product.category}</span></div>
            <div><span>Connectivity</span><span>Wireless</span></div>
            <div><span>Microphone</span><span>Yes</span></div>
          </div>
        )}

        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <div className="sp-overview">
            <p>
              {product.info} is designed to deliver an immersive audio
              experience with premium build quality, powerful bass,
              and crystal-clear sound. Ideal for daily use, travel,
              and workouts.
            </p>

            <ul>
              <li>High-quality sound output</li>
              <li>Comfortable and lightweight design</li>
              <li>Long battery life</li>
              <li>Fast charging support</li>
            </ul>
          </div>
        )}

        {/* REVIEWS */}
       {activeTab === "reviews" && (
  <div className="sp-reviews">
    {reviewsData.map((review) => (
      <div key={review.id} className="review-card">

        {/* LEFT – Avatar */}
        <div className="review-avatar">
          <div className="avatar-circle">
            {review.name.charAt(0)}
          </div>
        </div>

        {/* RIGHT – Content */}
        <div className="review-content">
          <div className="review-top">
            <h4>{review.name}</h4>
            <span className="review-date">{review.date}</span>
          </div>

          <div className="review-rating">
            {"★".repeat(review.rateCount)}
          </div>

          <p className="review-text">{review.review}</p>
        </div>

      </div>
    ))}
  </div>
)}
<RelatedProducts
  category={product.category}
  currentId={product.id}
/>



      </div>

    </section>
  );
};

export default SingleProduct;
