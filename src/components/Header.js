import React from "react";

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
    marginTop: "3%",
    marginRight: "3%"
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

export default Header;