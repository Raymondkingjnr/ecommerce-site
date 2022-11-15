import React from "react";
import { useState } from "react";
import { GiHook } from "react-icons/gi";
import { BsSearch, BsInstagram } from "react-icons/bs";
import { ImGooglePlus } from "react-icons/im";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import "./Nav.css";

function Nav({ watch, shoe, pants }) {
  const [watchs, setWatchs] = useState(false);
  const [pant, setPants] = useState(false);
  const [shoes, setShoe] = useState(false);

  const searchStyle = {
    position: "absolute",
    left: "90%",
    top: "20%",
    fontSize: "25px",
  };
  return (
    <nav className="navbar">
      <main className="nav--main">
        <form className="nav--form">
          <input type="text" placeholder="search" />
          <BsSearch style={searchStyle} />
        </form>
        <div className="logo">
          <h1>
            FLOCKY{" "}
            <span>
              <GiHook />
            </span>
            HOOKS
          </h1>
        </div>
        <div className="socials--icons">
          <ImGooglePlus />
          <FaFacebookF />
          <FaPinterestP />
          <BsInstagram />
        </div>
      </main>

      <article className="dropdown">
        <main className="dropdown--items">
          {watch.map((items, index) => {
            const { category, rolex, Audemars, Cartier, Montblanc } = items;
            return (
              <div className="dropdown--container" key={index}>
                <button
                  className="dropdown--btn"
                  onClick={() => setWatchs(!watchs)}
                >
                  {category}
                </button>
                {watchs && (
                  <div className="dropdown--content">
                    <a href="#">{rolex}</a>
                    <a href="#">{Audemars}</a>
                    <a href="#">{Cartier}</a>
                    <a href="#">{Montblanc}</a>
                  </div>
                )}
              </div>
            );
          })}

          {shoe.map((items, index) => {
            const { category, vans, DrMartens, tommy } = items;

            return (
              <div className="dropdown--container" key={index}>
                <button
                  className="dropdown--btn"
                  onClick={() => setShoe(!shoes)}
                >
                  {category}
                </button>
                {shoes && (
                  <div className="dropdown--content">
                    <a href="#">{vans}</a>
                    <a href="#">{DrMartens}</a>
                    <a href="#">{tommy}</a>
                  </div>
                )}
              </div>
            );
          })}
          {pants.map((items, index) => {
            const {
              category,
              balanciaga,
              levis,
              Wrangler,
              Diesel,
              CalvinKlein,
            } = items;
            return (
              <div className="dropdown--container" key={index}>
                <button
                  className="dropdown--btn"
                  onClick={() => setPants(!pant)}
                >
                  {category}
                </button>
                {pant && (
                  <div className="dropdown--content">
                    <a href="#">{balanciaga}</a>
                    <a href="#">{levis}</a>
                    <a href="#">{Wrangler}</a>
                    <a href="#">{Diesel}</a>
                    <a href="#">{CalvinKlein}</a>
                  </div>
                )}
              </div>
            );
          })}
        </main>
      </article>
    </nav>
  );
}

export default Nav;
