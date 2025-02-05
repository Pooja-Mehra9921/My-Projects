import React, { useEffect } from "react";

// import Custom components
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import ProductCardGrid from "../../component/ProductCardGrid";
import {API} from "../../configs/api"


// import material ui components
import { Box, Typography } from "@mui/material";

// import styles
import "./style.css"
import axios from "axios";

const ProductPage =()=>{

useEffect(()=>{
    fetchProduct()
},[]);

    const fetchProduct =async()=>{
        try{
            const response = await axios.get(API.PRODUCTS_API);
            console.log("product page apill call", response.data);
    
            const {status, data:{products =[]}= {}} =response || {};
            if(status === 200){
                console.log("Product Page Api", products);
            }
        }catch(error){
            console.log("error while fetching product api", error);
        }

        

    }

    return(
        <>
<Header/>
        <Box className="product-main-container">
         <Box className="product-container">
            <Box className="filter-section">
                filter section
            </Box>
            <Box className="product-section">
                <ProductCardGrid/>
            </Box>
         </Box>
        </Box>

        <Footer/>
        </>
    )
};

export default ProductPage;