import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  return (
    <>
    <div className="main flex flex-col   m-0 p-0 justify-center items-center my-28 ">
        <Navbar />
        
        <div className="lg:w-2/3   text-left px-6 ">
<div className="contact-form">
            <ContactForm/>
        </div>
      <h2>Contact Us</h2>  

<p className="mb-5">You may contact us using the information below:</p>

<h5 className="text-secondary">Rawflex Calisthenics</h5>
<p>Contact No: +91 9110835613</p>
<p>E-Mail ID: support@rawflexcalisthenics.in</p>
<p>Address: RMV 2nd stage, Ashwath Nagar, bangalore, Karnataka, PIN: 560094.</p>

        </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
