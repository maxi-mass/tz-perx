import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart";
import Goods from "./pages/Goods";

const App = () => {
  return (
    <div className="app-wrapper">
      <Navbar />

      <div className="container">
        <Switch>
          <Route path="/" component={Goods} exact />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
