import React from "react";
import { Link } from "react-router-dom";

import "./navBarStyles.css";

const NavBar = () => {
  return (
    <>
      <div>
        <p className="headerBar">Reservas de Cuartos - Hotel Extrados</p>
      </div>
      <ul className="ul">
        <div className="imgLogo">
          <Link to={"/inicio"}>
            <b>LOGO</b>
          </Link>
        </div>
        <div className="menuNavBar">
          <li>
            <Link to={"/inicio"} className="link">
              <b >Inicio</b>
            </Link>
          </li>

          <li>
            <Link to={"/clientes"} className="link">
              <b >Clientes</b>
            </Link>
          </li>

          <li>
            <b className="link">Mi Cuenta</b>
          </li>
        </div>
      </ul>
    </>
  );
};

export default NavBar;
