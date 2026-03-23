import "./responsive.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Apply from "./pages/Apply";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
