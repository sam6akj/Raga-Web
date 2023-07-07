import React from 'react';
import KnowMore from '../KnowMore';

const project1 = [
  {
    title: 'Industry',
  },
  {
    title: 'Location',
  },
  {
    title: 'Growth Involvement',
  },
  {
    title: 'Visit',
  },
]
function Project1() {
  return (
    <div className="bg-white">
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
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">Project Name</h2>
      </div>
    </div>
      <div className="mx-auto max-w-7xl px-10 py-12 lg:px-16 lg:py-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-normal leading-10 tracking-normal text-gray-900">Client Brief</h2>
            <div className="mt-6 text-lg text-justify font-normal leading-7 text-[#272727] capitalize">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0 mb-16">
            <dl className="space-y-10">
              {project1.map((project) => (
                <div>
                  <dt className="text-2xl py-7 px-36 font-medium leading-7 text-[#000037]">{project.title}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className='text-4xl font-normal leading-10 tracking-normal text-gray-900'>The Approach</div>
        <div className='my-6 text-lg text-justify font-normal leading-7 text-[#272727] capitalize'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
        <div className='bg-[#D9D9D9] h-96 mt-20'></div>
      </div>
      <KnowMore />
    </div>
  )
}


export default Project1;