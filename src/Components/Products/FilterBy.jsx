import "./FilterBy.css";

const FilterBy = ({
  selectedBrands,
  setSelectedBrands,
  selectedCategories,
  setSelectedCategories,
  maxPrice,
  setMaxPrice,
}) => {
  // Brand toggle
  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  // Category toggle
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <aside className="filterby">

      <div className="filterby-header">
        <h3>Filter By</h3>
        <hr />
      </div>

      {/* Brands */}
      <div className="filterby-section">
        <h4>Brands</h4>

        <label>
          <input
            type="checkbox"
            checked={selectedBrands.includes("JBL")}
            onChange={() => toggleBrand("JBL")}
          />
          JBL
        </label>

        <label>
          <input
            type="checkbox"
            checked={selectedBrands.includes("boAt")}
            onChange={() => toggleBrand("boAt")}
          />
          BoAt
        </label>

        <label>
          <input
            type="checkbox"
            checked={selectedBrands.includes("Sony")}
            onChange={() => toggleBrand("Sony")}
          />
          Sony
        </label>
      </div>

      {/* Category */}
      <div className="filterby-section">
        <h4>Category</h4>

        <label>
          <input
            type="checkbox"
            checked={selectedCategories.includes("Headphones")}
            onChange={() => toggleCategory("Headphones")}
          />
          Headphones
        </label>

        <label>
          <input
            type="checkbox"
            checked={selectedCategories.includes("Earbuds")}
            onChange={() => toggleCategory("Earbuds")}
          />
          Earbuds
        </label>

        <label>
          <input
            type="checkbox"
            checked={selectedCategories.includes("Earphones")}
            onChange={() => toggleCategory("Earphones")}
          />
          Earphones
        </label>

        <label>
          <input
            type="checkbox"
            checked={selectedCategories.includes("Neckbands")}
            onChange={() => toggleCategory("Neckbands")}
          />
          Neckbands
        </label>
      </div>

      {/* Price */}
      <div className="filterby-section">
        <h4>Price</h4>
        <input
          type="range"
          min="0"
          max="20000"
          step="500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
        <p className="filterby-price">₹{maxPrice}</p>
      </div>
    </aside>
  );
};

export default FilterBy;
