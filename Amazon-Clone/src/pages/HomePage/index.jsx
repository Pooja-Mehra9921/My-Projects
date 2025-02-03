import React, { use, useEffect, useState } from "react";
import "./style.css";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { Box, Typography } from "@mui/material";
import Banner from "../../component/Banner";
import Suggestions from "../../component/Suggestions";
import axios from "axios";
import ProductSuggestions from "../../component/ProductSuggestions";
import { API } from "../../configs/api";

const HomePage = () => {
const [electronicsProducts, setelectronicsProducts] = useState([]);

  useEffect(() => {
  fetchProduct();

  }, []);

  const fetchProduct = async() => {
    try {
const response = await axios.get(API.PRODUCTS_API);
console.log("responseeeee----", response.data);
const {status , data:{products =[]}, }= response || {};
if(status == 200){
  products.forEach(product => {
    if(product?.category == "laptops" || 
      product?.category == "smartphones" ||
      product?.category == "mobile-accessories"
    ){
      electronicsProducts.push(product);
      setelectronicsProducts(electronicsProducts);
    }
  });
}

    } catch (error) {
      console.log("error while fetching product api", error);
    }
  };

  return (
    <>
      <Header />
      <Suggestions />
      <Banner />
      <ProductSuggestions title="Best of Electronices" />
      <ProductSuggestions title="Beauty, Food, Toys & more" />
      <ProductSuggestions title="Grooming, Books, Auto & more" />
      <ProductSuggestions title="fashion Top Deals" />
      <Footer />
    </>
  );
};

export default HomePage;
