import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { Box, Divider, IconButton, Typography } from "@mui/material";

// import style sheet
import "./style.css";
import { useSelector } from "react-redux";
import WishListCart from "../../component/WishListCart";

const WishListPage = () => {
  const WishListItems = useSelector((store) => store.app.wishListItems);
  console.log("whislist item", WishListItems);

  return (
    <>
      <Header />
      <Box className="whislist-page-container">
        <Typography>My WishList(12)</Typography>
        <Divider />

        {WishListItems.map((item, index) => {
          return <WishListCart key={index} product={item} />;
        })}
      </Box>
      <Footer />
    </>
  );
};

export default WishListPage;
