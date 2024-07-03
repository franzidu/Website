import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Page1 from "./pages/page1/page1.jsx";
import Page2 from "./pages/page2/page2.jsx";
import Page3 from "./pages/page3/page3.jsx";
import Impressum from "./pages/Impressum/Impressum.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/page1" exact element={<Page1 />}></Route>
        <Route path="/page2" exact element={<Page2 />}></Route>
        <Route path="/page3" exact element={<Page3 />}></Route>
        <Route path="/Impressum" exact element={<Impressum />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
