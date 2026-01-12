import { useState } from "react";
import FilterBy from "../Components/Products/FilterBy";
import ProductGrid from "../Components/Products/ProductGrid";
import { Services } from "../Components/Services/Services";

export const Products = () => {
  const [selectedSort, setSelectedSort] = useState("Latest"); // ✅ ADD
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [maxPrice, setMaxPrice] = useState(20000);

  return (
    <>
      <div style={{ display: "flex" }}>
        <FilterBy
          selectedSort={selectedSort}          
          setSelectedSort={setSelectedSort}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />

        <ProductGrid
          selectedSort={selectedSort}         
          selectedBrands={selectedBrands}
          selectedCategories={selectedCategories}
          maxPrice={maxPrice}
        />
      </div>

      <Services />
    </>
  );
};
