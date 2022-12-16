import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
      <Typography variant='h3' fontWeight={700} color="#000" mb="33px" sx={{ml: '20px'}}>Exercises that target the same muscle group</Typography>
      <Stack direction='row' sx={{ position: 'relative', p: 2 }}>
        {targetMuscleExercises.length 
          ? <HorizontalScrollbar data={targetMuscleExercises} />
          : <Loader />
        }
      </Stack>

      <Typography variant='h3' fontWeight={700} color="#000" mb="33px" sx={{ml: '20px'}}>Exercises that use the same equipment</Typography>
      <Stack direction='row' sx={{ position: 'relative', p: 2 }}>
        {equipmentExercises.length 
          ? <HorizontalScrollbar data={equipmentExercises} />
          : <Loader />
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercises