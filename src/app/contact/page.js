import styles from "./page.module.css";

export const metadata = {
  title: "Contact Us | SamyugTech Cloud Consulting",
  description: "Get in touch with SamyugTech to schedule an AIOps audit, plan an LLM deployment, or consult on vector databases.",
};

export default function Contact() {
  return (
    <div className={styles.pageContainer}>
      <div className="container">
        <div className={styles.contactLayout}>
          
          {/* Contact Info (Left) */}
          <div className={styles.infoColumn}>
            <div className={styles.badge}>
              <span className="glow-dot"></span>
              Secure Connection
            </div>
            <h1 className={styles.pageTitle}>Let's Build Your <span className="text-gradient">AI Scale Plan</span></h1>
            <p className={styles.pageSubtitle}>
              Whether you need to configure PGVector staging, optimize GPU node cluster configurations, or prepare for LLM compliance audits, our engineering team will design your topology.
            </p>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4>Email Us Directly</h4>
                  <p>consulting@samyugtech.com</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h4>SLA Guarantee</h4>
                  <p>We review and respond to inquiries within 12 business hours.</p>
                </div>
              </div>
            </div>

            <div className={styles.steps}>
              <h3>What Happens Next?</h3>
              <ul className={styles.stepsList}>
                <li>
                  <span className={styles.stepNumber}>1</span>
                  <strong>Discovery & Scale Call</strong> — We align on LLMOps, vector databases, and node scale parameters.
                </li>
                <li>
                  <span className={styles.stepNumber}>2</span>
                  <strong>Architecture Outline</strong> — We provide a high-level GPU cluster and compliance map.
                </li>
                <li>
                  <span className={styles.stepNumber}>3</span>
                  <strong>Execution Plan</strong> — We begin writing your infrastructure playbooks and container scripts.
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className={styles.formColumn}>
            <div className="glass-panel">
              <h2 className={styles.formTitle}>Initiate Consultation</h2>
              <form className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>Full Name</label>
                  <input type="text" id="name" className={styles.formInput} placeholder="John Doe" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>Work Email</label>
                  <input type="email" id="email" className={styles.formInput} placeholder="john.doe@company.com" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>How can we assist?</label>
                  <textarea id="message" className={styles.formTextarea} rows="5" placeholder="Specify AI models, vector database options, expected load scale, and engineering timelines..." required></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                  Send Secure Request
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
