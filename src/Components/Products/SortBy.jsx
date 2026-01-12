import "./Products.css";

const SortBy = ({ value, onChange }) => {
  const options = [
    "Latest",
    "Featured",
    "Top Rated",
    "Price (Lowest First)",
    "Price (Highest First)"
  ];

  return (
    <div className="sort-box">
      <h4>Sort By</h4>
      {options.map(opt => (
        <p
          key={opt}
          className={value === opt ? "active" : ""}
          onClick={() => onChange(opt)}
        >
          {opt}
        </p>
      ))}
    </div>
  );
};

export default SortBy;
