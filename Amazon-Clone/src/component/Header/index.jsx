import React from "react";

// import Hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// import Material Ui components
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import { Badge, ButtonGroup } from "@mui/material";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import Settings from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CountertopsIcon from "@mui/icons-material/Countertops";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";

// import custom components
import FLIPKART_PLUS_IMAGE from "../../assents/images/flipkart_plus.png";

// import styles
import "./style.css";

const Header = () => {
  // states
  const [anchorEl, setanchorEl] = useState(null); // state to manage profile menus
  const [QuichSearchAnchor, setQuichSearchAnchor] = useState(null); // state to manage quick search menus

  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userdata")); // get user data from local storage

  const isOpen = Boolean(anchorEl); // to open profile menus
  const isQuichSearch = Boolean(QuichSearchAnchor); // to open quick search menus

  const redirectToLogin = () => {
    navigate("/login");
  };

  const redirectToHome = () => {
    navigate("/home");
  };

  const redirectToProductPage = () => {
    navigate("/product");
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

  const isUserLoggedIn = Boolean(userData?.refreshToken); // to check user is login or not

  return (
    <>
      <Box className="header-main-container">
        <Box className="header-container">
          <Box className="flipkart-plus-image">
            {isUserLoggedIn ? (
              <img
                onClick={redirectToHome}
                className="flipkart-image-style"
                src={FLIPKART_PLUS_IMAGE}
                alt="flipkart image "
              />
            ) : (
              <img
                onClick={handleLogout}
                className="flipkart-image-style"
                src={FLIPKART_PLUS_IMAGE}
                alt="flipkart image "
              />
            )}
          </Box>

          <Box className="menu-container">
            <Button style={{color:"white", margin:"5px"}} onClick={redirectToHome} variant="text">Home</Button>
            <Button style={{color:"white", margin:"5px"}}  onClick={redirectToProductPage} variant="text">Product</Button>
            <Button style={{color:"white", margin:"5px"}}  variant="text">About</Button>
            <Button style={{color:"white", margin:"5px"}}  variant="text">Contact</Button>
            <Button
            style={{color:"white", margin:"0px", width:"130px"}}
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

            {isUserLoggedIn ? (
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={isUserLoggedIn && 17} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            ) : (
              <ShoppingCartIcon />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
