import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import productsData from "../Products/productsData";
import "./RelatedProduct.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RelatedProducts = ({ category, currentId }) => {
  const navigate = useNavigate();

  const relatedProducts = productsData.filter(
    (item) => item.category === category && item.id !== currentId
  );

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (relatedProducts.length === 0) return null;

  return (
    <section className="related-products">
      <h2 className="section-title">Related Products</h2>

      <Slider {...settings}>
        {relatedProducts.map((item) => (
          <div key={item.id} className="rp-card-wrapper">
            <div
              className="rp-card"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <img src={item.images[0]} alt={item.title} />

              <h4>{item.title}</h4>

              <div className="rp-rating">
                {"★".repeat(item.rateCount)}
              </div>

              <p className="rp-price">
                ₹{item.finalPrice.toLocaleString()}
                <span>₹{item.originalPrice.toLocaleString()}</span>
              </p>

              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default RelatedProducts;
