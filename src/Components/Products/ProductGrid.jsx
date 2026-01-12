import productsData from "./productsData";
import "./ProductGrid.css";

const ProductGrid = ({
  selectedBrands,
  selectedCategories,
  maxPrice,
}) => {

  // ✅ FILTER LOGIC
  const filteredProducts = productsData.filter((product) => {
    const brandMatch =
      selectedBrands.length === 0 ||
      selectedBrands.includes(product.brand);

    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const priceMatch = product.finalPrice <= maxPrice;

    return brandMatch && categoryMatch && priceMatch;
  });

  return (
    <section className="pg-section">
      <div className="pg-grid">

        {filteredProducts.length === 0 ? (
          <p style={{ color: "white" }}>No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <div className="pg-card" key={product.id}>
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
          ))
        )}

      </div>
    </section>
  );
};

export default ProductGrid;
