import React, { useState } from "react";
import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Button,
  Typography,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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

const AddAddress = ({ openAddress = false, onClose }) => {
  const [userAddress, setUserAddress] = useState({
    name: "",
    address1: "",
    address2: "",
    pincode: "",
    postoffice: "",
    district: "",
    state: "",
    phone: "",
    addressType: "",
  });
console.log("user address", userAddress);
  const [open, setOpen] = useState(openAddress);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleAddress = (type) => (event) => {
    setUserAddress({ ...userAddress, [type]: event.target.value });
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 500 } }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 2,
            }}
          >
            <Typography variant="h6" component="h2">
              Address
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Grid container spacing={2}>
            {[
              { label: "Enter Name", type: "name" },
              { label: "Enter Address-1", type: "address1" },
              { label: "Enter Address-2", type: "address2" },
              { label: "Enter Pincode", type: "pincode" },
              { label: "Enter Post Office", type: "postoffice" },
              { label: "Enter District", type: "district" },
              { label: "Enter State", type: "state" },
              { label: "Enter Phone Number", type: "phone" },
            ].map((field) => (
              <Grid item xs={12} sm={6} key={field.type}>
                <TextField
                  label={field.label}
                  type="text"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="dense"
                  onChange={handleAddress(field.type)}
                />
              </Grid>
            ))}

            {/* Address Type RadioGroup */}
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Address Type</FormLabel>
                <RadioGroup
                  row
                  name="addressType"
                  value={userAddress.addressType}
                  onChange={handleAddress("addressType")}
                >
                  <FormControlLabel
                    value="Home"
                    control={<Radio />}
                    label="Home"
                  />
                  <FormControlLabel
                    value="Office"
                    control={<Radio />}
                    label="Office"
                  />
                  <FormControlLabel
                    value="Other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "end", marginTop: 2 }}>
            <Button variant="contained">Save</Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AddAddress;
