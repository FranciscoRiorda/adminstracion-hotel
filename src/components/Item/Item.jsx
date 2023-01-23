import React from "react";
import { Badge, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./stylesItem.css";

const Item = ({ event }) => {

  const cuarto = event.cuarto.toUpperCase();

  const navigate = useNavigate();

const navigateDetail = () => {
  navigate(`/cuarto/${event.id}`);
}

  return (
    <>
      <div className="detalle">
        <div className="cardCuarto">
          <div className="pTabla">
            <div className="pFirst">
              <p>Cuarto Nº: {event.numCuarto}</p>
            </div>

            <div className="estadoCuarto">
              <Badge bg="primary">Disponible</Badge>{" "}
              {/* <Badge bg="secondary">Reservado</Badge>{" "}
              <Badge bg="warning">En Limpieza</Badge>{" "}
              <Badge bg="danger">En Renovación</Badge>{" "} */}
            </div>

            <div className="pSec">
              <p>{cuarto}</p>
              <p>Cant camas: {event.camas}</p>
              <p>$$: {event.precio}</p>
              <p>Tv</p>
              <p>Desayuno</p>
              <p>Cochera</p>
              <p>Serv cuarto</p>
              <p>Hidro</p>
            </div>
          </div>

          <div className="botonTabla">
            <Button className="botonCuarto" variant="primary" onClick={navigateDetail}>
              Info
            </Button>
            <Button variant="success">Reservar</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
