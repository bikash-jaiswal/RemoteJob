import React from 'react';
import { Grid, Typography, Paper, Card, Box } from '@mui/material';

const CompanyFrontPage = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundSize: 'cover',
            }}
        >
            <Grid container item xs={10} md={6}
                sx={{
                    width: '100vh',
                    height: '100vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h3" textAlign={'center'}>Find your remote career here</Typography>
                <Typography variant="h6" textAlign={'left'}>
                    If you're an inventor, technologist, entrepreneur, or something in between and want to create things the world has never seen before,
                    find the career based on your skills or experience.
                </Typography>
            </Grid>

            {/* Second Grid for Image */}
            <Grid
                container
                item
                xs={12}
                sx={{
                    width: '100vh',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img
                    src="src\assets\work_from_home.jpg"
                    alt="Your Image"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
            </Grid>
        </Box>
    );
};

export default CompanyFrontPage;
