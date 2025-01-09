// Header.js
import React, { useState } from "react";
import "../../Styles/Header.css";
import logo from "../../images/Home/building.png";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchActive, setSearchActive] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleSearch = () => setSearchActive(!isSearchActive);

  return (
    <header className="header">
      <div className="header-logo">
        <img className="logo" src={logo} alt="building" />
        <h1>Building</h1>
      </div>

      <div
        className={`menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? "✖" : "☰"}
      </div>

      <nav className={`header-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <ul>
          <li><a href="/home">Home</a></li>
          <li>
            <a href="#" onClick={toggleDropdown}>
              Page ▼
            </a>
            <ul className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
              <li><a href="/feature-work">Feature Work</a></li>
            </ul>
          </li>
          <li><a href="/services">Services</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/about-us">About Us</a></li>
        </ul>
      </nav>

      <div className="header-icons">
        <div className={`search-container ${isSearchActive ? "active" : ""}`}>
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
          />
        </div>
        <div className="search-icon" onClick={toggleSearch}>
          <i className="bi bi-search"></i>
        </div>
        <div className="cart-icon">
          <i className="bi bi-cart"></i>
          <span className="cart-count">0</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
