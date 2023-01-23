import React from "react";

import "./stylesNewCuarto.css";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const NewCuarto = () => {


  return (
    <>
      <div className="titulo">
        <h2>Crear Nuevo Cuarto</h2>
      </div>

      <div className="formularioCuarto">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridNum">
              <Form.Label>Cuarto Nº:</Form.Label>
              <Form.Control type="number" placeholder="1" disabled />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridTipo">
              <Form.Label>Tipo de cuarto:</Form.Label>
              <Form.Select defaultValue="Seleccionar">
                <option>Normal</option>
                <option>VIP</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formGridCamas">
              <Form.Label>Cantidad de camas:</Form.Label>
              <Form.Select defaultValue="Seleccionar">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPrecio">
              <Form.Label>Precio por noche:</Form.Label>
              <Form.Control type="number" placeholder="Precio en $" />
            </Form.Group>
          </Row>

          <div className="divRow">
            <Row className="columnaRow">
              <Form.Group as={Col} controlId="formGridTv">
                <Form.Label>Disponibilidad de Tv:</Form.Label>
                <Form.Check type="switch" id="custom-switch" label="" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridTv">
                <Form.Label>Desayuno incluido:</Form.Label>
                <Form.Check type="switch" id="custom-switch" label="" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridTv">
                <Form.Label>Disponibilidad de Cochera:</Form.Label>
                <Form.Check type="switch" id="custom-switch" label="" />
              </Form.Group>
            </Row>

            <Row className="columnaRow">
              <Form.Group as={Col} controlId="formGridTv">
                <Form.Label>Servicio al cuarto:</Form.Label>
                <Form.Check type="switch" id="custom-switch" label="" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridTv">
                <Form.Label>Hidromasaje:</Form.Label>
                <Form.Check type="switch" id="custom-switch" label="" />
              </Form.Group>
            </Row>
          </div>

          <Button variant="primary" type="submit">
            Crear Cuarto
          </Button>
        </Form>
      </div>
    </>
  );
};

export default NewCuarto;
