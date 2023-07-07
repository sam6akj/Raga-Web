import React from "react";

const people = [
    {
      name: 'Emma Dorsey',
      imageUrl:
        'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  remaining essentially ."
    },
    {
        name: 'Emma Dorsey',
        imageUrl:
          'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  remaining essentially ."
      },{
        name: 'Emma Dorsey',
        imageUrl:
          'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  remaining essentially ."
      },{
        name: 'Emma Dorsey',
        imageUrl:
          'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  remaining essentially ."
      },
    // More people...
  ]

function Team(){
    return(
        <div>
            <div className="font-semibold text-center text-5xl">Our Team</div>    
            <div className="bg-white sm:py-10 md:py-10 ">
      <div className= "sm:grid lg:flex lg:mx-48  max-w-6xl px-6 lg:px-8">
        <ul
          role="list"
          className="grid max-w-2xl gap-x-6 gap-y-5 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-24 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <h3 className="mt-6 text-4xl font-semibold leading-8 text-gray-900">{person.name}</h3>
              <p className="my-5 text-base capitalize font-normal text-justify leading-7 text-gray-600">{person.bio}</p>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
        </div>
    )
}

export default Team;
