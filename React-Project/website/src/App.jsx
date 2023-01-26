import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Main from "./components/Main";
import ContactPage from "./components/pages/Contact";
import Err404page from "./components/pages/Err404page";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/*" element={<Err404page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
