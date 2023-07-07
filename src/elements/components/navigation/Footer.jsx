
function Footer() {
    return (
      <footer className="bg-[#0B0B0B]" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:pt-24 lg:px-8 lg:pt-32 ">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8 -mt-8 lg:pl-0 md:pl-10">
            <div className="space-y-6 ">
              <img
                className="h-7 -mt-10"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Company name"
              />
              <p className="text-base text-justify lg:w-8/12 md:w-9/12 font-light leading-6 capitalize text-[#EAEAEA] ">
              It is important to be able to identify, map and achieve success in the business world. We, at RaGa, are committed to explore different spectrums and experiment, in order to find the best paths to success for every new chapter.            </p>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-8">
                <div className="text-lg font-medium leading-6 text-[#D5E2E8] -mt-12">
                  Explore
                </div>
                <div className=" text-lg font-medium leading-6 text-[#D5E2E8] lg:mx-16 lg:-mt-12 md:mx-12 md:-mt-12 sm:mx-40  sm:-mt-6">
                  Contact
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div className="xl:mt-0">
            <div className="text-lg font-medium leading-6 text-[#D5E2E8] -mt-12">
                Newsletter
              </div>
              <div className="mt-2 capitalize w-64 text-sm text-justify leading-6 text-[#EAEAEA]">
              Sign up for our latest news & articles. We won’t give you spam
              </div>
              <form className="mt-6 sm:flex w-72 sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="h-12 outline-none rounded-md bg-[#E5E5E5] px-3 py-1.5 text-base text-[#626262] placeholder:text-[#626262] sm:w-64 sm:text-sm sm:leading-6"
                  placeholder="Email"
                />
              </form>
            </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  export default Footer;
  
  
  
  
  
  