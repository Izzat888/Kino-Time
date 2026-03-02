import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "./images/logo.png";
import play from "./images/play.png"
import { FiSearch } from "react-icons/fi";

const Navbar = ({ search, setSearch }) => {
  const [showInput, setShowInput] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar__container">
          <div className="navbar__box">
            <img className="logo" src={logo} alt="logo" />
            <p className="logo__text">КИНОПОИСК</p>
          </div>

          <ul className="navbar__list">
            <li className="navbar__item"><a className="navbar__link" href="#">Главное</a></li>
            <li className="navbar__item"><a className="navbar__link" href="#">Моё</a></li>
            <li className="navbar__item"><a className="navbar__link" href="#">Каналы</a></li>
            <li className="navbar__item"><a className="navbar__link" href="#">Спорт</a></li>
            <li className={`search-box ${showInput ? "active" : ""}`}>
              {showInput && (
                <input className="input"
                  type="text"
                  placeholder="Поиск кино..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  autoFocus
                />
              )}

              <FiSearch
                className="search-icon"
                onClick={() => setShowInput(!showInput)}
              />
            </li>
          </ul>
          <div className="box__two">
            <img className="play" src={play} alt="" />
            <a className="btn" href="#">Приложения</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;