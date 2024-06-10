import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  )
}

export default Home
