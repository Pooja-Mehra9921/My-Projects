import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

const BackdropLoader=({isLoading = false})=>{
    return(
        <>
        <Backdrop
  sx={(theme) => ({ color: '#fff', zIndex: 99 })}
  open={isLoading}
  //onClick={handleClose}
>
  <CircularProgress color="inherit" />
</Backdrop>
        </>
    )
};

export default BackdropLoader;