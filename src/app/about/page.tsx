import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const AboutPage: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.heading}>About Me</h1>
        
        <div className={`${styles.contentWrapper} ${styles.contentWrapperRow}`}>
          <div className={styles.textContent}>
            <p className={styles.paragraph}>
              Hi, I&apos;m <strong>Muhammad Wasif</strong>, a passionate Front-End Developer. I have a strong foundation in HTML, CSS, JavaScript, React, and Next.js, and I am continuously learning and honing my skills to become a full-stack developer.
            </p>
            <p className={styles.paragraph}>
              My journey into web development has been both challenging and rewarding, driving me to create beautiful, responsive, and user-friendly websites. I am particularly interested in building modern interfaces and ensuring seamless user experiences.
            </p>
          </div>
          <Image
            src="/profile-nobg.png"
            alt="Muhammad Wasif"
            width={300}
            height={300}
            className={styles.profileImage}
          />
        </div>

        <h2 className={styles.subHeading}>Skills</h2>
        <div className={styles.skillsContainer}>
          {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'].map((skill, index) => (
            <span key={index} className={styles.skillBadge}>
              {skill}
            </span>
          ))}
        </div>

        <h2 className={styles.subHeading}>Goals</h2>
        <p className={styles.goalText}>
          My current focus is to deepen my knowledge of full-stack development, improve my problem-solving skills, and contribute to impactful projects. I am eager to expand my expertise by working with experienced developers and taking on complex challenges in web development.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
