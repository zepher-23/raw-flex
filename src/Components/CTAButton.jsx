import React from "react";
import { Link } from "react-router-dom";
const CTAButton = (props) => {
    const {message,url} = props 
  return (<>
  <div className="cta m-2">
   <Link to={url}> <button className="btn btn-primary bg-primary hover:scale-110 transition-transform  active:bg-secondary active:text-primary text-white p-2 m-2 px-6 rounded-xl font-medium text-lg shadow-md duration-200">{message}</button></Link>
  </div>
  </>);
};

export default CTAButton;
