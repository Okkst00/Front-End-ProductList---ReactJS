import React from "react";
import Home from "./pages/home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NotFound from "./pages/notfound";
import ScrollToTop from "react-scroll-to-top";
import Product from "./pages/products";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/products" element={<Product/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </Router>
    )
  }
  
  export default App
  