import React from "react";

// import Material UI Component
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

// import assents
import dummy from "../../assents/suggestions/dummy.png";

// import styles
import "./style.css";

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
                fontWeight: "600",
                fontSize: "16px",
                color: "grey",
              }}
            >
              {item?.title || "no title"}
            </Typography>
<Tooltip title={item?.description} arrow>
<Typography
            className="card-description"
              style={{
                margin: "auto 15px",
                fontWeight: "400",
                textAlign: "justify",
              }}
            >
              {item?.description}
            </Typography>
</Tooltip>
          <Box style={{display:"flex"}}>
          <Typography style={{ margin: "auto 15px", fontWeight: "600" }}>
              ${item?.price}
            </Typography>
            <Typography style={{ margin: "auto 15px", color: "green" }}>
              {item?.availabilityStatus}
            </Typography>
            </Box>
            
            <Typography style={{ margin: "auto 15px" }}>
            <Rating name="read-only" value={item?.rating} readOnly />
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
      </Box>
    </>
  );
};

export default ProductCardGrid;
