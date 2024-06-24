import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from 'axios';
import Switch from '@mui/material/Switch';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import Swal from 'sweetalert2';

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

const defaultTheme = createTheme();

const Register = () => {
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const patientData = {
      identification: data.get('identification'),
      email: data.get('email'),
      username: data.get('username'),
      password: data.get('password'),
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      birthday: data.get('birthday'),
      gender: gender,
      phone: data.get('phone'),
      status: data.get('status') == 'on' ? 'Active' : 'Inactive',
    };
  
    console.log(patientData);
    try {
      const response = await axios.post('http://localhost:5009/api/Patient/', patientData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      Swal.fire({
        title: "Success!",
        text: response.data.message,
        icon: "success"
      }).then(() => {
        navigate('/auth/login');
      });
    } catch (err: any) {
      console.error(err);
      Swal.fire({
        title: "Error!",
        text: err.response.data,
        icon: "error"
      });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm" sx={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <CssBaseline />
        <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column',alignItems: 'center'}}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField autoComplete="given-name" name="identification" required fullWidth id="identification" label="Identification" autoFocus/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id="username" label="Username" name="username" autoComplete="family-name"/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField autoComplete="given-name" name="firstName" required fullWidth id="firstName" label="First Name" autoFocus/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name"/>
              </Grid>
              <Grid item xs={12} sm={6} sx={{marginTop: '8px'}}>
                <TextField required fullWidth id="phone" label="Phone" name="phone" autoComplete="family-name"/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker name='birthday' format='YYYY/MM/DD' label="Birthday" />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email"/>
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
              </Grid>
              <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={gender} label="Gender" onChange={handleChange}>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              Status <Switch name='status' defaultChecked />
            </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/auth/login">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  )
}

export default Register
