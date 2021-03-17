import React from "react";
import "./App.css";
import NavBar from "./component/Nav";
import Products from "./component/Products";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from "./component/Details";
import Cart from "./component/Cart";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/products/:id" component={Details} />
          <Route exact path="/cart" component={Cart} />
          <Route
            exact
            path="*"
            component={() => {
              return (
                <div className="error">
                  {" "}
                  <h1>Error 404 </h1> <br />
                  <br />
                  <h3>page not found</h3>
                </div>
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
