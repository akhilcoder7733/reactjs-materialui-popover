import { Box, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import MainButton from "../../Components/MainButton/MainButton";

const MainBox = styled(Box)(({ theme }) => ({
  minHeight: "70vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

const MainTypo = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "Merriweather, serif",
}));
const WelcomeText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "Merriweather, serif",
  background: `linear-gradient(153deg, rgba(0,112,255,1) 0%, rgba(247,138,195,1) 61%, rgba(255,45,92,1) 100%)`,
  fontSize: "142px",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  [theme.breakpoints.down("sm")]:{
    fontSize:"82px"
  },
  [theme.breakpoints.down("md")]:{
    fontSize:"102px",
  },
}));

function Welcome() {
  return (
    <MainBox>
      <WelcomeText
        variant="h2"
        data-aos="fade-up"
        data-aos-delay="100"
        fontWeight={600}
      >
        Welcome
      </WelcomeText>
      <MainTypo variant="h4" data-aos="fade-up" data-aos-delay="200">
        To Our Website
      </MainTypo>
      <MainTypo
        variant="subtitle2"
        data-aos="fade-up"
        data-aos-delay="300"
        style={{ width: "70%" }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </MainTypo>
      <MainButton data-aos="fade-up" data-aos-delay="400">
        Get Started!
      </MainButton>
    </MainBox>
  );
}

export default Welcome;
