import { Alert, Snackbar } from "@mui/material";
import React from "react";

const Notifications =({isOpen = false})=>{
    return(
        <>
        <Snackbar open={isOpen} autoHideDuration={6000}>

<Alert variant="outlined" severity="success">
  This is an outlined success Alert.
</Alert>
</Snackbar>
        </>
    )
};

export default Notifications;