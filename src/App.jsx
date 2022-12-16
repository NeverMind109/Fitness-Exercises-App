import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material'

import "./App.css";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box width='400px' sx={{ width: { xl: '1480px' }}} m="auto">
      <Navbar />
      <Routes>
        <Route path='/Fitness-Exercises-App/' element ={<Home />}/>
        <Route path='/Fitness-Exercises-App/exercise/:id' element ={<ExerciseDetail />}/>
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
