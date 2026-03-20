import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  const { handleClick, buttonText } = props;

  const divStyles = {
    display: "flex",
    justifyContent: "space-between"
  }

  const buttonStyles = {
    float: "right",
    width: "fit-content",
    height: "fit-content",
    display: "flex",
    alignSelf: "center"
  }

  return (
    <React.Fragment>
      <div style={divStyles}>
        <h1>Coffee Shop Inventory</h1>
        <button style={buttonStyles} onClick={handleClick}>{buttonText}</button>
      </div>
    </React.Fragment>
  );
}

Header.propTypes = {
  handleClick: PropTypes.func,
  buttonText: PropTypes.string
}

export default Header;