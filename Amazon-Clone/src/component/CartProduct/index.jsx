import { Box, Button, ButtonGroup, Divider, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "./style.css";
import { DollarToIndianPrice } from "../../utility";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { setSelectedProducts } from "../../redux/appReducer/appReducer";

const CartProduct = ({ product = {} }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
const [quentity, setQuentity] = useState(1);

const handleProductCart =(product)=>{
    dispatch(setSelectedProducts(product));
    navigate(`/product-detail/${product?.id}`);

};

  const handleChangeQuantity =(e)=>{
    const inputValue = e.target.value;
setQuentity(inputValue);
  }

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
                <IconButton onClick={()=>
                    quentity<2 ? quentity === 1:setQuentity(quentity-1)}><RemoveCircleOutlineIcon/></IconButton>
                <TextField 
                value={quentity}
                onChange={handleChangeQuantity}
                sx={{width:"50px"}}
                size="small"
                ></TextField>
                <IconButton onClick={()=>setQuentity(quentity+1)}><AddCircleOutlineIcon/></IconButton>
            </Box>
          </Box>
      <Box className="add-to-cart-btn-container">
            <Button style={{marginRight:"10px"}} variant="outlined">Save for Later</Button>
            <Button variant="contained">Remove</Button>
          </Box>
      </Box>
      <Divider style={{margin:"10px auto"}} />
    </>
  );
};

export default CartProduct;
