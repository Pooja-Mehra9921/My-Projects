import { Backdrop, Box, Button, Fade, Modal } from "@mui/material";
import React, { useState } from "react";
import AddAddress from "../AddAddress";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

const SelectAddress =({openAddress = false, onClose})=>{
    const [addNewAddress, setaddNewAddress] =useState(false);
    const [open, setOpen] = useState(openAddress);
    const handleClose = () => {
        setOpen(false)
        onClose();
      };

      const handleAddToAddress =()=>{
setaddNewAddress(true);
setOpen(false);
      }

      const closeNewAddress =()=>{
setaddNewAddress(false);
      }
    return(
        <>
        <AddAddress openAddress={addNewAddress} onClose={closeNewAddress}/>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Button onClick={handleAddToAddress}>Add New Address</Button>
          </Box>
          </Fade>
          </Modal>
        </>
    )
};

export default SelectAddress;