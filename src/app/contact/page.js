import styles from "./page.module.css";

export const metadata = {
  title: "Contact Us | SamyugTech",
  description: "Get in touch with SamyugTech for cloud consulting and DevOps automation.",
};

export default function Contact() {
  return (
    <div className={styles.pageContainer}>
      <div className="container">
        <h1 className={styles.pageTitle}>Get in <span className="text-gradient">Touch</span></h1>
        
        <div className={styles.contactWrapper}>
          <div className="glass-panel">
            <h2>Let's build your cloud strategy.</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Fill out the form below and our global consulting team will get back to you within 24 hours.
            </p>
            
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Work Email</label>
                <input type="email" id="email" placeholder="john@company.com" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">How can we help?</label>
                <textarea id="message" rows="5" placeholder="Tell us about your cloud infrastructure needs..." required></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
