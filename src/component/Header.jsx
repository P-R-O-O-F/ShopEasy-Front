import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Header = () => {
  const token = Cookies.get('access_token');

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/rename.png" alt="Logo" className="w-12 h-12 mr-4" />
          <h1 className="text-2xl font-bold">ShopEasy</h1>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-6 mr-6">
            <li>
              <Link to="/" className="hover:text-gray-400 transition duration-300">Accueil</Link>
            </li>
            {token && (
              <>
                <li>
                  <Link to="/product" className="hover:text-gray-400 transition duration-300">Products</Link>
                </li>
                <li>
                  <Link to="/cart" className="hover:text-gray-400 transition duration-300">Cart</Link>
                </li>
              </>
            )}
          </ul>
          <Link to="/login">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Connexion</button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
