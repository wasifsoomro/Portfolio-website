// Header.js
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css'; // Import the custom CSS module

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} id="logo">
        <Link href="/">
          <h1 className={styles.logoText}>Wasif Soomro</h1>
        </Link>
      </div>

      <div className={styles.menuIcon} onClick={toggleMenu}>
        <span className={styles.iconBar}></span>
        <span className={styles.iconBar}></span>
        <span className={styles.iconBar}></span>
      </div>

      <nav
        className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
      >
        <div
          className={styles.closeIcon}
          onClick={toggleMenu}
        >
          &#10005;
        </div>

        <Link href="/" className={styles.navLink} onClick={toggleMenu}>
          Home
        </Link>
        <Link href="/projects" className={styles.navLink} onClick={toggleMenu}>
          Projects
        </Link>
        <Link href="/about" className={styles.navLink} onClick={toggleMenu}>
          About Me
        </Link>
        <Link href="/contact" className={styles.navLink} onClick={toggleMenu}>
          Contact Me
        </Link>
      </nav>
    </header>
  );
}
