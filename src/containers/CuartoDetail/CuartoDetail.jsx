import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCuartoDetail from "../../components/ItemCuartoDetail/ItemCuartoDetail";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const CuartoDetail = () => {
  const [dataCuarto, setDataCuarto] = useState([]);

  const { idCuarto } = useParams();


  useEffect(() => {
    (async () => {
      try {
        if (idCuarto) {

          const docRef = doc(db, "cuartos", idCuarto);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            setDataCuarto({...docSnap.data(), id: docSnap.id});
          } else {
            console.log("No such document!");
          }
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [idCuarto]);

  return (
    <>
      <ItemCuartoDetail dataCuarto={dataCuarto} />
    </>
  );
};

export default CuartoDetail;
