import React from "react";

// import Material UI Component
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// import assents
import dummy from "../../assents/suggestions/dummy.png";

// import styles
import "./style.css";

const ProductCardList = ({ product = [] }) => {
  return (
    <>
      <Box className="product-list-container">
        {
          product.map((item, index)=>(
            <Box key={index} className="list-card-container">
            <Box className="list-card">
            <Box className="image-section">
            </Box>
            <Box className="detail-section">
            <Tooltip title={item?.description} arrow>
                <Typography
                  className="list-description"
                  style={{
                    margin: "auto 15px",
                    fontWeight: "400",
                    textAlign: "justify",
                  }}
                >
                  {item?.description}
                </Typography>
              </Tooltip>
              <Box style={{ display: "flex" }}>
                <Typography style={{ margin: "auto 15px", fontWeight: "600" }}>
                  ${item?.price}
                </Typography>
                <Typography style={{ margin: "auto 15px", color: "green" }}>
                  {item?.availabilityStatus}
                </Typography>
              </Box>

            </Box>
            <Box className="btn-container">
              <Button
                variant="contained  "
                style={{
                  color:"white",
                  margin: "5px",
                  backgroundColor:"#ff9f00",
                  border:"none",
                  
                }}
              >
                <ShoppingCartIcon />
                Add to Cart
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "#fb641b", margin: "5px" }}
              >
                <FlashOnIcon/>
                Buy Now
              </Button>
            </Box>
            </Box>
           
          </Box>
          ))
        }
       
      </Box>
    </>
  );
};

export default ProductCardList;
