import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemClientDetail from "../../components/ItemClientDetail/ItemClientDetal";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ClienteDetail = () => {
  const { idCliente } = useParams();

  const [dataClient, setDataClient] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        if (idCliente) {

          const docRef = doc(db, "clientes", idCliente);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            setDataClient({...docSnap.data(), id: docSnap.id});
          } else {
            console.log("No such document!");
          }
        }
        
      } catch (error) {
        console.log(error);
      }
    })();
  },[idCliente]);


  return (
    <>
      <ItemClientDetail dataClient={dataClient}/>
    </>
  );
};

export default ClienteDetail;
