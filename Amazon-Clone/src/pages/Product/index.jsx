import React, { useEffect, useState } from "react";

// import Custom components
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import ProductCardGrid from "../../component/ProductCardGrid";
import {API} from "../../configs/api"


// import material ui components
import { Box, IconButton, Typography } from "@mui/material";
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';

// import styles
import "./style.css"
import axios from "axios";
import ProductCardList from "../../component/ProductCardList";

const ProductPage =()=>{

    const [allProduct, setallProduct] = useState([]);
   const [ ViewOfProduct, setViewOfProduct] = useState(false);

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
                setallProduct(products);
            }
        }catch(error){
            console.log("error while fetching product api", error);
        }

        

    }

const showGridView=()=>{
    console.log("grid view");
    <ProductCardGrid product={allProduct}/>

}
const showListView=()=>{
    console.log("List view");
    <ProductCardList/>
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
                <Box className="view-icon-container">
                    <IconButton onClick={showGridView}>
                    <ViewModuleIcon/>
                    </IconButton>
                    <IconButton onClick={showListView}>
                    <ViewListIcon/>
                    </IconButton>
                 
                </Box>
                    
 
                    
              

                <ProductCardGrid product={allProduct}/>
            </Box>
         </Box>
        </Box>

        <Footer/>
        </>
    )
};

export default ProductPage;