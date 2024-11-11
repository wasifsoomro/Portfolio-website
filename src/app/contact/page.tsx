import Link from 'next/link';
import styles from './page.module.css';

const ContactPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.contactDetails}>
          <h1 className={styles.title}>Get in Touch</h1>

          <div className={styles.intro}>
            <p className={styles.introText}>
              Feel free to reach out to me via email, phone, or through my social media accounts. I&apos;d love to hear from you!
            </p>
          </div>

          <div className={styles.details}>
            <div className={styles.detailItem}>
              <span className={styles.icon}>&#9993;</span>
              <a href="mailto:yourname@example.com" className={styles.link}>
                wasifsoomro761@.com
              </a>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.icon}>&#9742;</span>
              <Link href="tel:+1234567890" className={styles.link}>
                +92 304 9830799
              </Link>
            </div>

            <div className={styles.socialLinks}>
              <Link href="https://www.linkedin.com/in/muhammad-wasif-337b5a213" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Link>
              <Link href="https://github.com/wasifsoomro" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>
              <Link href="https://x.com/M_WasifSoomro" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                Twitter
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Get In Touch</h2>
          <form action="mailto:yourname@example.com" method="POST" encType="text/plain" className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className={styles.textarea}
              />
            </div>
            <button
              type="submit"
              className={styles.button}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
