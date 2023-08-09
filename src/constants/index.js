import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
    vignan,
    narayana,
    sathyabama,
    LA,
    promptopia,
    swiftNews,
    anpr,
    tf,
    sql,
    python
  } from "../assets";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "ML Engineer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Scientist",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Tensor Flow",
      icon: tf,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Student (Primary School)",
      company_name: "Vignan Bo Tree",
      icon: vignan,
      iconBg: "#383E56",
      date: "April 2016 - May 2017",
      points: [
        "Learnt many social skills and work ethics.",
        "Gained confidence to step into the real world.",
        "Had fun participating in sports, seriously few of the best days of my life.",
        "Grade: 10",
      ],
    },
    {
      title: "Student (High School)",
      company_name: "Narayana Junior College",
      icon: narayana,
      iconBg: "#E6DEDD",
      date: "March 2017 - April 2019",
      points: [
        "Improved critical thinking and problem solving.",
        "Met people with wide range of toughts and Ambitions.",
        "Improved my discipline and work ethics. Also felt inspired by few of my friends.",
        "Grade: 9.6",
      ],
    },
    {
      title: "Student (Undergraduate)",
      company_name: "Sathyabama Institute Of Science And Technology",
      icon: sathyabama,
      iconBg: "#383E56",
      date: "September 2019 - August 2023",
      points: [
        "Leaned the importance of living, Truly speaking from dealing with expenses to making a life long realations.",
        "Got selected to Electronics and Communication Engineering but never gave up on my passion to design something on software.",
        "Found my fun in web developement and Machine Learning and worked on it to my fullest.",
        "Grade: 9",
      ],
    },
    {
      title: "Data Science Trainee",
      company_name: "Latent View",
      icon: LA,
      iconBg: "#E6DEDD",
      date: "April 2023 - Present",
      points: [
        "Analysing and Visualising data sheets and transforming it to make it viable to everyone.",
        "Reducing the complexity of large chunks of data.",
        "Presenting it to a decisive worksheet to sum up all the insights of the data and working on the remarks.",
        "Working on algorithms and formulas to compute to require data and present it in almost real time.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Promptopia",
      description:
        "Promptopia is a prompt sharing platform for creating and sharing prompts. Simply put X (previously twitter) for prompts.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: promptopia,
      source_code_link: "https://github.com/kavuriShivaSaiKiran/promptopia",
    },
    {
      name: "Swift News",
      description:
        "A News App that has category based scrolling and not so boring UI. An interactive way of reading your daily news.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "infinityscroll",
          color: "pink-text-gradient",
        },
      ],
      image: swiftNews,
      source_code_link: "https://github.com/kavuriShivaSaiKiran/SwiftNews",
    },
    {
      name: "ANPR",
      description:
        "Automatic number plate recognition system is a real time application that recognises characters and convert it to a csv sheet.",
      tags: [
        {
          name: "ML",
          color: "blue-text-gradient",
        },
        {
          name: "OpenCv",
          color: "green-text-gradient",
        },
        {
          name: "Tensorflow",
          color: "pink-text-gradient",

        },
      ],
      image: anpr,
      source_code_link: "https://github.com/kavuriShivaSaiKiran/Anpr",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };