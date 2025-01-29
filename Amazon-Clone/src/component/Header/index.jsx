import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import FLIPKART_PLUS_IMAGE from "../../assents/images/FLIPKART_PLUS.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Header = () => {
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("userdata"));
  console.log("userData------------", userData);
  const redirectToLogin = () => {
    navigate("/login");
  };

  const redirectToHome = () => {
    navigate("/home");
  };
  return (
    <>
      <Box className="header-main-container">
        <Box className="header-container">
          <Box className="flipkart-plus-image">
            <img
              onClick={redirectToHome}
              className="flipkart-image-style"
              src={FLIPKART_PLUS_IMAGE}
              alt="flipkart image "
            />
          </Box>

          <Box className="search-container">
            <Box className="search-bar">
              <Box className="search-icon">
                <SearchIcon style={{ margin: "2px" }} />
              </Box>
              <TextField
                style={{ width: "400px" }}
                placeholder="Search for Products, Brands and More"
                variant="standard"
                size="normal"
                InputProps={{ disableUnderline: true }}
              />
            </Box>
            {
                !Boolean(userData?.token)
                ? 
                <Box className="user-profile">
                <img className="user-image" src={userData.image} alt="userimage" />
                <Typography>{userData.firstName}</Typography>
              </Box>


                
            :
            <Button
            className="login-btn"
            variant="outlined"
            onClick={redirectToLogin}
          >
            Login
          </Button>
            }
            
           
            
          </Box>
          <Box className="add-to-cart">
            <Typography className="cart">
              {<ShoppingCartIcon style={{ fontSize: "30px" }} />} Cart
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
