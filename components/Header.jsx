import React from "react";

const Header = () => {
  return (
    <section className="bg-gradient-to-b from-[rgb(19,19,54)] to-[rgb(30,30,80)] py-16 border-b border-yellow-400/30 h-50">
      <div className=" container max-w-7xl mx-auto px-4">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide"> 
          Keling kayfiyatni{" "}
          <span className="text-yellow-400">birga ko‘taramiz</span>
        </h1>

        <p className="mt-5 text-center text-gray-300 text-sm md:text-base">
          Eng zo‘r filmlar, eng yaxshi kayfiyat 🎬
        </p>
      </div>
    </section>
  );
};

export default Header;