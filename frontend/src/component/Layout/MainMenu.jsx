import React from 'react';
import { Box, Avatar, Typography, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';

const MainMenu = () => {

  return (
      <Toolbar>
        <AppBar >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '1rem',
              justifyContent: 'space-between',
              textAlign: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link to="/" style={{ textDecoration: 'none', margin: '0 10px' }}>
                <Avatar alt="Logo" src="/" sx={{ marginRight: 1 }} />
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2" component="div">
                <Link to="/category" style={{color: 'white', textDecoration: 'none', margin: '0 10px' }}>
                  Category
                </Link>
                <Link to="/community" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>
                  Community
                </Link>
                <Link to="/jobs" style={{color: 'white', textDecoration: 'none', margin: '0 10px' }}>
                  Job Seekers
                </Link>
                <Link to="/employers" style={{color: 'white',  textDecoration: 'none', margin: '0 10px' }}>
                  Employers
                </Link>
              </Typography>
            </Box>
          </Box>
        </AppBar>
      </Toolbar>
  );
};

export default MainMenu;
