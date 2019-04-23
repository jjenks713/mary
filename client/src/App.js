import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pics from "./pages/Pics";
import Main from "./pages/Main";
import NavTabs from "./components/Nav";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";




function App() {


  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Main} />
        <Route exact path="/saved" component={Pics} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog" component={Blog} />
      </div>
    </Router>
  );
};


export default App;
