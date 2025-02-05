import React from "react";

// import Material UI Component
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// import assents
import dummy from "../../assents/suggestions/dummy.png";

// import styles
import "./style.css";
import { Button, IconButton, Typography } from "@mui/material";

const ProductCardGrid = ({ product = [] }) => {
  console.log("-----------------------------------------", product);
  return (
    <>
      <Box className="product-grid-container">
        {product.map((item, index) => (
          <Box key={index} className="main-grid-container">
            <IconButton className="heart-icon">
              <FavoriteIcon />
              <FavoriteBorderIcon />
            </IconButton>
            <Box className="image-container">
              <img
                className="product-image"
                src={item?.thumbnail || dummy}
                alt="dummy image"
              />
            </Box>
            <Typography
              style={{
                margin: "auto 15px",
                marginTop: "10px",
                textAlign: "left",
                fontWeight:"600",
                fontSize:"16px"
              }}
            >
              {item?.title || "no title"}
            </Typography>
          
            
              <Typography style={{ margin: "auto 15px" }}>
                ${item?.price}
              </Typography>
              <Typography style={{ margin: "auto 15px" }}>
                {item?.availabilityStatus}
              </Typography>
              <Typography style={{ margin: "auto 15px" }}>
                Disscount {item?.discountPercentage}
              </Typography>
            
            <Box className="btn-container">
              <Button
                variant="outlined"
                style={{
                  border: "1px solid grey",
                  color: "grey",
                  margin: "5px",
                }}
              >
                Add to Cart
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "#fb641b", margin: "5px" }}
              >
                Buy Now
              </Button>
            </Box>
          </Box>
        ))}
        <Box className="main-grid-container">
          <IconButton className="heart-icon">
            <FavoriteIcon />
            <FavoriteBorderIcon />
          </IconButton>
          <Box className="image-container">
            <img className="product-image" src={dummy} alt="dummy image" />
          </Box>
          <Typography style={{ margin: "auto 15px", marginTop: "10px" }}>
            Tittle
          </Typography>
          <Typography style={{ margin: "auto 15px" }}>
            This is a description of product
          </Typography>
          <Box
            style={{
              display: "flex",
              alignItem: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography style={{ margin: "auto 15px" }}>price</Typography>
            <Typography style={{ margin: "auto 15px" }}>
              Orignal Price
            </Typography>
            <Typography style={{ margin: "auto 15px" }}>Offer</Typography>
          </Box>
          <Box className="btn-container">
            <Button
              variant="outlined"
              style={{ border: "1px solid grey", color: "grey", margin: "5px" }}
            >
              Add to Cart
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "#fb641b", margin: "5px" }}
            >
              Buy Now
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductCardGrid;
