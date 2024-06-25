import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src="" alt="" />
        <p>Shop Local Businesses</p>
      </div>
      <ul className="nav-menu">
        <li>
          Shop <hr />
        </li>
        <li
          onClick={() => {
            setMenu("The 1st Note");
          }}
        >
          The 1st Note Academy{menu === "The 1st Note" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Luxe Elixirs");
          }}
        >
          Luxe Elixirs Mobile Bar{menu === "Luxe Elixirs" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Tea Amour");
          }}
        >
          Tea Amour Organic Teas{menu === "Tea Amour" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Four12Florals");
          }}
        >
          Four12 Florals{menu === "Four12Florals" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Nia's Sanctuary");
          }}
        >
          Nias Sanctuary{menu === "Nias Sanctuary" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Garden of Gaia");
          }}
        >
          Garden of Gaia{menu === "Garden of Gaia" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Onyx Beauty");
          }}
        >
          Onyx Beauty{menu === "Onyx Beauty" ? <hr /> : <></>}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
