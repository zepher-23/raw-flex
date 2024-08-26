import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    {window.innerWidth > 600 ? <div className="footer z-10  w-screen text-sm p-1 px-20 bg-primary text-white flex flex-row fixed bottom-0 items-center">
        <Link to="/terms&conditions" className="px-5 hover:text-secondary hover:underline"><p>Terms & Conditions</p></Link>
        <Link to="/Refund" className="px-5 hover:text-secondary hover:underline">Refund & Cancellations</Link>
        <Link to="/privacy-policy" className="px-5 hover:text-secondary hover:underline"> Privacy Policy</Link>
        <Link to="/Contact" className="px-5 hover:text-secondary hover:underline">Contact</Link>


    </div> : <></>}
    
    </>
  )
  
};

export default Footer;
