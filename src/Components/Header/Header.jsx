import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Popover,
  Divider,
  IconButton,
  Drawer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { styled } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import MenuIcon from "@mui/icons-material/Menu";

const MainBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "13vh",
  // position: "fixed",
  backdropFilter: "blur(5px)", // Blur the background
  zIndex: 1000,
  // backgroundColor:"red"
}));

const HeaderBox = styled(Box)(({ theme, darkMode }) => ({
  width: "1200px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  // backgroundColor:darkMode ? "#1a1a1a" : "#fff",
  minHeight: "10vh",
  borderRadius: "20px",
  border: "2px solid",
  boxShadow: darkMode
    ? "0px 0px 31px 0px rgba(255,255,255,1)"
    : "0px 0px 31px 0px rgba(0,0,0,1)",
  marginTop: "15px",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    boxShadow: "none",
    border: "none",
  },
}));

const LinksBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  // backgroundColor:"green",
  margin: "10px",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const SignBox = styled(Box)(({ theme }) => ({
  // width: "20%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  // backgroundColor:"blue",
  margin: "10px",
  gap: theme.spacing(2),
}));

const StyledTypo = styled(Typography)(({ theme, darkMode }) => ({
  // textAlign: "center",
  fontFamily: "Merriweather, serif",
  cursor: "pointer",
  fontWeight: 600,
  position: "relative", // Add this to allow absolute positioning of the pseudo-element
  transition: "all 0.3s ease-in-out",
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
  ".arrow ": {
    color: darkMode ? "#fff" : "#111",
  },
  "&:hover .arrow ": {
    color: darkMode ? "#fff" : "#666565",
  },
}));

const CustomMenuIcon = styled(MenuIcon)(({ theme, darkMode }) => ({
  display: "none",
  cursor: "pointer",
  marginRight: theme.spacing(2),
  color: darkMode ? "#fff" : "#111",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));
const FeaturesBox = styled(Box)(({ theme, darkMode }) => ({
  display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
  width: 300,
  padding: theme.spacing(2),
  flexDirection: "column",
  gap: theme.spacing(2),
  backgroundColor: darkMode ? "#03adfc" : "#b3dbf5",
}));

const SolutionBox = styled(Box)(({ theme, darkMode }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 600,
  padding: theme.spacing(2),
  flexDirection: "column",
  backgroundColor: darkMode ? "#03adfc" : "#b3dbf5",
}));

const StyledListItems = styled(Typography)(({ theme }) => ({
  fontFamily: "Merriweather, serif",
  fontWeight: 200,
  transition: "all 0.3s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    fontWeight: 600,
  },
}));

function Header({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const [featuresAnchorEl, setFeaturesAnchorEl] = useState(null);
  const [solutionsAnchorEl, setSolutionsAnchorEl] = useState(null);
  const [settingsAnchorEl, setSettingsAnchorEl] = useState(null);
  const [featuresArrowRotation, setFeaturesArrowRotation] = useState(0);
  const [solutionsArrowRotation, setSolutionsArrowRotation] = useState(0);
  const [isFeaturesPopoverOpen, setIsFeaturesPopoverOpen] = useState(false);
  const [isSolutionsPopoverOpen, setIsSolutionsPopoverOpen] = useState(false);
  const [isSettingsPopoverOpen, setIsSettingsPopoverOpen] = useState(false);
  const [backToTopButton, setBackToTopButton] = useState(false);
  const [mobileMenu, setMobileMenu] = useState({ top: false });
  const [featuresExpanded, setFeaturesExpanded] = useState(false);
  const [solutionsExpanded, setSolutionsExpanded] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }
    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

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

  const handleDarkModeToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const handleFeaturesClick = (event) => {
    setFeaturesAnchorEl(event.currentTarget);
    setFeaturesArrowRotation(featuresArrowRotation === 0 ? 180 : 0);
    setIsFeaturesPopoverOpen(true);
  };

  const handleSolutionsClick = (event) => {
    setSolutionsAnchorEl(event.currentTarget);
    setSolutionsArrowRotation(solutionsArrowRotation === 0 ? 180 : 0);
    setIsSolutionsPopoverOpen(true);
  };

  const handleSettingsClick = (event) => {
    setSettingsAnchorEl(event.currentTarget);
    setIsSettingsPopoverOpen(true);
  };

  const handleFeaturesClose = () => {
    setFeaturesAnchorEl(null);
    setFeaturesArrowRotation(0);
    setIsFeaturesPopoverOpen(false);
  };

  const handleSolutionsClose = () => {
    setSolutionsAnchorEl(null);
    setSolutionsArrowRotation(0);
    setIsSolutionsPopoverOpen(false);
  };
  const handleSettingsClose = () => {
    setSettingsAnchorEl(null);
    setIsSettingsPopoverOpen(false);
  };

  const handleFeaturesPopoverMouseLeave = () => {
    setIsFeaturesPopoverOpen(false);
  };

  const handleSolutionsPopoverMouseLeave = () => {
    setIsSolutionsPopoverOpen(false);
  };

  const handleSettingsPopoverMouseLeave = () => {
    setIsSettingsPopoverOpen(false);
  };

  const handleFeaturesExpand = () => {
    setFeaturesExpanded(!featuresExpanded);
  };

  const handleSolutionsExpand = () => {
    setSolutionsExpanded(!solutionsExpanded);
  };

  const handleHomeClick = ({ anchor }) => {
    navigate("/");
    toggleDrawer("top", false);
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "left" || anchor === "right" ? "auto" : "100%",
        display: "flex",
        // flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor:"green"
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          padding: 2,
          // backgroundColor:"red"
        }}
      >
        <StyledTypo
          variant="h6"
          style={{
            fontWeight: 600,
            borderBottom: darkMode
              ? "1px solid rgba(255,255,255,0.8)"
              : "1px solid rgba(1,1,1,0.4)",
          }}
        >
          Nav Bar
        </StyledTypo>
        <StyledTypo onClick={handleHomeClick}>Home</StyledTypo>
        <Accordion
          expanded={featuresExpanded}
          onChange={handleFeaturesExpand}
          sx={{ backgroundColor: "transparent" }}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<KeyboardArrowDownIcon />}
            aria-controls="features-content"
            id="features-header"
          >
            <StyledTypo
              style={{
                fontWeight: 600,
                borderBottom: darkMode
                  ? "1px solid rgba(255,255,255,0.8)"
                  : "1px solid rgba(1,1,1,0.4)",
              }}
            >
              Features
            </StyledTypo>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Typography
                onClick={() => {
                  navigate("/product-overview");
                  setFeaturesExpanded(false);
                }}
              >
                Product overview
              </Typography>
              <Typography
                onClick={() => {
                  navigate("/all-features");
                  setFeaturesExpanded(false);
                }}
              >
                All features
              </Typography>
              <Typography
                onClick={() => {
                  navigate("/app-integrations");
                  setFeaturesExpanded(false);
                }}
              >
                App integrations
              </Typography>
              <Typography
                onClick={() => {
                  navigate("/advanced");
                  setFeaturesExpanded(false);
                }}
              >
                Advanced
              </Typography>
              <Typography
                onClick={() => {
                  navigate("/pricing");
                  setFeaturesExpanded(false);
                }}
              >
                Get Started
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={solutionsExpanded}
          onChange={handleSolutionsExpand}
          sx={{ backgroundColor: "transparent" }}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<KeyboardArrowDownIcon />}
            aria-controls="solutions-content"
            id="solutions-header"
          >
            <StyledTypo
              style={{
                fontWeight: 600,
                borderBottom: darkMode
                  ? "1px solid rgba(255,255,255,0.8)"
                  : "1px solid rgba(1,1,1,0.4)",
              }}
            >
              Solutions
            </StyledTypo>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Typography
                onClick={() => {
                  navigate("/product-overview");
                  setFeaturesExpanded(false);
                }}
              >
                Product overview
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>

        <StyledTypo>Pricing</StyledTypo>
      </Box>
      <Divider />
    </Box>
  );

  return (
    <MainBox>
      <HeaderBox darkMode={darkMode}>
        <CustomMenuIcon
          onClick={toggleDrawer("top", true)}
          darkMode={darkMode}
        />
        <Drawer
          anchor="top"
          open={mobileMenu["top"]}
          onClose={toggleDrawer("top", false)}
        >
          {list("top")}
        </Drawer>
        <LinksBox>
          <Typography
            style={{
              fontWeight: 800,
              fontSize: "22px",
              marginBottom: "4px",
            }}
          >
            Ayush
          </Typography>
          <StyledTypo onClick={() => navigate("/")}>Home</StyledTypo>
          <StyledTypo
            darkMode={darkMode}
            aria-owns={isFeaturesPopoverOpen ? "features-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handleFeaturesClick}
            style={{ display: "flex", alignItems: "center" }}
          >
            Features
            <KeyboardArrowDownIcon
              className="arrow"
              style={{
                fontSize: "25px",
                transform: `rotate(${featuresArrowRotation}deg)`,
                transition: "transform 0.1s ease-out",
              }}
            />
          </StyledTypo>
          <Popover
            open={isFeaturesPopoverOpen}
            anchorEl={featuresAnchorEl}
            onClose={handleFeaturesClose}
            onMouseLeave={handleFeaturesPopoverMouseLeave}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left", // Adjust as needed
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left", // Adjust as needed
            }}
            disableRestoreFocus
          >
            <FeaturesBox darkMode={darkMode}>
              <StyledTypo variant="h5" textAlign="start">
                Platform
              </StyledTypo>
              <Divider />
              <StyledListItems
                variant="body1"
                onClick={() => {
                  navigate("/product-overview");
                  handleFeaturesClose();
                }}
              >
                Product overview
              </StyledListItems>
              <StyledListItems
                variant="body1"
                onClick={() => {
                  navigate("/all-features");
                  handleFeaturesClose();
                }}
              >
                All features
              </StyledListItems>
              <StyledListItems
                variant="body1"
                onClick={() => {
                  navigate("/app-integrations");
                  handleFeaturesClose();
                }}
              >
                App integrations
              </StyledListItems>
              <StyledListItems
                variant="body1"
                onClick={() => {
                  navigate("/advanced");
                  handleFeaturesClose();
                }}
              >
                Advanced
              </StyledListItems>
              <StyledListItems
                variant="body1"
                onClick={() => {
                  navigate("/pricing");
                  handleFeaturesClose();
                }}
              >
                Get Started
              </StyledListItems>
            </FeaturesBox>
          </Popover>

          <StyledTypo
            darkMode={darkMode}
            aria-owns={isSolutionsPopoverOpen ? "solutions-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handleSolutionsClick}
            style={{ display: "flex", alignItems: "center" }}
          >
            Solutions
            <KeyboardArrowDownIcon
              className="arrow"
              style={{
                fontSize: "20px",
                transform: `rotate(${solutionsArrowRotation}deg)`,
                transition: "transform 0.1s ease-out",
              }}
            />
          </StyledTypo>
          <Popover
            open={isSolutionsPopoverOpen}
            anchorEl={solutionsAnchorEl}
            onClose={handleSolutionsClose}
            onMouseLeave={handleSolutionsPopoverMouseLeave}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left", // Adjust as needed
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left", // Adjust as needed
            }}
            disableRestoreFocus
          >
            <Box sx={{ borderRadius: "20px" }}>
              <SolutionBox darkMode={darkMode}>
                <Typography>Solutions Popover</Typography>
              </SolutionBox>
            </Box>
          </Popover>
          <StyledTypo>Pricing</StyledTypo>
        </LinksBox>
        <SignBox>
          <IconButton>
            <SettingsIcon
              aria-owns={isSettingsPopoverOpen ? "settings-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handleSettingsClick}
            />
          </IconButton>
          <Popover
            open={isSettingsPopoverOpen}
            anchorEl={settingsAnchorEl}
            onClose={handleSettingsClose}
            onMouseLeave={handleSettingsPopoverMouseLeave}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right", // Adjust as needed
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right", // Adjust as needed
            }}
            disableRestoreFocus
          >
            <FeaturesBox darkMode={darkMode}>
              <Typography
                style={{
                  fontFamily: "Merriweather, serif",
                  fontWeight: 600,
                }}
                variant="h6"
              >
                Settings
              </Typography>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  borderBottom: "1px solid rgba(93, 94, 94, 0.3)",
                  alignItems: "start",
                  flexDirection: "column",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Merriweather, serif",
                    fontWeight: 600,
                  }}
                  variant="h6"
                >
                  Page Settings
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography fontFamily="Merriweather, serif">
                    {darkMode ? "Light Mode" : "Dark Mode"}
                  </Typography>
                  <Divider />
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
                </Box>
              </Box>
              <Typography
                style={{
                  fontFamily: "Merriweather, serif",
                  fontWeight: 600,
                }}
                variant="h6"
              >
                Account Settings
              </Typography>
              <StyledListItems>Sign Up</StyledListItems>
              <StyledListItems>Sign In</StyledListItems>
              <StyledListItems>Logout</StyledListItems>
            </FeaturesBox>
          </Popover>
        </SignBox>
      </HeaderBox>
      {backToTopButton && (
        <IconButton
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
    </MainBox>
  );
}

export default Header;
