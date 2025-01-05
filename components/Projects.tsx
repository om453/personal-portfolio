import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

const projectsData = [  
  {
    title: "StudyVerse",
    description:
      "A comprehensive Ed-tech platform built with MERN stack, enabling users to create, consume, and rate educational content with seamless user experience.",
    link: "https://studyverse-frontend.vercel.app/",
    code: "https://github.com/om453/StudyVerse-An-EDtech-Learning-Platform",
    previewVideo: "/videos/StudyVerseVideoReview.webm",
    technologies: [
      "React.js", "Tailwind CSS", "Express.js", "Node.js", "MongoDB", "RazorPay SDK", "Cloudinary"
    ],
  },
  {
    title: "PairUp",
    description:
      "A Real-Time Collaborative Code Editor that enables developers to write and edit code simultaneously in a shared environment",
    link: "https://pairup-webapp.vercel.app/",
    code: "https://github.com/om453/PairUp-RealTime-Code-Editor-Collaboration",
    previewVideo: "/videos/PairupdemovideoReview.webm",
    technologies: [
      "React.js", "Node.js", "Express.js", "CodeMirror", "Socket.io", "Tailwind CSS"
    ],
  },
  {
    title: "DetectPro",
    description:
      "AI-powered object detection app using TensorFlow.js and Next.js. Features real-time webcam detection, auto-recording, and comprehensive controls for professional and security applications.",
    link: "https://detect-pro-io.vercel.app/",
    code: "https://github.com/om453/DetectPro",
    previewVideo: "/videos/DetectproVideoReview.mp4",
    technologies: ["Next.js", "TypeScript", "TensorFlow.js", "Tailwind CSS", "ShadCN-UI"],
  },
  {
    title: "ShopCart",
    description:
      "A Modern E-Commerce Shopping Cart application, featuring efficient state management and responsive design built with React and Redux.",
    link: "https://shopping-cart-app-redux.vercel.app/",
    code: "https://github.com/om453/ShopCart-WebApp",
    previewVideo: "/videos/ShopcCartVideoReview.webm",
    technologies: [
     "React.js", "Redux", "Tailwind CSS", "JavaScript"
    ],
  }
];

function Projects() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col border rounded-md dark:border-gray-700"
          >
            <video
              src={project.previewVideo}
              autoPlay
              muted
              loop
              className="rounded-t-md"
            />
            <div className="flex flex-col gap-3 p-4 grow">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-[4px]">
                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="bg-slate-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                <Link href={project.link}>
                    <Button variant="default"> <CiGlobe /> View</Button>
                </Link>
                <Link href={project.code}>
                  <Button variant="outline"> <FaGithub /> Code</Button>
                </Link>

              </div>
            </div>
          </div>
        ))}
      </div>
        <div className="flex items-center justify-center gap-2 text-xls text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
          <span>Discover more projects on</span>
          <Link 
            href='https://github.com/om453' 
            className="flex items-center gap-1 font-medium underline-offset-4 hover:underline text-black dark:text-white"
          >
            <FaGithub className="w-4 h-4" />
            GitHub
          </Link>
        </div>
    </div>
  );
}

export default Projects;
