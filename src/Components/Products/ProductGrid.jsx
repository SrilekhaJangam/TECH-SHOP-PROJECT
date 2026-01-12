import productsData from "./productsData";
import "./ProductGrid.css";

const ProductGrid = () => {
  return (
    <section className="pg-section">
      <div className="pg-grid">
        {productsData.map((product) => (
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
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
