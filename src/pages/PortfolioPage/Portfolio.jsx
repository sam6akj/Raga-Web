import React from "react";
import Projects from "./Project";
import KnowMore from "../KnowMore";

function Portfolio(){
    return(
        <div>
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 my-10">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">Portfolio</h2>
      </div>
    </div>
    <div className="flex justify-center lg:px-48 md:px-16 sm:px-12 capitalize text-center py-5 font-semibold text-lg leading-7 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
    <div className="flex justify-center text-xl lg:my-10 sm:my-5 font-semibold leading-8 tracking-tight">
      <div className="lg:mx-12 sm:mx-6">All</div>
      <div className="lg:mx-12 sm:mx-6 text-[#6A6A6A]">Website Design & Development  </div>
      <div className="lg:mx-12 sm:mx-6">Branding</div>
      <div className="lg:mx-12 sm:mx-6">Digital Marketing</div>
      <div className="lg:mx-12 sm:mx-6">Digital Marketing</div>
    </div>
    <Projects />
    <KnowMore />
        </div>
    )
}

export default Portfolio;