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

  const [modal, setModal] = useState(false)

  const handleSearch = () => {
  const foundElement = document.querySelector(
    `[id^="kino-"]`
  );

  if (foundElement) {
    foundElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  setShowInput(false); // 🔥 input yopiladi
};
  return (
    <>
      <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="navbar__container">
            <div className="navbar__box">
              <img className="logo" src={logo} alt="logo" />
              <p className="logo__text">ИНОПОИСК</p>
            </div>

            <ul className="navbar__list">
              <li className="navbar__item"><a className="navbar__link" href="#home">Главное</a></li>
              <li className="navbar__item"><a className="navbar__link" href="#multfilm">Мультфильм</a></li>
              <li className="navbar__item"><a className="navbar__link" href="#kino">Кино</a></li>
              <li className="navbar__item"><a className="navbar__link" href="#sport">Спорт</a></li>
            </ul>
            <div className={`search-box ${showInput ? "active" : ""}`}>
              <input
                className="input"
                type="text"
                placeholder="Поиск кино..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />

              <button
                className="button"
                onClick={() => setShowInput(!showInput)}
              >
                <FiSearch className="search-icon" />
              </button>
            </div>
            <div className="box__two">
              <img className="play" src={play} alt="" />
              <a className="btn" href="https://play.google.com/store/search?q=kinopoisk&c=apps&hl=ru" target="_blank">Приложения</a>
            </div>
            <div className={`bars ${modal ? "active" : ""}`} onClick={() => setModal(prev => !prev)}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </div>

      {
        modal && (
          <div className="modal-overlay" onClick={() => setModal(false)}>
            <ul className="navbar__list">
              <li className="navbar__item"><a className="navbar__link" href="#home" onClick={() => setModal(false)}>Главное</a></li>
              <li className="navbar__item"><a className="navbar__link" href="#multfilm" onClick={() => setModal(false)}>Мультфильм</a></li>
              <li className="navbar__item"><a className="navbar__link" href="#kino" onClick={() => setModal(false)}>Кино</a></li>
              <li className="navbar__item"><a className="navbar__link" href="#sport" onClick={() => setModal(false)}>Спорт</a></li>
              <li className="box__two">
                <img className="play" src={play} alt="" />
                <a className="btn" href="https://play.google.com/store/search?q=kinopoisk&c=apps&hl=ru" target="_blank">Приложения</a>
              </li>
            </ul>
          </div>
        )
      }
    </>
  );
};

export default Navbar;