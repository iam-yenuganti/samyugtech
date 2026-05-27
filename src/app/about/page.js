import styles from "./page.module.css";

export const metadata = {
  title: "About Us | SamyugTech Cloud Consulting",
  description: "Learn about our vision, core values, and expertise in global cloud automation and DevOps governance.",
};

export default function About() {
  return (
    <div className={styles.pageContainer}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>About <span className="text-gradient">samyug.tech</span></h1>
          <p className={styles.pageSubtitle}>
            Providing secure cloud architecture, infrastructure reliability engineering, and migration expertise to global businesses.
          </p>
        </div>

        <div className={styles.contentGrid}>
          {/* Mission */}
          <div className="glass-panel">
            <div className={styles.cardHeader}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem' }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <h2>Our Mission</h2>
            </div>
            <p className={styles.cardText}>
              To serve as the premier engineering partner for enterprises scaling operations. We believe in treating infrastructure strictly as code, removing manual deployment gates, and baking security and validation tests natively into every lifecycle stage.
            </p>
          </div>

          {/* Standards */}
          <div className="glass-panel">
            <div className={styles.cardHeader}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem' }}>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <h2>Global Standards</h2>
            </div>
            <p className={styles.cardText}>
              Operating internationally requires rigorous data protection controls and operational governance. We build infrastructures to meet SOC2, ISO 27001, and HIPAA compliance policies, ensuring your platform is secure and auditable.
            </p>
          </div>
        </div>

        {/* Operational Pillars */}
        <div className={styles.pillarsSection}>
          <h2 className={styles.pillarsTitle}>Our Core Pillars</h2>
          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
              <h3>01 / Security First</h3>
              <p>Security is integrated at the code level, not added as a perimeter filter afterward.</p>
            </div>
            <div className={styles.pillarCard}>
              <h3>02 / Infrastructure as Code</h3>
              <p>All cloud resources are declared and version-controlled. No manual environment setups.</p>
            </div>
            <div className={styles.pillarCard}>
              <h3>03 / Absolute Automation</h3>
              <p>If a task is performed more than twice, we write a script, playbook, or action workflow to automate it.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
