import React from "react";

const WorkExperience = () => {

interface WorkExperienceItem {
    startDate: string;
    endDate?: string;
    companyName: string;
    companyLogo?: string;
    jobTitle: string;
    description: string[];
    companyLink?: string;
  }
  
  const workExperienceData: WorkExperienceItem[] = [
    {
        startDate: "October 2023",
        endDate: "October 2023",
        companyName: "Hacktoberfest 2023",
        jobTitle: "Open Source Contributor",
        description: [
            "Actively participated in Hacktoberfest 2023, contributing to open-source projects.",
            "Leveraged HTML, CSS, JavaScript, and Tailwind CSS to enhance user interfaces and create dynamic web experiences.",
            "Utilized Git and GitHub for efficient version control and collaborated with fellow developers.",
            "Developed practical skills in frontend development, including responsive design and component-based architecture.",
        ],
    }
  ];

    
  return (
    <div  className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">Work Experience</h1>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {workExperienceData.map((experience, index) => (
            <li key={index} className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {experience.startDate} - {experience.endDate}
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {experience.jobTitle} at {experience.companyName}
                </h3>
                {experience.description.map((desc, descIndex) => (
                    <p key={descIndex} className="text-base font-normal text-gray-800 dark:text-gray-400">
                        {desc}
                    </p>
                ))}
            </li>
        ))}
      </ol>
    </div>
  );
};

export default WorkExperience;
