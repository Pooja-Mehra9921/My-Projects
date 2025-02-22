import { Box, Skeleton } from "@mui/material";
import React from "react";


export const ProductCartShimmer =()=>{
    return(
        <>
        <Box sx={{ width: "100%" }}>
      <Skeleton />
      <Box sx={{display:"flex"}}>
      
       <Skeleton variant="rectangular" width={210} height={118} />
        <Skeleton variant="rectangular" width={210} height={118} />
        <Skeleton variant="rectangular" width={210} height={118} />
        <Skeleton variant="rectangular" width={210} height={118} />
        </Box>
      
      
    </Box>
        </>
    )
};