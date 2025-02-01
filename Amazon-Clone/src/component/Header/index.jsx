import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  ListItemIcon,
  Menu,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import React, { useState } from "react";
import FLIPKART_PLUS_IMAGE from "../../assents/images/FLIPKART_PLUS.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Header = () => {

  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userdata"));
  const [anchorEl, setanchorEl] = useState(null);

 const isOpen = Boolean(anchorEl);
  const redirectToLogin = () => {
    navigate("/login");
  };

  const redirectToHome = () => {
    navigate("/home");
  };

  const handleProfileClick = (event) => {
    console.log("profile clicked", event);
    setanchorEl(event.currentTarget);
  };

const handleClose =()=>{
  setanchorEl(null);
}

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
            {Boolean(userData?.refreshToken) ? (
              <>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={isOpen}
                  onClose={handleClose}
                  onClick={handleClose}
                 
                
                  transformOrigin={{ horizontal: "left", vertical: "bottom" }}
                  anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleClose}>
                    <Avatar /> Profile
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Avatar /> My account
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>

                <Tooltip
                  title={`${userData.firstName} ${userData.lastName}`}
                  arrow
                >
                  <IconButton
                    onClick={handleProfileClick}
                    size="small"
                    sx={{ ml: 2 }}
                    
                  >
                    <Box className="user-profile">
                      <img
                        className="user-image"
                        src={userData.image}
                        alt="userimage"
                      />
                      <Typography>{userData.firstName}</Typography>
                    </Box>
                  </IconButton>
                </Tooltip>
              </>
            ) : (
              <Button
                className="login-btn"
                variant="outlined"
                onClick={redirectToLogin}
              >
                Login
              </Button>
            )}
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
