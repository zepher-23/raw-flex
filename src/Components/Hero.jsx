import React from "react";
import hero from '../assets/hero.jpg';

const Hero = () => {
  return(<>
  <div className="hero relative w-screen h-screen">
  <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{backgroundImage:`url(${hero})`, backgroundSize:'120%'}}></div>
  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-60"></div>
  <div className="relative z-10">
    
  </div>
</div>
  </>);
};

export default Hero;
