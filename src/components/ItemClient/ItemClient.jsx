import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./stylesItemClient.css";

const ItemClient = ({ event }) => {

  const navigate = useNavigate();

  const navigateDetail = () => {

    navigate(`/cliente/${event.id}`)

  }

  return (
    <>
      <div className="detalle">
        <div className="cardClient">
          <div className="pTablaClient">
            <div className="pFirstClient">
              <p>Cliente Nº: {event.numCliente}</p>
            </div>

            <div className="pSecClient">
              <p>
                Nombre completo: {event.nombre} {event.apellido}
              </p>
              <p>DNI: {event.dni}</p>
              <p> Correo electrónico: {event.mail}</p>
            </div>
          </div>
        </div>
        <div className="botonDetalle">
          <Button onClick={navigateDetail}>Ver detalle</Button>
        </div>
      </div>
    </>
  );
};

export default ItemClient;
