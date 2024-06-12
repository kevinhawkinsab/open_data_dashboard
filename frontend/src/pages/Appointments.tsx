import { ArrowBack, Edit, EditNotifications, Search } from '@mui/icons-material'
import { Box, Button, Checkbox, FormControlLabel, Grid, IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DateCalendar, DatePicker } from '@mui/x-date-pickers';
import { BiTrash } from 'react-icons/bi';
import { FaEdit } from 'react-icons/fa';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function createData(
  id: number,
  date: string,
  name: string,
  shipTo: string,
  paymentMethod: string,
  amount: number,
) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];



const Appointments = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-17'));
  return (
    <>
      <div className='flex justify-space my-2'>
        <div className='flex items-center '>
          <IconButton aria-label="email" sx={{ background: '#d8e4ff', borderRadius: '10px' }}>
            <ArrowBack />
          </IconButton>
          <Typography component="p" variant="h4" sx={{ fontWeight: '600' }}>
            Appoitment Page
          </Typography>
        </div>
        <div>
          <TextField id="outlined-basic" label="Search" variant="filled"
            InputProps={{
              endAdornment: (
                <IconButton>
                  <Search />
                </IconButton>
              ),
            }}
          />
        </div>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper className='dash-card' sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 160, borderRadius: 3 }}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Total appoitments
            </Typography>
            <Typography component="p" variant="h4">
              $3,024.00
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className='dash-card' sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 160, borderRadius: 3 }}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Upcoming appoitments
            </Typography>
            <Typography component="p" variant="h4">
              $3,024.00
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className='dash-card' sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 160, borderRadius: 3 }}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Completed appoitments
            </Typography>
            <Typography component="p" variant="h4">
              $3,024.00
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className='dash-card' sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 160, borderRadius: 3 }}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Canceled appoitments
            </Typography>
            <Typography component="p" variant="h4">
              $3,024.00
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <Paper sx={{ p: 1.5, borderRadius: 3 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                    <DemoItem>
                      <Typography component="h2" variant="h6" sx={{fontWeight: '600', padding: '0 1rem'}}>
                        Calendar
                      </Typography>
                      <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={9}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', borderRadius: 3 }}>
            <div className='flex justify-space mb-2'>
              <Typography component="h2" variant="h6" gutterBottom sx={{fontWeight: '600'}}>
                Recent Order
              </Typography>
              <IconButton aria-label="email" className='flex-1 items-center' onClick={handleClickOpen} sx={{ background: '#3366CC', color: '#fff', borderRadius: '10px' }}>
                <AddCircleIcon />
                <Typography component="p">
                  New Appoitment
                </Typography>
              </IconButton>
            </div>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Patient</TableCell>
                  <TableCell>Doctor</TableCell>
                  <TableCell>Consultorio</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Hour</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.shipTo}</TableCell>
                    <TableCell>{row.paymentMethod}</TableCell>
                    <TableCell>{row.paymentMethod}</TableCell>
                    <TableCell align="right">
                      <IconButton color='success' aria-label="edit" onClick={handleClickOpen}>
                        <FaEdit />
                      </IconButton>
                      <IconButton color='warning' aria-label="delete" onClick={handleClose}>
                        <BiTrash />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>

      <BootstrapDialog sx={{ p: 3 }} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Add Appoitment
        </DialogTitle>
        <IconButton aria-label="close" onClick={handleClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}>
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField autoComplete="given-name" name="Paciente" required fullWidth id="firstName" label="Paciente" variant="outlined" autoFocus />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id="lastName" label="Consultorio" name="lastName" autoComplete="family-name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id="lastName" label="Doctor" name="lastName" autoComplete="family-name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker sx={{ width: '100%' }} label="Date" />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['MobileTimePicker']}>
                    <DemoItem>
                      <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id="lastName" label="Phone" name="lastName" autoComplete="family-name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id="lastName" label="Payment" name="lastName" autoComplete="family-name" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField required fullWidth multiline maxRows={4} rows={4} label="Motivo" name="lastName" autoComplete="family-name" />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button fullWidth color='secondary' variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleClose}>Cancel</Button>
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleSubmit}>save</Button>
            </Grid>
          </Grid>
        </DialogActions>
      </BootstrapDialog>
    </>
  )
}

export default Appointments
