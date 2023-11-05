import React from 'react';
import { Card, CardContent, Typography, Stack } from '@mui/material';

const JobList = ({ jobPlatforms }) => {
    return (
        <div>
            <Stack spacing={3} padding={3}>
            <h1>Search Remote jobs on below platforms</h1>
                {jobPlatforms.map((platform, index) => (
                    <Card key={index}>
                        <CardContent>
                            <Typography variant="h4" component="a" href={platform.url} target="_blank" rel="noopener noreferrer" color="textPrimary" underline="none">
                                {platform.name}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {platform.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </div>
    );
};

export default JobList;