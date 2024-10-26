import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiCplusplus, SiMongodb } from "react-icons/si";
import { DiCss3, DiHtml5, DiJavascript, DiMysql, DiPython, DiReact, DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "GARIMA NAGDEVE",
  greet: "Hey there! Thanks for stopping by!",
  description:
    "I am a passionate 4th year Computer Science student. I like to turn ideas into reality through my skills and passion for technology. Currently looking for entry level job role to contribute my knowledge and skills.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS also with the use of framer motion library for animations to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/user/personal-portfolio",
  },
  {
    id: 2,
    name: "MentorMatch: An E-Learning Platform",
    description:
      "MentorMatch is a platform built using the MERN stack, it connects mentees with mentors, fostering professional growth through personalized guidance and enhancing learning and career advancement.",
    image: projectImage2,
    githubLink: "https://github.com/garimanagdeve1218/MentorMatch-minor-2",
  },
  {
    id: 3,
    name: "LinkUs: A Real-Time Chat Application",
    description:
      "LinkUs is a real-time chat application built with the MERN stack and Socket.IO for instant messaging, featuring user authentication and a user-friendly interface for enhanced connectivity.",
    image: projectImage3,
    githubLink: "https://github.com/yourusername/linkus",
  },
  {
    id: 4,
    name: "Cam-Scanner ML Project",
    description:
      "Built a Cam Scanner with OpenCV. A Machine Learning project, made with jupyter notebook it involves processing images to create clear, scanned documents.",
    image: projectImage4,
    githubLink: "https://github.com/garimanagdeve1218/Cam-Scanner-ML-Project",
  },
  {
    id: 5,
    name: "To Do List",
    description:
      "A To-Do List with HTML, CSS, and JavaScript enables you to manage your to-do tasks by allowing you to create a list of tasks easily by adding, displaying, and removing tasks.",
    image: projectImage5,
    githubLink: "https://github.com/garimanagdeve1218/To-Do-List",
  },
  {
    id: 6,
    name: "Random Joke Generator",
    description:
      "Random Joke Generator is a fun project built with HTML, CSS, and JavaScript. It delivers quick laughs with a simple click, generating a new random joke each time you interact with it. This basic yet entertaining project utilizes an API to fetch jokes.",
    image: projectImage6,
    githubLink: "https://github.com/garimanagdeve1218/RANDOM_JOKE_GENERATOR",
  },
];

export const BIO = [
  "With a strong foundation in Computer Science, I’ve gained skills in languages like C/C++, Python, SQL, JavaScript, and frameworks like React.js, alongside a growing interest in AI and ML. My passion for technology led me to actively engage in coding clubs and tech communities, where I’ve built and honed practical skills through various projects.",
  "Academically driven, I chose Computer Science to explore my interests in the tech world. Throughout my studies, I’ve taken on projects that have sharpened my programming and problem-solving abilities while nurturing my enthusiasm for innovation.",
  "I’m continuously inspired by new technology and excited by the opportunity to work on impactful projects. My journey so far has been fueled by a deep interest in learning, and I look forward to contributing further to the tech field.",
];

export const SKILLS = [
  {
    icon: <SiCplusplus className="text-4xl text-sky-500 lg:text-5xl" />,
    name: "C++",
   
  },
  {
    icon: <DiPython className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "Python",
   
  },
  {
    icon: <DiHtml5 className="text-4xl text-orange-400 lg:text-5xl" />,
    name: "HTML",
   
  },
  {
    icon: <DiCss3 className="text-4xl text-blue-400 lg:text-5xl" />,
    name: "CSS",
   
  },
  {
    icon: <DiJavascript className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "JavaScript",
   
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    
  },

  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
   
  },

  {
    icon: <DiMysql className="text-4xl text-sky-500 lg:text-5xl" />,
    name: "SQL",
    
  },
];

export const EXPERIENCES = [
  {
    title: "Project Trainee",
    company: "Raja Ramanna Center For Advanced Technology",
    duration: "October 2024 - Present",
    description:
      "I'm currently working as a Project Trainee at RRCAT, a Government Organisation, where I’m immersed in the rapidly evolving field of Artificial Intelligence and Machine Learning. In this role, I’m focusing on several impactful tasks: developing intuitive GUIs to streamline data presentation, applying web scraping techniques to gather crucial datasets, and building ML models to derive insights and enhance data-driven decision-making for the organization.",
  },
  {
    title: "Creative Head",
    company: "AITR-ACM",
    duration: "September 2023 - September 2024",
    description:
      "As the Creative Lead at AITR-ACM, a student chapter of the Association for Computing Machinery, I was the creative lead in various technical events, including the national-level hackathon, PRAYATNA. This position allowed me to demonstrate my leadership skills and also significantly enhanced my creativity and teamwork abilities. My experiences in this role has shaped me as a leader while fostering my passion for technology and community engagement. ",
  },
  {
    title: "Graphic Designer",
    company: "AITE-ACM",
    duration: "October 2022 - September 2023",
    description:
      "As a graphic designer in the creative team at AITR-ACM, I developed essential graphic design skills while working on projects like the national-level hackathon, CODESPIRE and many more. I gained proficiency in tools such as Canva, Adobe Illustrator, and Figma. This experience taught me the value of teamwork and collaboration, helping me understand how cohesive design effectively communicates ideas in the tech community.",
  },
];

export const EDUCATION = [
  {
    degree: "High School",
    institution: "Atomic Energy Central School, Indore (M.P.)",
    duration: "July 2019 - May 2021",
    description:
      "Studied Physics, Chemistry, and Mathematics (PCM) with Computer Science as an elective with 10th Grade Percentage: 81.60% and 12th Grade Percentage: 80.80%. Also developed strong problem-solving skills and a keen interest in technology."
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Acropolis Institute of Technology and Research, Indore (M.P.)",
    duration: "November 2021 - June 2025",
    description:
      "Throughout my studies, I have maintained a CGPA of 7.54 and have developed and expanded my programming skills across multiple languages. Also Engaging with different technologies has strengthened my technical skills, enabling me to build various projects and applications.",
  },
];


export const SOCIAL_MEDIA_LINKS = [
 
  {
    href: "https://instagram.com/garima_nagdeve",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80  hover:text-pink-600" />,
  },
  
  {
    href: "https://github.com/garimanagdeve1218",
    icon: <FaGithub fontSize={25} className="hover:opacity-80  hover:text-purple-500" />,
  },
  {
    href: "https://www.linkedin.com/in/garima1218",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80  hover:text-blue-400" />,
  },
];
