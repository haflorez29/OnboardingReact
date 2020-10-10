import React from "react";
import "../../style/item.css"

function Item({letter,name, style}) {
  return (
    <div className="col-4 p-2 d-flex flex-column  align-items-center">
      <div id="item"
      className={`rounded-circle p-2 text-center ${style}`}>{letter}</div>
      <p className=" font-weight-bold text card-text fontsmall m-2 ">{name}</p>
    </div>
  );
}

export default Item;
