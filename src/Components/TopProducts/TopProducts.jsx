import { useState } from "react";
import productsData from "../Products/productsData";
import "./TopProducts.css";
import { Link ,useNavigate } from "react-router-dom";

const categories = ["All", "Headphones", "Earbuds", "Earphones", "Neckbands"];

const TopProducts = () => {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = productsData.filter(
    (product) =>
      activeCategory === "All" ||
      product.category === activeCategory
  );

  return (
    <section className="top-products">
      <h2>Top Products</h2>

      <div className="tabs" >
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-grid" >
        {filteredProducts.slice(0, 11).map((product) => (
          <div key={product.id} className="product-card"
          onClick={() => navigate(`/product/${product.id}`)}>
            <img src={product.images[0]} alt={product.title} />

            <div className="rating">
              {"★".repeat(product.rateCount)}
            </div>

            <h4>{product.title}</h4>
            <p className="info">{product.info}</p>

            <div className="price">
              ₹{product.finalPrice.toLocaleString()}
              <span>₹{product.originalPrice.toLocaleString()}</span>
            </div>

            <button className="add-btn">Add to cart</button>
          </div>
        ))}

        <Link to="/products" className="browse-card"   onClick={() => console.log("clicked")}>
          <p>Browse All Products →</p>
        </Link>

      </div>
    </section>
  );
};

export default TopProducts;
