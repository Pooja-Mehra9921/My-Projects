import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";


// import Material UI Component
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// import custom components
import { setSelectedProducts } from "../../redux/appReducer/appReducer";


// import assents
import dummy from "../../assents/suggestions/dummy.png";
import { DollarToIndianPrice, GetDiscountFromPrice } from "../../utility";

// import styles
import "./style.css";

const ProductCardGrid = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isWhishlist, setisWhishlist] = useState(false);  // state to manage whishlist 

const handleSelectedProduct= (product)=>{
  console.log("product selected", product);
  dispatch(setSelectedProducts(product));
  navigate(`/product-detail/${product?.id}`);
}


  /**
   * @description function to manage whishlist
   */
  const handleWhishlistBtn = () => {
    setisWhishlist(!isWhishlist);
  };

  return (
    <>
        <Box className="main-grid-container" onClick={()=>handleSelectedProduct(product)}>
          <IconButton className="heart-icon" onClick={handleWhishlistBtn}>
            {isWhishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <Box className="image-container">
            <img
              className="product-image"
              src={product?.thumbnail || dummy}
              alt="dummy image"
            />
          </Box>
          <Typography
          className="grid-title">
            {product?.title || "no title"}
          </Typography>
          <Tooltip title={product?.description} arrow>
            <Typography
              className="card-description"
              style={{
                margin: "auto 15px",
                fontWeight: "400",
                textAlign: "justify",
              }}
            >
              {product?.description}
            </Typography>
          </Tooltip>
          <Box className="price-section" style={{ display: "flex" }}>
            <Typography className="grid-orignal-price">
              &#8377;{DollarToIndianPrice(product?.price)}
            </Typography>
            <Typography className="product-price">
              &#8377;
              {GetDiscountFromPrice(
                product?.price,
                product?.discountPercentage
              )}
            </Typography>
            <Typography className="grid-discout">
              {`${product?.discountPercentage || ""} % off`}
            </Typography>
          </Box>

          <Typography style={{ margin: "auto 15px" }}>
            <Rating name="read-only" value={product?.rating} readOnly />
          </Typography>

          <Box className="btn-container">
            <Button
              variant="contained  "
              style={{
                color: "white",
                margin: "5px",
                backgroundColor: "#ff9f00",
                border: "none",
              }}
            >
              <ShoppingCartIcon />
              Add to Cart
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "#fb641b", margin: "5px" }}
            >
              <FlashOnIcon />
              Buy Now
            </Button>
          </Box>
        </Box>
   
    </>
  );
};

export default ProductCardGrid;
