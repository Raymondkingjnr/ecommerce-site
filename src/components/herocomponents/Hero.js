import React from "react";
import "./Hero.css";
function Hero({ image }) {
  return (
    <section className="hero">
      <main className="hero--section">
        <div className="hot--deal">
          <p>Philips</p>
          <p className="border--bottom"></p>
          <h3>Tommy-Hilfiger, 2021</h3>
          <h4>Colten Kell Jacket</h4>
          <p className="border--bottom"></p>
          <button className="btn--hero">Shop</button>
        </div>
        <div className="baner">
          <img src={image} alt="" />
        </div>
      </main>
    </section>
  );
}

export default Hero;
