// Skills Section Logo's
import htmlLogo from './assets/html.png';
import cssLogo from './assets/css.png';
import reactjsLogo from './assets/react.svg';
import tailwindcssLogo from './assets/tailwindcss.png';
import cppLogo from './assets/Cpp.png';
import javaLogo from './assets/java.png';
import pythonLogo from './assets/python.png';
import gitLogo from './assets/git.png';
import githubLogo from './assets/github.png';
import vscodeLogo from './assets/vscode.png';
import cLogo from './assets/C.png';
import RLogo from './assets/R-Dark.svg';
import vhdlLogo from './assets/VHDL.png';
import verilogLogo from './assets/Verilog.png';
import pycharmLogo from './assets/PyCharm-Dark.svg';
import systemverilogLogo from './assets/SystemVerilog.png';

import matlabLogo from './assets/Matlab-Dark.svg';
import modelsimLogo from './assets/modelsim.jpg';
import quartusLogo from './assets/Quartus_Prime.png';
import intellijLogo from './assets/IntelliJ.png';
import stm32Logo from './assets/stm32.svg';
import kicadLogo from './assets/kicad.jpeg';
import keilLogo from './assets/keil.jpeg';
import assemblyLogo from './assets/assembly.png';
import arduinoLogo from './assets/Arduino.svg';
import ubuntuLogo from './assets/Ubuntu.webp';

// Experience Section Logo's
import subwaylogo from './assets/subway.png';
// Education Section Logo's
import mcmasterLogo from './assets/Uni_mcmaster_logo.svg.png';
import assumptionLogo from './assets/Assumption.png';

// Project Section Logo's
import microcontrollerLogo from './assets/microcontroller.jpg';
import arduino_line_follower_Logo from './assets/arduino_line_follower.webp';
import snakeLogo from './assets/snake-game.png';
import cheap_flight_logo from './assets/cheap_flight.jpg';
import communityLogo from './assets/power_in_community.webp';
import recyclingsystemLogo from './assets/recycling_system.webp';
import getgripLogo from './assets/get_a_grip.webp';
import renewableLogo from './assets/turbine.webp';
import pcbLogo from './assets/Custom_PCB1.png';
import flightLogo from './assets/flight_finder.webp';
import fpgaLogo from './assets/FPFA_MAX10.jpg';


// Certificate Section Logo's
import certificateLogo from './assets/Udemy_C_Certificate.jpg';
import ros2_certificateLogo from './assets/Udemy_ROS2_Certificate.jpg';
import nav2_certificateLogo from './assets/Udemy_Nav2_Certificate.jpg';

export const SkillsInfo = [
  
  {
    title: 'Hardware Languages',
    skills: [
        // For now leave these, I will edit later 
        { name: 'C', logo: cLogo },
        { name: 'C++', logo: cppLogo },
        { name: 'VHDL', logo: vhdlLogo },
        { name: 'Verilog', logo: verilogLogo },
        { name: 'System Verilog', logo: systemverilogLogo },
        { name: 'Assembly', logo: assemblyLogo },

    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'R', logo: RLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Linux (Ubuntu)', logo: ubuntuLogo },
      { name: 'PyCharm', logo: pycharmLogo },
      {name: 'IntelliJ', logo: intellijLogo},
      { name: 'MATLAB', logo: matlabLogo },
      { name: 'Modelsim', logo: modelsimLogo },
      { name: 'Quartus Prime', logo: quartusLogo },
      { name: 'STM32CubeIDE', logo: stm32Logo },
      { name: 'KiCad', logo: kicadLogo },
      { name: 'Keil uVision', logo: keilLogo },
      {name: 'arduino', logo: arduinoLogo},
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: subwaylogo,
      role: "Subway Sandwich Artist",
      company: "Subway",
      date: "September 2024 - August 2025",
      desc: "• Welcome customers with enthusiasm and satisfy customers to their needs. • Being an active listener and taking accurate orders while being efficient and answering all questions in detail. • Working well with a team and offering help with a positive attitude.• Memorizing all sandwich formulas for best customer service.• Providing exceptional Cashier Customer service.• Fast learner as I was able to quickly learn and adapt to Subway’s environment.Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "Problem Solving",
        "Interpersonal Skills",
        "Teamwork",
        "Leadership",
        "Time Management",
        "Adaptability",
      ],
    },
    // {
    //   id: 0,
    //   img: subwaylogo,
    //   role: "Subway Sandwich Artist",
    //   company: "Subway",
    //   date: "September 2024 - August 2025",
    //   desc: "• Welcome customers with enthusiasm and satisfy customers to their needs. • Being an active listener and taking accurate orders while being efficient and answering all questions in detail. • Working well with a team and offering help with a positive attitude.• Memorizing all sandwich formulas for best customer service.• Providing exceptional Cashier Customer service.• Fast learner as I was able to quickly learn and adapt to Subway’s environment.Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    //   skills: [
    //     "Problem Solving",
    //     "Interpersonal Skills",
    //     "Teamwork",
    //     "Leadership",
    //     "Time Management",
    //     "Adaptability",
    //   ],
    // },
    
    
  ];
  
  export const education = [
    {
      id: 0,
      img: mcmasterLogo,
      school: "McMaster University, Hamilton",
      date: "September 2023 - April 2027",
      // grade: "3.6/4.0 CGPA",
      desc: "I am currently pursuing my Bachelor's degree in Computer Engineering at McMaster University, Canada. My coursework includes advanced topics in computer science and engineering, such as Data Structures and Algorithms, Operating Systems, Computer Networks, and Software Engineering. I am actively involved in various projects that apply theoretical concepts to practical applications, enhancing my skills in programming, problem-solving, and teamwork.",
      degree: "Bachelor of Engineering - B.Eng (Computer Engineering)",
    },
    {
      id: 1,
      img: assumptionLogo,
      school: "Assumption College School, Brantford",
      date: "Apr 2019 - March 2023",
      // grade: "95%",
      desc: "I completed my high school education at Assumption College School in Brantford, Ontario, where I excelled in my studies with a focus on Mathematics and Computer Science. My coursework included advanced mathematics, computer programming, and physics, which laid a strong foundation for my future studies in computer engineering. I was actively involved in extracurricular activities, including coding clubs and science fairs, which further developed my passion for technology.",
      degree: "HighSchool Dipoma - Ontario Secondary School Diploma (OSSD)",
    },
  ];
  

  export const projects = [
    {
      id: 0,
      title: "FGPA Mini Projects",
      description:
        "Learning how to code in Verilog and VHDL through QuartusPrime and simulating in Questa and live FPGA board.",
      image: fpgaLogo,
      tags: ["Verilog", "VHDL", "QuartusPrime", "Modelsim", "FPGA (MAX10)"],
      github: "https://github.com/Gobind-Kailey/FPGA_10M50DAF484C7G",
      // webapp: "http://tiny.cc/Portfolio-Gobind-Kailey",
    },
    {
      id: 1,
      title: "Custom PCB Development & Layout",
      description:
        "Designed a PCB to learn the basics of PCB layout, schematic capture, and manufacturing.",
      image: pcbLogo,
      tags: ["KiCad", "PCB Design", "STM32CubeIDE"],
      github: "https://github.com/Gobind-Kailey/PCB-Designing-",
      //webapp: "https://removeyourbg.netlify.app/",
    },
    {
      id: 2,
      title: "Embedded Spatial Mapping System",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: microcontrollerLogo,
      tags: ["Python", "C", "Microcontroller", "Keil uVision"],
      github: "https://github.com/Gobind-Kailey/Microprocesser-Systems-Project-",
     // webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 3,
      title: "Arduino Line Follower Robot",
      description:
        "Design an Arduino-powered robot capable of executing precise square-shaped movements and accurately following a line using sensors.",
      image: arduino_line_follower_Logo,
      tags: ["C++", "PCB Design", "Soldering", "Arduino Uno"],
      github: "https://github.com/Gobind-Kailey/Arudino-Line-Follower", 
      webapp: "http://tiny.cc/Portfolio-Gobind-Kailey",
    },
    {
      id: 4,
      title: "Snake Game",
      description:
        "Project to improve my C and C++ programming skills while gaining better understanding of OOD (Object Orienteded Design).",
      image: snakeLogo,
      tags: ["C++", "C", "OOD", "VSCode", "Git", "GitHub"],
      github: "https://github.com/Gobind-Kailey/Snake-Game",
     // webapp: "https://csprep.netlify.app/",
    },
    {
      id: 5,
      title: "BudgetFlyer",
      description:
        "Utilized the 'Sheety' API for retrieving the Google Sheet data, The Amadeous API for finding the flights, and Twilio API for messaging cheap flights.",
      image: flightLogo,
      tags: ["Python", "API", "VSCode", "Git", "GitHub"],
      github: "https://github.com/Gobind-Kailey/Cheap-Flight-Finder-",
     // webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 6,
      title: "Power in Community",
      description:
        "Designed a device to improve the daily life of our new client with Spina Bifida." + 
        " Click on 'View Live' for more details.",
      image: communityLogo,
      tags: ["Autodesk Inventor", "Protoyping", "ANSYS-Granta-EduPack", "3D Printing"],
     // github: "http://tiny.cc/Portfolio-Gobind-Kailey", Doesn't have a github link
      webapp: "http://tiny.cc/Portfolio-Gobind-Kailey",
    },
    
    {
      id: 7,
      title: "Recycling System",
      description:
        "Designed a system for sorting and recycling containers of varying materials. This project was split into modeling and computing sub-teams working simultaneously." + 
        " Click on 'View Live' for more details.",
      image: recyclingsystemLogo,
      tags: ["Autodesk Inventor", "Protoyping", "ANSYS-Granta-EduPack", "Laser Printing"],
     // github: "https://github.com/codingmastr/Webverse-Digital",  Doesn't have github link 
      webapp: "http://tiny.cc/Portfolio-Gobind-Kailey",
    },
    {
      id: 8,
      title: "Get a Grip",
      description:
        "Designed a system for securely transferring surgical instrument to an autoclave for sterilization. This project was split into computing and modeling sub-teams working simultaneously." + 
        " Click on 'View Live' for more details.",
      image: getgripLogo,
      tags: ["Python", "Quanser Interactive Labs", "ANSYS-Granta-EduPack"],
  //    github: "https://codingmasterweb.in/",    Doesn't have github link 
      webapp: "http://tiny.cc/Portfolio-Gobind-Kailey",
    },
    {
      id: 9,
      title: "Renewable Technology Challenge",
      description:
        "Designed a wind turbine to generate large amounts of electric power on a new wind farm in Wolfe Island near Kingston, Ontario. This wind farm will be an essential energy source for nearby cities." + 
        " Click on 'View Live' for more details.",
      image: renewableLogo,
      tags: ["Autdesk Inventor", "ANSYS-Granta-EduPack", "Objective Trees", "Data analysis"],
      github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "http://tiny.cc/Portfolio-Gobind-Kailey",
    },
    
    
  ];  


  export const certifications = [
    
     {
      id: 0,
      title: "ROS 2 Nav2 [Navigation 2 Stack] - with SLAM and Navigation",
      image: nav2_certificateLogo,
      tags: ["Linux (Ubuntu 22.04)", "ROS2", "NAV2", "SLAM", "Python"],
      // github: "https://github.com/Gobind-Kailey/C-learning-", // add to github
     // webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "ROS2 (Foxy-Humble) For Beginners I: Basics, Motion & Lasers",
      image: ros2_certificateLogo,
      tags: ["Linux (Ubuntu 22.04)", "ROS2", "Python", "C++"],
      // github: "https://github.com/Gobind-Kailey/C-learning-", // add to github
     // webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 2,
      title: "Udemy C Programming Bootcamp",
      image: certificateLogo,
      tags: ["C"],
      github: "https://github.com/Gobind-Kailey/C-learning-", // add to github
     // webapp: "https://githubprofiledetective.netlify.app/",
    },
   
  ]