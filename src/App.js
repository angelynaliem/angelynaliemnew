import React from "react";

//Import global styling for styled components.
import GlobalStyle from "./components/GlobalStyle";

//Import the pages and components to be displayed in this application.
import AboutPage from "./pages/AboutPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";

import { Routes, Route, useLocation } from "react-router-dom";

//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<AboutPage />} />
          <Route exact path="/projects" element={<ProjectsPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
