import React from "react";
import Navbar from '../Components/Navbar';
import Hero from "../Components/Hero";
import Form from "../Components/Form";


const Calc = () => {
  return(

    <>
    <div className="main flex flex-col w-screen h-screen m-0 p-0  ">
        <Navbar />
        <Hero Form={Form} />
        
    </div>
    </>
  );
};

export default Calc;
