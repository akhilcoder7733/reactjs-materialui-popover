import {
  Box,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import LoginImge from "../assets/loginimg.svg";
import MainButton from "../Components/MainButton/MainButton";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import PersonIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Helmet } from "react-helmet";
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
  [theme.breakpoints.down("sm")]: {
    maxWidth: "360px",
    height: "40vh",
  },
}));
const SecondBox = styled(Box)(({ theme }) => ({
  minHeight: "75vh",
  minWidth: "30%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: 2,
  backgroundColor: "rgba(187, 191, 188, 0.4)",
  borderBottomLeftRadius: "20%",
  borderTopRightRadius: "20%",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    backgroundColor: "transparent",
    minHeight: "55vh",
  },
  [theme.breakpoints.down("md")]: {
    backgroundColor: "transparent",
    minHeight: "55vh",
  },
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
}));

const IconPlaceBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
  width: 70,
  height: 70,
  border: "1px solid #fff",
  padding: theme.spacing(2),
  transition: "all 0.3s ease-in",
  "&:hover": {
    border: "1px solid rgba(54, 54, 54, 0.5)",
  },
}));

const StyledSpan = styled("span")(({ theme }) => ({
  color: "#0216c9",
  cursor: "pointer",
  transition: "color 0.3s ease-in",
  "&:hover": {
    color: "#111",
  },
}));

function SignIn() {
  const navigate=useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      alert("Please enter username and password.")
      // setError("");
      return;
    }
    // Continue with login logic
  };

  return (
    <MainBox>
      <Helmet>
        <title>Sign In</title>
        <meta name="description" content="Sign In to my website" />
        {/* Add more meta tags as needed */}
      </Helmet>
      <FirstBox>
        <img
          src={LoginImge}
          alt="llogoij"
          style={{ width: "400px" }}
          data-aos="zoom-in"
        />
      </FirstBox>
      <SecondBox>
        <Typography variant="h3">Login</Typography>
        <TextField
          sx={{ width: 300 }}
          id="standard-basic"
          label="Username"
          variant="standard"
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
        <MainButton sx={{ width: 300 }} onClick={handleLogin}>Login</MainButton>
        {error && (
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        )}
        <Typography variant="subtitle2">or login with:</Typography>
        <IconBox>
          <IconPlaceBox>
            <GoogleIcon />
          </IconPlaceBox>
          <IconPlaceBox>
            <FacebookIcon />
          </IconPlaceBox>
        </IconBox>
        <Typography variant="body2">
          Don't have an account? <StyledSpan onClick={()=>navigate("/signup")}>Register</StyledSpan>
        </Typography>
      </SecondBox>
    </MainBox>
  );
}

export default SignIn;
