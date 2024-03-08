import { Box, Popper } from '@mui/material';
import {styled} from '@mui/system';
import React, { useState } from 'react'


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

  const StyledBox=styled(Box)(({theme }) =>({
    minHeight:"20vh",
    minWidth:"30vh",
    backgroundColor:"red",
    borderRadius:"20px"
  }))

function PopperComponent() {
    const [anchorEl, setAnchorEl]= useState(null)
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
      };
    const handleLeave = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
      };
      
    
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popper' : undefined;
  return (
    <MainBox>
      <button aria-describedby={id} type="button" onMouseEnter={handleClick} >
        Toggle Popper
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl} onMouseLeave={handleLeave}>
        <StyledBox data-aos="zoom-up-left" sx={{ border: 1, p: 1 }}>
          The content of the Popper.
        </StyledBox>
      </Popper>
    </MainBox>
  )
}

export default PopperComponent
