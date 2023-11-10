"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 9,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/9.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Business Page",
    description: "Authentication and CRUD operations",
    image: "/images/projects/11.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Client Software",
    description: "Project 5 description",
    image: "/images/projects/12.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Mobile E-commerce",
    description: "Project 5 description",
    image: "/images/projects/7.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Web Page",
    description: "Full Stack Web",
    image: "/images/projects/8.png",
    tag: ["All", "Web", 'Mobile'],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 20,
    title: "Summer Theme",
    description: "Graphics",
    image: "/images/projects/20.png",
    tag: ["All", "Graphics"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 21,
    title: "Halloween Theme",
    description: "Graphics",
    image: "/images/projects/21.png",
    tag: ["All", "Graphics"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 22,
    title: "Fall Theme",
    description: "Graphics",
    image: "/images/projects/22.png",
    tag: ["All", "Graphics"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 23,
    title: "Christmas Theme",
    description: "Graphics",
    image: "/images/projects/23.png",
    tag: ["All", "Graphics"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 24,
    title: "Autumn Theme",
    description: "Graphics",
    image: "/images/projects/24.png",
    tag: ["All", "Graphics"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 30,
    title: "Car Rental",
    description: "Full Stack Project",
    image: "/images/projects/30.png",
    tag: ["All", "Web", 'Mobile'],
    gitUrl: "/",
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
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Graphics"
          isSelected={tag === "Graphics"}
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
