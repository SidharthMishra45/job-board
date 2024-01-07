import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

const UserInfoDashboard = () => {
    const { user } = useSelector(state => state.userProfile);
    const { palette } = useTheme();

    // Define your custom teal color
    const customTealColor = '#008080';

    const customTealTheme = {
        primary: customTealColor,
        secondary: customTealColor,
        text: palette.text.primary,
    };

    return (
        <Box sx={{ maxWidth: '50%', margin: 'auto', pt: 10 }}>
            <Card sx={{ minWidth: 275, bgcolor: customTealTheme.secondary, color: customTealTheme.text, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} color={customTealTheme.text} gutterBottom>
                        Personal Info
                    </Typography>
                    <hr style={{ marginBottom: '20px', borderColor: customTealTheme.text }} />
                    <Typography variant="h6" component="div" sx={{ color: customTealTheme.text, marginBottom: '10px' }} >
                        First Name: {user && user.firstName}
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ color: customTealTheme.text, marginBottom: '10px' }} >
                        Last Name: {user && user.lastName}
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ color: customTealTheme.text, marginBottom: '10px' }} >
                        E-mail: {user && user.email}
                    </Typography>
                    <Typography sx={{ mb: 1.5, color: 'grey', pt: 2 }} color={customTealTheme.text}>
                        Status: {user && user.role === 0 ? 'Regular User' : 'Admin'}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default UserInfoDashboard;
