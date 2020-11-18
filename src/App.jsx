import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Login from "./Containers/LoginContainer";
import Sites from "./Containers/SitesContainer";
import Layout from "./Layout/Layout";
import "./index.css";

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/sites" component={Sites} />
          <Redirect to="/" />
        </Switch>        
      </Router>
    </Layout>
  );
}

export default App;
