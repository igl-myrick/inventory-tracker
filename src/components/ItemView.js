import React from "react";
import PropTypes from "prop-types";

function ItemView(props) {
  const { item, onClickingEdit, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <h1>Item Details</h1>
      <h3>{item.name} - ${item.price}</h3>
      <p>From {item.origin} - Roast: {item.roast}</p>
      <p>Stock: {item.stock} bags</p>
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