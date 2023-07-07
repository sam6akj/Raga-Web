import React from "react";
import Project1 from "./Project1";

const posts = [
    {
      id: 1,
      title: 'Project Name1',
      href: '/Project1',
      description:
        'when an unknown printer took a galley of type and scrambled it to make a type ',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    },
    {
        id: 1,
        title: 'Project Name2',
        href: '#',
        description:
          'when an unknown printer took a galley of type and scrambled it to make a type ',
        imageUrl:
          'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      },
      {
        id: 1,
        title: 'Project Name3',
        href: '#',
        description:
          'when an unknown printer took a galley of type and scrambled it to make a type ',
        imageUrl:
          'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      },
      {
        id: 1,
        title: 'Project Name4',
        href: '#',
        description:
          'when an unknown printer took a galley of type and scrambled it to make a type ',
        imageUrl:
          'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      },
      {
        id: 1,
        title: 'Project Name5',
        href: '#',
        description:
          'when an unknown printer took a galley of type and scrambled it to make a type ',
        imageUrl:
          'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      },
      {
        id: 1,
        title: 'Project Name6',
        href: '#',
        description:
          'when an unknown printer took a galley of type and scrambled it to make a type ',
        imageUrl:
          'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      }
    // More posts...
  ]

function Projects(){
    return(
        <div>
            <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-5">
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-5 lg:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 md:grid-cols-2 md:gap-y-10 sm:grid-cols-2 sm:gap-y-7">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[16/13]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 text-center">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-3 text-justify text-base font-normal leading-6 text-gray-600 capitalize lg:px-7 md:px-0 ">{post.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
        </div>
    )
}

export default Projects;