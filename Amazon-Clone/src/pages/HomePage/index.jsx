import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { Box, Typography } from "@mui/material";
import Banner from "../../component/Banner";
import Suggestions from "../../component/Suggestions";
import { API } from "../../configs/api";
import axios from "axios";

const HomePage = () => {
  const [product, setproduct] = useState([]);
  console.log("set product data----------", setproduct);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API.PRODUCT_API);
        console.log("product api", response.data);
        setproduct(response.data);
      } catch (error) {
        console.log("errorr while feching product api", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header />
{
    product.map((element, index)=>(
        <Box>
            <Typography>{element.title}</Typography>
            <Typography>{index}</Typography>
        </Box>
    ))
}
      <Suggestions />
      <Banner />
      <Box>This is a Home Page</Box>
      <Footer />
    </>
  );
};

export default HomePage;
