import React from "react";
import Image from 'next/image';

const skillsData = [
  {
    name: "React",
    icon: "/skills/react.svg",
  },
  {
    name: "Next.js",
    icon: "/skills/nextdotjs.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "/skills/tailwindcss.svg",
  },
  {
    name: "TypeScript",
    icon: "/skills/typescript.svg",
  },
  {
    name: "JavaScript",
    icon: "/skills/javascript.svg",
  },
  {
    name: "HTML",
    icon: "/skills/html5.svg",
  },
  {
    name: "CSS",
    icon: "/skills/css3.svg",
  },
  {
    name: "Git",
    icon: "/skills/git.svg",
  },
  {
    name: "GitHub",
    icon: "/skills/github.svg",
  },
  {
    name: "Node.js",
    icon: "/skills/nodedotjs.svg",
  },
  {
    name: "Express",
    icon: "/skills/express.svg",
  },
  {
    name: "MongoDB",
    icon: "/skills/mongodb.svg",
  },
  {
    name: "Docker",
    icon: "/skills/docker.svg",
  },
  {
    name: "C++",
    icon: "/skills/cplusplus.svg",
  },
  {
    name: "Python",
    icon: "/skills/python.svg",
  },
  {
    name: "AWS",
    icon: "/skills/amazonwebservices.svg",
  },
  {
    name: "Postman",
    icon: "/skills/postman.svg",
  },
  {
    name: "RESTful APIs",
    icon: "/public/skills/postman.svg",
  },
];

function Skills() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">Skills</h1>
      <div className="flex flex-wrap gap-2">
        {skillsData.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-500 text-gray-100 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 flex items-center gap-1"
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={16}
              height={16}
              className="w-4 h-4"
            />
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;