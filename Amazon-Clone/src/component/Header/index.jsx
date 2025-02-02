import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CountertopsIcon from "@mui/icons-material/Countertops";
import NotificationsIcon from "@mui/icons-material/Notifications";

import FLIPKART_PLUS_IMAGE from "../../assents/images/FLIPKART_PLUS.png";

import "./style.css";
import { Badge } from "@mui/material";

const Header = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userdata"));
  const [anchorEl, setanchorEl] = useState(null);
  const [QuichSearchAnchor, setQuichSearchAnchor] = useState(null);

  const isOpen = Boolean(anchorEl);
  const isQuichSearch = Boolean(QuichSearchAnchor);

  const redirectToLogin = () => {
    navigate("/login");
  };

  const redirectToHome = () => {
    navigate("/home");
  };

  /**
   * @description to open profile menus
   */

  const handleProfileClick = (event) => {
    console.log("profile clicked", event);
    setanchorEl(event.currentTarget);
  };

  /**
   * @description clearning anchor to close profile menus
   */

  const handleClose = () => {
    setanchorEl(null);
  };

  /**
   * @description logout button to redirect to login page
   */

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  /**
   * @description handle Quick search menus
   */

  const handleQuickSearch = (event) => {
    console.log("quick search click");
    setQuichSearchAnchor(event.currentTarget);
  };

  /**
   * @description  to close  Quick search menus
   */

  const handleCloseQuickSearch = () => {
    console.log("quick search click");
    setQuichSearchAnchor(null);
  };

  const isUserLoggedIn = Boolean(userData?.refreshToken);

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
          <Box className="menu-container">
            <Button variant="text">Home</Button>
            <Button variant="text">Product</Button>
            <Button variant="text">About</Button>
            <Button variant="text">Contact</Button>
            <Button
              style={{ width: "120px" }}
              id="fade-button"
              aria-haspopup="true"
              onClick={handleQuickSearch}
              variant="text"
            >
              Quick Search
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={QuichSearchAnchor}
              open={isQuichSearch}
              onClose={handleCloseQuickSearch}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleCloseQuickSearch}>
                <ListItemIcon>
                  <LaptopChromebookIcon fontSize="small" />
                </ListItemIcon>
                Laptop
              </MenuItem>
              <MenuItem onClick={handleCloseQuickSearch}>
                <ListItemIcon>
                  <PhoneAndroidIcon fontSize="small" />
                </ListItemIcon>
                Mobile
              </MenuItem>
              <MenuItem onClick={handleCloseQuickSearch}>
                <ListItemIcon>
                  <LibraryBooksIcon fontSize="small" />
                </ListItemIcon>
                Books
              </MenuItem>
              <MenuItem onClick={handleCloseQuickSearch}>
                <ListItemIcon>
                  <CountertopsIcon fontSize="small" />
                </ListItemIcon>
                Kitchen
              </MenuItem>
            </Menu>
          </Box>
          <Box className="search-container">
            <Box className="search-bar">
              <Box className="search-icon">
                <SearchIcon style={{ margin: "2px" }} />
              </Box>
              <TextField
                style={{ width: "300px" }}
                placeholder="Search for Products, Brands and More"
                variant="standard"
                size="normal"
                InputProps={{ disableUnderline: true }}
              />
            </Box>




            {isUserLoggedIn ? (
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
                  <MenuItem onClick={handleLogout}>
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
            {isUserLoggedIn && (
 <IconButton
 size="large"
 aria-label="show 17 new notifications"
 color="inherit"
>
 <Badge badgeContent={17} color="error">
   <NotificationsIcon />
 </Badge>
</IconButton>
            )}
           
           {
            isUserLoggedIn ? (
<IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={isUserLoggedIn && 17} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            ):(
              <ShoppingCartIcon />
            )
           }
            
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
