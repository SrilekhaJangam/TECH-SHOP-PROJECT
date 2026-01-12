import { useNavigate } from "react-router-dom";
import productsData from "./productsData";
import "./ProductGrid.css";

const ProductGrid = ({
  selectedSort,
  selectedBrands,
  selectedCategories,
  maxPrice,
}) => {
  const navigate = useNavigate();

  // 1️⃣ FILTER
  let filteredProducts = productsData.filter((product) => {
    const brandMatch =
      selectedBrands.length === 0 ||
      selectedBrands.includes(product.brand);

    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const priceMatch = product.finalPrice <= maxPrice;

    return brandMatch && categoryMatch && priceMatch;
  });

  // 2️⃣ SORT
  if (selectedSort === "Price(Lowest First)") {
    filteredProducts.sort((a, b) => a.finalPrice - b.finalPrice);
  }

  if (selectedSort === "Price(Highest First)") {
    filteredProducts.sort((a, b) => b.finalPrice - a.finalPrice);
  }

  if (selectedSort === "Top Rated") {
    filteredProducts.sort((a, b) => b.rateCount - a.rateCount);
  }

 

  return (
    <section className="pg-section">
      <div className="pg-grid">
        {filteredProducts.map((product) => (
          <div
            className="pg-card"
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            style={{ cursor: "pointer" }}
          >
            <img src={product.images[0]} alt={product.title} />

            <div className="pg-rating">
              {"★".repeat(product.rateCount)}
            </div>

            <h3>{product.title}</h3>
            <p className="pg-info">{product.info}</p>

            <div className="pg-price">
              ₹{product.finalPrice}
              <span>₹{product.originalPrice}</span>
            </div>

            <button className="pg-btn">Add to cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
