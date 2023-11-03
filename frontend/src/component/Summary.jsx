import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

export default function DiscriprionContainer() {
  return (
      <Container fixed disableGutters>
        <Box sx={{ width: '100%', height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))`, backgroundSize: 'cover', }}>
            <Stack spacing={2}>
                <Typography variant="h3"> Search for remote jobs start working from anywhere </Typography>
                <Typography variant="h4">Showcase your expertise from you freelance projects.</Typography>
                <Typography variant="h6">Learn new skills every day, tailored for remote jobs. </Typography>
            </Stack>
        </Box>
      </Container>
  );
}