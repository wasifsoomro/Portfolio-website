// HeroSection.js
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './HeroSection.module.css'; // Import the custom CSS module

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>Hello, I&apos;m Muhammad Wasif</h1>
          <p className={styles.subheading}>A passionate Front-End Developer</p>
          <div className={styles.buttonGroup}>
            <Link href="/contact">
              <button className={styles.button}>Get In Touch</button>
            </Link>
            <Link href="/projects">
              <button className={styles.button}>View Portfolio</button>
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/profile-nobg.png"
            alt="profile"
            width={350}
            height={300}
            className={styles.profileImage}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
