import React from "react";
import Header from "./Header";
import CategoryControl from "./category/CategoryControl";

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row">          
          <div className="col-md-6">
            <CategoryControl />
          </div>
          <div className="col-md-6">
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
          </div>
        </div>
      </div>      
    </React.Fragment>
  );
}

export default App;