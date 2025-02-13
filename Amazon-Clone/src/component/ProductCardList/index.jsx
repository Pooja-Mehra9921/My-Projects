import React, { useState } from "react";
import { useDispatch } from "react-redux";

// import Material UI Component
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// import assents
import dummy from "../../assents/suggestions/dummy.png";

// import styles
import "./style.css";
import { DollarToIndianPrice, GetDiscountFromPrice } from "../../utility";
import { setSelectedProducts } from "../../redux/appReducer/appReducer";
import { useNavigate } from "react-router-dom";

const ProductCardList = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
   const [isWhishlist, setisWhishlist] = useState(false);

   const handleListproducts=(product)=>{
dispatch(setSelectedProducts(product));
navigate(`/product-detail/${product?.id}`)

   }
  
    const handleWhishlistBtn = () => {
      setisWhishlist(!isWhishlist);
    };
  return (
    <>
      <Box className="product-list-container" onClick={()=>handleListproducts(product)}>
        <Box className="image-section">
          <img
            className="product-list-image"
            src={product?.thumbnail || dummy}
            alt={product?.title}
          />
          <Box className="fav-icon">
          <IconButton className="heart-icon" onClick={handleWhishlistBtn}>
            {isWhishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          </Box>
        </Box>

        {/*Detail section*/}
        <Box className="detail-section">
          <Typography className="list-title">
            {product?.title || "no title"}
          </Typography>
          <Box style={{ display: "flex", margin:"10px auto" }}>
            <Button className="rating-btn" variant="contained">
              {Number(product?.rating).toFixed(1)}
              <StarIcon style={{ fontSize: "16px", marginTop: "-3px" }} />
            </Button>
            <Typography
              style={{ color: "grey" }}
            >{`${product?.rating} Ratings & ${(product?.reviews).length} Reviews`}</Typography>
          </Box>
          <Typography className="list-description">
            {product?.description}
          </Typography>
          <Typography className="list-description">
            
            Brand: <strong>{product?.brand}</strong>
          </Typography>
          <Typography className="list-description">
            Category: <strong>{product?.category}</strong>
          </Typography>
        </Box>

        {/*Price section*/}
        <Box className="list-price-section">
          <Typography className="list-price">
            &#8377;{DollarToIndianPrice(product?.price)}
          </Typography>
          <Box style={{display:"flex"}}>
          <Typography className="list-orignal-price">
            &#8377;
            {GetDiscountFromPrice(product?.price, product?.discountPercentage)}
          </Typography>
          <Typography className="list-discount-price">{`${product?.discountPercentage} % off`}</Typography>
          </Box>

          <Typography
            sx={{
              color:
                product?.availabilityStatus === "In Stock" ? "green" : "red",
            }}
          >
            {product?.availabilityStatus}
          </Typography>

          <Typography>{product?.warrantyInformation}</Typography>
          <Box className="list-btn-container">
            <Button
              variant="contained"
              className="add-to-cart-btn"
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
      </Box>
    </>
  );
};

export default ProductCardList;
