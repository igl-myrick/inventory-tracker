import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  let stockElem = null;
  if (props.stock > 0) {
    stockElem = <p>Stock: {props.stock} pounds</p>;
  } else {
    stockElem = <p>Out of Stock</p>;
  }

  return (
    <React.Fragment>
      <div onClick={() => props.whenItemClicked(props.id)}>
        <h3>{props.name} - ${props.price}</h3>
        <p>From {props.origin} - Roast: {props.roast}</p>
        {stockElem} 
        <hr/>
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  roast: PropTypes.string,
  whenItemClicked: PropTypes.func
}

export default Item;