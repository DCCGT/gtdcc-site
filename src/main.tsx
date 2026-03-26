import "./styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Apply from "./pages/Apply";
import Inquiry from "./pages/Inquiry";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <Nav />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/inquiry" element={<Inquiry />} />
        </Routes>
      </main>
    </BrowserRouter>
  </StrictMode>
);
