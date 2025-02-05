import React from "react";
import Box from "@mui/material/Box";

import DummyImage from "../../assents/suggestions/dummy.png";

import "./style.css";
import { Typography } from "@mui/material";

const ProductSuggestions = ({ title = "abc", product = [] }) => {
  return (
    <>
      <Box className="Product-suggestion-main-container">
        <Typography variant="h4" style={{ margin: "10px auto" }}>
          {title}
        </Typography>
        <Box className="Product-suggestion-container">
          {product.length === 0 ?
           (
            <Typography variant="h4" style={{ margin: "10px auto" }}>
          No Product Available
        </Typography>
           ):
(
   product.map((item, index) => (
            <Box key={index} className="Product-suggestion-card">
              <Box>
                <Box className="image-container">
                  <img
                    className="Product-suggestion-images"
                    src={item?.thumbnail || DummyImage}
                    alt={item?.title || "No title"}
                  />
                </Box>

                <Typography
                  variant="body1"
                  className="suggestion-title"
                  style={{
                    fontSize: "16px",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                >
                  {item?.title || "No title"}
                </Typography>
              </Box>
            </Box>
          ))
)
}
        
        </Box>
      </Box>
    </>
  );
};

export default ProductSuggestions;
