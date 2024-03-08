import {
  Box,
  Card,
  CardContent,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { styled, keyframes } from "@mui/system";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Helmet } from "react-helmet";

const MainBox = styled(Box)(({ theme }) => ({
  minHeight: "90vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    minHeight: "130vh",
  },
  [theme.breakpoints.down("md")]: {
    minHeight: "160vh",
  },
}));

const ParallaxContainer = styled(Container)(({ theme, darkMode }) => ({
  position: "relative",
  zIndex: 1, // Ensure content is above the background image
  width: "90%",
  backgroundColor: darkMode ? "rgba(255,255,255,0.5)" : "rgba(1,1,1,0.5)",
  borderRadius: "15px",
  minHeight: "65vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  boxShadow: darkMode
    ? "0px 0px 36px 1px rgba(255,255,255,1)"
    : "0px 0px 36px 1px rgba(1,1,1,1)",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const CardBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  //  backgroundColor:"blue",
  //  minHeight:"70vh",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    marginBottom: "20px",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    marginBottom: "20px",
  },
}));

const tiltShaking = keyframes`
0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(5px, 5px) rotate(5deg); }
  50% { transform: translate(0, 0) rotate(0eg); }
  75% { transform: translate(-5px, 5px) rotate(-5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
`;

const StyledCard = styled(Card)(({ theme, darkMode }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 300,
  height: 250,
  borderRadius: "15px",
  gap: theme.spacing(1),
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    boxShadow: " 0px 0px 26px 3px rgba(0,0,0,0.75)",
    transform: "translateY(-5px)",
  },
  "& .MuiIconButton-root": {
    // color: "#111",
    transition: "all 0.3s ease-out",
  },
  "&:hover .MuiIconButton-root": {
    transform: "scale(1.3)",
    color: "#3a4e85",
    animation: `${tiltShaking} 0.3s`,
  },
}));

const cardData = [
  {
    icon: <LocalOfferIcon style={{ fontSize: "40px" }} />,
    heading: "Hover Effects",
    about:
      "A drawing instrument releases a small amount of material onto a surface, leaving a visible mark.",
  },
  {
    icon: <InsertPhotoIcon style={{ fontSize: "40px" }} />,
    heading: "Reality Drawings",
    about:
      "Reality is the sum or aggregate of all that is real or existent within the universe ",
  },
  {
    icon: <VolunteerActivismIcon style={{ fontSize: "40px" }} />,
    heading: "Gift Drawings",
    about:
      " Although gift-giving might involve an expectation of reciprocity, a gift is meant to be free.",
  },
];

function Subscribe({ darkMode }) {
  return (
    <MainBox>
      <Helmet>
        <title>Subscribe</title>
        <meta name="description" content="Welcome to my website" />
        {/* Add more meta tags as needed */}
      </Helmet>

      <ParallaxContainer darkMode={darkMode}>
        <Typography
          variant="h2"
          align="center"
          style={{ fontFamily: "Merriweather, serif", fontWeight: 600 }}
          gutterBottom
        >
          Key Features
        </Typography>
        <Typography
          variant="h5"
          align="center"
          paragraph
          style={{ fontFamily: "Merriweather, serif" }}
        >
          Showcase your drawings and paintings here!
        </Typography>

        <CardBox>
          {cardData.map((data, index) => (
            <Box
              data-aos="zoom-in"
              data-aos-delay={`${index * 200}`}
              data-aos-duration="1000"
            >
              <StyledCard key={index}>
                <CardContent>
                  <IconButton className="icons">{data.icon}</IconButton>
                  <Typography
                    variant="h6"
                    align="start"
                    style={{
                      fontFamily: "Fredoka, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {data.heading}
                  </Typography>
                  <Typography
                    variant="body2"
                    align="start"
                    style={{ fontFamily: "Fredoka, sans-serif" }}
                  >
                    {data.about}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Box>
          ))}
        </CardBox>
      </ParallaxContainer>
    </MainBox>
  );
}

export default Subscribe;

// data-aos="fade-in" data-aos-duration="1000" data-aos-delay={`${index * 100}`}
