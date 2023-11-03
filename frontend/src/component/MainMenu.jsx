import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Link } from '@mui/material';
Link
const MainMenu = () => {
  return (
    <Container fixed disableGutters>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'center', paddingY: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar alt="Logo" src='/' sx={{ marginRight: 1 }} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <Typography variant="body2" color="textPrimary" component="div">
            <Link href="/catergory" color="inherit" underline="none" sx={{ margin: '0 10px' }}>
              Catergory
            </Link>
            <Link href="/community" color="inherit" underline="none" sx={{ margin: '0 10px' }}>
              Community
            </Link>
            <Link href="/job-seekers" color="inherit" underline="none" sx={{ margin: '0 10px' }}>
              Job Seekers
            </Link>
            <Link href="/employers" color="inherit" underline="none" sx={{ margin: '0 10px' }}>
              Employers
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default MainMenu;
