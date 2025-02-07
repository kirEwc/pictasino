'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';


interface CardCustomProps{
  //  mancha propiedades
   manchaPosition?:string,
   manchaColor?:string,
   manchaSize?:string,

  //  Card propiedades
   title?:string,
   description?:string,
   imagen?:string,

   //  Boton propiedades
    Ruta?:string,


}



 const SportsCard:React.FC<CardCustomProps> = (
  {
    manchaPosition = 'top-0 left-0',
    manchaColor = 'bg-purple-700',
    manchaSize = 'w-48 h-28',

    title = 'Casino',
    description = 'Apuesta en eventos deportivos populares con cuotas altas y otras grandes características.',
    imagen = '/images/card-images/casino.png',
    Ruta = '/home',
  }

) => {

    const router = useRouter();
    


    return (
      <div className="relative p-6 rounded-2xl shadow-[8px_8px_0px_#151e2b,-8px_-8px_0px_#1d283b] w-full max-w-md bg-slate-800 hover:bg-gray-800 border-gray-950 overflow-hidden mb-7">

              <div id='Mancha De color en la card' className={`absolute ${manchaPosition} ${manchaSize} ${manchaColor} blur-2xl opacity-80 rounded-full`}></div>

        <div className="relative flex ">
          <div className="flex items-center">
            <Image  src={imagen}  alt="Imagen de la card" className="w-200 h-20"  width={80} height={80} />
          </div>
          <div className="ml-4 flex-1">
            <h2 className="font-bold text-lg flex items-center">
              {title}
            </h2>
            <p className="text-gray-300 text-sm">
              {description}
            </p>
          </div>
          <div className="ml-2 flex items-end">
            <Link href={Ruta}>
              <button 
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#a11212] shadow-[5px_5px_20px_#890f0f,-5px_-5px_20px_#b91515] hover:bg-[#c61313] hover:shadow-[5px_5px_20px_#c61313,-5px_-5px_20px_#ff1919] transition-all duration-300 ease-in-out"
                >
               <DerechaIcon className="w-6 h-6"/>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  

  export default SportsCard;




  import React from 'react';
  import type { SVGProps } from 'react';
  
  export  function DerechaIcon(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h2.5M20 12l-6-6m6 6l-6 6m6-6H9.5"></path></svg>);
  }