import React from "react";

// import Material UI Component
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// import assents
import dummy from "../../assents/suggestions/dummy.png";
import { DollarToIndianPrice, DollerToIndianPrice } from "../../utility";

// import styles
import "./style.css";

const ProductCardGrid = ({ product = [] }) => {
  return (
    <>
      <Box className="product-grid-container">
        {product.map((item, index) => (
          <Box key={index} className="main-grid-container">
            <IconButton className="heart-icon">
              <FavoriteIcon />
              <FavoriteBorderIcon />
            </IconButton>
            <Box className="image-container">
              <img
                className="product-image"
                src={item?.thumbnail || dummy}
                alt="dummy image"
              />
            </Box>
            <Typography
              style={{
                margin: "auto 15px",
                marginTop: "10px",
                textAlign: "left",
                fontWeight: "600",
                fontSize: "16px",
                color: "grey",
              }}
            >
              {item?.title || "no title"}
            </Typography>
            <Tooltip title={item?.description} arrow>
              <Typography
                className="card-description"
                style={{
                  margin: "auto 15px",
                  fontWeight: "400",
                  textAlign: "justify",
                }}
              >
                {item?.description}
              </Typography>
            </Tooltip>
            <Box className="price-section" style={{ display: "flex", }}>
              <Typography className="grid-orignal-price">
                {DollarToIndianPrice(item?.price)}
              </Typography>
              <Typography className="product-price">
784
              </Typography>
              <Typography className="grid-discout" >
                
               {item?.discountPercentage} % off
              </Typography>
            </Box>

            <Typography style={{ margin: "auto 15px" }}>
              <Rating name="read-only" value={item?.rating} readOnly />
            </Typography>

            <Box className="btn-container">
              <Button
                variant="contained  "
                style={{
                  color:"white",
                  margin: "5px",
                  backgroundColor:"#ff9f00",
                  border:"none",
                  
                }}
              >
                <ShoppingCartIcon />
                Add to Cart
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "#fb641b", margin: "5px" }}
              >
                <FlashOnIcon/>
                Buy Now
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default ProductCardGrid;
