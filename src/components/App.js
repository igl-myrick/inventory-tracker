import React from "react";
import Header from "./Header";
import StoreControl from "./StoreControl";

function App() {
  return (
    <React.Fragment>
      <div class="store">
        <Header/>
        <StoreControl/>
      </div>
    </React.Fragment>
  );
}

export default App;