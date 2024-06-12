import React from 'react'
import { DoctorModel } from '../models/doctors-type';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, IconButton, TextField, Typography } from '@mui/material';
import { ArrowBack, Expand, ExpandMore, FavoriteOutlined, Search, Settings, Share, Star, StarOutline } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { MdOutlineMoreHoriz } from 'react-icons/md';

const Doctors = () => {
  const doctorsList = [
    {
        id: 1,
        name: 'Dr. John Doe',
        speciality: 'Cardiology',
        experience: 10,
        rating: 4.5,
        reviews: 100,
        patients: 1000,
        avatar: 'https://mrcode.az/media/ready-to-start/docman/assets/img/doctors/doctor-thumb-02.jpg',
        about: 'Dr. John Doe is a Cardiologist with 10 years of experience.',
        phone: '123-456-7890',
        email: 'dr.johndoe@example.com',
        available: true
    },
    {
        id: 2,
        name: 'Dr. Jane Doe',
        speciality: 'Neurology',
        experience: 20,
        rating: 4.0,
        reviews: 200,
        patients: 2000,
        avatar: 'https://www.shutterstock.com/image-photo/head-shot-woman-wearing-white-600nw-1529466836.jpg',
        about: 'Dr. Jane Doe is a Neurologist with 20 years of experience.',
        phone: '123-456-7890',
        email: 'dr.janedoe@example.com',
        available: false
    },
    {
        id: 3,
        name: 'Dr. Michael Smith',
        speciality: 'Dermatology',
        experience: 30,
        rating: 3.5,
        reviews: 300,
        patients: 3000,
        avatar: 'https://img.freepik.com/free-photo/bearded-doctor-glasses_23-2147896187.jpg',
        about: 'Dr. Michael Smith is a Dermatologist with 30 years of experience.',
        phone: '123-456-7890',
        email: '',
        available: true
    },
    {
        id: 4,
        name: 'Dr. Sarah Johnson',
        speciality: 'Dentistry',
        experience: 40,
        rating: 3.0,
        reviews: 400,
        patients: 4000,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnKbL7rVd9spxS8Rcyo4Se4aZxX2HYqnWn62oE1PqusTQsLswYudsil1M_ysqn_7bTceA&usqp=CAU',
        about: 'Dr. Sarah Johnson is a Dentist with 40 years of experience.',
        phone: '123-456-7890',
        email: '',
        available: true
    },
    {
        id: 5,
        name: 'Dr. James Brown',
        speciality: 'Pyschology',
        experience: 50,
        rating: 2.5,
        reviews: 500,
        patients: 5000,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScrmetAVYjFcmINeRwbFew8FN4Cv6hFU-1oRg3MKCUnP4qSJQYX57WoUI3pqY8TyVPwW4&usqp=CAU',
        about: 'Dr. James Brown is a Psychologist with 50 years of experience.',
        phone: '123-456-7890',
        email: '',
        available: false
    },
    {
        id: 6,
        name: 'Dr. Emily Davis',
        speciality: 'Gynecology',
        experience: 60,
        rating: 2.0,
        reviews: 600,
        patients: 6000,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzsA9HXuz618i7DKgVGrZIJEDQCC3SqCM7KT9cjTIjGkeGDvTJQliTDF6h68ypQZHcPQs&usqp=CAU',
        about: 'Dr. Emily Davis is a Gynecologist with 60 years of experience.',
        phone: '123-456-7890',
        email: '',
        available: true
    },
    {
        id: 7,
        name: 'Dr. Robert Wilson',
        speciality: 'Orthopedics',
        experience: 70,
        rating: 1.5,
        reviews: 700,
        patients: 7000,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV7S4f1Be7-EjF4Vqd4Lu3tIOysQRgygJMEw1A4J71QylFCh_dKTLWr7THYgk8dE4V-l8&usqp=CAU',
        about: 'Dr. Robert Wilson is an Orthopedist with 70 years of experience.',
        phone: '123-456-7890',
        email: '',
        available: true
    },
    {
        id: 8,
        name: 'Dr. Maria Martinez',
        speciality: 'Cardiology',
        experience: 80,
        rating: 1.0,
        reviews: 800,
        patients: 8000,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8l4gBXORhs_iN_HnnF3-laN3-mrHzZffODAiThkcD94CO0DM_QOuF6y_mE_BR7BTSt-I&usqp=CAU',
        about: 'Dr. Maria Martinez is a Cardiologist with 80 years of experience.',
        phone: '123-456-7890',
        email: '',
        available: false
    },
    {
        id: 9,
        name: 'Dr. William Anderson',
        speciality: 'Urology',
        experience: 90,
        rating: 0.5,
        reviews: 900,
        patients: 9000,
        avatar: 'https://www.shutterstock.com/image-photo/mature-doctor-man-arms-crossed-260nw-2346360041.jpg',
        about: 'Dr. William Anderson is a Urologist with 90 years of experience.',
        phone: '123-456-7890',
        email: '',
        available: true
    },
    {
        id: 10,
        name: 'Dr. Olivia Thomas',
        speciality: 'Ophthalmology',
        experience: 100,
        rating: 0.0,
        reviews: 1000,
        patients: 10000,
        avatar: 'data:image/jpeg;base64,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',
        about: 'Dr. Olivia Thomas is an Ophthalmologist with 100 years of experience.',
        phone: '123-456-7890',
        email: '',
        available: true
    },
    {
        id: 11,
        name: 'Dr. Daniel White',
        speciality: 'Psychiatry',
        experience: 110,
        rating: 5.0,
        reviews: 1100,
        patients: 11000,
        avatar: 'https://media.istockphoto.com/id/1289461280/photo/healthcare-worker-portrait.jpg?s=612x612&w=0&k=20&c=rJDnJzrLxV6vpK8SFaau-A3_hMbccoEBQf8lFCfc9ZE=',
        about: 'Dr. Daniel White is a Psychiatrist with 110 years of experience.',
        phone: '123-456-7890',
        email: '',
        available: false
    },
    {
        id: 12,
        name: 'Dr. Emma Garcia',
        speciality: 'Cardiology',
        experience: 120,
        rating: 4.5,
        reviews: 1200,
        patients: 12000,
        avatar: 'https://www.shutterstock.com/shutterstock/photos/129391076/display_1500/stock-photo-image-of-an-enthusiastic-intern-looking-at-camera-129391076.jpg',
        about: 'Dr. Emma Garcia is a Cardiologist with 120 years of experience.',
        phone: '123-456-7890',
        email: '',
        available: true
    },
    {
        id: 13,
        name: 'Dr. Joseph Rodriguez',
        speciality: 'Neurology',
        experience: 130,
        rating: 4.0,
        reviews: 1300,
        patients: 13000,
        avatar: 'https://img.freepik.com/premium-photo/professional-doctor-action_1001955-408.jpg',
        about: 'Dr. Joseph Rodriguez is a Neurologist with 130 years of experience.',
        phone: '123-456-7890',
        email: '',
        available: true
    },
    {
        id: 14,
        name: 'Dr. Mia Hernandez',
        speciality: 'Dermatology',
        experience: 140,
        rating: 3.5,
        reviews: 1400,
        patients: 14000,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShuhkCJMnI-EbMoakmnncPA4NVJ8E9_aYtsRvrka-LjMpwu6eaqR20eqUgsZi3HEJhRkU&usqp=CAU',
        about: 'Dr. Mia Hernandez is a Dermatologist with 140 years of experience.',
        phone: '123-456-7890',
        email: '',
        available: false
    },
    {
        id: 15,
        name: 'Dr. Noah Lopez',
        speciality: 'Dentistry',
        experience: 150,
        rating: 3.0,
        reviews: 1500,
        patients: 15000,
        avatar: 'data:image/jpeg;base64,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',
        about: 'Dr. Noah Lopez is a Dentist with 150 years of experience.',
        phone: '123-456-7890',
        email: '',
        available: true
    },
    {
        id: 16,
        name: 'Dr. Sophia King',
        speciality: 'Pyschology',
        experience: 160,
        rating: 2.5,
        reviews: 1600,
        patients: 16000,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkXXuVJ3RlZEH866Oa_jFo-Q4hISBBiv4ACaZV9iKdNhZhvMGS3JqAqd40KHYozkNGGAI&usqp=CAU',
        about: 'Dr. Sophia King is a Psychologist with 160 years of experience.',
        phone: '123-456-7890',
        email: '',
        available: true
    },
    {
        id: 17,
        name: 'Dr. Ethan Lee',
        speciality: 'Gynecology',
        experience: 170,
        rating: 2.0,
        reviews: 1700,
        patients: 17000,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCeu9MP_NfmsWaWkdW2-atIQ-awKFVPaWwLA&s',
        about: 'Dr. Ethan Lee is a Gynecologist with 170 years of experience.',
        phone: '123-456-7890',
        email: '',
        available: false
    }
];


  return (
    <>
      <div className='flex justify-space my-2'>
        <div className='flex items-center '>
          <IconButton aria-label="email" sx={{ background: '#d8e4ff', borderRadius: '10px' }}>
            <ArrowBack />
          </IconButton>
          <Typography component="p" variant="h4" sx={{ fontWeight: '600' }}>
            Doctors Page
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
      {doctorsList.map((doctor) => (
        <Grid item xs={12} md={3} xl={2.4}>
          <Card sx={{ maxWidth: 345, borderRadius: 3 }}>
            <CardHeader
              avatar={
                <CardMedia sx={{ borderRadius: 8, width: 60, height: 60 }} component="img" image={doctor.avatar} alt="Paella dish" />
              }
              action={
                <IconButton aria-label="settings">
                  <MdOutlineMoreHoriz />
                </IconButton>
              }
            />
            <CardContent>
              <Typography component="h2" variant="h6" sx={{ fontWeight: '600', fontSize: '18px' }} >
                {doctor.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontWeight: '600'}}>
                {doctor.speciality}
              </Typography>
              <div className='card-contact'>
                <Typography variant="body2">
                  Contact
                </Typography>
                <div>
                  <IconButton aria-label="phone">
                    <PhoneIcon />
                  </IconButton>
                  <IconButton aria-label="email">
                    <EmailIcon />
                  </IconButton>
                </div>
              </div>
              <Divider sx={{ my: 1 }} />
            </CardContent>
            <CardActions sx={{padding: '0 0 10px 10px'}} disableSpacing>
              <Star style={{color: 'orange'}} /><Star style={{color: 'orange'}} /><Star style={{color: 'orange'}} />
              <StarOutline /><StarOutline /> <Typography variant="body2" color="text.secondary">4.6 ({doctor.reviews} reviews)</Typography>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
    </>
  )
}

export default Doctors
