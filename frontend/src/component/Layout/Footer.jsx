import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box py={3} style={{ marginTop: 'auto' }}>
      <Container>
        <Typography variant="body2" align="center" color="textPrimary">
          &copy; 2023 Remote Job Platform. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center" color="textPrimary">
          <Link href="/about" color="inherit" underline="none" style={{ margin: '0 10px' }}>
            About Us
          </Link>
          <Link href="/contact" color="inherit" underline="none" style={{ margin: '0 10px' }}>
            Contact Us
          </Link>
          <Link href="/privacy-policy" color="inherit" underline="none" style={{ margin: '0 10px' }}>
            Privacy Policy
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
