import React from "react";
import Header from "../../component/Header";
import { Box } from "@mui/material";


// import styles
import "./style.css"

const SingleProductDetail = ()=>{
    return(
        <>
        <Header/>
        <Box className="pro-detail-container">
            <Box className="pro-image-section">
                image
            </Box>
            <Box className="pro-detail-section">
                detail
            </Box>

        </Box>
        </>
    )
};

export default SingleProductDetail;