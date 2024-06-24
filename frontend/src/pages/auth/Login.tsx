import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import Swal from 'sweetalert2';
import axios from 'axios';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Login = () => {
  const navigate = useNavigate();
  //https://images.unsplash.com/photo-1583160384414-494f8667b387?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      userName: data.get('username'),
      password: data.get('password')
    }

    console.log(user);

    try {
      const response = await axios.post('http://localhost:5009/api/Login/', user, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data.message);
      navigate('/home');
    } catch (err: any) {
      Swal.fire({
        title: "Error!",
        text: err.response.data,
        icon: "error"
      });
      console.error(err);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm" sx={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <CssBaseline />
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5rem 3rem'}}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth id="username" label="Username" name="username" autoComplete="username" autoFocus/>
            <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"/>
            <Grid item xs>
                <Link to="auth/forgot-password" >
                  Forgot password?
                </Link>
              </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/auth/register">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}

export default Login
