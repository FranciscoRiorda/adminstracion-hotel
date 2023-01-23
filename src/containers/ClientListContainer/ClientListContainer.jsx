import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import ClientList from "../../components/ClientList/ClientList";
import { collection, getDocs } from "firebase/firestore";

import "./stylesClientListContainer.css";
import { db } from "../../firebase/config";

const ClientListContainer = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    (async () => {

      const querySnapshot = await getDocs(collection(db, "clientes"));
      const clientesFirebase = [];
      querySnapshot.forEach((doc) => {
        clientesFirebase.push({...doc.data(), id: doc.id});
      });

      setClients(clientesFirebase);

    })();
  }, []);

  return (
    <>
      <div className="botonCliente">
        <Button className="boton" variant="success">
          Crear nuevo Cliente
        </Button>
      </div>

      <div className="contenedorTabla">
        <div className="tabla">
          <ClientList events={clients} />
        </div>
      </div>
    </>
  );
};

export default ClientListContainer;
