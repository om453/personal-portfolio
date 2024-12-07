import Image from 'next/image'
import React from 'react'
import ProfileImage from '@/app/images/image.jpg'

export default function Intro() {
  return (
    <div>
        <div className="w-full flex flex-col-reverse lg:flex-row gap-14 justify-between items-center -z-10">
            <div className="flex flex-col gap-2 w-full lg:w-4/5">
            <h1 className="text-4xl font-bold mb-4">Hi! I&apos;m Om</h1>
            <p className="text-base text-gray-800 dark:text-gray-300">Passionate Full Stack Developer expertise in both frontend and backend. Skilled in Reactjs, Nextjs, Node.js, and MongoDB. I craft beautiful and functional user interfaces and robust backend systems. 
            </p>
            </div>

           <div className="flex items-center justify-center md:mb-0">
          <Image src={ProfileImage}
          alt="Om"
          width={160}
          height={160}
          className="border-2 border-gray-100 rounded-full object-cover" />
           </div>
        </div>
       
    </div>
  )
}
