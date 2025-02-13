import { Avatar, Box, Paper, Rating, Typography } from "@mui/material";
import React from "react";

// style sheet
import "./style.css";

const UserRating = ({ review }) => {

  const getAvtarName =(name)=>{
    const splitName = name.split(" ");
    const [firstName, lastName] = splitName;
    return `${firstName[0]} ${lastName[0]}`

  }
  return (
    <>
      <Paper className="review-paper" elevation={1}>
        <Box className="user-name">
          <Avatar sx={{backgroundColor:"#fb641b", padding:"3px"}}>{getAvtarName(review?.reviewerName)}</Avatar>
          <Box className="review-name-section">
            <Typography className="review-name" variant="body1">
              <strong>{review?.reviewerName}</strong>
            </Typography>
            <Typography variant="body1">{review?.reviewerEmail}</Typography>
          </Box>
        </Box>

        <Rating name="read-only" value={review?.rating} readOnly />
        <Typography variant="body1">{review?.date}</Typography>
        <Typography variant="body1">{review?.comment}</Typography>
      </Paper>
    </>
  );
};

export default UserRating;
