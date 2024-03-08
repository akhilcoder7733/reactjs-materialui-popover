import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Popover,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BuildIcon from "@mui/icons-material/Build";
import BusinessIcon from "@mui/icons-material/Business";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';


const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "transparent",
  //   color: 'white',
  minHeight: "10vh",
  [theme.breakpoints.down("md")]: {},
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "1.5rem",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledIcon = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));

const MenuItems = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledTypography = styled(Typography)({
  cursor: "pointer",
  marginRight: "20px",
  transition: "all 0.3s",
  fontFamily: "Merriweather, serif",
  "&:hover": {
    color: "#666565",
    transform: "translateY(-1px)",
    "&::after": {
      // Add this to target the pseudo-element on hover
      width: "100%", // Expand the underline to full width
    },
  },
  "&::after": {
    // Define styles for the pseudo-element
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 0, // Start with no width
    height: "2px", // Define the height of the underline
    backgroundColor: "#666565",
    transition: "width 0.3s ease-in-out", // Transition the width property
  },
});

const DrawerBox = styled(Box)(({ theme }) => ({
  width: 250,
  padding: theme.spacing(2),
}));

const HeaderSection = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [featuresAnchorEl, setFeaturesAnchorEl] = React.useState(null);
  const [backToTopButton, setBackToTopButton] = useState(false);
  const [featuresArrowRotation, setFeaturesArrowRotation] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleDarkModeToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const handleSettingsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFeaturesClick = (event) => {
    setFeaturesAnchorEl(event.currentTarget);
    setFeaturesArrowRotation(featuresArrowRotation === 0 ? 180 : 0);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setFeaturesAnchorEl(null);
    setFeaturesArrowRotation(0); // Reset arrow rotation
  };

  const openSettings = Boolean(anchorEl);
  const openFeatures = Boolean(featuresAnchorEl);

  return (
    <HeaderContainer>
      <Logo variant="h1">Logo</Logo>
      <StyledIcon onClick={handleDrawerOpen}>
        <MenuIcon />
      </StyledIcon>
      <MenuItems>
        <StyledTypography
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </StyledTypography>
        <StyledTypography
          onMouseEnter={handleFeaturesClick}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Features{" "}
          <KeyboardArrowDownIcon
            style={{
              fontSize: "20px",
              transform: `rotate(${featuresArrowRotation}deg)`,
              transition: "transform 0.3s ease-out",
            }}
          />
        </StyledTypography>
        <StyledTypography
          onClick={() => {
            navigate("/solutions");
          }}
        >
          Solutions
        </StyledTypography>
        <StyledTypography
          onClick={() => {
            navigate("/pricing");
          }}
        >
          Pricing
        </StyledTypography>
        <SettingsIcon
          onMouseEnter={handleSettingsClick}
          style={{ cursor: "pointer" }}
        />
        <Popover
          open={openSettings}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Box p={2} sx={{ width: 200 }}>
            <Typography variant="h6">Settings</Typography>
            <Divider />
            <List>
              <ListItem button>
                <ListItemIcon>
                  <PersonAddIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Sign Up"
                  onClick={() => {
                    navigate("/signup");
                    setAnchorEl(null);
                  }}
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Sign In"
                  onClick={() => {
                    navigate("/signin");
                    setAnchorEl(null);
                  }}
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Logout"
                  onClick={() => {
                    setAnchorEl(null);
                  }}
                />
              </ListItem>
            </List>
            <Typography variant="h6">Page Settings</Typography>
            <Divider />
            <List>
              <ListItem>
                <ListItemText>
                  <Typography variant="body2" fontFamily="Merriweather, serif">
                    {darkMode ? "Theme" : "Theme"}
                  </Typography>
                </ListItemText>
                <ListItemIcon>
                  <IconButton onClick={handleDarkModeToggle}>
                    {darkMode ? (
                      <LightModeIcon
                        style={{ color: "#fff", fontSize: "33px" }}
                      />
                    ) : (
                      <DarkModeIcon
                        style={{ color: "#111", fontSize: "33px" }}
                      />
                    )}
                  </IconButton>
                </ListItemIcon>
              </ListItem>
            </List>
          </Box>
        </Popover>
        <Popover
          open={openFeatures}
          anchorEl={featuresAnchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box p={2}>
            <Typography variant="h6">Features</Typography>
            <Divider />
            <List>
              <ListItem button>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Production"
                  onClick={() => {
                    navigate("/production");
                    setFeaturesAnchorEl(null);
                    setFeaturesArrowRotation(0);
                  }}
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <BusinessIcon />
                </ListItemIcon>
                <ListItemText primary="Management" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <MonetizationOnIcon />
                </ListItemIcon>
                <ListItemText primary="Pricing" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <PlayArrowIcon />
                </ListItemIcon>
                <ListItemText primary="Get Started" />
              </ListItem>
            </List>
          </Box>
        </Popover>
      </MenuItems>
      {backToTopButton && (
        <IconButton
          data-aos="fade-up"
          darkMode={darkMode}
          style={{
            position: "fixed",
            bottom: 50,
            right: 50,
            height: 50,
            width: 50,
            fontSize: "40px",
            backgroundColor: darkMode ? "#fff" : "#111",
            color: darkMode ? "#111" : "#fff",
            zIndex: 1,
          }}
          onClick={scrollUp}
        >
          <ArrowUpwardIcon />
        </IconButton>
      )}
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <DrawerBox>
          <List>
            <Typography variant="h5">Navigations</Typography>
            <Divider/>
            <ListItem button onClick={()=>{navigate("/"); setDrawerOpen(false)}}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={()=>{navigate("/solutions"); setDrawerOpen(false)}}>
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <ListItemText primary="Solutions" />
            </ListItem>
            <ListItem button onClick={()=>{navigate("/pricing"); setDrawerOpen(false)}}>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary="Pricing" />
            </ListItem>
            <Typography variant="h5">Features</Typography>
            <Divider/>
            <ListItem button onClick={()=>{navigate("/production"); setDrawerOpen(false)}}>
              <ListItemIcon>
                <FeaturedPlayListIcon />
              </ListItemIcon>
              <ListItemText primary="Production" />
            </ListItem>
            <ListItem button onClick={()=>{navigate("/management"); setDrawerOpen(false)}}>
              <ListItemIcon>
                <EmojiObjectsIcon />
              </ListItemIcon>
              <ListItemText primary="Management" />
            </ListItem>
            <ListItem button onClick={()=>{navigate("/components"); setDrawerOpen(false)}}>
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText primary="Components" />
            </ListItem>
            <ListItem button onClick={()=>{navigate("/get-started"); setDrawerOpen(false)}}>
              <ListItemIcon>
                <BuildIcon />
              </ListItemIcon>
              <ListItemText primary="Get Started" />
            </ListItem>
          </List>
          <Typography variant="h5">Page Settings</Typography>
            <Divider/>
            <ListItem>
                <ListItemText>
                  <Typography variant="body2" fontFamily="Merriweather, serif">
                    {darkMode ? "Dark Mode" : "Light Mode"}
                  </Typography>
                </ListItemText>
                <ListItemIcon>
                  <IconButton onClick={handleDarkModeToggle}>
                    {darkMode ? (
                      <LightModeIcon
                        style={{ color: "#fff", fontSize: "33px" }}
                      />
                    ) : (
                      <DarkModeIcon
                        style={{ color: "#111", fontSize: "33px" }}
                      />
                    )}
                  </IconButton>
                </ListItemIcon>
              </ListItem>
              <Typography variant="h5">User :</Typography>
            <Divider/>
            <ListItem button onClick={()=>{navigate("/signin"); setDrawerOpen(false)}}>
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText primary="Sign In" />
            </ListItem>
            <ListItem button onClick={()=>{navigate("/signup"); setDrawerOpen(false)}}>
              <ListItemIcon>
                <AssignmentIndIcon />
              </ListItemIcon>
              <ListItemText primary="Sign Up" />
            </ListItem>
            <ListItem button onClick={()=>{navigate("/"); setDrawerOpen(false)}}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItem>
        </DrawerBox>
      </Drawer>
    </HeaderContainer>
  );
};

export default HeaderSection;
