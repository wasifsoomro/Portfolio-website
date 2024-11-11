// Skills.js
import React from 'react';
import styles from './Skills.module.css'; // Import the custom CSS module

const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Skills</h2>
        <p className={styles.subtitle}>
          Technologies I work with to build engaging applications
        </p>

        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>
            <div className={styles.iconContainer}>
            <img src="html.png" alt="HTML Icon" className={`${styles.iconImage} ${styles.htmlImage}`} />
            </div>
            <h3 className={styles.skillTitle}>HTML</h3>
          </div>

          <div className={styles.skillCard}>
            <div className={styles.iconContainer}>
            <img src="/css.png" alt="CSS Icon" className={`${styles.iconImage} ${styles.cssImage}`} />
            </div>
            <h3 className={styles.skillTitle}>CSS</h3>
          </div>

          <div className={styles.skillCard}>
            <div className={styles.iconContainer}>
            <img src="/javascript.png" alt="JavaScript Icon" className={`${styles.iconImage} ${styles.javaImage}`} />
            </div>
            <h3 className={styles.skillTitle}>JavaScript</h3>
          </div>

          <div className={styles.skillCard}>
            <div className={styles.iconContainer}>
            <img src="/typescriptlogo.png" alt="TypeScript Icon" className={`${styles.iconImage} ${styles.typeImage}`} />
            </div>
            <h3 className={styles.skillTitle}>TypeScript</h3>
          </div>

          <div className={styles.skillCard}>
            <div className={styles.iconContainer}>
            <img src="/nodejs.png" alt="Node.js Icon" className={`${styles.iconImage} ${styles.nodeImage}`} />
            </div>
            <h3 className={styles.skillTitle}>Node.js</h3>
          </div>

          <div className={styles.skillCard}>
            <div className={styles.iconContainer}>
            <img src="/react-icon.png" alt="React.js Icon" className={`${styles.iconImage} ${styles.reactImage}`} />
            </div>
            <h3 className={styles.skillTitle}>React.js</h3>
          </div>

          <div className={styles.skillCard}>
            <div className={styles.iconContainer}>
            <img src="/next.png" alt="Next.js Icon" className={`${styles.iconImage} ${styles.nextImage}`} />
            </div>
            <h3 className={styles.skillTitle}>Next.js</h3>
          </div>

          <div className={styles.skillCard}>
            <div className={styles.iconContainer}>
            <img src="/tailwindcss.png" alt="Tailwind CSS Icon" className={`${styles.iconImage} ${styles.tailImage}`} />
            </div>
            <h3 className={styles.skillTitle}>Tailwind CSS</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
