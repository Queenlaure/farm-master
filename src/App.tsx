import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Market from "./pages/Market";
import CollectSoilProfile from "./pages/CollectSoilProfile";
import FarmCalendar from "./pages/FarmCalendar";
import CalenderProvider from "./context/CalendarContext";
import CardDetails from "./pages/CardDetails";
import ProjectDetails from "./pages/ProjectDetails";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="">
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <CalenderProvider>
            <Routes>
              <Route index element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="waste-marketplace" element={<Market />} />
              <Route path="soil-profile" element={<CollectSoilProfile />} />
              <Route path="card-details" element={<CardDetails />} />
              <Route path="farm-calendar/:slug" element={<FarmCalendar />} />
              <Route
                path="project-details/:slug"
                element={<ProjectDetails />}
              />
              <Route path="card-details/:slug" element={<CardDetails />} />
            </Routes>
          </CalenderProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
