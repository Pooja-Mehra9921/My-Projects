import React from "react";

// import material ui components
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

// style sheet
import "./style.css";

const UserRating = ({ review }) => {
  /**
   * @description to get avtar name from user name
   * @param {string} name
   * @returns
   */
  const getAvtarName = (name) => {
    const splitName = name.split(" ");
    const [firstName, lastName] = splitName;
    return `${firstName[0]} ${lastName[0]}`;
  };

  return (
    <>
      <Paper className="review-paper" elevation={1}>
        <Box className="user-name">
          <Avatar sx={{ backgroundColor: "#fb641b", padding: "3px" }}>
            {getAvtarName(review?.reviewerName)}
          </Avatar>
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
