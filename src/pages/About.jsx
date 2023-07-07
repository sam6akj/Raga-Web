import React from "react";
import img1 from "./Images/cheerful-creative-team-working-in-office-2021-09-24-04-05-09-utc.png";
import { Link } from "react-router-dom";

function AboutUs(){
    return(
        <div>
            <div className="grid grid-cols-2 gap-2">
            <div class="p-11">
                <div class="flow-root">
                    <div class="lg:mt-12 lg:mx-16 text-4xl font-bold whitespace-nowrap tracking-wide leading-[168.4%]">About Us</div>
                </div>
                <div class="flow-root">
                    <div class="my-2 lg:mx-16 text-base text-[#272727] leading-[168.4%] lg:w-3/4 sm:w-auto text-justify tracking-wide">It is important to be able to identify, map and achieve success in the business world. We, at RaGa, are committed to explore different spectrums and experiment, in order to find the best paths to success for every new chapter. We are a creative advertising agency and a brand consulting firm in Chandigarh.</div>
                </div>
                <Link to="/About">
                <button className="bg-[#EF1B62] lg:mx-16 my-6 font-bold text-2xl px-10 py-3 text-[#FFFF]">About Us</button>
                </Link>
            </div>
            <div><img className=" lg:my-6 sm:my-32 sm:pr-10 " src={img1}></img></div>
            </div>
        </div>
    )
}

export default AboutUs;