import React from "react";
import {useEffect} from 'react';
import Navbar from "../component/navbar";
import Header from "../component/header";
import TopPlusProduct from "../component/productTopPlus";
import TopMinProduct from "../component/productTopMin";
import Footer from "../component/footer";
import Product from "../component/product";

const Home = () => {


    return (
        <>
            <Navbar/>
            <Header/>
            <Product/>
            <TopPlusProduct/>
            <TopMinProduct/>
            <Footer/>
        </>
    )
  }
  
  export default Home
  