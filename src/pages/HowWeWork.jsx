import React from "react";
import img1 from './Images/HowWeWork.png';

const people = [
    {
      id:1,
      title: "discuss"
    },
    {
      id:2,
      title: "creative concept"
    },{
      id:3,
      title: "production"
    },{
      id:4,
      title: "happy client"
    }
  ]

function HowWeWork(){
    return(
        <div className="bg-[#000037] pt-12 my-10">
            <div className="grid grid-cols-2">
            <img src={img1}></img>
            <div className="grid lg:grid-rows-5 sm:grid-rows-4">
            <div className="capitalize font-semibold lg:text-4xl lg:pt-4 sm:text-2xl sm:pt-0 text-[#FFFFFF]">
                how we work
            </div>
            {people.map((props) => (
                <div className="flex">
                <div className="text-[#9299B6] border-2 w-7 h-7 border-[#E60D56] rounded-full text-center">{props.id}
                </div>
                <div className="text-[#D5E2E8] capitalize font-medium lg:text-2xl sm:text-lg px-5 leading-9 tracking-wide">{[props.title]}</div></div>
                ))}
                </div>
            </div>
        </div>
    )
}
export default HowWeWork;