import React from "react";

function Contact(){
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
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">Contact Us</h2>
      </div>
    </div>
            <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-6xl lg:grid-cols-2 md:cols-2">
        <div className="relative sm:pt-32 lg:static lg:px-8 lg:py-44 md:static md:px-6 md:py-62">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-2xl">
            <dl className="mt-10 grid lg:grid-rows-6 md:grid-rows-2 space-y-4 text-base leading-7">
              <div className="lg:row-span-5 md:row-span-1 text-[#000037] text-3xl font-medium">
                Address
              </div>
              <div className="flex text-[#000037] text-3xl font-medium">
                Reach Us
              </div>
            </dl>
          </div>
        </div>
        <form action="#" method="POST" className="px-6 lg:pt-20 sm:pb-32 lg:px-8 ">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <h2 className="text-4xl leading-10 text-[#000037] font-semibold tracking-wide">Let’s Talk</h2>
            <p className="my-6 text-lg text-[#272727] font-semibold leading-7capitalize">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <div className="grid lg:grid-cols-1 md:grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium leading-6 pt-4 text-[#838383]">
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="name"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-[#838383] bg-[#E5E5E5] outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-[#838383]">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-[#838383] bg-[#E5E5E5] outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-medium leading-6 text-[#838383]">
                  Comapny
                </label>
                <div className="mt-2.5">
                  <input
                    type="company"
                    name="company"
                    id="company"
                    autoComplete="company"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-[#838383] bg-[#E5E5E5] outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-[#838383]">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-[#838383] bg-[#E5E5E5] outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-[#838383]">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-[#838383] bg-[#E5E5E5] outline-none ring-gray-300 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="bg-[#D9D9D9] px-16 py-4 text-center text-2xl font-bold">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
        </div>
    )
}
export default Contact;