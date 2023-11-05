import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Disclaimer = () => {
  return (
    <AppBar position="static" padding="0.5rem">
      <Toolbar>
        <Container>
          <Typography variant="body4" color="inherit">
            This website is under development. Some features may not be available.
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Disclaimer;
