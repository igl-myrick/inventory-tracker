import React from "react";
import StoreControl from "./StoreControl";

function App() {
  const divStyles = {
    marginLeft: "20%",
    marginRight: "20%"
  }
  
  return (
    <React.Fragment>
      <div style={divStyles} className="store">
        <StoreControl/>
      </div>
    </React.Fragment>
  );
}

export default App;