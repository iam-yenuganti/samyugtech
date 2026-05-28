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
              Enterprise AIOps & Intelligent Cloud
            </div>
            <h1 className={styles.heroTitle}>
              Orchestrate Intelligent <span className="text-gradient">Cloud & LLMOps</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Scale your software delivery with automated AI agent pipelines, self-healing cloud architectures, and robust LLMOps staging environments across AWS, Azure, and GCP.
            </p>
            <div className={styles.heroActions}>
              <Link href="/services" className="btn-primary">
                Explore AI Services
              </Link>
              <Link href="/contact" className={styles.btnOutline}>
                Schedule AI Audit
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
                <span className={styles.terminalTitle}>bash - samyug-ai-agent-deploy</span>
              </div>
              <div className={styles.terminalBody}>
                <div className={styles.termRow}><span className={styles.termPrompt}>$</span> samyug-ai deploy-agent --model gemma-2b</div>
                <div className={`${styles.termRow} ${styles.termSuccess}`}>✓ Verifying cluster state on aws_eks_cluster.prod</div>
                
                <div className={styles.termRow}><span className={styles.termPrompt}>$</span> samyug-ai init-vectordb --type pgvector</div>
                <div className={styles.termRow}>Connecting to RDS Postgres instance...</div>
                <div className={styles.termRow}>Running migration: pgvector extension loaded.</div>
                <div className={`${styles.termRow} ${styles.termSuccess}`}>✓ Vector database initialized [PGVector: live]</div>
                
                <div className={styles.termRow}><span className={styles.termPrompt}>$</span> samyug-ai enforce-guardrails --model gemma-2b</div>
                <div className={`${styles.termRow} ${styles.termInfo}`}>✓ Input guardrails enabled (SOC2 and GDPR compliance verified)</div>
                <div className={styles.termRow}>Deploying autonomous replica sets...</div>
                <div className={`${styles.termRow} ${styles.termHighlight}`}>🚀 AI Agent Deployment Success! Live API at https://samyugtech.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud & Tech Badges Section */}
      <section className={styles.trustSection}>
        <div className="container">
          <p className={styles.trustTitle}>Supported Ecosystems & AI Architectures</p>
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
              <span>Azure AI</span>
            </div>
            <div className={styles.techBadge} title="Google Cloud Platform">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>Google Vertex</span>
            </div>
            <div className={styles.techBadge} title="AI & LLMOps Frameworks">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="5" r="2.5" />
                <circle cx="5" cy="12" r="2.5" />
                <circle cx="19" cy="12" r="2.5" />
                <circle cx="12" cy="19" r="2.5" />
                <line x1="12" y1="7.5" x2="12" y2="16.5" />
                <line x1="6.77" y1="13.77" x2="10.23" y2="17.23" />
                <line x1="17.23" y1="13.77" x2="13.77" y2="17.23" />
                <line x1="6.77" y1="10.23" x2="10.23" y2="6.77" />
                <line x1="17.23" y1="10.23" x2="13.77" y2="6.77" />
              </svg>
              <span>LLMOps</span>
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
              <div className={styles.metricLabel}>Autonomous SLA Uptime</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>50M+</div>
              <div className={styles.metricLabel}>AI Queries Automated</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>500+</div>
              <div className={styles.metricLabel}>Secure LLM Deployments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Services Section */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Engineered for Cognitive Scale</h2>
            <p className={styles.sectionSubtitle}>
              We connect model checkpoints, deploy containerized agent swarms, and verify vector store queries with latency auditing.
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
              <h3 className={styles.bentoTitle}>AIOps & Self-Healing Cloud</h3>
              <p className={styles.bentoDesc}>
                Real-time predictive telemetry, auto-scaling clusters, and autonomous self-repair systems to keep high-traffic infrastructure online with zero manual triage.
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
              <h3 className={styles.bentoTitle}>LLMOps & AI Agent Pipelines</h3>
              <p className={styles.bentoDesc}>
                Automate model training stages, manage vector embedding data pipelines, and deploy secure containerized AI Agents utilizing custom Helm and Kubernetes structures.
              </p>
              <div className={styles.bentoTags}>
                <span className={styles.bentoTag}>PGVector</span>
                <span className={styles.bentoTag}>LLM Hosting</span>
                <span className={styles.bentoTag}>Helm</span>
                <span className={styles.bentoTag}>EKS/GKE</span>
              </div>
            </div>

            {/* Card 3 - Security & DevSecOps */}
            <div className={`${styles.bentoCard} glass-panel`}>
              <div className={styles.bentoIconWrapper}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className={styles.bentoTitle}>Intelligent DevSecOps & Guardrails</h3>
              <p className={styles.bentoDesc}>
                Enforce privacy guidelines, detect vector injection threats, rotate API access credentials, and run compliance audits to guarantee SOC2/GDPR security.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
