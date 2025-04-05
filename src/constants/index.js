import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = ` 

🚀 Hi, I'm Tanishk Agrawal!  
I'm a passionate frontend developer currently in my 1st year at Newton School of Technology, Rishihood University. I have a strong interest in building modern, responsive, and user-friendly web applications.  

💡 Always eager to learn, I continuously explore new technologies and frameworks to enhance my skills and create innovative digital experiences. Whether it's crafting clean UI, optimizing performance, or experimenting with the latest web trends, I love every part of the development journey.  

🔗 Explore my projects and feel free to connect with me! Let's build something amazing together.  `;

export const ABOUT_TEXT = ` I'm frontend developer with a passion for creating dynamic and user-friendly web applications. I enjoy turning ideas into reality through clean, efficient, and visually appealing code.

💻 Technologies I work with:

Frontend: React, HTML, CSS, JavaScript, Tailwind CSS
Backend & Others: Python
Mindset: Strong problem-solving skills and a passion for tackling challenges in web development.


🚀 I'm always open to learning, collaborating, and working on exciting projects. Let's connect and build something amazing! 🎯. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projectsand also love to play sports like badminton and basketball, which help me stay active and bring teamwork and strategy into my daily life.`;



export const PROJECTS = [
  {
    title: "Food-Delivery-App",
    image: project1,
    description:
      'This responsive food delivery web app lets users browse, select, and order food with ease. Built with React and Tailwind CSS, it features dynamic product pages, an intuitive cart system, and a smooth payment flow UI. React Router enables seamless navigation, and the mobile-optimized design ensures a great user experience. A login UI is also included, ready for future authentication integration.',
    technologies: ["HTML", "CSS", "React", "JavaScript"],
    projectCode: `https://github.com/tani066/Food-Del-App-React`,
    projectLink:`https://food-del-app-to.netlify.app/`
  },
  {
    title: "Doctor Appointment App",
    image: project2,
    description:
    'An easy-to-use app that lets you quickly book appointments with doctors at nearby hospitals. Find available slots, compare specialties, and schedule your visit in just a few taps. You can filter doctors by specialty, ratings, and hospital proximity. Get instant confirmation and reminders for your appointments. The app also provides directions to the hospital and allows easy rescheduling or cancellation.',
    technologies: ["HTML", "Tailwind-CSS", "React", "Firebase"],
    projectCode: `https://github.com/tani066/Hospital-Project`,
    projectLink:`https://hospital-project-liart.vercel.app/`
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind", "Framer-motion"],
    projectCode:`https://github.com/tani066/My-Portfolio`,
    projectLink:`https://portfolio-one-ecru-86.vercel.app/`
  },
  {
    title: "Capstone Project",
    image: project4,
    description:
      `Company Frontend UI Design (First Semester Project)

  Designed and developed a responsive, modern UI for a company's frontend using HTML and CSS. Implemented smooth animations, interactive elements, and clean layouts to enhance user experience and maintainability, ensuring seamless integration with backend systems.`,
    technologies: ["HTML", "CSS", "Framer-motion(animation)"],
    projectCode:`https://github.com/tani066/Capstone-Project`,
    projectLink:`https://tanishk-capstone.netlify.app/`

  },
];

export const CONTACT = {
  address: "Rishihood University , Sonipat , Haryana",
  phoneNo: "+91 7974997180",
  email: "tanishk.agrawal2024@nst.rishihood.edu.in",
};


