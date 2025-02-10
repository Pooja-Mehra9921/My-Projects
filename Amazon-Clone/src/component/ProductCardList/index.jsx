import React from "react";

// import Material UI Component
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

// import assents
import dummy from "../../assents/suggestions/dummy.png";

// import styles
import "./style.css";
import { DollarToIndianPrice, GetDiscountFromPrice } from "../../utility";

const ProductCardList = ({ product }) => {


  return (
    <>
      <Box className="product-list-container">
        <Box className="image-section">
          <img
            className="product-list-image"
            src={product?.thumbnail || dummy}
            alt={product?.title}
          />
          <Box className="fav-icon">
            <IconButton size="small">
              <FavoriteIcon style={{ fontSize: "20px" }} />
            </IconButton>
          </Box>
        </Box>

        {/*Detail section*/}
        <Box className="detail-section">
          <Typography className="list-title">
            {product?.title || "no title"}
          </Typography>
          <Box style={{ display: "flex" }}>
            <Button className="rating-btn" variant="contained">
              {Number(product?.rating).toFixed(1)}
              <StarIcon style={{ fontSize: "16px", marginTop: "-3px" }} />
            </Button>
            <Typography
              style={{ color: "grey" }}
            >{`${product?.rating} Ratings & ${(product?.reviews).length} Reviews`}</Typography>
          </Box>
          <Typography className="list-description">{product?.description}</Typography>
        </Box>

        {/*Price section*/}
        <Box className="list-price-section">
          <Typography className="list-price">&#8377;{DollarToIndianPrice(product?.price)}</Typography>
          <Typography className="list-orignal-price">&#8377;{GetDiscountFromPrice(product?.price, product?.discountPercentage)}</Typography>
          <Typography className="list-discount-price">{`${product?.discountPercentage} % off`}</Typography>
          <Typography>{product?.availabilityStatus}</Typography>
          <Typography>{product?.warrantyInformation}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default ProductCardList;
