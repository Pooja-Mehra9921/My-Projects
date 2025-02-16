import React, { useState } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { Box, Button, Paper, TextField } from "@mui/material";
import CartProduct from "../../component/CartProduct";
import axios from "axios";
import { API } from "../../configs/api";
import BackdropLoader from "../../component/BackdropLoader";
import { useSelector } from "react-redux";
import "./style.css";

const CartPage = () => {
  const cartItems = useSelector((store) => store.app.cartItems) || [];
  console.log("cart items", cartItems);
  const productWithQuantity = cartItems.map((cart) => ({
    ...cart,
    quantity: cartItems?.minimumOrderQuantity ? cartItems?.minimumOrderQuantity :  1,
  }));
  const [updatedCartProduct, setUpdatedCartProduct] =
    useState(productWithQuantity);
  const [isLoading, setisLoading] = useState(false);
  const [pincode, setPincode] = useState("1111");
  console.log("----------------", cartItems, updatedCartProduct);

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
      <Box className="addcart-container">
        <Paper className="add-product-section">
          <Paper className="user-pincode">
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
          </Paper>
          <Box className="cart-product-section">
            {updatedCartProduct.map((item, index) => {
              return (
                <>
                  <CartProduct key={index} product={item} />
                </>
              );
            })}
          </Box>
        </Paper>
        <Paper className="Billing-section">billing section</Paper>
      </Box>
      <Footer />
    </>
  );
};

export default CartPage;
