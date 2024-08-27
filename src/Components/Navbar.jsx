import React, {useState,useEffect} from "react";
import '../App.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [option, setOption] = useState(true);
const [width,setWidth] = useState(window.innerWidth)
const [showOption, setShowOption] = useState(false)

    

    useEffect(() => {
    

    if(width>768){
        setOption(false);

    }else{
        setOption(true);
    }

     window.addEventListener('resize', ()=>{setWidth(window.innerWidth)});

    // Initial device type setting
    setWidth(window.innerWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize',  ()=>{setWidth(window.innerWidth)});
    };
      
    }, [width]);


    const showOptions =()=>{

        
        if(showOption === true)
        {
            setShowOption(false)
            console.log(showOption)
        }
        else
        {
            setShowOption(true)
            console.log(showOption)
        }

    }
    

  return (
    <>
    <div className="navbar fixed top-0 z-50 flex flex-row w-full h-26 lg:h-24 bg-white">

    <div className="logo w-full my-5 lg:my-0 lg:w-1/3 flex justify-center items-center text-cyan-400 ">
  <Link to="/" >  <h1 className="text-center text-secondary font-bold ">RAWFLEX</h1></Link>

    </div>

    {option? <div className="optionBar w-1/6 flex justify-center items-center mx-0 font-medium text-black text-lg cursor-pointer">
     <i className="fi fi-rr-menu-burger " onClick={()=>{showOptions()}}></i>
     </div>:
    <div className="options lg:w-2/3 flex-wrap w-screen flex justify-center lg:justify-end items-center text-cyan-700 font-normal mx-0 lg:mx-24">
  
    < ul className="flex flex-row justify-right items-center" >
   
<li className="lg:mx-4 mx-2 text-lg hover:text-blue-500 hover:scale-110 transition-transform duration-100 cursor-pointer">
  <a href="/calculator">Calculator</a>
</li>
<li className="lg:mx-4 mx-2 text-lg hover:text-blue-500 hover:scale-110 transition-transform duration-100 cursor-pointer">
  <a href="/programs">Programs</a>
</li>
<li className="lg:mx-4 mx-2 text-lg hover:text-blue-500 hover:scale-110 transition-transform duration-100 cursor-pointer">
  <a href="/about">About Us</a>
</li>
<li className="lg:mx-4 mx-2 text-lg hover:text-blue-500 hover:scale-110 transition-transform duration-100 cursor-pointer">
  <a href="/contact">Contact</a>
</li>



        
    </ul>

   

    </div>
}
</div>
{showOption ? <div className="mobileOption  w-screen bg-white z-50 flex mt-20 fixed top-0 flex-col text-primary font-medium">
    <ul>
        <li>
            <Link to="/calculator">Calculator</Link>
        </li>
        <hr className="mx-4 m-2" />
        <li>
            <Link to="/programs">Programs</Link>
        </li>
        <hr className="mx-4 m-2"/>
        <li className="m-2">
            <Link to="/contact">Contact</Link>
        </li>
        <hr className="mx-4 m-2"/>
        <li className="m-2">
            <Link to="/about">About Us</Link>
        </li>
        <hr className="mx-4 m-2"/>
        <li className="m-2">
            <Link to="/terms&conditions">Terms & Condition</Link>
        </li>
        <hr className="mx-4 m-2"/>
        <li className="m-2">
            <Link to="/privacy-policy">Terms & Condition</Link>
        </li>
        <hr className="mx-4 m-2"/>
        <li className="m-2">
            <Link to="/refund">Refund & Cancellation</Link>
        </li>
    </ul>
</div>:<></>}
    </>
  );
};

export default Navbar;
