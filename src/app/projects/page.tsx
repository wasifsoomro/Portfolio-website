import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Simple Website",
    description:
      "A fully responsive website built with Next.js, showcasing my skills in web development and Next.js fundamentals.",
    image: "/mywebsite.png",
    link: "https://nextjs-website-tailwindcss-milestone2.vercel.app/",
  },
  {
    title: "Banking System",
    description: 
      "A Node.js application simulating essential banking functionalities, built to demonstrate backend and API management skills.",
    image: "/banking-system.webp",
    link: "https://github.com/wasifsoomro/Bank-System.git",
  },
  {
    title: "Quiz Application",
    description: 
      "An interactive quiz application developed with Node.js and TypeScript, highlighting backend logic and TypeScript usage.",
    image: "/quiz-application.webp",
    link: "https://github.com/wasifsoomro/quiz-app-.git",
  },
  {
    title: "Foodie Hamburger",
    description: 
      "A visually engaging, single-page food ordering application built to enhance UI/UX design skills.",
    image: "/foodie.png",
    link: "https://foodie-hamburger.vercel.app/",
  },
  {
    title: "Resume Builder",
    description: 
      "A dynamic resume builder allowing users to create and download a resume by entering personal details.",
    image: "/resume-builder.webp",
    link: "https://resume-milestone5.vercel.app/",
  },
  {
    title: "REST Countries API Explorer",
    description: 
      "A React app integrating REST Countries API to search and filter countries by region, showcasing API handling and data manipulation.",
    image: "/rest-countries.png",
    link: "https://github.com/wasifsoomro/Countries.git",
  },
  {
    title: "Pro ATM Simulation",
    description: 
      "A detailed ATM simulation project demonstrating my skills in TypeScript, focusing on transaction management and user interface.",
    image: "/atm-machine.webp",
    link: "https://github.com/wasifsoomro/ATM-Project.git",
  },
  {
    title: "100 Coding Challenges in TypeScript",
    description: 
      "A project featuring 100 diverse coding challenges completed in TypeScript, reflecting problem-solving and programming proficiency.",
    image: "/100 Coding.png",
    link: "https://github.com/wasifsoomro/CODING-CHALLENGES-FOR-100-DAYS.git",
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>All Projects</h1>
      <div className={`${styles.gridContainer} ${styles.grid3col}`}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title} project`}
              width={500}
              height={250}
              className={styles.projectImage}
            />
            <div className={styles.projectContent}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
              <Link href={project.link} passHref>
                <p className={styles.projectLink}>View Details</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
