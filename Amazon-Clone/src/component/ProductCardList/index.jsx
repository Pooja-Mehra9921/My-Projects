import React from "react";

// import Hooks
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import Material UI Component
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// import assents
import dummy from "../../assents/suggestions/dummy.png";

// import custom hooks
import { setCartItems, setSelectedProducts } from "../../redux/appReducer/appReducer";
import { DollarToIndianPrice, GetDiscountFromPrice } from "../../utility";

// import styles
import "./style.css";

const ProductCardList = ({ product }) => {
  const dispatch = useDispatch(); // to store data in redux
  const navigate = useNavigate();
  const cartItems = useSelector((store)=> store?.app?.cartItems || []);
    const isProductMatched = cartItems.filter((cart)=>cart.id === product.id);
    console.log("product machhhh", isProductMatched);
    const [isWhishlist, setisWhishlist] = useState(false); // state to manage whishlist
    const [isAdded, setisAdded] = useState(isProductMatched.length > 0);


  /**
   * @description handle selected product and redirect to single product detail page
   */

  const handleListproducts = (product) => {
    dispatch(setSelectedProducts(product));
    navigate(`/product-detail/${product?.id}`);
  };

  /**
   * @description to handle whishlist icon
   */
  const handleWhishlistBtn = () => {
    setisWhishlist(!isWhishlist);
  };

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
      <Box
        className="product-list-container"
      >
        <Box className="image-section">
          <img  onClick={() => handleListproducts(product)}
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
        <Box className="detail-section"  onClick={() => handleListproducts(product)}>
          <Typography className="list-title">
            {product?.title || "no title"}
          </Typography>
          <Box style={{ display: "flex", margin: "10px auto" }}>
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
          <Box  onClick={() => handleListproducts(product)}>
          <Typography className="list-price">
            &#8377;{DollarToIndianPrice(product?.price)}
          </Typography>
          <Box style={{ display: "flex" }}>
            <Typography className="list-orignal-price">
              &#8377;
              {GetDiscountFromPrice(
                product?.price,
                product?.discountPercentage
              )}
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
          </Box>
          <Box className="list-btn-container">
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
      </Box>
    </>
  );
};

export default ProductCardList;
