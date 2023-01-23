import React from "react";

import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";

import "./stylesItemCuartoDetail.css";

const ItemCuartoDetail = ({ dataCuarto }) => {


  return (
    <>
      <div className="titulo">
        <h2>Detalles del Cuarto id: {dataCuarto.numCuarto}</h2>
      </div>

      <div className="formularioCuarto">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridNum">
              <Form.Label>Cuarto Nº: </Form.Label>
              <Form.Control type="number" defaultValue={dataCuarto.numCuarto}  disabled />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridTipo">
              <Form.Label>Tipo de cuarto:</Form.Label>
              <Form.Select value={dataCuarto.cuarto}>
                <option value={"NORMAL"}>Normal</option>
                <option value={"VIP"}>Vip</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formGridCamas">
              <Form.Label>Cantidad de camas:</Form.Label>
              <Form.Select value={dataCuarto.camas}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPrecio">
              <Form.Label>Precio por noche:</Form.Label>
              <Form.Control type="number" defaultValue={dataCuarto.precio} />
            </Form.Group>
          </Row>

          <div className="divRow">
            <Row className="columnaRow">
              <Form.Group as={Col} controlId="formGridTv">
                <Form.Label>Disponibilidad de Tv:</Form.Label>
                <Form.Check type="switch" id="custom-switch" defaultChecked={dataCuarto.tv} label="" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridTv">
                <Form.Label>Desayuno incluido:</Form.Label>
                <Form.Check type="switch" id="custom-switch" defaultChecked={dataCuarto.desayuno} label="" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridTv">
                <Form.Label>Disponibilidad de Cochera:</Form.Label>
                <Form.Check type="switch" id="custom-switch" defaultChecked={dataCuarto.cochera} label="" />
              </Form.Group>
            </Row>

            <Row className="columnaRow">
              <Form.Group as={Col} controlId="formGridTv">
                <Form.Label>Servicio al cuarto:</Form.Label>
                <Form.Check type="switch" id="custom-switch" defaultChecked={dataCuarto.servicioCuarto} label="" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridTv">
                <Form.Label>Hidromasaje:</Form.Label>
                <Form.Check type="switch" id="custom-switch" defaultChecked={dataCuarto.hidromasaje} label="" />
              </Form.Group>
            </Row>
          </div>

          <Button variant="primary" type="submit">
            Actualizar datos
          </Button>
        </Form>
      </div>
    </>
  );
};

export default ItemCuartoDetail;
