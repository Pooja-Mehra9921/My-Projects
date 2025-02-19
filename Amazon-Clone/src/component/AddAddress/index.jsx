import React from "react";
import axios from "axios";

// import hooks
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


// import Material ui components
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";

// import Custom Components
import BackdropLoader from "../BackdropLoader";
import { API } from "../../configs/api";
import { setAddUserAddress } from "../../redux/appReducer/appReducer";

// style sheet
import "./style.css";

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
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(false);
  const [isPincodeData, setisPincodeData] = useState(false);
  const [open, setOpen] = React.useState(openAddress);
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

  /**
   * @description 
   */
  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  useEffect(() => {
    if (userAddress.pincode.length === 6) {
      getPinCode(userAddress.pincode);
    }
  }, [userAddress.pincode]);
  /**
   *  @description getting pincode details from api
   */

  const getPinCode = async (pincode) => {
    try {
      setisLoading(true);
      const api = API.GET_PINCODE.replace("#PINCODE#", pincode);
      const response = await axios(api);
      console.log("pincode", response);
      const { data } = response;
      setUserAddress({
        ...userAddress,
        district: data[0].PostOffice[0].District,
        postoffice: data[0].PostOffice[0].BranchType,
        state: data[0].PostOffice[0].State,
      });
      setisPincodeData(true);
    } catch (error) {
      setisLoading(false);
      console.log("error while fetching pincode api", error);
    } finally {
      setisLoading(false);
    }
  };

  const handleAddress = (type) => (event) => {
    switch (type) {
      case "name":
        setUserAddress({ ...userAddress, name: event.target.value });
        return;
      case "address-1":
        setUserAddress({ ...userAddress, address1: event.target.value });
        return;
      case "address-2":
        setUserAddress({ ...userAddress, address2: event.target.value });
        return;
      case "pincode":
        if (event.target.value.length <= 6) {
          setUserAddress({
            ...userAddress,
            pincode: event.target.value,
            district: "",
            postoffice: "",
            state: "",
          });
          setisPincodeData(false);
        }
        return;

      case "postoffice":
        setUserAddress({ ...userAddress, postoffice: event.target.value });
        return;
      case "district":
        setUserAddress({ ...userAddress, district: event.target.value });
        return;
      case "state":
        setUserAddress({ ...userAddress, state: event.target.value });
        return;
      case "phone":
        setUserAddress({ ...userAddress, phone: event.target.value });
        return;
      case "addressType":
        setUserAddress({ ...userAddress, addressType: event.target.value });
        return;

      default:
        setUserAddress({ ...userAddress });
    }
  };

  const handleSaveAddress = (userAddress) => {
    dispatch(setAddUserAddress(userAddress));
    onClose(handleClose);
    console.log("user save data", userAddress);
  };

  return (
    <div>
      <BackdropLoader isLoading={isLoading} />
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Address
              </Typography>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Box>
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
                    value={userAddress.name}
                    onChange={handleAddress("name")}
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
                    value={userAddress.address1}
                    onChange={handleAddress("address-1")}
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
                    value={userAddress.address2}
                    onChange={handleAddress("address-2")}
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
                    value={userAddress.pincode}
                    onChange={handleAddress("pincode")}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  {isPincodeData ? (
                    <Typography>{userAddress.postoffice}</Typography>
                  ) : (
                    <TextField
                      id="outlined-error-helper-text"
                      label="Enter Post Office"
                      type={"text"}
                      variant="outlined"
                      size="small"
                      fullWidth
                      margin="dense"
                      value={userAddress.postoffice}
                      onChange={handleAddress("postoffice")}
                    />
                  )}
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  {isPincodeData ? (
                    <Typography>{userAddress.district}</Typography>
                  ) : (
                    <TextField
                      id="outlined-error-helper-text"
                      label="Enter District"
                      type={"text"}
                      variant="outlined"
                      size="small"
                      fullWidth
                      margin="dense"
                      value={userAddress.district}
                      onChange={handleAddress("district")}
                    />
                  )}
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  {isPincodeData ? (
                    <Typography>{userAddress.state}</Typography>
                  ) : (
                    <TextField
                      id="outlined-error-helper-text"
                      label="Enter State"
                      type={"text"}
                      variant="outlined"
                      size="small"
                      fullWidth
                      margin="dense"
                      value={userAddress.state}
                      onChange={handleAddress("state")}
                    />
                  )}
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
                    value={userAddress.phone}
                    onChange={handleAddress("phone")}
                  ></TextField>
                </Grid>

                <FormControl className="radio-btn-container">
                  <FormLabel id="demo-radio-buttons-group-label">
                    Address Type
                  </FormLabel>
                  <RadioGroup
                    onClick={handleAddress("addressType")}
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
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <Button
                variant="contained"
                onClick={() => handleSaveAddress(userAddress)}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddAddress;
