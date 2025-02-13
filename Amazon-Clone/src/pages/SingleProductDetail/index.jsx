import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// import custom components
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import UserRating from "../../component/UserRating";

// import material ui component
import { Box, Button, Typography } from "@mui/material";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";

// import styles
import "./style.css";
import ReactImageMagnify from "react-image-magnify";
import { DollarToIndianPrice, GetDiscountFromPrice } from "../../utility";
import axios from "axios";
import { API } from "../../configs/api";

const SingleProductDetail = () => {
  const dataFromStore = useSelector((store) => store?.app?.selectedproduct);

  const [imageToMagnify, setImageToMagnify] = useState(dataFromStore?.thumbnail);


  const fetchSelectedProduct =async()=>{
    const response = await axios.get(API.PRODUCT_BY_ID);
    console.log("product bt id", response);
  }

  useEffect(() => {
    if (dataFromStore) {
      setImageToMagnify(dataFromStore.thumbnail);
    fetchSelectedProduct();

    }

  }, [dataFromStore]);

  if (!dataFromStore) {
    return <p>Loading product details...</p>;
  }

/**
 * @description function to set product images in image magnify
 * @param {number} image 
 */

  const handleMainImageChange = (image) => {
    setImageToMagnify(image);
  };

  return (
    <>
      <Header />
      <Box className="pro-detail-container">
        {/*images section*/}
        <Box className="pro-image-section">
          <Box className="image-suggestions">
            {dataFromStore?.images?.map((image, index) => (
              <img
                src={image}
                alt={`Product ${index}`}
                key={index}
                className="img-suggestion"
                onMouseOver={() => handleMainImageChange(image)}
              />
            ))}
          </Box>
          <Box className="image-magnify-sec">
            <Box className="magnify-image">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: imageToMagnify,
                  },
                  largeImage: {
                    src: imageToMagnify,
                    width: 1000,
                    height: 1000,
                  },
                  enlargedImageContainerStyle: {
                    zIndex: "1500",
                  },
                  enlargedImageContainerDimensions: {
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#000000",
                  },
                }}
              />
            </Box>
            <Box className="btn-container">
              <Button
                variant="contained  "
                style={{
                  color: "white",
                  margin: "5px",
                  backgroundColor: "#ff9f00",
                  border: "none",
                }}
              >
                <ShoppingCartIcon />
                Add to Cart
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "#fb641b", margin: "5px" }}
              >
                <FlashOnIcon />
                Buy Now
              </Button>
            </Box>
          </Box>
        </Box>

        {/*Detail section*/}

        <Box className="pro-detail-section">
          <Typography variant="h5">{dataFromStore.title}</Typography>
          <Typography variant="body1" style={{textAlign:"justify"}}>{dataFromStore.description}</Typography>
          {/*Price section*/}
          <Box className="selected-price-section">
            <Box style={{ display: "flex", margin: "10px auto" }}>
              <Button className="rating-btn" variant="contained">
                {Number(dataFromStore?.rating).toFixed(1)}
                <StarIcon style={{ fontSize: "16px", marginTop: "-3px" }} />
              </Button>
              <Typography style={{ color: "grey" }}>{`${
                dataFromStore?.rating
              } Ratings & ${
                (dataFromStore?.reviews).length || 0
              } Reviews`}</Typography>
            </Box>
            <Box className="price-container">
              <Typography className="selected-price">
                &#8377;{DollarToIndianPrice(dataFromStore?.price)}
              </Typography>
              <Typography className="selected-orignal-price">
                &#8377;
                {GetDiscountFromPrice(
                  dataFromStore?.price,
                  dataFromStore?.discountPercentage
                )}
              </Typography>
              <Typography className="selected-discount-price">{`${dataFromStore?.discountPercentage} % off`}</Typography>
            </Box>

            <Typography
              sx={{
                color:
                  dataFromStore?.availabilityStatus === "In Stock"
                    ? "green"
                    : "red",
              }}
            >
              {dataFromStore?.availabilityStatus}
            </Typography>
            <Typography variant="body1">Warranty: <strong>{dataFromStore?.warrantyInformation}</strong></Typography>
            <Typography variant="body1">Return Policy: <strong>{dataFromStore?.returnPolicy}</strong></Typography>
            <Typography variant="body1">Shipping : <strong>{dataFromStore?.shippingInformation}</strong></Typography>
            <Typography variant="body1">Available Stock: <strong>{dataFromStore?.stock}</strong></Typography>
            <Typography variant="body1">Return Policy: <strong>{dataFromStore?.warrantyInformation}</strong></Typography>
            <Typography variant="body1">Dimentions:</Typography>
            <Typography variant="body1">Depth: <strong>{dataFromStore?.dimensions?.depth}</strong></Typography>
            <Typography variant="body1">Height: <strong>{dataFromStore?.dimensions?.height}</strong></Typography>
            <Typography variant="body1">Width: <strong>{dataFromStore?.dimensions?.width}</strong></Typography>
          </Box>

          <Box className="review-rating-section">
            <Typography variant="h5">Review and Rating</Typography>
            <UserRating/>
            <Box className="review-left-section">

            </Box>
            <Box className="review-right-section"></Box>

          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default SingleProductDetail;
