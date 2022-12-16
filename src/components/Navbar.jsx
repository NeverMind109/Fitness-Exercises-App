import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
      <Stack direction='row' justifyContent='space-around' sx={{ gap: { sm: '122px', xs: '40px' }, pt: { sm: '32px', xs: '20px'}, justifyContent: 'none'}} px='20px'>
        <Link to='/'>
          <img src={Logo} style={{width: '48px', height: '48px', margin: { sm: '0 20px', xs: '0 10px' }}} alt='Logo' />
        </Link>
        <Stack direction='row' alignItems='flex-end' gap='40px' fontSize='24px'>
          <Link to='/Fitness-Exercises-App/' style={{ textDecoration: 'none', color: '#3a1212', borderBottom: '3px solid #ff2625' }}>Home</Link>
          <a href="#exercises" style={{ textDecoration: 'none', color: '#3a1212' }}>Exercises</a>
        </Stack>
      </Stack>
  )
}

export default Navbar