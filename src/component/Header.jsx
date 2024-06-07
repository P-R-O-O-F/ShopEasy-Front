import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/rename.png" alt="Logo" />
      </div>
      <h1 className="title">ShopEasy</h1>
      <nav>
        <ul className="menu">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/pokemon">Pokemon</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart </Link>
          </li>
        </ul>

        <Link to="/login">
          <button className="login">Connexion</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
