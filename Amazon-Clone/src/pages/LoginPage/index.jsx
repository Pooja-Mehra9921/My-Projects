import React, { useState } from "react";
import { API } from "../../configs/api";
import "./style.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { Chip, Tooltip } from "@mui/material";
import axios from "axios";
import BackdropLoader from "../../component/BackdropLoader";
import Notifications from "../../component/Notifications";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
const navigate = useNavigate();
  const [hide, sethide] = useState(false);
  const [logindata, setlogindata] = useState({ username: "", password: "" });
  const [isSubmit, setisSubmit] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  /**
   * @description show and hide password
   */
  const handleShowPassword = () => {
    sethide(!hide);
  };

  /**
   * @description to click chip button user is submit or note
   */
  const handleSubmitbtn = async () => {
    try {
      setisLoading(true);
      if (logindata.username.length < 5 || logindata.password.length < 6) return;


      setisSubmit(true);
      console.log("---login data", logindata);

      const { status, data } = await axios.post(API.LOGIN_API, {
        username: logindata.username,
        password: logindata.password,
        expiresInMins: 30,
      });

      if (status == 200) {
          setisLoading(false);
          setisOpen(true);
          localStorage.setItem("userdata",JSON.stringify(data));
          navigate("/home");
        
      }
    } catch (error) {
      setisLoading(false);
      setisOpen(false);
      console.log("sometning went wrong while fetching api", error);
    }
  };

  const handlechange = (type) => (event) => {
    setlogindata({ ...logindata, [type]: event.target.value });
  };

  const emailerror = isSubmit && logindata.username.length <= 5 ;
  const passworderror = isSubmit && logindata.password.length <= 6 ;

  return (
    <>
      <BackdropLoader isLoading={isLoading} />
      <Notifications isOpen = {isOpen}/>
      <Box className="login-container">
        <Paper elevation={4} className="login-paper">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6} className="fk-left-sec">
              <Box className="flipkart-login-image"></Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} className="fk-right-sec">
              <Typography variant="h6">Login</Typography>
              <Typography variant="body1">
                Get access to your Orders, Wishlist and Recommendations
              </Typography>
              <TextField
                error={emailerror}
                id="outlined-error-helper-text"
                label="UserName"
                margin="dense"
                size="small"
                helperText={emailerror && "Please enter valid email   "}
                fullWidth
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon
                          style={{ color: emailerror ? "red" : "grey" }}
                        />
                      </InputAdornment>
                    ),
                  },
                }}
                onChange={handlechange("username")}
              />
              <TextField
                error={passworderror}
                type={hide ? "password" : "text"}
                id="outlined-error-helper-text"
                label="Password"
                margin="dense"
                size="small"
                helperText={passworderror && "Please enter valid password"}
                fullWidth
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ cursor: "pointer" }}
                      >
                        <IconButton
                          style={{ color: passworderror ? "red" : "grey" }}
                          onClick={handleShowPassword}
                        >
                          {hide ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
                onChange={handlechange("password")}
              />

              <Box className="btn-container">
                <Tooltip
                  title={
                    (logindata.username < 5 && "please enter valid Username") ||
                    (logindata.password < 6 && "please enter valid password")
                  }
                >
                  <span>
                    <Chip
                      className="chip-btn"
                      label="Login"
                      variant="outlined"
                      onClick={handleSubmitbtn}
                      disabled={logindata.username < 5 || logindata.password < 6}
                    />
                  </span>
                </Tooltip>

                <Chip className="chip-btn" label="SignUp" variant="outlined" />
              </Box>

              <Typography variant="body1" style={{ marginTop: "60px" }}>
                We not longer support login via Social accounts. To recover your
                old accounts
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default LoginPage;
