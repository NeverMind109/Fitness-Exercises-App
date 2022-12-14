import React from 'react';
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, bodyPart, setBodyPart }) => (
    <Stack className='bodyPart-card' 
        type='button' 
        alignItems='center' 
        justifyContent='center' 
        sx={{ 
            borderTop: bodyPart === item ? '4px solid #ff2625' : '', 
            backgroundColor: '#fff', 
            borderBottomLeftRadius: '20px', 
            width: '270px', 
            height: '280px', 
            cursor: 'pointer', 
            gap: '47px' 
        }}
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
        }}
        >
        <img src={Icon} style={{ width: '40px', height: '40px' }} alt='dumbbell' />
        <Typography fontSize='24px' fontWeight='bold' color='#3a1212' textTransform='capitalize'>{item}</Typography>
    </Stack>
)


export default BodyPart