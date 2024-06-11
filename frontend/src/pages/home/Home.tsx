import { Grid, Paper, Typography } from '@mui/material';
import Chart from '../../components/Chart';
import Deposits from '../../components/Deposit';
import Orders from '../../components/Orders';
import './Home.css';


const Home = () => {

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper className='dash-card' sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 160, borderRadius: 3 }}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
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
              Word of the Day
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
              Word of the Day
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
              Word of the Day
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
        {/* Chart */}
        <Grid item xs={12} md={8} lg={8}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240, borderRadius: 3 }}>
            <Chart />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240, borderRadius: 3 }}>
            <Deposits />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', borderRadius: 3 }}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Home
