import React from "react";

function KnowMore(){
    return(
        <div>
            {/* <div className="grid grid-rows-4 grid-flow-col gap-1 mx-40 my-10">
            <div className="row-span-2 col-span-2 text-3xl font-medium py-6">Want To Know More?</div>
            <div className="col-span-2 flex text-5xl font-normal whitespace-nowrap">Let's Talk About Your Goals!</div>
            <div className="row-span-3 col-span-4">get in touch</div>
            </div> */}
            <div className="grid grid-cols-2 gap-x-10">
            <div className="grid grild-rows-2 max-w-5xl my-16 gap-7 text-right">
                <div className="col-span-1 text-3xl font-medium">Want To Know More?</div>
                <div className="text-5xl font-normal">Let's Talk About Your Goals!</div>
            </div>
            <div className="flex items-center justify-start px-12">
              <div className=" bg-[#D9D9D9] px-16 py-5 mb-5 text-2xl font-bold text-[#000000]">
               Get In Touch
              </div>       
              </div>
              </div>
              {/* <div className="border border-black divide-x divide-y flex justify-center h-0 rotate-90"></div> */}
    </div>
    )
}

export default KnowMore;