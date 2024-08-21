import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero.jsx";
import hero1 from '../assets/hero1.jpg';
import CTAButton from "../Components/CTAButton.jsx";



const Home = () => {
  return (
    <>
    <div className="home flex flex-col w-screen h-screen m-0 p-0 ">
<Navbar/>

{/* <Hero /> */}

<div className="hero relative flex justify-center items-start lg:items-center w-screen h-screen lg:py-0 py-20">
  <div className="absolute inset-0  bg-center bg-no-repeat bg-cover opacity-40" style={{backgroundImage:`url(${hero1})`, backgroundSize:'100%',backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}></div>
  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-60"></div>
  <div className="relative z-10 w-full lg:px-0 px-6 lg:w-2/3 ">
    <h2 className="text-secondary py-3 lg:text-5xl">RawFlex Calisthenics: Achieve Peak Fitness Naturally</h2>
    <p>
        Welcome to RawFlex Calisthenics, your ultimate destination for achieving peak fitness naturally.


    </p>
    <div className="buttons flex lg:flex-row flex-col justify-center items-center w-full">
        <CTAButton message="Find out What to Eat!" url="calculator" />
    </div>

  </div>
</div>

    </div>
    </>
  )
};

export default Home;
