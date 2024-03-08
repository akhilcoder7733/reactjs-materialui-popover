import { Box, Typography } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/system';
import Notim from '../../assets/not.svg'

const MainBox = styled(Box)(({ theme }) => ({
  minHeight: "90vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4),
 
}));

const NotFound = () => {
  return (
    <MainBox>
      <Helmet>
        <title>404 Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <StyledBox>
      <img src={Notim} alt="404" style={{ width: '50%', maxWidth: '300px', margin: '0 auto', display: 'block' }} />
        <Typography variant='h3' sx={{fontSize:"3rem", marginBottom:"2px", color:"#f44336"}}>404 Not Found</Typography>
        <Typography variant='body1' sx={{fontSize: '1.5rem',
    color: '#333',}}>The page you are looking for does not exist.</Typography>
      </StyledBox>
    </MainBox>
  );
};

export default NotFound;
