import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
const MainMenu= () => {
  return (
    <React.Fragment>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'center', paddingY: 2}}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar alt="Logo" src='/' sx={{ marginRight: 1 }} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SearchIcon />
          <Typography sx={{ minWidth: 100 }} >Catergory</Typography>
          <Typography sx={{ minWidth: 100 }}>Community</Typography>
          <Typography sx={{ minWidth: 100 }} >Job Seekers</Typography>
          <Typography sx={{ minWidth: 100 }} >Employers</Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default MainMenu;
