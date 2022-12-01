import React from "react";
import "./Hero.css";
function Hero({ image, cap, wrist }) {
  return (
    <section className="hero">
      <main className="hero--section">
        <div className="hot--deal">
          <p>Philips</p>
          <p className="border--bottom"></p>
          <h3>Tommy-Hilfiger, 2021</h3>
          <h4>Colten Kell Jacket</h4>
          <p className="border--bottom"></p>
          <button className=" btn btn--hero">Shop</button>
        </div>
        <div className="baner">
          <img src={image} alt="" />
        </div>
      </main>
      <article className="down">
        <div className="bg-cap">
          <div className="inner-text-cap">
            <h3>KELEWASCO ESP</h3>
            <p>customized to fit your style</p>
            <button className="btn btn-cap">shop now</button>
          </div>
          <img src={cap} alt="" />
        </div>
        <div className="bg-watch">
          <img src={wrist} alt="" />
          <div className="inner-text-watch">
            <h3>OKAWAJ VAL</h3>
            <p>more style in your box to unfold</p>
            <button className="btn btn-watch">shop now</button>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Hero;
