import React, { useCallback } from "react";
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
import { useParams } from "react-router-dom";
import PageNotFound from "../NotFound";
import { Margin } from "@mui/icons-material";

const ProductPage = () => {
  // State Management
  const params = useParams();

  const [allProduct, setAllProduct] = useState([]);
  const [ViewOfProduct, setViewOfProduct] = useState("grid"); // Default to 'grid'
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (params.category == "all") {
      fetchAllProducts();
    } else {
      fetchCategoryProducts(params.category);
    }
  }, [params.category]);

  const fetchAllProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(API.PRODUCTS_API);
      if (response.status === 200) {
        setAllProduct(response.data.products);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, []);
  const fetchCategoryProducts = async (category) => {
    try {
      setLoading(true);

      const api = API.PRODUCT_BY_CATEGORY.replace("#CATEGORY#", category);
      const { status, data: { products = [] } = {} } = await axios(api);

      if (status == 200) {
        setProductData(products);
        setLoading(false);
      }
    } catch (err) {
      console.error("--error while fetching category Api--", err);
      setLoading(false);
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

            {ViewOfProduct === "list" && (

              <Box >
                <Box className="product-list-con">

                {allProduct == 0 && <PageNotFound/>}

                </Box>

                
                {allProduct.map((item, index) => {
                  return <ProductCardList key={index} product={item} />;
                })}
              </Box>
            )}

            {ViewOfProduct === "grid" && (
              <Box className="product-grid-container">
                {allProduct == 0 && <PageNotFound/>}

                {allProduct.map((item, index) => {
                  return <ProductCardGrid key={index} product={item} />;
                })}
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
