import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <div>
      <Navbar />
      <>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography component="div" style={{ paddingTop: "15px" }} />
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/cart" component={Cart} />
          </Switch>
        </Container>
      </>
    </div>
  );
};

export default App;
