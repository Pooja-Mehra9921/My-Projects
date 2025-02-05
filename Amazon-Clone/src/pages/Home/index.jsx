import React, { use } from "react";

// Import  React hooks
import { useEffect } from "react";
import { useState } from "react";

// Import custom Components
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Suggestions from "../../component/Suggestions";
import ProductSuggestions from "../../component/ProductSuggestions";
import Banner from "../../component/Banner";
import { API } from "../../configs/api";

// Import material-UI Components

import axios from "axios";
import "./style.css";

const Home = () => {
  // States to manage product details
  const [electronicsProducts, setelectronicsProducts] = useState([]);
  const [fashionProducts, setfashionProducts] = useState([]);
  const [beautyProducts, setbeautyProducts] = useState([]);
  const [otherProducts, setotherProducts] = useState([]);

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
      if (status === 200) {
        const electronices = products.filter(
          (product) =>
            product?.category == "mobile-accessories" ||
            product?.category == "smartphones" ||
            product?.category == "laptops"
        );
        setelectronicsProducts(electronices);

        const fashion = products.filter(
          (product) =>
            product?.category == "womens-dresses" ||
            product?.category == "mens-shirts" ||
            product?.category == "mens-shoes" ||
            product?.category == "womens-shoes"
        );
        setfashionProducts(fashion);

        const beauty = products.filter(
          (product) =>
            product?.category == "beauty" ||
            product?.category == "ragrances" ||
            product?.category == "skin-care" ||
            product?.category == "groceries"
        );

        setbeautyProducts(beauty);

        const moreProduct = products.filter((product)=>
        product?.category == "furniture" ||
        product?.category == "home-decoration" ||
        product?.category == "kitchen-accessories" 
        )

        setotherProducts(moreProduct);
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
      {}
      <ProductSuggestions
        title="Best of Electronices"
        product={electronicsProducts}
      />
      <ProductSuggestions title="Fashion Top Deals" product={fashionProducts} />
      <ProductSuggestions
        title=" Beauty, Food, Toys & more"
        product={beautyProducts}
      />
      <ProductSuggestions title="More Products" product={otherProducts} />
      <Footer />
    </>
  );
};

export default Home;
