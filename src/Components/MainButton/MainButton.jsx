// MainButton.jsx
import { Button } from "@mui/material";
import { styled } from "@mui/system";

const MainButton = styled(Button)(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  margin: "15px",
  padding: "5px 10px",
  textAlign: "center",
  fontSize: "18px",
  letterSpacing: "1px",
  textDecoration: "none",
  color: "#725AC1",
  background: "transparent",
  cursor: "pointer",
  transition: "ease-out 0.5s",
  border: "2px solid #725AC1",
  borderRadius: "10px",
  boxShadow: "inset 0 0 0 0 #725AC1",
  textTransform:"capitalize",
  "&:hover": {
    color: "white",
    boxShadow: "inset 0 -100px 0 0 #725AC1",
  },
  "&:active": {
    transform: "scale(0.9)",
  },
}));

export default MainButton;
