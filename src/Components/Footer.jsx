import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    {window.innerWidth > 600 ? <div className="footer z-10  w-screen text-sm p-1 px-20 bg-primary text-white flex flex-row fixed bottom-0 items-center">
        <Link to="/terms" className="px-5 hover:text-secondary hover:underline"><p>Terms & Conditions</p></Link>
        <Link to="/Contact" className="px-5 hover:text-secondary hover:underline">Contact</Link>
        <Link to="/Refund" className="px-5 hover:text-secondary hover:underline">Refund & Cancellations</Link>

    </div> : <></>}
    
    </>
  )
  
};

export default Footer;
