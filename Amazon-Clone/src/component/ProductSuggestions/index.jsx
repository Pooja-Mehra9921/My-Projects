import React from "react";
import {useDispatch} from "react-redux";

// import material ui components
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

// import assents
import DummyImage from "../../assents/suggestions/dummy.png";

// import styles
import "./style.css";
import { useNavigate } from "react-router-dom";
import { setSelectedProducts } from "../../redux/appReducer/appReducer";

const ProductSuggestions = ({ title = "abc", product = [] }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleProductSuggestionCard=(item)=>{
    console.log("carddd click", item);
    dispatch(setSelectedProducts(item));
    navigate(`/product-detail/${item?.id}`);
  }
  return (
    <>
      <Box className="Product-suggestion-main-container">
        <Typography variant="h4" style={{ margin: "10px auto" }}>
          {title}
        </Typography>
        <Box className="Product-suggestion-container">
          {product.length === 0 ? (
            <Typography variant="h4" style={{ margin: "10px auto" }}>
              No Product Available
            </Typography>
          ) : (
            product.map((item, index) => (
              <Box key={index} className="Product-suggestion-card" onClick={()=>handleProductSuggestionCard(item)}>
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
          )}
        </Box>
      </Box>
    </>
  );
};

export default ProductSuggestions;
