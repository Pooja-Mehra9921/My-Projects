import React, { useState } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { Box, Button, TextField } from "@mui/material";
import CartProduct from "../../component/CartProduct";
import axios from "axios";
import { API } from "../../configs/api";
import BackdropLoader from "../../component/BackdropLoader";
import { useSelector } from "react-redux";

const CartPage = () => {
  const [isLoading, setisLoading] = useState(false);
  const [pincode, setPincode] = useState("1111");
  const cartItems = useSelector(store=> store.app.cartItem);
  console.log("cart items", cartItems); 

  const getPinCode = async () => {
    try {
      setisLoading(true);
      const api = API.GET_PINCODE.replace("#PINCODE#", pincode);
      const response = await axios(api);
      console.log("pincode", response);
    } catch (error) {
      setisLoading(false);
      console.log("error while fetching pincode api", error);
    }
  };

  const handlePinCode = (e) => {
    setPincode(e.target.value);
  };

  return (
    <>
      <BackdropLoader isLoading={isLoading} />
      <Header />
      <Box className="cart-container">
        <Box className="product-section">
          <Box className="user-pincode">
            <TextField
              id="outlined-error-helper-text"
              label="Change Pin Code"
              type={"number"}
              variant="outlined"
              size="small"
              fullWidth
              margin="dense"
              value={pincode}
              onChange={handlePinCode}
            ></TextField>
            <Button onClick={getPinCode}>Change</Button>
          </Box>
          <Box className="cart-product-section">
            <CartProduct />
          </Box>
        </Box>
        <Box className="Billing-section"></Box>
      </Box>
      <Footer />
    </>
  );
};

export default CartPage;
