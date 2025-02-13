import React from "react";

// import material ui components
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Notifications = ({ isOpen = false }) => {
  return (
    <>
      <Snackbar open={isOpen} autoHideDuration={10000}>
        <Alert variant="contained" severity="success" sx={{color:"green"}}>
          You are Login sucussfully
        </Alert>
      </Snackbar>
    </>
  );
};

export default Notifications;
