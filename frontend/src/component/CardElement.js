import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/material';

const CardElement = ({ jobTitle, description, category, location, id }) => {
    const theme = useTheme();
    return (
        <Card sx={{ minWidth: 275, mb: 3, mt: 3, backgroundColor: theme.palette.primary.main, color: theme.palette.common.white }}>
            <CardContent>
                <Typography sx={{ fontSize: 15, fontWeight: 500, color: theme.palette.common.white }} gutterBottom>
                    <IconButton><LocationOnIcon sx={{ fontSize: 18, color: theme.palette.common.white }} /></IconButton> {location}
                </Typography>
                <Typography variant="h5" component="div" sx={{ color: theme.palette.common.white }}>
                    {jobTitle}
                </Typography>
                <Typography sx={{ mb: 1.5, color: theme.palette.common.white }} variant="subtitle1">
                    {category}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.common.white }}>
                    Description: {description.split(" ").slice(0, 15).join(" ") + "..."}
                </Typography>
            </CardContent>
            <CardActions>
                <Button disableElevation variant='contained' size="small" startIcon={<AddIcon />}>
                    <Link style={{ textDecoration: "none", color: theme.palette.common.white, boxShadow: 0 }} to={`/job/${id}`}>
                        More Details
                    </Link>
                </Button>
            </CardActions>
        </Card>
    );
};

export default CardElement;
