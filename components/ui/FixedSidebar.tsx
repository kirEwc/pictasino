'use client'
import Link from 'next/link'
import React from 'react'


export const FixedSidebar = () => {

    const menuSidebar = [
        {name: "Casino",route: "/"},
        {name: "Deportes",route: "/"},
        {name: "Menu",route: "/"},
        {name: "Menu",route: "/"},
        {name: "Menu",route: "/"},
        {name: "Menu",route: "/"},
        {name: "Menu",route: "/"},
        {name: "Menu",route: "/"},
    ]


  return (
    <div className='hidden md:flex flex-col relative min-h-screen pt-6 gap-3 w-52  bg-gray-950 items-center '>
        {menuSidebar.map((item, index) => (
            <Link 
                key={index} 
                href={item.route} 
                className="bg-transparent w-full h-10 ml-3 mr-3 flex flex-col pl-5 " >
                <h1>{item.name}</h1>
            </Link>
        ))}
    </div>
  )
}
