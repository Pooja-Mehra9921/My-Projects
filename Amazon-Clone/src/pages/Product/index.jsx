import React from "react";
import axios from "axios";

// import hooks
import { useState } from "react";
import { useEffect } from "react";

// Import Custom Components
import { API } from "../../configs/api";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import BackdropLoader from "../../component/BackdropLoader";
import ProductCardGrid from "../../component/ProductCardGrid";
import ProductCardList from "../../component/ProductCardList";

// Import Material UI Components
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";

// Import Styles
import "./style.css";

const ProductPage = () => {
  // State Management
  const [allProduct, setAllProduct] = useState([]);
  const [ViewOfProduct, setViewOfProduct] = useState("grid"); // Default to 'grid'
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(API.PRODUCTS_API);
      console.log("Product Page API call", response.data);

      const { status, data: { products = [] } = {} } = response || {};
      if (status === 200) {
        setIsLoading(false);
        console.log("Product Page API", products);
        setAllProduct(products);
      }
    } catch (error) {
      console.log("Error while fetching product API", error);
      setIsLoading(false);
    }
  };

  /**
   * @description to change view of product to list view and grid view
   * @param {string} type
   */
  const handleViewOfProduct = (type) => {
    setViewOfProduct(type);
  };

  return (
    <>
      <Header />
      <BackdropLoader isLoading={isLoading} />
      <Box className="product-main-container">
        <Box className="product-container">
          <Box className="filter-section">Filter Section</Box>
          <Box className="product-section">
            <Box className="view-icon-container">
              <IconButton onClick={() => handleViewOfProduct("grid")}>
                <ViewModuleIcon />
              </IconButton>
              <IconButton onClick={() => handleViewOfProduct("list")}>
                <ViewListIcon />
              </IconButton>
            </Box>

            {ViewOfProduct === "list" &&
              allProduct.map((item) => (
                <ProductCardList key={item.id} product={item} />
              ))}

            {ViewOfProduct === "grid" && (
              <Box className="product-grid-container">
                {allProduct.map((item) => (
                  <ProductCardGrid key={item.id} product={item} />
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default ProductPage;
