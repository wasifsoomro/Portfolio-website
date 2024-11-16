// Projectspage.js
import React from 'react';
import Link from 'next/link';
import styles from './Projects.module.css'; // Import the custom CSS module

const Projects = () => {
  const myprojects = [
    {
      title: "Simple Website",
      description:
        "A fully responsive website built with Next.js, showcasing my skills in web development and Next.js fundamentals.",
      image: "/mywebsite.png",
      link: "https://nextjs-website-tailwindcss-milestone2.vercel.app/",
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
  ];

  return (
    <section className={styles.projectSection}>
      <h2 className={styles.heading}>Featured Projects</h2>
      <div className={styles.projectsContainer}>
        {myprojects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <Link href={project.link}>
                <p className={styles.viewDetailsButton}>View Details</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link href="/projects">
        <button className={styles.viewAllProjectsButton}>View All Projects</button>
      </Link>
    </section>
  );
};

export default Projects;
