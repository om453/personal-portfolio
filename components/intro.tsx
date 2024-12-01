import Image from 'next/image'
import React from 'react'

const Intro = () => {
  return (
    <div>
        <div className="w-full flex flex-col-reverse lg:flex-row gap-14 justify-between items-center -z-10">
            <div className="flex flex-col gap-2 w-full lg:w-4/5">
            <h1 className="text-4xl font-bold mb-4">Hi! I&apos;m Om</h1>
            <p>Passionate Full Stack Developer expertise in both frontend and backend. Skilled in Reactjs, Nextjs, Node.js, and MongoDB. I craft beautiful and functional user interfaces and robust backend systems. 
            </p>
            </div>

            <Image src='/image/image.jpg' alt='Om' width={200} height={200}  className="border-2 border-gray-100 rounded-full object-cover" />
        </div>
       
    </div>
  )
}

export default Intro