"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Magic Entertainment Portal",
    description: "Employed MERN stack technology with Redis cache for project development, offering diverse services like online board games, personalized music/videos, and ancient artifact exploration,with centralized subscription system, chat functionality, and various APIs for efficient database management.",
    image: "/images/projects/P-ME.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shivam0612/Magic-Entertainment.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Portfolio Website I",
    description: "Developed a portfolio project in Next.js with Tailwind CSS and Framer Motion for smooth animations and transitions.",
    image: "/images/projects/P-PF.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shivam0612/my-portfolio.git",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Portfolio Website II",
    description: "This is a portfolio website built with Next.js and Tailwind CSS. It showcases your skills, projects, and achievements in an elegant and responsive design.",
    image: "/images/projects/P-PFM.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shivam0612/Portfolio_2024.git",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Student Management System",
    description: "The Student Management System is a comprehensive project developed using cross-platform technologies, combining Asp.net (C#) for web development and Android for mobile applications.",
    image: "/images/projects/P-SMS.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/shivam0612/Student-Management-System.git",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Amazona",
    description: "Developed an Amazona project with MERN Stack, Redux, Bootstrap, PayPal Sandbox for secure payment transactions, replicating dynamic e-commerce functionality.",
    image: "/images/projects/P-Amazona.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shivam0612/Amazona---Amazon-Clone.git",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Lambton College",
    description: "An HTML, CSS, and JS-based website offering static information about Lambton College, including details about its mission, career opportunities, contact information, and provided services.",
    image: "/images/projects/P-LC.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shivam0612/LambtonCollege_Clone.git",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Daily Sleep Tracker",
    description: "Developed a sleep tracking project in Node.js with Handlebars, allowing users to input data and visualize sleep patterns over a period using real-time MongoDB Charts.",
    image: "/images/projects/P-DST.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shivam0612/DailySleepTracker.git",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Quiz App",
    description: "Developed a sleep tracking project in Node.js with Handlebars, allowing users to input data and visualize sleep patterns over a period using real-time MongoDB Charts.",
    image: "/images/projects/P-QA.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shivam0612/QuizApp.git",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Online Word Counter",
    description: "The project is focused on creating a word counter application using HTML, CSS, Bootstrap, and JavaScript.",
    image: "/images/projects/P-OWC.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shivam0612/Online-Word-Counter.git",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Image Captioning",
    description: "Developed in Python using ML libraries, the project utilizes the VGG16 CNN for feature extraction from both grayscale and colored images, enabling captioning for both types of images.",
    image: "/images/projects/P-IC.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/shivam0612/Image_Captioning.git",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Emotion Detection",
    description: "Used Python with OpenCV, NumPy, scikit-learn, TensorFlow, and Keras to develop an Emotion Detection system, processing a diverse dataset of emotions.",
    image: "/images/projects/P-ED.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shivam0612/Emotion-Detection.git",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Mask Detection",
    description: "Developed a Mask Detection system using Python with OpenCV, NumPy, scikit-learn, TensorFlow, and Keras, processing images and classifying them based on the presence of a mask.",
    image: "/images/projects/P-MD.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shivam0612/Mask-Detection.git",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
