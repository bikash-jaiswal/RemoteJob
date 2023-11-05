import React from 'react';
import { Grid, Typography, Paper, Card, Box } from '@mui/material';
import workFromHomeImage from '../../assets/work_from_home.jpg';

const CompanyFrontPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundSize: 'cover',
                padding: '2rem',
                
            }}
        >
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
                <Typography variant="h3" textAlign={'center'}>Find your remote career here</Typography>
                <Typography variant="h5" textAlign={'left'}>
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
                    src={workFromHomeImage} alt="Work From Home" 
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
            </Grid>
        </Box>
    );
};

export default CompanyFrontPage;
