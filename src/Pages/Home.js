import React from 'react';
import About from '../Components/About Section/About';
import Grid from '../Components/Grid Section/Grid';
import Navbar from '../Components/Navbar/navbar';
import Price from '../Components/Price Section/Price';
import Hero from '../HeroSection/Hero';
import Info from './Info';

const Home = () => {
    return (
        <> 
        <div className="hero min-h-screen" style={{backgroundImage:"URL('/Images/home2.jpg')"}}  >
          <Navbar /> 
          <Hero/>
          </div> 
          <About />
          <Info />
          <Grid/>
          <Price/>
        </>
    )
}

export default Home;
