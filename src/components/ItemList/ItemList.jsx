import React from "react";
import Item from "../Item/Item";

const ItemList = ({ events }) => {
  return (
    <>
      {events.map((event) => {
        return <Item key={event.id} event={event} />;
      })}
    </>
  );
};

export default ItemList;
