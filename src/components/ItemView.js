import React from "react";
import PropTypes from "prop-types";

function ItemView(props) {
  const { item, onClickingEdit, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <h1>Item Details</h1>
      <h3>{props.name} - ${props.price}</h3>
      <p>From {props.origin} - Roast: {props.roast}</p>
      <button onClick={onClickingEdit}>Edit Item</button>
      <button onClick={() => onClickingDelete(item.id)}>Delete Item</button>
    </React.Fragment>
  );
}

ItemView.propTypes = {
  item: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
}

export default ItemView;