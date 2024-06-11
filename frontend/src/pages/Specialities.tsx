import { Badge, Grid, IconButton, Paper, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { SpecialitiesModel } from '../models/specialities';
import { FaHeartbeat } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import BackHandIcon from '@mui/icons-material/BackHand';
import { FaTooth } from "react-icons/fa";
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { BsGenderFemale } from "react-icons/bs";
import { FaBone } from "react-icons/fa6";
import { GiMedicalDrip } from "react-icons/gi";
import { GiAnatomy } from "react-icons/gi";
import { GiMedicines } from "react-icons/gi";

const Specialities = () => {

  const specialitiesList: SpecialitiesModel = [
    {
      id: 1,
      name: 'Cardiology',
      doctors: 20,
      patients: 100,
      icon: <FaHeartbeat />,
      description: 'Cardiology is a branch of medicine that deals with the disorders of the heart as well as some parts of the circulatory system.'
    },
    {
      id: 2,
      name: 'Neurology',
      doctors: 30,
      patients: 200,
      icon: <FaBrain />,
      description: 'Neurology is a branch of medicine dealing with disorders of the nervous system.'
    },
    {
      id: 3,
      name: 'Dermatology',
      doctors: 40,
      patients: 300,
      icon: <BackHandIcon />,
      description: 'Dermatology is the branch of medicine dealing with the skin, nails, hair and its diseases.'
    },
    {
      id: 4,
      name: 'Dentistry',
      doctors: 50,
      patients: 400,
      icon: <FaTooth />,
      description: 'Dentistry is the branch of medicine that is involved in the study, diagnosis, prevention, and treatment of diseases, disorders and conditions of the oral cavity.'
    },
    {
      id: 5,
      name: 'Pyschology',
      doctors: 60,
      patients: 500,
      icon: <AddReactionIcon />,
      description: 'Psychology is the scientific study of the mind and behavior. Psychology is a multifaceted discipline and includes many sub-fields of study such areas as human development'
    },
    {
      id: 6,
      name: 'Gynecology',
      doctors: 70,
      patients: 600,
      icon: <BsGenderFemale />,
      description: 'Gynecology is the medical practice dealing with the health of thee.'
    },
    {
      id: 7,
      name: 'Orthopedics',
      doctors: 80,
      patients: 700,
      icon: <FaBone />,
      description: 'Orthopedics is the branch of medicine dealing with the correction of deformities of bones or muscles.'
    },
    {
      id: 8,
      name: 'Urology',
      doctors: 90,
      patients: 800,
      icon: <GiMedicalDrip />,
      description: 'Urology is the branch of medicine that focuses on surgical and medical diseases of'
    },
    {
      id: 9,
      name: 'Ophthalmology',
      doctors: 100,
      patients: 900,
      icon: <GiAnatomy />,
      description: 'Ophthalmology is the branch of medicine dealing with the anatomy, physiology and diseases of the eye.'
    },
    {
      id: 10,
      name: 'Psychiatry',
      doctors: 110,
      patients: 1000,
      icon: <GiMedicines />,
      description: 'Psychiatry is the branch of medicine focused on the diagnosis, treatment and prevention of mental, emotional and behavioral disorders.'
    }
  ];

  return (
    <Grid container spacing={3}>
      {specialitiesList.map((speciality) => (
        <Grid item xs={12} md={3} xl={2}>
          <Paper className='dash-card' sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 160, borderRadius: 3, alignItems: 'center' }}>
            <Typography sx={{ fontSize: 16, fontWeight: '600' }} gutterBottom>
              {speciality.name}
            </Typography>
            <i>
              {speciality.icon}
            </i>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {speciality.doctors} Doctors
            </Typography>
            {/* <Typography variant="body2">
                {speciality.description}
              </Typography> */}
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

export default Specialities
