import React from "react";
import MissionView from "./MissionView";
import Team from "./Team";
import OurPeople from "./Ourpeople";
import Carousel from "./OurPeople2";
import KnowMore from "../KnowMore";

function AboutPage(){
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
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">About Us</h2>
      </div>
    </div>
    <div className=" lg:my-16 lg:mx-24 leading-7 lg:px-24 lg:w-10/12 indent-3.5  text-justify  sm:my-8 sm:px-10 capitalize">
    It is important to be able to identify, map and achieve success in the business world. We, at RaGa, are committed to explore different spectrums and experiment, in order to find the best paths to success for every new chapter. RaGa is the result of a father-son duo coming together with their creative, analytical and business mindsets. We are a creative advertising agency and a brand consulting firm in Chandigarh. Although, it has just been three years to our journey, we have grown exponentially because of a simple reason – Targeted Communication. We understand our audience, we understand your business and we trust our expertise to do the rest. In short, RaGa is a one-stop solution to all your communication problems. Be it advertising, marketing, digital marketing, PR, Events, Relationship Management, Print, Media Buying, Out-of-home advertising, TV, Radio, Website or more. We have the insights to help us learn to grow, a team which is dedicated & meticulous, and ambition that is larger than life.
    </div>
    <MissionView />
    <Team />
    <div className="font-semibold text-center text-5xl">Our People</div>    
    <OurPeople />
    <Carousel />
    <KnowMore />
    </div>
    )
}

export default AboutPage;   