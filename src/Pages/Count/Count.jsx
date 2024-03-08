import React, { useState } from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet";

const MainBox = styled(Box)(({ theme }) => ({
  minHeight: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: theme.spacing(2),
  [theme.breakpoints.down("md")]:{
    minHeight:"160vh",
  }

}));
const CountHeadingBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: theme.spacing(2),
}));
const CountingBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  // overflow:"hidden",

  [theme.breakpoints.down("sm")]:{
    flexDirection:"column",
    gap:theme.spacing(3)
  },
  [theme.breakpoints.down("md")]:{
    flexDirection:"column",
    gap:theme.spacing(3)
  },
}));

const NumberBox = styled(Box)(({ theme, darkMode }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "rgba(161, 159, 159,0.3)",
  minHeight: 200,
  minWidth: 300,
  borderRadius: "20px",
  transition:"all 0.3s ease-in-out",
  // overflow:"hidden",
  "&:hover":{
    boxShadow:darkMode ? " 0px 5px 36px 1px rgba(255,255,255,0.4)" :"0px 5px 36px 1px rgba(0,0,0,0.46)",
    transform:"translateY(-5px)"
  }
}));
const CustomTypo = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "Merriweather, serif",
}));

const Counter = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "Merriweather, serif",
  fontSize:"32px",
fontWeight:900,

}));

function Count({darkMode}) {
  const [visits, setVisits] = useState(0);
  const [downloads, setDownloads] = useState(0);
  const [shares, setShares] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  if (inView) {
    setTimeout(() => {
      setVisits(399);
    }, 100);

    setTimeout(() => {
      setDownloads(499);
    }, 200);

    setTimeout(() => {
      setShares(599);
    }, 300);
  }

  return (
    <MainBox>
       <Helmet>
        <title>Counting</title>
        <meta name="description" content="Sign In to my website" />
        {/* Add more meta tags as needed */}
      </Helmet>
      <CountHeadingBox>
        <CustomTypo variant="h3" fontWeight={600}>
          Marketing in{" "}
          <span
            style={{
              background: `linear-gradient(153deg, rgba(0,112,255,1) 0%, rgba(247,138,195,1) 61%, rgba(255,45,92,1) 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Counts
          </span>
        </CustomTypo>
        <CustomTypo variant="h6" style={{ width: "90%" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </CustomTypo>
      </CountHeadingBox>
      <CountingBox>
        <Box data-aos="fade-up" data-aos-delay="100">
        <NumberBox ref={ref} darkMode={darkMode} >
          <CustomTypo variant="h5">Visits</CustomTypo>
         <Counter> <CountUp end={visits} />+</Counter>
        </NumberBox>
        </Box>
       <Box  data-aos="fade-up" data-aos-delay="200">
       <NumberBox ref={ref} darkMode={darkMode}>
          <CustomTypo variant="h5">Downloads</CustomTypo>
          <Counter><CountUp end={downloads} />+</Counter>
        </NumberBox>
       </Box>
       <Box  data-aos="fade-up" data-aos-delay="300">
       <NumberBox ref={ref} darkMode={darkMode}>
          <CustomTypo variant="h5">Share</CustomTypo>
          <Counter
          ><CountUp end={shares} />+</Counter>
        </NumberBox>
       </Box>
      </CountingBox>
    </MainBox>
  );
}

export default Count;
