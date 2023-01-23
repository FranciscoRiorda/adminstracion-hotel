import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./loginStyles.css";

const Login = () => {
  return (
    <>
      <div className="bodyLogin">
        <div className="contenedorPrincipal">
          <div className="contenedor">
            <Form>
              <h2>Ingresar a cuenta</h2>
              <br></br>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="ingrese su email" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
              <Link to={"/inicio"}>
                <Button variant="primary" type="submit">
                  Ingresar
                </Button>
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
