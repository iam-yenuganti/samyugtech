import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>
            End-to-End <span className="text-gradient">Cloud & DevOps</span> Automation
          </h1>
          <p className={styles.heroSubtitle}>
            Empowering global enterprises with cutting-edge DevSecOps, seamless migrations, and secure architecture across AWS, Azure, and GCP.
          </p>
          <div className={styles.heroActions}>
            <a href="/services" className="btn-primary">Explore Services</a>
            <a href="/contact" className={styles.btnOutline}>Get a Consultation</a>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className={styles.servicesSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Core Expertise</h2>
          <div className={styles.servicesGrid}>
            <div className="glass-panel">
              <h3>☁️ Cloud Consulting</h3>
              <p>Strategic architecture and seamless migration across AWS, Azure, and Google Cloud Platform.</p>
            </div>
            <div className="glass-panel">
              <h3>⚙️ DevOps Automation</h3>
              <p>Robust CI/CD pipelines and Infrastructure as Code to accelerate your delivery.</p>
            </div>
            <div className="glass-panel">
              <h3>🔒 DevSecOps</h3>
              <p>Integrating security natively into your pipelines to ensure international compliance standards.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
