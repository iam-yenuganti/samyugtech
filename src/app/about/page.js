import styles from "./page.module.css";

export const metadata = {
  title: "About Us | SamyugTech Cloud Consulting",
  description: "Learn about our vision, core values, and expertise in AIOps, LLMOps pipelines, and secure model governance.",
};

export default function About() {
  return (
    <div className={styles.pageContainer}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>About <span className="text-gradient">samyug.tech</span></h1>
          <p className={styles.pageSubtitle}>
            Providing secure cloud architecture, autonomous infrastructure reliability engineering, and LLMOps integration for global businesses.
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
              To serve as the premier engineering partner for enterprises building intelligent platforms. We believe in treating model pipelines and vector storage as version-controlled code, removing manual deployment gates, and baking AIOps self-healing triggers directly into EKS and GKE runtimes.
            </p>
          </div>

          {/* Standards */}
          <div className="glass-panel">
            <div className={styles.cardHeader}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem' }}>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <h2>Model & Data Governance</h2>
            </div>
            <p className={styles.cardText}>
              Hosting generative AI models requires rigorous data protection controls. We design model hosting architectures to comply with SOC2, GDPR, and HIPAA compliance policies, ensuring training datasets and API communication remain encrypted.
            </p>
          </div>
        </div>

        {/* Operational Pillars */}
        <div className={styles.pillarsSection}>
          <h2 className={styles.pillarsTitle}>Our Core Pillars</h2>
          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
              <h3>01 / AIOps-First Systems</h3>
              <p>We deploy telemetry models that auto-detect failures, forecast scale, and self-heal cloud topologies.</p>
            </div>
            <div className={styles.pillarCard}>
              <h3>02 / LLMOps Infrastructure</h3>
              <p>All foundation models, fine-tuning configurations, and vector indices are maintained as reproducible code.</p>
            </div>
            <div className={styles.pillarCard}>
              <h3>03 / Privacy Guardrails</h3>
              <p>Real-time prompt scanners and PII database filters safeguard model prompts from leaking credentials.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
