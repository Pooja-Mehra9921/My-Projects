import React from "react";

// import Hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// import Material Ui components
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import { Badge } from "@mui/material";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Logout from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import Settings from "@mui/icons-material/Settings";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CountertopsIcon from "@mui/icons-material/Countertops";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";

// import custom components
import FLIPKART_PLUS_IMAGE from "../../assents/images/flipkart_plus.png";

// import styles
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../redux/appReducer/appReducer";

const Header = () => {
  // states
  const [anchorEl, setanchorEl] = useState(null); // state to manage profile menus
  const [QuichSearchAnchor, setQuichSearchAnchor] = useState(null); // state to manage quick search menus

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem("userdata")); // get user data from local storage
  const cartItems = useSelector(store=>store.app.cartItems);
  const wishListItems = useSelector(store=>store.app.wishListItems);

  const isOpen = Boolean(anchorEl); // to open profile menus
  const isQuichSearch = Boolean(QuichSearchAnchor); // to open quick search menus
  const [search, setSearch] = useState("");

 const handleredirectPages=(type)=>{
 if(type === "product"){
   navigate(`/${type}/all`);
 }else{
   navigate(`/${type}`);

 }
 
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

  const handleMenuQuick =(categoryType)=>()=>{
    navigate(`/product/${categoryType}`)
  }

  const handleSearch =(event)=>{
    setSearch(event.target.value);
  }

  const handleSearchBar =()=>{

    navigate(`/product/${search}`)

  }
  return (
    <>
      <Box className="header-main-container">
        <Box className="header-container">
          <Box className="flipkart-plus-image">
            {isUserLoggedIn ? (
              <img
                onClick={()=>handleredirectPages("home")}
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
            <Button
              style={{ color: "white", margin: "5px" }}
              onClick={()=>handleredirectPages("home")}
              variant="text"
            >
              Home
            </Button>
            <Button
              style={{ color: "white", margin: "5px" }}
              onClick={()=>handleredirectPages("product")}
              variant="text"
            >
              Product
            </Button>
            <Button style={{ color: "white", margin: "5px" }} variant="text" onClick={()=>handleredirectPages("about")}>
              About
            </Button>
            <Button style={{ color: "white", margin: "5px" }} variant="text">
              Contact
            </Button>
            <Button
              style={{ color: "white", margin: "0px", width: "130px" }}
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
              <MenuItem onClick={handleMenuQuick("laptops")}>
                <ListItemIcon>
                  <LaptopChromebookIcon fontSize="small" />
                </ListItemIcon>
                Laptop
              </MenuItem>
              <MenuItem onClick={handleMenuQuick("smartphones")}>
                <ListItemIcon>
                  <PhoneAndroidIcon fontSize="small" />
                </ListItemIcon>
                Mobile
              </MenuItem>
              <MenuItem onClick={handleMenuQuick("beauty")}>
                <ListItemIcon>
                  <LibraryBooksIcon fontSize="small" />
                </ListItemIcon>
                Beauty
              </MenuItem>
              <MenuItem onClick={handleMenuQuick("furniture")}>
                <ListItemIcon>
                  <CountertopsIcon fontSize="small" />
                </ListItemIcon>
                furniture
              </MenuItem>
            </Menu>
          </Box>
          <Box className="search-container">
            <Box className="search-bar">
              <TextField
              value={search}
              onChange={handleSearch}
                style={{ width: "300px", marginLeft:"10px" }}
                placeholder="Search for Products, Brands and More"
                variant="standard"
                size="normal"
                InputProps={{ disableUnderline: true }}
              />
              <Box className="search-icon">
                <IconButton onClick={handleSearchBar}>
                <SearchIcon style={{ margin: "2px" }} />

                </IconButton>
              </Box>
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
                onClick={handleredirectPages("login")}
              >
                Login
              </Button>
            )}
          </Box>
          <Box className="add-to-cart">
            {isUserLoggedIn && (
              <IconButton
              onClick={()=>handleredirectPages("wishlist")}
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge className="whishlist-btn" badgeContent={wishListItems.length} color="error">
                  <FavoriteIcon/>
                </Badge>
              </IconButton>
            )}

            {isUserLoggedIn ? (
              <IconButton
              onClick={()=>handleredirectPages("cart")}
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge className="cart-btn" badgeContent={cartItems.length} color="error">
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



