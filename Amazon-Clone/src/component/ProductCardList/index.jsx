import React from "react";

// import Material UI Component
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// import assents
import dummy from "../../assents/suggestions/dummy.png";

// import styles
import "./style.css";
import { Divider } from "@mui/material";

const ProductCardList = ({product}) => {
  return (
    <>
    <Box className="product-list-container">
    <Box className="image-section">
      <Box className="fav-icon">
      <IconButton size="small" >
        <FavoriteIcon/>
      </IconButton>
      </Box>
      
      <img className="product-list-image" src={product?.thumbnail || dummy} alt={product?.title} />
    </Box>
    <Box className="detail-section">{product?.title || "no title"}</Box>
    <Box className="price-section">{product?.price}</Box>
    
    </Box>
    </>
  );
};

export default ProductCardList;
