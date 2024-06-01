"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Magic Entertainment Portal",
    description: "Project 1 description",
    image: "/images/projects/P-ME.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shivam0612/Magic-Entertainment.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Portfolio Website I",
    description: "Project 2 description",
    image: "/images/projects/P-PF.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shivam0612/my-portfolio.git",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Portfolio Website II",
    description: "Project 3 description",
    image: "/images/projects/P-PFM.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shivam0612/Portfolio_2024.git",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Student Management System",
    description: "Project 4 description",
    image: "/images/projects/P-SMS.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/shivam0612/Student-Management-System.git",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Amazona",
    description: "Authentication and CRUD operations",
    image: "/images/projects/P-Amazona.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shivam0612/Amazona---Amazon-Clone.git",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Lambton College",
    description: "Project 5 description",
    image: "/images/projects/P-LC.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shivam0612/LambtonCollege_Clone.git",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Daily Sleep Tracker",
    description: "Project 1 description",
    image: "/images/projects/P-DST.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shivam0612/DailySleepTracker.git",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Quiz App",
    description: "Project 2 description",
    image: "/images/projects/P-QA.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shivam0612/QuizApp.git",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Online Word Counter",
    description: "Project 3 description",
    image: "/images/projects/P-OWC.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shivam0612/Online-Word-Counter.git",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Image Captioning",
    description: "Project 4 description",
    image: "/images/projects/P-IC.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/shivam0612/Image_Captioning.git",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Emotion Detection",
    description: "Authentication and CRUD operations",
    image: "/images/projects/P-ED.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shivam0612/Emotion-Detection.git",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Mask Detection",
    description: "Project 5 description",
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
