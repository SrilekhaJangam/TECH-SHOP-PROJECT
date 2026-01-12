import "./FilterBy.css";
import { sortMenu, brandsMenu, categoryMenu, priceRange } 
from "../Products/FilterBarData";

const FilterBy = ({
  selectedSort,
  setSelectedSort,
  selectedBrands,
  setSelectedBrands,
  selectedCategories,
  setSelectedCategories,
  maxPrice,
  setMaxPrice,
}) => {

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <aside className="filterby">

      {/* SORT BY */}
      <div className="filterby-section">
        <h4>Sort By</h4>

        {sortMenu.map((sort) => (
          <label key={sort.id} className="sort-option">
            <input
              type="radio"
              name="sort"
              checked={selectedSort === sort.title}
              onChange={() => setSelectedSort(sort.title)}
            />
            {sort.title}
          </label>
        ))}
      </div>

      <hr />

      {/* FILTER BY */}
      <div className="filterby-header">
        <h3>Filter By</h3>
      </div>

      {/* Brands */}
      <div className="filterby-section">
        <h4>Brands</h4>
        {brandsMenu.map((brand) => (
          <label key={brand.id}>
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand.label)}
              onChange={() => toggleBrand(brand.label)}
            />
            {brand.label}
          </label>
        ))}
      </div>

      {/* Categories */}
      <div className="filterby-section">
        <h4>Category</h4>
        {categoryMenu.map((category) => (
          <label key={category.id}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(category.label)}
              onChange={() => toggleCategory(category.label)}
            />
            {category.label}
          </label>
        ))}
      </div>

      {/* Price */}
      <div className="filterby-section">
        <h4>Price</h4>
        <input
          type="range"
          min={priceRange.min}
          max={priceRange.max}
          step={priceRange.step}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
        <p className="filterby-price">₹{maxPrice}</p>
      </div>

    </aside>
  );
};

export default FilterBy;
