// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { dropdownMenu } from "./headerData";
// import productsData from "../Products/productsData"; 
// import "./Header.css";

// const Header = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [search, setSearch] = useState("");

//   const filteredProducts = productsData.filter((item) =>
//     item.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <header className="header">
//       {/* Logo */}
//       <div className="logo">
//         <Link to="/">Tech-Shop</Link>
//       </div>

//       {/* Search Bar */}
//       <div className="search-box">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         {search && (
//           <div className="search-dropdown">
//             {filteredProducts.length > 0 ? (
//               filteredProducts.map((item) => (
//                 <Link
//                   key={item.id}
//                   to={item.path}
//                   className="search-item"
//                   onClick={() => setSearch("")}
//                 >
//                   {item.title}
//                 </Link>
//               ))
//             ) : (
//               <p className="no-result">No products found</p>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Icons */}
//       <div className="header-icons">
//         <i className="ri-search-line"></i>

//         <div className="cart-icon">
//           <i className="ri-shopping-cart-line"></i>
//           <span className="cart-badge">4</span>
//         </div>

//         {/* User Dropdown */}
//         <div
//           className="user-icon"
//           onClick={() => setShowDropdown(!showDropdown)}
//         >
//           <i className="ri-user-line"></i>

//           {showDropdown && (
//             <div className="dropdown">
//               <p className="dropdown-title">Hello!</p>
//               <p className="dropdown-subtitle">
//                 Access account and manage orders
//               </p>

//               {dropdownMenu.map((item) => (
//                 <Link
//                   key={item.id}
//                   to={item.path}
//                   className="dropdown-link"
//                 >
//                   {item.title}
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;






































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
