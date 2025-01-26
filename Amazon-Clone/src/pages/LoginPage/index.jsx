import React, { useState } from "react";
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
import { Chip } from "@mui/material";

const LoginPage = () => {
  const [hide, sethide] = useState(false);
  const [logindata, setlogindata] = useState({ email: "", password: "" });
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  /**
   * @description show and hide password
   */
  const handleShowPassword = () => {
    sethide(!hide);
  };

  return (
    <>
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
                error={Boolean(!logindata.email)}
                id="outlined-error-helper-text"
                label="Email"
                margin="dense"
                size="small"
                helperText={
                  Boolean(!logindata.email) && "Please enter valid email   "
                }
                fullWidth
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <TextField
                error={Boolean(!logindata.password)}
                type={hide ? "password" : "text"}
                id="outlined-error-helper-text"
                label="Password"
                margin="dense"
                size="small"
                helperText={
                  Boolean(!logindata.password) && "Please enter valid password"
                }
                fullWidth
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ cursor: "pointer" }}
                      >
                        <IconButton onClick={handleShowPassword}>
                          {hide ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />

              <Box className="btn-container">
                <Chip className="chip-btn" label="Login" variant="outlined" />
                <Chip className="chip-btn" label="SignUp" variant="outlined" />
              </Box>

              <Typography variant="body1" style={{ marginTop: "60px" }}>
                We not longer support login via Social accounts. To recover your
                old accounts{" "}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default LoginPage;
