import { Box, Button, ButtonGroup, Divider, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "./style.css";
import { DollarToIndianPrice } from "../../utility";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { setSelectedProducts } from "../../redux/appReducer/appReducer";

const CartProduct = ({ product = {}, onProductQuantityUpdate }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
const [quantity, setQuantity] = useState(1);

const handleProductCart =(product)=>{
    dispatch(setSelectedProducts(product));
    navigate(`/product-detail/${product?.id}`);

};

const handleChangeQuantity = (event) => {
  if (isNaN(Number(event?.target?.value))) return quantity;
  setQuantity(Number(event?.target?.value));

  const updatedQuantity = {
    ...product,
    quantity: Number(event?.target?.value),
  };
  onProductQuantityUpdate(updatedQuantity);
};

/* @description Adding/Removing quantity
* @param {String} type
* @returns
*/
const handleQuantityIncDec = (type) => () => {
 //
 if (type == "inc") {
   if (quantity == product?.stock) return quantity;

   const updatedQuantity = { ...product, quantity: quantity + 1 };
   onProductQuantityUpdate(updatedQuantity);
   setQuantity(quantity + 1);
 }

 if (type == "dec") {
   if (quantity == product?.minimumOrderQuantity) return quantity;

   const updatedQuantity = { ...product, quantity: quantity - 1 };
   onProductQuantityUpdate(updatedQuantity);

   setQuantity(quantity - 1);
 }
};

  return (
    <>
      <Box className="add-to-cart-product" onClick={()=>handleProductCart(product)}>
        <Box className="add-to-cart-image-sec">
          <img
            className="add-to-cart-image"
            src={product?.thumbnail}
            alt={product?.title}
          />
        </Box>
        <Box className="add-to-cart-deatil">
          <Box className="title-shipping">
            <Typography variant="h6">{product?.title}</Typography>
            <Typography variant="body2">
              {product?.shippingInformation}
            </Typography>
          </Box>
          <Typography>{product?.brand}</Typography>
          {product?.stock == 0 ? (
            "Out of Stock"
          ) : (
            <>
              <Typography>In Stock: {product?.stock}</Typography>
              <Typography>
                {" "}
                &#8377;{DollarToIndianPrice(product?.price)}
              </Typography>
            </>
          )}
          
        </Box>
      </Box>
      <Box style={{display:"flex", alignItem:"center", justifyContent:"space-between"}}>
      <Box className="quent-btn-section">
            <Box className="quent-btn-container">
                <IconButton 
                disabled={quantity === 0}
                onClick={handleQuantityIncDec("dec")}><RemoveCircleOutlineIcon/></IconButton>
                <TextField 
                value={quantity}
                onChange={handleChangeQuantity}
                sx={{width:"50px"}}
                size="small"
                ></TextField>
                <IconButton 
                disabled={quantity === product?.stock}
                onClick={handleQuantityIncDec("inc")}><AddCircleOutlineIcon/></IconButton>
            </Box>
          </Box>
      <Box className="add-to-cart-btn-container">
            <Button style={{marginRight:"10px"}} variant="outlined">Save for Later</Button>
            <Button style={{marginRight:"10px"}} variant="contained">Remove</Button>
          </Box>
      </Box>
      <Divider style={{margin:"10px auto"}} />
    </>
  );
};

export default CartProduct;
