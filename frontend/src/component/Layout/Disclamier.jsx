import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Disclaimer = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
          <Typography variant="body2" color="inherit">
            This website is under development. Some features may not be available.
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Disclaimer;
