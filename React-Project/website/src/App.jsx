import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Main from "./components/Main";
import AboutUs from "./components/pages/Aboutus";
import ContactPage from "./components/pages/Contact";
import Err404page from "./components/pages/Err404page";
import Portfolio_section from "./components/pages/Portfolio_section";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio_section />} />
          <Route path="/*" element={<Err404page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
