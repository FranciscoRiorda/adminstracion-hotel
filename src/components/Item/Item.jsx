import React from "react";
import { Badge, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBed} from "@fortawesome/free-solid-svg-icons"
import {faDollar} from "@fortawesome/free-solid-svg-icons"
import {faTvAlt} from "@fortawesome/free-solid-svg-icons"
import {faMugSaucer} from "@fortawesome/free-solid-svg-icons"
import {faCarAlt} from "@fortawesome/free-solid-svg-icons"
import {faBellConcierge} from "@fortawesome/free-solid-svg-icons"
import {faHotTub} from "@fortawesome/free-solid-svg-icons"

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
              
              <p><FontAwesomeIcon icon={faBed} /> {event.camas}</p>
              <p><FontAwesomeIcon icon={faDollar} /> {event.precio}</p>
              <p><FontAwesomeIcon icon={faTvAlt} /></p>
              <p><FontAwesomeIcon icon={faMugSaucer} /></p>
              <p><FontAwesomeIcon icon={faCarAlt} /></p>
              <p><FontAwesomeIcon icon={faBellConcierge} /></p>
              <p><FontAwesomeIcon icon={faHotTub} /></p>
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
