import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const ItemClientDetail = ({dataClient}) => {

    return(
        <>
      <div className="titulo">
        <h2>Detalles de Cliente: {dataClient.nombre}, {dataClient.apellido}</h2>
      </div>

      <div className="formularioCliente">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text"  defaultValue={dataClient.nombre} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridApellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" defaultValue={dataClient.apellido} />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridDni">
            <Form.Label>DNI</Form.Label>
            <Form.Control type="number" defaultValue={dataClient.dni} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" defaultValue={dataClient.mail} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Actualizar datos
          </Button>
        </Form>
      </div>
    </>
    )
}

export default ItemClientDetail;