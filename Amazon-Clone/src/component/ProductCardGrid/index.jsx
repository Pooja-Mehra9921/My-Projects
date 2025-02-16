import React from "react";

// import Hooks
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { setCartItem, setCartItems, setSelectedProducts } from "../../redux/appReducer/appReducer";
import { DollarToIndianPrice, GetDiscountFromPrice } from "../../utility";

// import assents
import dummy from "../../assents/suggestions/dummy.png";

// import styles
import "./style.css";

const ProductCardGrid = ({ product }) => {
  const dispatch = useDispatch(); // to store data in redux store
  const navigate = useNavigate(); // to navigate to another component
  const cartItems = useSelector((store)=> store?.app?.cartItemss || []);
  const isProductMatched = cartItems.filter((cart)=>cart?.id === product?.id);
  const [isWhishlist, setisWhishlist] = useState(false); // state to manage whishlist
  const [isAdded, setisAdded] = useState(isProductMatched.length > 0);

  /**
   * @description To click on product card to store product card in redux store and open selected product detail page
   * @param {string} product
   */

  const handleSelectedProduct = (product) => {
    console.log("product selected", product);
    dispatch(setSelectedProducts(product));
    navigate(`/product-detail/${product?.id}`);
  };

  /**
   * @description function to manage whishlist
   */
  const handleWhishlistBtn = () => {
    setisWhishlist(!isWhishlist);
  };

  /**
   * @description handle for add to cart items
   */

  const handleAddToCart = (product) => {
    if (!product) {
      console.error("No product to add to cart!");
      return;
    }
  
    console.log("add to cart", product);
  
    // Ensure cartItems is always an array before spreading
  
    dispatch(setCartItems(product));
    setisAdded(true);
    
  };
  

  return (
    <>
    <Box className="main-grid-container">
    <IconButton className="heart-icon" onClick={handleWhishlistBtn}>
          {isWhishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      <Box
        onClick={() => handleSelectedProduct(product)}
      >
        <Box className="image-container">
          <img
            className="product-image"
            src={product?.thumbnail || dummy}
            alt="dummy image"
          />
        </Box>
        <Typography className="grid-title">
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
            {GetDiscountFromPrice(product?.price, product?.discountPercentage)}
          </Typography>
          <Typography className="grid-discout">
            {`${product?.discountPercentage || ""} % off`}
          </Typography>
        </Box>

        <Typography style={{ margin: "auto 15px" }}>
          <Rating name="read-only" value={product?.rating} readOnly />
        </Typography>
      </Box>
      <Box className="btn-container">
        {!isAdded ? <Button
          onClick={()=>handleAddToCart(product)}
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
          </Button>:
          <Button
          disabled
          onClick={()=>handleAddToCart(product)}
            variant="contained"
            style={{
              color: "white",
              margin: "5px",
              backgroundColor: "grey",
              border: "none",
            }}
          >
            <ShoppingCartIcon />
            Add to Cart
          </Button>
          }
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
