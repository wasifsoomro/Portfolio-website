// About.js
import React from 'react';
import Image from 'next/image';
import styles from './About.module.css'; // Import custom CSS module

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.profileImageLarge}>
          <Image
            src="/profile.png"
            alt="About me"
            width={250}
            height={250}
            className={styles.profileImage}
          />
        </div>
        <div className={styles.aboutContent}>
          <h2 className={styles.heading}>About Me</h2>
          <p className={styles.description}>
            I&apos;m a passionate Front-End Developer, dedicated to building high-quality, user-centric websites.
          </p>
          <p className={`${styles.description} ${styles.additionalDescription}`}>
            I love creating efficient and beautiful applications that enhance the user experience. My journey in web development started with HTML and CSS, and I have expanded my skills to include JavaScript, React, and Next.js.
          </p>
        </div>
        <div className={styles.profileImageSmallContainer}>
          <Image
            src="/profile.png"
            alt="About me"
            width={250}
            height={250}
            className={styles.profileImage}
          />
          <p className={styles.additionalDescriptionSmall}>
            I love creating efficient and beautiful applications that enhance the user experience. My journey in web development started with HTML and CSS, and I have expanded my skills to include JavaScript, React, and Next.js.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
