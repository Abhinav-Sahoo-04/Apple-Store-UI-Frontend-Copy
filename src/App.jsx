import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./pages/Navbar";
import NavPop from "./pages/NavPop";
import StoreSlider from "./pages/StoreSlider";
import ItemSlider from "./pages/ItemSlider";
import PersonalisationSlider from "./pages/PersonalisationSlider";
import Footer from "./pages/Footer";
import Development from "./pages/Development";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <NavPop />
                <StoreSlider />
                <ItemSlider />
                <PersonalisationSlider />
                <Footer />
              </>
            }
          />
          <Route path="/development" element={<Development />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
