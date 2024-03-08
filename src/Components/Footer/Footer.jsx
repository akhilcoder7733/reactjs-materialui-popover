import { Box } from '@mui/material';
import React from 'react';

function Footer() {
  return (
    <Box component="footer" textAlign="center" py={2}>
      © {new Date().getFullYear()} Your Website Name
    </Box>
  );
}

export default Footer;
