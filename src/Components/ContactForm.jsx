import React from "react";

const ContactForm = () => {
  return (
    <>
    <div className="contact-form">
        <h2>Get in Touch</h2>
        <form action="" method="POST" className="text-center">
            <div className="form-group lg:max-w-md w-full flex flex-col items-start my-2 ">
                <label for="name" className="m-2">Name:</label>
                <input type="text" name="name" className="mx-1 border-b-2 bg-secondary bg-opacity-5 shadow-lg focus:outline-none outline-none w-full h-10 rounded-md  p-2 " />
                <label for="email" className="m-2">Email:</label>
                <input type="email" name="email" className="mx-1 w-full h-10 rounded-md border-b-2 bg-secondary bg-opacity-5 shadow-lg focus:outline-none outline-none" />
                <label htmlFor="desc" className="m-2"> Tell us what you need:</label>
                <textarea name="desc" id="desc" className="rounded-md h-32 w-full mx-1 border-b-2  shadow-xl bg-secondary bg-opacity-5 focus:outline-none outline-none"></textarea>
            
<button type="submit" className="bg-secondary px-10 py-2 my-4">Send</button>

            </div>
            
        </form>
    </div>
    </>
  );
};

export default ContactForm;
