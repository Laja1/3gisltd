import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/landing/Home";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Partners from "./pages/Patners/Partners";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
             <Route path="/Partners" element={<Partners />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
