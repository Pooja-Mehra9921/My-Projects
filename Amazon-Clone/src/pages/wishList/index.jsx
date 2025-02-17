import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

// import style sheet
import "./style.css"

const WishListPage = ()=>{
    return(
        <>
        <Header/>
        <Box className="wishlist-main-container">
<Typography>My WishList(12)</Typography>
<Divider/>
<Box className="whishlist-cart">
    <Box>
        <Box>
<Typography>titile</Typography>
<Typography>price</Typography>
        </Box>
    </Box>
<IconButton>
    <DeleteIcon/>
</IconButton>

</Box>
        </Box>
        <Footer/>
        </>
    )
};

export default WishListPage;