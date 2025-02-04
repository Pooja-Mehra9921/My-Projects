import { Alert, Snackbar } from "@mui/material";
import React from "react";

const Notifications = ({ isOpen = false }) => {
  return (
    <>
      <Snackbar open={isOpen} autoHideDuration={6000}>
        <Alert variant="contained" severity="success">
          You are Login sucussfully
        </Alert>
      </Snackbar>
    </>
  );
};

export default Notifications;
