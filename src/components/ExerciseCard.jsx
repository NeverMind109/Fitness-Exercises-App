import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({ exercise }) =>  (
  <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
    <Stack direction='row'>
      <Button sx={{ fontSize: '14px', textTransform: 'capitalize', color: '#fff', background: '#ffa9a9', borderRadius: '20px', ml: '21px', }}>{exercise.bodyPart}</Button>
      <Button sx={{ fontSize: '14px', textTransform: 'capitalize', color: '#fff', background: '#fcc757', borderRadius: '20px', ml: '21px', }}>{exercise.target}</Button>
    </Stack>
    <Typography fontSize='22px' fontWeight='bold' textTransform='capitalize' color='#000' pb='10px' mt='11px' ml='21px'>{exercise.name}</Typography>
  </Link>
)

export default ExerciseCard