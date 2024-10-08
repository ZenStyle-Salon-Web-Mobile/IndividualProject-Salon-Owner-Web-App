import React from 'react';
import {
    Box,
    Button,
    Divider,
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    TextField
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {Link, useNavigate} from "react-router-dom";

const Login = ({onLogin}) => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleButtonClick = (e) => {
        e.preventDefault();
        // Assuming login validation is successful
        onLogin();
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', // Fullscreen height
                backgroundImage: 'url("src/assets/pngwing.com.png")', // Background image
                backgroundSize: 'cover', // Cover the entire area
                backgroundPosition: 'center', // Center the image
                backgroundRepeat: 'no-repeat', // Prevent repetition
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    border: '1px solid',
                    borderColor: 'grey.400',
                    paddingY: 15, // Padding inside the box
                    paddingX: 6, // Padding inside the box
                    alignItems: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent white background
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Subtle shadow effect
                }}
            >
                <h1>ZenStyle Salon Administrator</h1>
                <TextField
                    sx={{width: '35ch'}}
                    id="standard-basic"
                    label="E-mail"
                    variant="standard"/>

                <FormControl sx={{width: '35ch'}} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                    <Button onClick={handleButtonClick} sx={{backgroundColor: '#212121', width: '35ch', textTransform: 'none', }} variant="contained">Log In</Button>

                <Divider sx={{ width: '100%', marginY: 2 }} />
                <Link to={'/register'}>
                    <Button sx={{backgroundColor: '#009688', width: '25ch', textTransform: 'none', }} variant="contained">Create New Account</Button>
                </Link>

                    <Link to={'/forgot-password'}>
                        <h6>Forgot Password?</h6>
                    </Link>

            </Box>
        </Box>
    );
};

export default Login;
