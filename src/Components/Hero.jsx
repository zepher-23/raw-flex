import React from "react";
import hero1 from '../assets/hero1.jpg';

const Hero = ({Form:Form}) => {
    
  return(<>
  <div className="hero relative w-screen overflow-scroll ">
  <div className="fixed inset-0  bg-center bg-no-repeat bg-cover opacity-40" style={{backgroundImage:`url(${hero1})`, backgroundSize:'100%',backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}></div>
  <div className="fixed inset-0 bg-gradient-to-r from-primary to-secondary opacity-60"></div>
  <div className="relative  h-full z-10">
    <Form />
  </div>
</div>
  </>);
};

export default Hero;
