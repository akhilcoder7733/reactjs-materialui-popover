import {
  Box,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Helmet } from "react-helmet";
import RegisterImge from "../assets/register.svg";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MainButton from "../Components/MainButton/MainButton";
import { useNavigate } from "react-router-dom";

const MainBox = styled(Box)(({ theme }) => ({
  minHeight: "85vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  padding: 2,
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: theme.spacing(0),
    padding: 0,
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: theme.spacing(0),
    padding: 0,
  },
}));

const FirstBox = styled(Box)(({ theme }) => ({
  height: "65vh",
  maxWidth: "65vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: 2,
  backgroundImage:
    "linear-gradient(153deg, rgba(0,206,255,1) 0%, rgba(102,255,45,1) 100%)",
  boxShadow: "inset 0px 0px 55px 18px rgba(0,0,0,0.59)",
  borderRadius: "50%",
  [theme.breakpoints.down("sm")]:{
    maxWidth: "360px",
    height: "40vh",
  }
}));
const SecondBox = styled(Box)(({ theme }) => ({
  minHeight: "75vh",
  minWidth: "30%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: theme.spacing(2),
  backgroundColor: "rgba(187, 191, 188, 0.4)",
  borderBottomLeftRadius: "20%",
  borderTopRightRadius: "20%",
  gap:theme.spacing(2),
  [theme.breakpoints.down("sm")]:{
    backgroundColor:"transparent",
    minHeight: "55vh",
  },
  [theme.breakpoints.down("md")]:{
    backgroundColor:"transparent",
    minHeight: "55vh",
  }
}));

const StyledSpan = styled("span")(({ theme }) => ({
  color: "#0216c9",
  cursor: "pointer",
  transition: "color 0.3s ease-in",
  "&:hover": {
    color: "#111",
  },
}));

function SignUp() {
  const navigate=useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <MainBox>
      <Helmet>
        <title>Sign Up</title>
        <meta name="description" content="Sign Up to my website" />
        {/* Add more meta tags as needed */}
      </Helmet>
      <FirstBox>
        <img
          src={RegisterImge}
          alt="reg"
          style={{ width: "400px" }}
          data-aos="zoom-in"
        />
      </FirstBox>
      <SecondBox>
        <Typography variant="h3">Register</Typography>
        <TextField
          sx={{ width: 300 }}
          id="standard-basic"
          label="Email"
          type="email"
          required
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon fontSize="16px" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          sx={{ width: 300 }}
          id="standard-basic"
          label="Phone"
          type="number"
          required
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneAndroidIcon fontSize="16px" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          sx={{ width: 300 }}
          id="standard-basic"
          label="Username"
          variant="standard"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon fontSize="16px" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          sx={{ width: 300 }}
          id="standard-basic"
          label="Password"
          variant="standard"
          required
          type={showPassword ? "text" : "password"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PasswordIcon fontSize="16px" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handlePasswordVisibility}>
                  {showPassword ? (
                    <VisibilityIcon fontSize="18px" />
                  ) : (
                    <VisibilityOffIcon fontSize="1px" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <MainButton>Register</MainButton>
        <Typography variant="body2">
          Already have an account? <StyledSpan onClick={()=>navigate("/signin")}>Login</StyledSpan>
        </Typography>
      </SecondBox>
    </MainBox>
  );
}

export default SignUp;
