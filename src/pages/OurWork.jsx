import React from "react";
import img1 from "./Images/OurWork1.png";
import img2 from "./Images/OurWork2.png";
import img3 from "./Images/OurWork3.png";
import img4 from "./Images/OurWork4.png";
import img5 from "./Images/OurWork5.png";
import img6 from "./Images/OurWork6.png";
import img7 from "./Images/OurWork7.png";
import { Link } from "react-router-dom";


function OurWork(){
    return(
        <div >
            <div className="capitalize text-center font-semibold text-4xl text-[#000037] my-12">our featured works
                </div>
            <div className="flex lg:gap-6  lg:w-full lg:my-3 lg:mx-0 lg:justify-center md:w-1/2 md:gap-2 md:justify-normal md:mx-2 md:my-2 sm:w-1/2 sm:gap-2 sm:mx-2 sm:my-2">
                <img src={img1}></img>
                <img src={img2}></img>
            </div>
            <div className="flex lg:gap-6 lg:mx-0 lg:justify-center lg:my-6 lg:w-full md:gap-2 md:w-1/3 md:my-2 md:mx-2 md:justify-normal sm:w-1/3 sm:gap-2 sm:my-2 sm:mx-2">
                <img src={img3}></img>
                <img src={img4}></img>
                <img src={img5}></img>
            </div>
            <div className="flex lg:gap-6 lg:w-full lg:my-6 lg:mx-0 lg:justify-center md:w-1/2 md:gap-2 md:justify-normal md:mx-2 md:my-2 sm:w-1/2 sm:gap-2 sm:mx-2 sm:my-2">
                <img src={img6}></img>
                <img src={img7}></img>
            </div>
            <Link to="/Portfolio">
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <div className=" bg-[#EF1B62] px-6 py-4 my-5 text-2xl font-bold text-white capitalize shadow-sm">
               view portfolio 
              </div>       
              </div>
              </Link>
              </div>
    )
}
export default OurWork;
