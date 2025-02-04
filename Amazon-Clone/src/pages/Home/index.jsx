import React from "react";

// Import necessary React hooks
import { useEffect } from "react";
import { useState } from "react";

// Import necessary Components
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Suggestions from "../../component/Suggestions";
import ProductSuggestions from "../../component/ProductSuggestions";
import Banner from "../../component/Banner";
import { API } from "../../configs/api";

// Import necessary Components from material-UI

import axios from "axios";
import "./style.css";

const Home = () => {
  // States to manage product details
  const [electronicsProducts, setelectronicsProducts] = useState([]);

  // useeffect hook  to manage fetchproduct function  while api call
  useEffect(() => {
    fetchProduct();
  }, []);

  // function to handle api
  const fetchProduct = async () => {
    try {
      const response = await axios.get(API.PRODUCTS_API);
      console.log("responseeeee----", response.data);
      const {
        status,
        data: { products = [] },
      } = response || {};
      if (status == 200) {
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

export default Home;
