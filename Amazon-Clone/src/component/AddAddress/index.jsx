import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {FormControl, FormControlLabel, FormLabel, Grid,  IconButton,  Radio, RadioGroup, TextField} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import "./style.css";
import { API } from "../../configs/api";

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

const AddAddress = ({openAddress = false, onClose}) => {
  const [open, setOpen] = React.useState(openAddress);
  //const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    onClose();
  };
/**
 *  @description getting pincode details from api
 */

  const getPinCode = async () => {
const [pincode, setPincode] = React.useState(false);

    try {
   //   setisLoading(true);
      const api = API.GET_PINCODE.replace("#PINCODE#", pincode);
      const response = await axios(api);
      console.log("pincode", response);
    } catch (error) {
      setisLoading(false);
      console.log("error while fetching pincode api", error);
    }
  };

  return (
    <div>
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
            <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>

            
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Address
            </Typography>
            <IconButton onClick={handleClose}>
            <CloseIcon/>

            </IconButton>
            </Box>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField
                    id="outlined-error-helper-text"
                    label="Enter Name"
                    type={"text"}
                    variant="outlined"
                    size="small"
                    fullWidth
                    margin="dense"
                    //  value={pincode}
                    // onChange={handlePinCode}
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField
                    id="outlined-error-helper-text"
                    label="Enter Address-1"
                    type={"text"}
                    variant="outlined"
                    size="small"
                    fullWidth
                    margin="dense"
                    //value={pincode}
                    //onChange={handlePinCode}
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField
                    id="outlined-error-helper-text"
                    label="Enter Address-2"
                    type={"text"}
                    variant="outlined"
                    size="small"
                    fullWidth
                    margin="dense"
                    //value={pincode}
                    //onChange={handlePinCode}
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField
                    id="outlined-error-helper-text"
                    label="Enter Pincode"
                    type={"text"}
                    variant="outlined"
                    size="small"
                    fullWidth
                    margin="dense"
                    //value={pincode}
                    //onChange={handlePinCode}
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField
                    id="outlined-error-helper-text"
                    label="Enter Post Office"
                    type={"text"}
                    variant="outlined"
                    size="small"
                    fullWidth
                    margin="dense"
                    //value={pincode}
                    //onChange={handlePinCode}
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField
                    id="outlined-error-helper-text"
                    label="Enter District"
                    type={"text"}
                    variant="outlined"
                    size="small"
                    fullWidth
                    margin="dense"
                    //value={pincode}
                    //onChange={handlePinCode}
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField
                    id="outlined-error-helper-text"
                    label="Enter State"
                    type={"text"}
                    variant="outlined"
                    size="small"
                    fullWidth
                    margin="dense"
                    //value={pincode}
                    //onChange={handlePinCode}
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField
                    id="outlined-error-helper-text"
                    label="Enter Phone Number"
                    type={"text"}
                    variant="outlined"
                    size="small"
                    fullWidth
                    margin="dense"
                    //value={pincode}
                    //onChange={handlePinCode}
                  ></TextField>
                </Grid>

                <FormControl className="radio-btn-container">
                  <FormLabel id="demo-radio-buttons-group-label">
                    Address Type
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Home"
                    name="radio-buttons-group"
                    className="radio-btn"
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
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Typography>
            <Box sx={{display:"flex", alignItems:"center", justifyContent:"end"}}>
            <Button variant="contained" >Save</Button>

            </Box>

          </Box>

        </Fade>
      </Modal>
    </div>
  );
};

export default AddAddress;
