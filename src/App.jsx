import { HashRouter, Routes, Route } from "react-router-dom";
import SiteNavbar from "./components/SiteNavbar.jsx";
import Home from "./components/Home.jsx";
import Clubs from "./components/Clubs.jsx";
import AboutMe from "./components/AboutMe.jsx";

export default function App() {
  return (
    <HashRouter>
      <SiteNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </HashRouter>
  );
}