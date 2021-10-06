import React from 'react';
import About from '../Components/About Section/About';
import Grid from '../Components/Grid Section/Grid';
import Navbar from '../Components/Navbar/navbar';
import Hero from '../HeroSection/Hero';
import Info from './Info';

const Home = () => {
    return (
        <> 
        <div className="hero min-h-screen">
          <Navbar /> 
          <Hero/>
          </div> 
          <About />
          <Info />
          <Grid/>
        </>
    )
}

export default Home;
