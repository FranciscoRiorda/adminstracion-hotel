import React from "react";

import "./stylesItemListContainer.css";

import { ButtonGroup, Button } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { Link, useParams } from "react-router-dom";

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    (async () => {
      try {

        let q;

        if(categoryId){
          q = query(collection(db, "cuartos"), where("cuarto", "==", categoryId.toUpperCase()))
        }else {
          q = query(collection(db, "cuartos"));
          
        }


        const querySnapshot = await getDocs(q);
        const cuartosFirebase = [];
        querySnapshot.forEach((doc) => {
          cuartosFirebase.push({...doc.data(), id: doc.id});
        });

        cuartosFirebase.sort((a,b) => a.numCuarto - b.numCuarto)

        setProducts(cuartosFirebase);

      } catch (error) {
        console.log(error);
      }
    })();
  }, [categoryId]);

  return (
    <>
      <div className="buttonGroup">
        <ButtonGroup aria-label="Basic example">
          <Link to={"/category/normal"} className="boton">
            <Button variant="dark">Cuartos Normal</Button>
          </Link>
          &nbsp;
          <Link to={"/category/vip"} className="boton">
            <Button variant="warning">Cuartos VIP</Button>
          </Link>
          &nbsp;
          <Link to={"/inicio"} className="boton">
            <Button variant="success">Todos</Button>
          </Link>
        </ButtonGroup>

        <ButtonGroup aria-label="Basic example">
          <Link to={"/nuevocliente"}>
            <Button className="boton" variant="success">
              Crear nuevo Cliente
            </Button>
          </Link>
          &nbsp;
          <Link to={"/nuevocuarto"}>
            <Button className="boton" variant="success">
              Crear nuevo Cuarto
            </Button>
          </Link>
          &nbsp;
          <Button className="boton" variant="success" disabled>
            Crear nuevo Usuario
          </Button>
        </ButtonGroup>
      </div>

      <div className="contenedorTabla">
        <div className="tabla">
          <ItemList events={products} />
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
