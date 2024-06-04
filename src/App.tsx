import { BrowserRouter, Route, Routes, } from "react-router-dom";
import ScrollToTop from './Compoents/ScrollToTop';
import Layout from "./Layout";
import Home from "./pages/landing/Home";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Partners from "./pages/Patners/Partners";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Service from "./pages/Services/Service";

export default function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
     
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Services" element={<Services />} >
           
          </Route>
          <Route path="/Service/:id" element={<Service />} />
          <Route path="/About" element={<About />} />
             <Route path="/Partners" element={<Partners />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Contact" element={<Contact />}/>
              
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
