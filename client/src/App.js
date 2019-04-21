import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pics from "./pages/Pics";
import Main from "./pages/Main";
import NavTabs from "./components/Nav";




function App() {


  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Main} />
        <Route exact path="/saved" component={Pics} />
      </div>
    </Router>
  );
};


export default App;
