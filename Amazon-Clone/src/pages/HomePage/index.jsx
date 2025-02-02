import React from "react";
import "./style.css";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { Box } from "@mui/material";
import Banner from "../../component/Banner";

const HomePage =()=>{
    return(
        <>
        <Header/>
        <Banner/>
        <Box>
        This is a Home Page

        </Box>
        <Footer/>
        </>
    )
};

export default HomePage;