import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/landing/Home";


export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
