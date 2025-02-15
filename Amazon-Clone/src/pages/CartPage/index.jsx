import React, { useState } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { Box, Button, Divider, Paper, TextField, Typography } from "@mui/material";
import CartProduct from "../../component/CartProduct";
import axios from "axios";
import { API } from "../../configs/api";
import BackdropLoader from "../../component/BackdropLoader";
import { useSelector } from "react-redux";
import "./style.css";
import { GetDiscountFromPrice } from "../../utility";

const CartPage = () => {
  const cartItems = useSelector((store) => store.app.cartItems) || [];
const productWithQuantity = cartItems.map((cart) => ({
  ...cart,
  quantity: cart.minimumOrderQuantity ? cart.minimumOrderQuantity : 1,
}));

const [updatedCartProduct, setUpdatedCartProduct] = useState(productWithQuantity);
const [isLoading, setisLoading] = useState(false);
const [pincode, setPincode] = useState("1111");


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

  const coupon = (Math.random() * 100).toFixed(1);
  const deliveryCharges = (Math.random() * 100).toFixed(1);
  let originalPrice = 0;
  let totalDiscountPrice = 0;
  
  
  /**
   * @description fetching values for billing
   */
  updatedCartProduct.forEach((cart) => {
    let price = (cart.price * cart.quantity).toFixed(2);

    let priceBeforeDiscount = GetDiscountFromPrice(
      price,
      cart?.discountPercentage
    );

    originalPrice = (
      Number(originalPrice) + Number(priceBeforeDiscount)
    ).toFixed(2);

    const discountPriceOfSingleProduct = Number(priceBeforeDiscount) - price;

    totalDiscountPrice = (
      Number(totalDiscountPrice) + Number(discountPriceOfSingleProduct)
    ).toFixed(2);
  });
  const handleProductQuantityUpdate = (productFromChild) => {
    const updatedQuantity = updatedCartProduct.map((product) => {
      if (product?.id == productFromChild?.id) {
        return productFromChild;
      } else {
        return product;
      }
    });

    setUpdatedCartProduct(updatedQuantity);
  };

  const total = (
    Number(originalPrice) -
    (Number(totalDiscountPrice) + Number(coupon) + Number(deliveryCharges))
  ).toFixed(2);

  return (
    <>
      <BackdropLoader isLoading={isLoading} />
      <Header />
      <Box className="addcart-container">
        <Box className="add-product-section">
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
          <Paper className="cart-product-section">
          {updatedCartProduct.map((product, index) => {
                return (
                  <>
                    <CartProduct
                      key={index}
                      product={product}
                      onProductQuantityUpdate={handleProductQuantityUpdate}
                    />
                  </>
                );
              })}
          </Paper>
        </Box>
        <Paper className="Billing-section">
<Typography variant="h6" color="grey" style={{margin:"10px auto"}}>PRICE DETAILS</Typography>
<Divider/>
<Box className="add-to-cart-price">
  <Typography variant="body2">Price ({updatedCartProduct.length} items)</Typography>
  <Typography variant="body2">₹{originalPrice}</Typography>
</Box>
<Box className="add-to-cart-price">
  <Typography variant="body2">Discount</Typography>
  <Typography variant="body2">₹ {totalDiscountPrice}</Typography>
</Box>
<Box className="add-to-cart-price">
  <Typography variant="body2">Caupon For You</Typography>
  <Typography variant="body2">₹{coupon}</Typography>
</Box>
<Box className="add-to-cart-price">
  <Typography variant="body2">Delivery Charges</Typography>
  <Typography variant="body2">₹{deliveryCharges}</Typography>
</Box>
<Divider/>
<Box className="add-to-cart-price">
  <Typography variant="body2"><strong>Total Amount</strong></Typography>
  <Typography variant="body2"><strong>₹{total}</strong></Typography>
</Box>
<Divider/>
<Typography variant="body1" sx={{color:"green", margin:"10px auto"}}>You will save ₹67676 on this Order</Typography>
        </Paper>
      </Box>
      <Footer />
    </>
  );
};

export default CartPage;
