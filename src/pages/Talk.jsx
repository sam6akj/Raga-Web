import React from "react";

function Talk(){
    return(
        <div>
            
            <div className="capitalize text-center font-semibold text-4xl text-[#000037] my-10">let's talk
            </div>
            <div className="grid grid-col-2 items-center justify-center my-3">
            <label className="block text-sm font-medium leading-6 text-[#838383]">Name
            </label>
            <div className="mt-2">
                <input
                type="name"
                name="name"
                id="name"
                className="block bg-[#E5E5E5] items-center w-96 rounded-lg border-0 py-2 px-3 text-[#838383] outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6"/>
      </div></div>
      <div className="grid grid-col-2 items-center justify-center my-3">
            <label className="block text-sm font-medium leading-6 text-[#838383]">Email
            </label>
            <div className="mt-2">
                <input
                type="email"
                name="email"
                id="email"
                className="block bg-[#E5E5E5] items-center w-96 rounded-lg py-2 px-3 text-[#838383] outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6"/>
      </div></div>
      <div className="grid grid-col-2 items-center justify-center my-3">
      <label className="block text-sm font-medium leading-6 text-[#838383]">
        Message
      </label>
      <div className="mt-2">
        <textarea
          rows={5}
          name="message"
          id="message"
          className="block w-96 rounded-lg bg-[#E5E5E5] py-3 px-3 text-[#838383] outline-none placeholder:text-[#838383] sm:text-sm sm:leading-6"
          defaultValue={''}
        />
      </div>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                className=" bg-[#EF1B62] px-16 py-4 my-5 text-2xl font-bold text-white capitalize shadow-sm">
               submit
              </a>        
              </div>
        </div>
    )
}

export default Talk;