import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.itemList.map((item) =>
        <Item
          whenItemClicked={props.onItemSelection}
          name={props.name}
          origin={props.origin}
          price={props.price}
          roast={props.roast}
          id={props.id}
          key={props.id}/>
      )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  onItemSelection: PropTypes.func
}

export default ItemList;