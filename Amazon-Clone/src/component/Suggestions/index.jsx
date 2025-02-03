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

const Suggestions = () => {
  const suggestions = [
    { id: "1", img: appliances, title: "Appliances", hasData: false },
    { id: "2", img: electronics, title: "Electronics", hasData: false },
    { id: "3", img: fashion, title: "Fashion", hasData: false },
    { id: "4", img: furniture, title: "Furniture", hasData: false },
    { id: "5", img: grocery, title: "Grocery", hasData: false },
    { id: "6", img: mobiles, title: "Mobiles", hasData: false },
    { id: "7", img: toys, title: "Toys", hasData: false },
    { id: "8", img: travel, title: "Travel", hasData: false },
    { id: "9", img: twowheeler, title: "Twowheeler", hasData: false },
    
  ];

  return (
    <>
      <Box className="suggestion-main-container">
        <Box className="suggestion-container">
          {suggestions.map((ele, index) => {
            return (
              <>
                <Box key={index} className="suggestion-card">
                  <Box>
                    <Box className="image-container">
                      <img
                        className="suggestion-images"
                        src={ele?.img}
                        alt={ele?.title}
                      />
                    </Box>

                    <Typography variant="body1" style={{ fontSize: "20px", textAlign:"center", marginTop:"10px" }}>
                      {ele?.title}
                    </Typography>
                  </Box>
                </Box>
              </>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Suggestions;
