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
import {
  setCartItems,
  setSelectedProducts,
  setWishListItems,
} from "../../redux/appReducer/appReducer";
import { DollarToIndianPrice, GetDiscountFromPrice } from "../../helper";

// import assents
import dummy from "../../assents/suggestions/dummy.png";

// import styles
import "./style.css";

const ProductCardGrid = ({ product }) => {
  const dispatch = useDispatch(); // to store data in redux store
  const navigate = useNavigate(); // to navigate to another component
  const cartItems = useSelector((store) => store?.app?.cartItems || []);
  const isProductMatched = cartItems.filter((cart) => cart?.id === product?.id);
  const [isAdded, setisAdded] = useState(isProductMatched.length > 0);

  const wishListItems = useSelector((store) => store?.app?.wishListItems || []);
  const isWishListProductMatched = wishListItems.filter((wishlist) => wishlist?.id === product?.id);
  const [isWhishlist, setisWhishlist] = useState(isWishListProductMatched.length > 0); // state to manage whishlist
  console.log("whishlist items", wishListItems);

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

    const handleWhishlistBtn = (product) => {
      if (!product) {
        console.error("No product to add to wishlist!");
        return;
      }
    
      const isAlreadyInWishlist = wishListItems.some(
        (item) => item.id === product.id
      );
    
      let updatedWishlist;
    
      if (isAlreadyInWishlist) {
        updatedWishlist = wishListItems.filter((item) => item.id !== product.id);
        setisWhishlist(false);
      } else {
        updatedWishlist = [...wishListItems, product];
        setisWhishlist(true);
      }
    
      dispatch(setWishListItems(updatedWishlist));
    };



  return (
    <>
      <Box className="main-grid-container">
        <IconButton
          disabled={isWhishlist}
          className="heart-icon"
          onClick={()=>handleWhishlistBtn(product)}
        >
          {isWhishlist ? (
            <FavoriteIcon disabled={isWhishlist} />
          ) : (
            <FavoriteBorderIcon disabled={isWhishlist} />
          )}
        </IconButton>
        <Box onClick={() => handleSelectedProduct(product)}>
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
        </Box>
        <Box className="btn-container">
          <Button
            onClick={() => handleAddToCart(product)}
            variant="contained"
            className="add-to-cart-btn"
            style={{
              color: "white",
              margin: "5px",
              backgroundColor: isAdded ? "grey" : "#ff9f00",
              border: "none",
            }}
            disabled={isAdded} // Prevent multiple additions
          >
            <ShoppingCartIcon />
            {isAdded ? "Added to Cart" : "Add to Cart"}
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
