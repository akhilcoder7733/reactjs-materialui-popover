import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import HeaderSection from "./Components/Header/HeaderSection";
import SignIn from "./UserPages/SignIn";
import SignUp from "./UserPages/SignUp";
import NotFound from "./Pages/NotFound/NotFound";

function useDarkModePreference() {
  return useMediaQuery("(prefers-color-scheme: dark)");
}

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200, // offset (in px) from the original trigger point
      duration: 600, // duration of the animation (in ms)
      easing: "ease-in-out", // easing function for the animation
      delay: 100, // delay in animation (in ms)
    });
  }, []);

  const prefersDarkMode = useDarkModePreference();
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  useEffect(() => {
    document.body.style.transition = "background-color 0.3s ease-in-out";
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#111" : "#fff";
  }, [darkMode]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      text: {
        primary: darkMode ? "#fff" : "#3B3B3B",
      },
      primary: {
        main: "#1976D2",
      },
      secondary: {
        main: "#DC004E",
      },
      background: {
        default: darkMode ? "#111" : "#fff",
        paper: darkMode ? "#111" : "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <HeaderSection darkMode={darkMode} setDarkMode={setDarkMode} />
        {/* <Header darkMode={darkMode} setDarkMode={setDarkMode} /> */}
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/reactjs-materialui-popover" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/signin" element={<SignIn darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/signup" element={<SignUp darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/*" element={<NotFound darkMode={darkMode} setDarkMode={setDarkMode} />} />
        </Routes>
        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
