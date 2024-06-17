import React, { useState, useEffect } from 'react';
import { Badge, Grid, IconButton, Paper, TextField, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { SpecialitiesModel } from '../models/specialities-type';
import { FaHeartbeat, FaBrain, FaTooth, FaBone } from "react-icons/fa";
import BackHandIcon from '@mui/icons-material/BackHand';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { BsGenderFemale } from "react-icons/bs";
import { GiMedicalDrip, GiAnatomy, GiMedicines } from "react-icons/gi";
import { ArrowBack, Search } from '@mui/icons-material';
import axios from 'axios';

const Specialities = () => {
  const [specialitiesList, setSpecialitiesList] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5009/api/Speciality');
        setSpecialitiesList(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='flex justify-space my-2'>
        <div className='flex items-center'>
          <IconButton aria-label="back" sx={{ background: '#d8e4ff', borderRadius: '10px' }}>
            <ArrowBack />
          </IconButton>
          <Typography component="p" variant="h4" sx={{ fontWeight: '600', marginLeft: '10px' }}>
            Specialities Page
          </Typography>
        </div>
        <div>

        </div>
      </div>
      <Grid container spacing={3}>
        {specialitiesList.map((item: any) => (
          <Grid item xs={12} md={3} xl={2}>
            <Paper key={item.id} className='dash-card' sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 160, borderRadius: 3, alignItems: 'center' }}>
              <Typography sx={{ fontSize: 16, fontWeight: '600' }} gutterBottom>
                {item.specialityName}
              </Typography>
              <i><GiMedicines /></i>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {item.specialityId} Doctors
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Specialities;