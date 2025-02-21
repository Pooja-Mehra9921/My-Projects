import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, Button, Divider, IconButton, Menu, MenuItem, TextField, Tooltip, Typography, Avatar, Fade, ListItemIcon } from "@mui/material";
import { Logout, Settings, PersonAdd, Search as SearchIcon, Favorite as FavoriteIcon, Countertops as CountertopsIcon, ShoppingCart as ShoppingCartIcon, PhoneAndroid as PhoneAndroidIcon, LibraryBooks as LibraryBooksIcon, LaptopChromebook as LaptopChromebookIcon } from "@mui/icons-material";
import FLIPKART_PLUS_IMAGE from "../../assents/images/flipkart_plus.png";
import { setSelectedCategory } from "../../redux/appReducer/appReducer";
import "./style.css";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [quickSearchAnchor, setQuickSearchAnchor] = useState(null);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem("userdata"));
  const cartItems = useSelector((store) => store.app.cartItems);
  const wishListItems = useSelector((store) => store.app.wishListItems);

  const isOpen = Boolean(anchorEl);
  const isQuickSearchOpen = Boolean(quickSearchAnchor);
  const isUserLoggedIn = Boolean(userData?.refreshToken);

  const handleRedirectPages = (type) => {
    navigate(type === "product" ? `/${type}/all` : `/${type}`);
  };

  const handleProfileClick = (event) => setAnchorEl(event.currentTarget);
  const handleCloseProfileMenu = () => setAnchorEl(null);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleQuickSearch = (event) => setQuickSearchAnchor(event.currentTarget);
  const handleCloseQuickSearch = () => setQuickSearchAnchor(null);

  const handleMenuQuick = (categoryType) => () => navigate(`/product/${categoryType}`);
  const handleSearchInputChange = (event) => setSearch(event.target.value);
  const handleSearchSubmit = () => navigate(`/product/${search}`);

  return (
    <Box className="header-main-container">
      <Box className="header-container">
        <Box className="flipkart-plus-image" onClick={() => handleRedirectPages("home")}>
          <img className="flipkart-image-style" src={FLIPKART_PLUS_IMAGE} alt="flipkart logo" />
        </Box>

        <Box className="menu-container">
          {['home', 'product', 'about', 'contact'].map((item) => (
            <Button key={item} style={{ color: 'white', margin: '5px' }} variant="text" onClick={() => handleRedirectPages(item)}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Button>
          ))}

          <Button style={{ color: 'white', margin: '0px', width: '130px' }} onClick={handleQuickSearch}>
            Quick Search
          </Button>

          <Menu anchorEl={quickSearchAnchor} open={isQuickSearchOpen} onClose={handleCloseQuickSearch} TransitionComponent={Fade}>
            {[{ label: 'Laptop', icon: <LaptopChromebookIcon fontSize="small" />, type: 'laptops' },
              { label: 'Mobile', icon: <PhoneAndroidIcon fontSize="small" />, type: 'smartphones' },
              { label: 'Beauty', icon: <LibraryBooksIcon fontSize="small" />, type: 'beauty' },
              { label: 'Furniture', icon: <CountertopsIcon fontSize="small" />, type: 'furniture' }].map((item) => (
              <MenuItem key={item.type} onClick={handleMenuQuick(item.type)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box className="search-container">
          <Box className="search-bar">
            <TextField
              value={search}
              onChange={handleSearchInputChange}
              placeholder="Search for Products, Brands and More"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              style={{ width: '300px' }}
            />
            <IconButton onClick={handleSearchSubmit}>
              <SearchIcon />
            </IconButton>
          </Box>

          {isUserLoggedIn && (
            <>
              <IconButton onClick={() => handleRedirectPages("wishlist")} color="inherit">
                <Badge badgeContent={wishListItems.length} color="error">
                  <FavoriteIcon sx={{color:"white"}} />
                </Badge>
              </IconButton>
              <IconButton onClick={() => handleRedirectPages("cart")} color="inherit">
                <Badge badgeContent={cartItems.length} color="error">
                  <ShoppingCartIcon sx={{color:"white"}} />
                </Badge>
              </IconButton>

              <Tooltip title={`${userData.firstName} ${userData.lastName}`} arrow>
                <IconButton onClick={handleProfileClick} size="small">
                  <Box className="user-profile">
                    <img className="user-image" src={userData.image} alt="user" />
                    <Typography>{userData.firstName}</Typography>
                  </Box>
                </IconButton>
              </Tooltip>

              <Menu anchorEl={anchorEl} open={isOpen} onClose={handleCloseProfileMenu}>
                <MenuItem onClick={handleCloseProfileMenu}><Avatar /> Profile</MenuItem>
                <MenuItem onClick={handleCloseProfileMenu}><Avatar /> My account</MenuItem>
                <Divider />
                <MenuItem onClick={handleCloseProfileMenu}><ListItemIcon><PersonAdd fontSize="small" /></ListItemIcon> Add another account</MenuItem>
                <MenuItem onClick={handleCloseProfileMenu}><ListItemIcon><Settings fontSize="small" /></ListItemIcon> Settings</MenuItem>
                <MenuItem className="logout-btn" onClick={handleLogout}><ListItemIcon><Logout fontSize="small" /></ListItemIcon> Logout</MenuItem>
              </Menu>
            </>
          )}

          {!isUserLoggedIn && <Button className="login-btn" variant="outlined" onClick={() => handleRedirectPages("login")}>Login</Button>}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
