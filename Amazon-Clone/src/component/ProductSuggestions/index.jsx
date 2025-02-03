import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import appliances from "../../assents/suggestions/appliances.png";
import electronics from "../../assents/suggestions/electronics.png";
import fashion from "../../assents/suggestions/fashion.png";
import furniture from "../../assents/suggestions/furniture.png";
import grocery from "../../assents/suggestions/grocery.png";
import mobiles from "../../assents/suggestions/mobiles.png";
import toys from "../../assents/suggestions/toys.png";
import travel from "../../assents/suggestions/travel.png";
import twowheeler from "../../assents/suggestions/twowheeler.png";

import "./style.css";

const ProductSuggestions = ({title = "abc"}) => {



  return (
    <>
      <Box className="Product-suggestion-main-container">
      <Typography variant="h4" style={{ margin: "10px auto" }}>
            {title}
          </Typography>
        <Box className="Product-suggestion-container">
          
           
              
                <Box  className="Product-suggestion-card">
                  <Box>
                    <Box className="image-container">
                      <img
                        className="Product-suggestion-images"
                        src={title}
                        alt={title}
                      />
                    </Box>

                    <Typography variant="body1" style={{ fontSize: "20px", textAlign:"center", marginTop:"10px" }}>
                      {title}
                    </Typography>
                    <Typography variant="body1" style={{ fontSize: "20px", textAlign:"center", marginTop:"10px" }}>
                      Price $
                    </Typography>
                  </Box>
                </Box>
            
        </Box>
      </Box>
    </>
  );
};

export default ProductSuggestions;
