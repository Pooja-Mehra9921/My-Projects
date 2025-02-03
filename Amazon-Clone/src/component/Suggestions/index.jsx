import { Box, Typography } from "@mui/material";
import React from "react";
import "./style.css";

const Suggestions = () => {
  return (
    <>
      <Box className="suggestion-container">
        <Typography variant="h4" style={{margin:"10px auto"}}>Top Offers</Typography>
        <Box className="suggestion-card">
            <Box>
                <Box className="image-container">
                <img
            className="suggestion-images"
            src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VsbCUyMHBob25lfGVufDB8fDB8fHww"
            alt="suggestion card images"
          />
                </Box>
           
          <Typography variant="body1" style={{fontSize:"14px"}}>This is a Mobile Phone</Typography>
          <Typography variant="body1" style={{fontSize:"14px", textAlign:"center"}}>from 1200</Typography>

            </Box>
          
        </Box>
      </Box>
    </>
  );
};

export default Suggestions;
