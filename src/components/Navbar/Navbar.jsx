import React, { useContext, useEffect, useState } from "react";

import { TbSearch, TbShoppingCart } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

import "./navbar.scss";
import Cart from "../Cart/Cart";
import Search from "./Search/Search";
import { useNavigate } from "react-router-dom";
import { Context } from "../../utils/context";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const { cartCount } = useContext(Context);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {};

  return (
    <>
      <header className={`main-header ${scrolled && "sticky-header"}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            DEVSHOP.
          </div>
          <div className="right">
            <TbSearch onClick={() => setShowSearch(true)} />
            <AiOutlineHeart />
            <span
              className="cart-icon"
              onClick={() => {
                setShowCart(true);
              }}
            >
              <TbShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>

      {showSearch && <Search setShowSearch={setShowSearch} />}

      {showCart && <Cart setShowCart={setShowCart} />}
    </>
  );
};

export default Navbar;
