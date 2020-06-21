import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "antd/dist/antd.css";
import "./App.css";
import UploadForm from "./components/UploadForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UploadForm} />
        <Route path="*" component={UploadForm} />
      </Switch>
    </Router>
  );
}

export default App;
