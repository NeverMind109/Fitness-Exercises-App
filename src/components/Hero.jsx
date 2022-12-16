import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

import HeroImage from '../assets/images/hero-img.png'

const Hero = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px' },
      ml: { sm: '50px'}
    }} position='relative' p='20px' >
      <Typography fontSize='26px' fontWeight='600' color='#ff2625' mb='30px'>
        Fitness Club
      </Typography>
      <Typography sx={{ fontSize: { lg: '44px', xs: '40px' }}} fontWeight={700} mb='23px'>
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={4}>
        Check out the most effective exercises
      </Typography>
      <Stack>
        <a href="#exercises" style={{ 
          fontSize: '22px', 
          textTransform: 'none', 
          color: 'white', 
          textAlign: 'center', 
          textDecoration: 'none', 
          width: '200px', 
          background: '#FF2625', 
          padding: '14px', 
          borderRadius: '4px',
          marginTop: '45px' }}>
            Explore Exercises
          </a>
      </Stack>
      <Typography fontSize='200px' fontWeight={600} color='#ff2625' sx={{ opacity: 0.1, display: { lg: 'block', sx: 'none' }}}>Exercise</Typography>
      <img className='hero-banner-img' src={HeroImage} alt='' />
    </Box>
  )
}

export default Hero