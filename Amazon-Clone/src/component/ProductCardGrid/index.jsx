import React from "react";

// import Material UI Component
import Box from "@mui/material/Box";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// import assents
import dummy from "../../assents/suggestions/dummy.png"

// import styles
import "./style.css";
import { Button, Typography } from "@mui/material";

const ProductCardGrid = () => {
  return (
    <>
      <Box className="product-grid-container">
        <Box className="main-grid-container">
          <Box className="heart-icon">
<FavoriteIcon />
<FavoriteBorderIcon/>
          </Box>
          <Box className="image-container">
            <img className="product-image" src={dummy} alt="dummy image" />
          </Box>
          <Typography style={{margin:"auto 15px", marginTop:"10px"}}>Tittle</Typography>
          <Typography style={{margin:"auto 15px"}}>This is a description of product</Typography>
          <Typography style={{margin:"auto 15px"}}>price</Typography>
          <Box className="btn-container">
            <Button variant="outlined"  style={{border:"1px solid grey", color:"grey", margin:"5px"}} >Add to Cart</Button>
            <Button variant="contained"  style={{backgroundColor:"#fb641b", margin:"5px"}}>Buy Now</Button>
          </Box>
        </Box>

        
      </Box>
    </>
  );
};

export default ProductCardGrid;
