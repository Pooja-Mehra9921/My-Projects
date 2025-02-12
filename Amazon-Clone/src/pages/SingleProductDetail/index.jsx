import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactImageMagnify from "react-image-magnify";

// import custom components
import Header from "../../component/Header";
import Footer from "../../component/Footer";

// import material ui component
import { Box } from "@mui/material";

// import styles
import "./style.css";

const SingleProductDetail = () => {
  const dataFromStore = useSelector((store) => store?.app?.selectedproduct);
  console.log("data from store", dataFromStore);

  const [imageToMagnify, setImageToMagnify] = useState(
    dataFromStore?.thumbnail
  );

  const handleMainImageChange = (image) => {
    setImageToMagnify(image);
  };

  return (
    <>
      <Header />
      <Box className="pro-detail-container">
        <Box className="pro-image-section">
          <Box className="image-suggestions">
            {dataFromStore?.images?.map((image, index) => (
              <img
                src={image}
                alt={`Product ${index}`}
                key={index}
                className="img-suggestion"
                onMouseOver={() => handleMainImageChange(image)} // ✅ Fixed
              />
            ))}
          </Box>
          <Box className="image-magnify-sec">
            <ReactImageMagnify
              className="thumbnail"
              {...{
                smallImage: {
                  alt: "Product Image",
                  isFluidWidth: true,
                  src: imageToMagnify, // ✅ Fixed
                },
                largeImage: {
                  src: imageToMagnify, // ✅ Fixed
                  width: 1200,
                  height: 1800,
                  className: "large-img",
                },
                isHintEnabled: true,
                enlargedImageContainerDimensions: {
                  width: "100%",
                  height: "100%",
                },
              }}
            />
          </Box>
        </Box>
        <Box className="pro-detail-section">detail</Box>
      </Box>
      <Footer />
    </>
  );
};

export default SingleProductDetail;
