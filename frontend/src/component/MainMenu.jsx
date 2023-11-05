import React from 'react';
import { Box, Avatar, IconButton, Typography, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';

const MainMenu = () => {

  return (
    <React.Fragment>
      <Toolbar>
        <AppBar >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '1rem',
              justifyContent: 'space-between',
              textAlign: 'center',
              bgcolor: "grey.100",
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none', margin: '0 10px' }}>
                <Avatar alt="Logo" src="/" sx={{ marginRight: 1 }} />
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton color="black">
                <SearchIcon />
              </IconButton>
              <Typography variant="body2" color="textPrimary" component="div">
                <Link to="/category" style={{ color: 'inherit', textDecoration: 'none', margin: '0 10px' }}>
                  Category
                </Link>
                <Link to="/community" style={{ color: 'inherit', textDecoration: 'none', margin: '0 10px' }}>
                  Community
                </Link>
                <Link to="/job-seekers" style={{ color: 'inherit', textDecoration: 'none', margin: '0 10px' }}>
                  Job Seekers
                </Link>
                <Link to="/employers" style={{ color: 'inherit', textDecoration: 'none', margin: '0 10px' }}>
                  Employers
                </Link>
              </Typography>
            </Box>
          </Box>
        </AppBar>
      </Toolbar>
    </React.Fragment>
  );
};

export default MainMenu;
