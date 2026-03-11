import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenItemClicked(props.id)}>
        <h3>{props.name} - ${props.price}</h3>
        <p>From {props.origin} - Roast: {props.roast}</p>
        <p>Stock: {props.stock} pounds</p>
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