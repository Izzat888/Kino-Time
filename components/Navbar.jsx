import React, { useState } from "react";
import logo from "./images/logo.png";

const Navbar = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="bg-[rgb(19,19,54)] shadow-lg">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex h-8 items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer">
              <img src={logo} alt="Kino Time" className="w-10 h-10" />
              <p className="text-white text-xl font-semibold">
                Kino<span className="text-yellow-400">Time</span>
              </p>
            </div>

            {/* Desktop menu */}
            <ul className="hidden md:flex gap-8 text-white font-medium">
              <li className="hover:text-yellow-400 cursor-pointer">Million</li>
              <li className="hover:text-yellow-400 cursor-pointer">Dizayn</li>
            </ul>

            {/* Button */}
            <button className="hidden md:block rounded-lg border border-yellow-400 px-5 py-2 text-sm text-yellow-400 hover:bg-yellow-400 hover:text-[rgb(19,19,54)] transition">
              Ko‘rish
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setModal(true)}
              className="md:hidden flex flex-col gap-1"
            >
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE MODAL */}
      {modal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          onClick={() => setModal(false)}
        >
          <div
            className="absolute top-0 right-0 h-full w-60 bg-[rgb(19,19,54)] 
            p-6 flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="text-white text-right"
              onClick={() => setModal(false)}
            >
              ✕
            </button>

            <div className="flex flex-col gap-6 items-center">
                <a className="text-white text-lg hover:text-yellow-400 " href="#">
              Million
            </a>
            <a className="text-white text-lg hover:text-yellow-400" href="#">
              Dizayn
            </a>
            </div>

            <button className="mt-auto rounded-lg bg-yellow-400 py-2 text-[rgb(19,19,54)] font-medium">
              Ko‘rish
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;