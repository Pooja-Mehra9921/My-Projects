import React from "react";
import axios from "axios";

// import Hooks
import { useState } from "react";
import { useSelector } from "react-redux";

// import Material ui component
import  Box  from "@mui/material/Box";
import  Button  from "@mui/material/Button";
import  Divider  from "@mui/material/Divider";
import  Paper  from "@mui/material/Paper";
import  TextField  from "@mui/material/TextField";
import  Typography  from "@mui/material/Typography";

// import Custom Components

import { API } from "../../configs/api";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { GetDiscountFromPrice } from "../../helper";
import AddAddress from "../../component/AddAddress";
import CartProduct from "../../component/CartProduct";
import SelectAddress from "../../component/SelectAddress";
import BackdropLoader from "../../component/BackdropLoader";

// import style sheet
import "./style.css";

const CartPage = () => {
  const cartItems = useSelector((store) => store.app.cartItems) || [];
  const productWithQuantity = cartItems.map((cart) => ({   // adding a quantity key in the cart 
    ...cart,
    quantity: cart.minimumOrderQuantity ? cart.minimumOrderQuantity : 1,
  }));

  const [updatedCartProduct, setUpdatedCartProduct] =
    useState(productWithQuantity);
  const [isLoading, setisLoading] = useState(false);
  const [pincode, setPincode] = useState("1111");
  const [openAddress, setOpenAddress] = useState(false);

  const handlePinCode = (e) => {
    setPincode(e.target.value);
  };

  const coupon = (Math.random() * 100).toFixed(1);
  const deliveryCharges = (Math.random() * 100).toFixed(1);
  let originalPrice = 0;
  let totalDiscountPrice = 0;
  const totalSavings = Number(totalDiscountPrice) + Number(coupon);

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

  const handleAddress = () => {
    setOpenAddress(true);
  };
  const handleClose = () => {
    setOpenAddress(false);
  };
  return (
    <>
      <BackdropLoader isLoading={isLoading} />
      {openAddress && <AddAddress openAddress={openAddress} onClose={handleClose}/>}
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
            <Button onClick={handleAddress}>Change</Button>
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
          <Typography variant="h6" color="grey" style={{ margin: "10px auto" }}>
            PRICE DETAILS
          </Typography>
          <Divider />
          <Box className="add-to-cart-price">
            <Typography variant="body2">
              Price ({updatedCartProduct.length} items)
            </Typography>
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
          <Divider />
          <Box className="add-to-cart-price">
            <Typography variant="body2">
              <strong>Total Amount</strong>
            </Typography>
            <Typography variant="body2">
              <strong>₹{total}</strong>
            </Typography>
          </Box>
          <Divider />
          <Typography sx={{ color: "green", margin: "10px auto" }}>
  You will save ₹{totalSavings.toFixed(2)} on this Order
</Typography>
        </Paper>
      </Box>
      <Footer />
    </>
  );
};

export default CartPage;
