import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage.jsx";
import Page2 from "./pages/page2/page2.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Impressum from "./pages/Impressum/Impressum.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/ProjectsPage" exact element={<ProjectsPage />}></Route>
        <Route path="/page2" exact element={<Page2 />}></Route>
        <Route path="/Contact" exact element={<Contact />}></Route>
        <Route path="/Impressum" exact element={<Impressum />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
