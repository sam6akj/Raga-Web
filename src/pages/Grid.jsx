import React from 'react';
import { CiMobile3 } from 'react-icons/ci';
import { FaRegLightbulb } from 'react-icons/fa';
import { AiOutlineCamera } from 'react-icons/ai';
import { CiBullhorn } from 'react-icons/ci';
import { BiSpreadsheet } from 'react-icons/bi';
import { CgWebsite } from 'react-icons/cg';
import { GiRelationshipBounds } from 'react-icons/gi';
  
const people = [
  {
    DomainName: 'advertising solutions',
    title: "With Raga, you'll get the perfect balance of creativity and strategy to help your ",
    LearnMore: 'learn More',
    icon:<BiSpreadsheet size={45} color='#E60D56'/>
  },
  {
    DomainName: 'web design & development',
    title: "With Raga, you'll get the perfect balance of creativity and strategy to help your ",
    LearnMore: 'learn More',
    icon:<CgWebsite size={45} color='#E60D56'/>
  },{
    DomainName: 'app development',
    title: "With Raga, you'll get the perfect balance of creativity and strategy to help your ",
    LearnMore: 'learn More',
    icon:<CiMobile3 size={45} color='#E60D56'/>
  },{
    DomainName: 'brand consulting',
    title: "With Raga, you'll get the perfect balance of creativity and strategy to help your ",
    LearnMore: 'learn More',
    icon:<FaRegLightbulb size={45} color='#E60D56'/>
    },
  {
    DomainName: 'creative solutions',
    title: "With Raga, you'll get the perfect balance of creativity and strategy to help your ",
    LearnMore: 'learn More',
    icon:<FaRegLightbulb size={45} color='#E60D56'/>
  },
  {
    DomainName: 'digital marketing',
    title: "With Raga, you'll get the perfect balance of creativity and strategy to help your ",
    LearnMore: 'learn More',
    icon:<CiBullhorn size={45} color='#E60D56'/>
  },
  {
    DomainName: 'photography services',
    title: "With Raga, you'll get the perfect balance of creativity and strategy to help your ",
    LearnMore: 'learn More',
    icon:<AiOutlineCamera size={45} color='#E60D56'/>
  },
  {
    DomainName: 'public relations',
    title: "With Raga, you'll get the perfect balance of creativity and strategy to help your ",
    LearnMore: 'learn More',
    icon:<GiRelationshipBounds size={45} color='#E60D56'/>
  },

]

function Grid(){
  return (
    <div className='bg-[#F32067] my-12 pb-24 px-10'>
        <div className='text-[#FFFFFF] text-center py-12 capitalize text-4xl font-semibold'>services we provide</div>
    <ul role="list" className=" grid grid-cols-1 mx-8 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {people.map((person) => (
        <li
          className="col-span-1 flex flex-col bg-white text-center shadow">
          <div className="flex flex-1 flex-col p-8">
            <div className="flex items-center justify-center stroke-1">{person.icon}</div>
            <h3 className="mt-6 text-xl font-semibold text-[#000000] capitalize lg:whitespace-nowrap sm:whitespace-normal text-center">{person.DomainName}</h3>
            <dl className="my-3 flex flex-grow flex-col justify-between">
              <dd className="text-xs text-[#272727] ">{person.title}</dd>
              <dd className="mt-3">
                <span className="inline-flex items-center text-xs font-medium">
                  {person.LearnMore}
                </span>
              </dd>
            </dl>
          </div>
          <div>
          </div>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default Grid;