import "./Header.css";

export const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Tech-Shop</h1>
      </div>

      <div className="icons">
        <i className="fa-solid fa-magnifying-glass"></i>

       
          <i className="fa-solid fa-cart-shopping"></i>

        <i className="fa-regular fa-user"></i>
      </div>
    </nav>
  );
};
