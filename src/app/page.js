import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroLeft}>
            <div className={styles.badge}>
              <span className="glow-dot"></span>
              Enterprise-Grade Cloud Automation
            </div>
            <h1 className={styles.heroTitle}>
              Accelerate Software Delivery with <span className="text-gradient">Secure DevOps</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Empowering global enterprises with automated CI/CD pipelines, robust Infrastructure as Code (IaC), and secure DevSecOps architectures across AWS, Azure, and GCP.
            </p>
            <div className={styles.heroActions}>
              <Link href="/services" className="btn-primary">
                Explore Our Services
              </Link>
              <Link href="/contact" className={styles.btnOutline}>
                Book a Consultation
              </Link>
            </div>
          </div>
          
          <div className={styles.heroRight}>
            {/* Animated Terminal Mockup */}
            <div className={styles.terminal}>
              <div className={styles.terminalHeader}>
                <span className={styles.dotRed}></span>
                <span className={styles.dotYellow}></span>
                <span className={styles.dotGreen}></span>
                <span className={styles.terminalTitle}>bash - samyugtech-pipeline</span>
              </div>
              <div className={styles.terminalBody}>
                <div className={styles.termRow}><span className={styles.termPrompt}>$</span> npm run test:security</div>
                <div className={`${styles.termRow} ${styles.termSuccess}`}>✓ 12 security rules checked. 0 vulnerabilities found.</div>
                
                <div className={styles.termRow}><span className={styles.termPrompt}>$</span> terraform apply -auto-approve</div>
                <div className={styles.termRow}>aws_eks_cluster.prod: Creating...</div>
                <div className={styles.termRow}>aws_eks_cluster.prod: Still creating... [10s elapsed]</div>
                <div className={`${styles.termRow} ${styles.termSuccess}`}>aws_eks_cluster.prod: Creation complete [ID: prod-cluster]</div>
                <div className={`${styles.termRow} ${styles.termInfo}`}>Apply complete! Resources: 8 added, 0 changed, 0 destroyed.</div>
                
                <div className={styles.termRow}><span className={styles.termPrompt}>$</span> helm upgrade --install samyug-app ./charts</div>
                <div className={styles.termRow}>Release "samyug-app" has been upgraded. Status: deployed</div>
                <div className={`${styles.termRow} ${styles.termHighlight}`}>🚀 Deployment Success! Domain live at https://samyugtech.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud & Tech Badges Section */}
      <section className={styles.trustSection}>
        <div className="container">
          <p className={styles.trustTitle}>Supported Ecosystems & Technologies</p>
          <div className={styles.badgeGrid}>
            <div className={styles.techBadge} title="Amazon Web Services">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <span>AWS Cloud</span>
            </div>
            <div className={styles.techBadge} title="Microsoft Azure">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>
              <span>Azure</span>
            </div>
            <div className={styles.techBadge} title="Google Cloud Platform">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>Google Cloud</span>
            </div>
            <div className={styles.techBadge} title="Kubernetes & Containers">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Kubernetes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className={styles.metricsSection}>
        <div className="container">
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>99.99%</div>
              <div className={styles.metricLabel}>Infrastructure Uptime</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>10M+</div>
              <div className={styles.metricLabel}>Requests Automated</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>250+</div>
              <div className={styles.metricLabel}>Secure CI/CD Deployments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Services Section */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Engineered for Modern Scale</h2>
            <p className={styles.sectionSubtitle}>
              We construct reliable cloud topologies, deploy zero-downtime integration loops, and verify compliance at run-time.
            </p>
          </div>
          
          <div className={styles.bentoGrid}>
            {/* Card 1 - Cloud Infrastructure */}
            <div className={`${styles.bentoCard} glass-panel`}>
              <div className={styles.bentoIconWrapper}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>
              </div>
              <h3 className={styles.bentoTitle}>Cloud Architecture & Migration</h3>
              <p className={styles.bentoDesc}>
                Strategic blueprints and lift-and-shift operations across global hyper-scalers (AWS, Azure, GCP). Optimized for cost and high resilience.
              </p>
            </div>

            {/* Card 2 - DevOps Highlight Card */}
            <div className={`${styles.bentoCard} ${styles.bentoHighlight} glass-panel`}>
              <div className={styles.bentoIconWrapper}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
              </div>
              <h3 className={styles.bentoTitle}>DevOps & CI/CD Orchestration</h3>
              <p className={styles.bentoDesc}>
                Automate testing and deployments using custom Helm charts, GitHub Actions, Terraform workspace management, and Kubernetes container setups.
              </p>
              <div className={styles.bentoTags}>
                <span className={styles.bentoTag}>Terraform</span>
                <span className={styles.bentoTag}>Helm</span>
                <span className={styles.bentoTag}>Actions</span>
                <span className={styles.bentoTag}>Docker</span>
              </div>
            </div>

            {/* Card 3 - Security & DevSecOps */}
            <div className={`${styles.bentoCard} glass-panel`}>
              <div className={styles.bentoIconWrapper}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className={styles.bentoTitle}>Automated DevSecOps</h3>
              <p className={styles.bentoDesc}>
                Real-time threat modeling, policy-as-code linting, and audit controls built into deployment paths to enforce SOC2 and ISO compliance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
