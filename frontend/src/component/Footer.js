import { Box } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    const { palette } = useTheme();

    return (
        <Box
            sx={{
                height: '70px',
                backgroundColor: palette.primary.main, // Use teal color for the background
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: palette.common.white, // Set font color to white
                fontSize: '14px', // Adjust font size
                fontWeight: 500, // Adjust font weight
                boxShadow: '0px -2px 8px rgba(0, 0, 0, 0.1)' // Add a subtle box shadow
            }}
        >
            <Box component='span'>All rights reserved! 2023.</Box>
        </Box>
    );
};

export default Footer;
