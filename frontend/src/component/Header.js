import { Box, styled } from '@mui/material';
import React from 'react';
import headerImage from '../images/jobbg.png';
import SearchInputEl from './SearchInputEl';

const Header = () => {

    const StyleHeader = styled(Box)(({ theme }) => (
        {
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 400,
            backgroundImage: `url(${headerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: theme.palette.secondary.main,
            position: 'relative',
            overflow: 'hidden',
            padding: theme.spacing(4),
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }
        }
    ));

    return (
        <>
            <StyleHeader>
                <SearchInputEl />
            </StyleHeader>
        </>
    );
}

export default Header;
