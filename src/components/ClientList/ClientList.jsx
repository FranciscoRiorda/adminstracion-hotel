import React from "react";
import ItemClient from "../ItemClient/ItemClient";

const ClientList = ({events}) => {

    return(
        <>
            {events.map((event)=>{
                return <ItemClient key={event.id} event={event} />
            })}
        </>
    )
}

export default ClientList;