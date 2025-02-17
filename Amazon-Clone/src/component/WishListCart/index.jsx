import React from "react";
import "./style.css";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";


const WishListCart = ({product = []})=>{

    return(
        <>
        <Box className="wishlist-main-container">
            <Box className="wishlist-container">
        <Box className="whishlist-cart">
          <Box className="wishlist-detail">
            <img className="wishlist-image" src={product?.thumbnail} alt={product?.title} />
            <Box>
              <Typography>{product?.title}</Typography>
              <Box className="wishlist-price-sec">
              <Typography>price</Typography>
              <Typography>price</Typography>
              <Typography>price</Typography>
              </Box>
            </Box>
          </Box>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Box>
            </Box>
            <Divider/>
      </Box>
        </>
    )
};

export default WishListCart;