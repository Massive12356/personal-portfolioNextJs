// Hero
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon'
import FacebookCircleLineIcon from 'remixicon-react/FacebookCircleLineIcon'
import DribbbleLineIcon from 'remixicon-react/DribbbleLineIcon'
import YoutubeLineIcon from 'remixicon-react/YoutubeLineIcon'
import GithubLineIcon from 'remixicon-react/GithubLineIcon'

export const heroIcons = [
  <InstagramLineIcon />,
  <FacebookCircleLineIcon />,
  <DribbbleLineIcon />,
  <YoutubeLineIcon />,
  <GithubLineIcon />,
]

// AboutMe icons
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import Projector2LineIcon from 'remixicon-react/Projector2LineIcon'
import GroupLineIcon from 'remixicon-react/GroupLineIcon'
import AwardFillIcon from 'remixicon-react/AwardFillIcon'

export const aboutData = [
  {
    title: 'Github Repos',
    amount: 22,
    icon: <GithubFillIcon />,
  },
  {
    title: 'Successful Projects',
    amount: 4,
    icon: <Projector2LineIcon />,
  },
  {
    title: 'Satisfied clients',
    amount: 2,
    icon: <GroupLineIcon />,
  },
  {
    title: 'Awards and Recognition',
    amount: 3,
    icon: <AwardFillIcon />,
  },
]

import DownloadLineIcon from 'remixicon-react/DownloadLineIcon'
import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon'

export const downloadIcon = <DownloadLineIcon />
export const arrowLeftIcon = <ArrowLeftSFillIcon />

export const aboutText =
  " Hi, I'm Edward, a Junior Frontend Developer... I specialize in building responsive and user-friendly websites using HTML, CSS, JavaScript, and React. I combine strong technical skills with soft skills like teamwork, communication, and problem-solving to create functional and visually appealing interfaces. My focus is on delivering seamless performance and an exceptional user experience."
// End of AboutMe icons

// Skills
export const skillsData = [
  {
    name: 'VS Code',
    icon: '/skills/vscode.png',
  },
  {
    name: 'HTML',
    icon: '/skills/html.png',
  },
  {
    name: 'CSS',
    icon: '/skills/css.png',
  },
  {
    name: 'JavaScript',
    icon: '/skills/js.png',
  },
  {
    name: 'TailwindCSS',
    icon: '/skills/tailwind.png',
  },
  {
    name: 'Vite',
    icon: '/skills/vite.png',
  },
  {
    name: 'ReactJS',
    icon: '/skills/react.png',
  },
  {
    name: 'Git',
    icon: '/skills/Git-Icon.png',
  },
 {
    name: 'Framer Motion',
    icon: '/skills/framer.png',
  },
  {
    name: 'Github',
    icon: '/skills/github.png',
  },
]

import CopyrightLineIcon from 'remixicon-react/CopyrightLineIcon'


export const copyRightIcon = <CopyrightLineIcon  />
// Experience
export const experienceData = [
  {
    year: 2019,
    title: "Advanced Learning and Early Experience",
    education:
      "Higher National Diploma: Focus on computer science, mathematics, and creative Thinking Courses.",
    experience: [
      "Basic HTML , CSS,JAVASCRIPT, C++, JAVA and REACT",
      "Personal Projects: Created A hostel navigation system using html Css javaScript.",
    ],
  },
  {
    year: 2020,
    title: "Internship at GITPLUS",
    education:
      "Internship Training: Enrolled in an internship program at GITPLUS.",
    experience: [
      "Developed an online response system using HTML, CSS, and JavaScript to collect client feedback and gained experience in creating detailed system requirement specifications.",
    ],
  },
  {
    year: 2021,
    title: "Internship at LobsterPlus Ghana Limited",
    education:
      "Internship Training: Focus on specialized areas like  computer Networking and windows server Management",
    experience: [
      "Worked with professional network technicians to build a network infrastructure for the LobsterPlus organization, improving overall productivity.",
    ],
  },
  {
    year: 2022,
    title: "National Service at Ghana Broadcasting Corporation",
    education:
      "Acquired advanced expertise in web development tools, including HTML, CSS, and React, along with proficiency in computer networking and Windows Server management.",
    experience: [
      "Contributed to developing a staff performance monitoring system, focusing on responsive design with HTML, CSS, and JavaScript.",
      "Led a team in restructuring the network infrastructure at the GBC IT Support Office.",
    ],
  },
  {
    year: 2025,
    title: "GROW WEB DEVELOPMENT PROGRAM AT MEST AFRICA",
    education:
      "Learned best practices in HTML, CSS, JavaScript, and React, along with deployment using Vercel and Netlify, and version control with GitHub and GitLab.",
    experience: [
      "Part of a team that developed a responsive library management system using React.js and Tailwind CSS.",
    ],
  },
];

export const projectsData = [
  {
    name: "PortFolio Website",
    desc: "A Portfolio Website that showcases my skills and experience.",
    url: "/projects/MASSIVE.png",
    tech: ["CSS", "JavaScript", "HTML"],
    link: "https://edwardmintah.netlify.app/",
  },
  {
    name: "Mental Wellness Website",
    desc: "A website created to help people with mental health issues.",
    url: "/projects/mental Health.png",
    tech: ["ReactJS", "TailwindCSS", "FramerMotion"],
    link: "https://mental-health-theta-dun.vercel.app/",
  },
  {
    name: "Construction Company website",
    desc: "A website created for a construction company.",
    url: "/projects/cons.png",
    tech: ["ReactJS", "TailwindCSS", "FramerMotion"],
    link: "https://construction-app-nine.vercel.app/",
  },
  {
    name: "Real estate App",
    desc: "A real estate app that allows users to search for properties.",
    url: "/projects/estate.png",
    tech: ["ReactJS", "TailwindCSS", "FramerMotion"],
    link: "https://estateproject-navy.vercel.app/",
  },
];

export const projectsButton = [
  'All',
  'HTML',
  'CSS',
  'JavaScript',
  'ReactJS',
  'TailwindCSS',
  'FramerMotion',
]

import Home5LineIcon from 'remixicon-react/Home5LineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import HistoryLineIcon from 'remixicon-react/HistoryLineIcon'
import BriefcaseLineIcon from 'remixicon-react/BriefcaseLineIcon'
import UserStarLineIcon from 'remixicon-react/UserStarLineIcon'
import ProjectorLineIcon from 'remixicon-react/ProjectorLineIcon'
import ContactsBook2LineIcon from 'remixicon-react/ContactsBook2LineIcon'


export const navbarData = [
  {
    id: 'home',
    name: 'Home',
    icon: <Home5LineIcon />,
  },
  {
    id: 'about',
    name: 'About',
    icon: <UserLineIcon />,
  },
  {
    id: 'experience',
    name: 'MyRoad',
    icon: <HistoryLineIcon />,
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: <BriefcaseLineIcon />,
  },
  {
    id: 'reviews',
    name: 'Reviews',
    icon: <UserStarLineIcon />,
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: <ProjectorLineIcon />,
  },
  
  {
    id: 'contact',
    name: 'Contact',
    icon: <ContactsBook2LineIcon />,
  },
  
]



import ArrowDropDownLineIcon from 'remixicon-react/ArrowDropDownLineIcon'
export const QuestionArrow = <ArrowDropDownLineIcon />

// Reviews

import StarFillIcon from 'remixicon-react/StarFillIcon'
import StarHalfLineIcon from 'remixicon-react/StarHalfLineIcon'
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'

export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />]
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />]

export const reviewsData = [

  {
    image: "/reviews/client-1.png",
    name: "Dennis Obeng, CEO of LobsterPlus Ghana",
    comment:
      "The e-commerce website you built for me has significantly improved my business. I truly appreciate the professionalism you demonstrated and the exceptional design touch you brought to the project.",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: "/reviews/client-3.png",
    name: "Dorothy Offei, Senior Manager at  Ghana Broadcasting corporation (GBC)",
    comment:
      "The staff management application you built during your national service has significantly improved our workflow in the office, eliminating the need for paperwork and making our operations more efficient",
    stars: [1, 1, 1, 1, 1],
  },
];



import CheckLineIcon from 'remixicon-react/CheckLineIcon'

export const checkIcon = <CheckLineIcon />

// Toggle
import MoonFoggyFillIcon from 'remixicon-react/MoonFoggyFillIcon'
import SunFoggyFillIcon from 'remixicon-react/SunFoggyFillIcon'

export const sunIcon = <SunFoggyFillIcon />
export const moonIcon = <MoonFoggyFillIcon />
