import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { Box, Divider, IconButton, Typography } from "@mui/material";

// import style sheet
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import WishListCart from "../../component/WishListCart";
import { setCartItems, setWishListItems } from "../../redux/appReducer/appReducer";

const WishListPage = () => {
const wishListItems = useSelector((store)=> store.app.wishListItems);
const dispatch = useDispatch()

  const handleRemovewishlistCart = (productId) => {
    const updatedWishlist = wishListItems.filter((item) => item.id !== productId);
    dispatch(setWishListItems(updatedWishlist));
  };


  return (
    <>
      <Header />
      <Box className="whislist-page-container">
          <Box className="cart-title">
               
                 <span style={{textAlign:"center", borderBottom:"1px solid white", fontSize:"50px"}}><strong>My WishList ( {wishListItems.length} )</strong></span> 
                  
              </Box>
        <Divider style={{marginTop:"20px"}} />

        {wishListItems.map((item, index) => {
  return (
    <WishListCart
      key={index}
      product={item}
      onRemoveWishlistCart={() => handleRemovewishlistCart(item.id)}
    />
  );
})}
      </Box>
      <Footer />
    </>
  );
};

export default WishListPage;
