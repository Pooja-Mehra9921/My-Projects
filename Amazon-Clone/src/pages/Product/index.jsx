import React from "react";
import axios from "axios";

// import react Hooks
import { useEffect } from "react";
import { useState } from "react";

// import Custom components
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import ProductCardGrid from "../../component/ProductCardGrid";
import ProductCardList from "../../component/ProductCardList";
import BackdropLoader from "../../component/BackdropLoader"

import { API } from "../../configs/api";

// import material ui components
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewListIcon from "@mui/icons-material/ViewList";

// import styles
import "./style.css";

const ProductPage = () => {
  // states to manages data
  const [allProduct, setallProduct] = useState([]);
  const [ViewOfProduct, setViewOfProduct] = useState(true);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      setisLoading(true);
      const response = await axios.get(API.PRODUCTS_API);
      console.log("product page apill call", response.data);

      const { status, data: { products = [] } = {} } = response || {};
      if (status === 200) {
      setisLoading(false);

        console.log("Product Page Api", products);
        setallProduct(products);
      }
    } catch (error) {
      console.log("error while fetching product api", error);
    }
  };

  const showGridView = () => {
    setViewOfProduct(true);
  };
  const showListView = () => {
    setViewOfProduct(false);
  };

  return (
    <>
      <Header />
      <BackdropLoader isLoading={isLoading}/>
      <Box className="product-main-container">
        <Box className="product-container">
          <Box className="filter-section">filter section</Box>
          <Box className="product-section">
            <Box className="view-icon-container">
              <IconButton onClick={showGridView}>
                <ViewModuleIcon />
              </IconButton>
              <IconButton onClick={showListView}>
                <ViewListIcon />
              </IconButton>
            </Box>
            {!ViewOfProduct ? (
              <ProductCardList product={allProduct} />

            ) : (
              <ProductCardGrid product={allProduct} />

            )}
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default ProductPage;
