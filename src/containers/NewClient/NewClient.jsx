import React from "react";

import "./stylesNewClient.css";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const NewClient = () => {
  return (
    <>
      <div className="titulo">
        <h2>Crear Nuevo Cliente</h2>
      </div>

      <div className="formularioCliente">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridApellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="Apellido" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridDni">
            <Form.Label>DNI</Form.Label>
            <Form.Control type="number" placeholder="Nº documento" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="email" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Crear
          </Button>
        </Form>
      </div>
    </>
  );
};

export default NewClient;
