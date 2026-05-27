import styles from "./page.module.css";

export const metadata = {
  title: "Services | SamyugTech Cloud Consulting",
  description: "Explore our Cloud Consulting, DevOps Automation, and DevSecOps services designed for global scale.",
};

export default function Services() {
  return (
    <div className={styles.pageContainer}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Our <span className="text-gradient">Specializations</span></h1>
          <p className={styles.pageSubtitle}>
            We design, build, and secure cloud infrastructures using modern patterns, enabling seamless software delivery cycles.
          </p>
        </div>

        <div className={styles.servicesList}>
          {/* Service 1 - Cloud Architecture */}
          <div className={`${styles.serviceItem} glass-panel`}>
            <div className={styles.serviceHeader}>
              <div className={styles.iconBox}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>
              </div>
              <h2>Cloud Architecture & Migration</h2>
            </div>
            
            <p className={styles.serviceDesc}>
              We architect resilient, highly available topologies across AWS, Azure, and Google Cloud. Our cloud migration service moves workloads with zero business disruption using well-architected framework reviews.
            </p>

            <ul className={styles.featureList}>
              <li>
                <svg className={styles.checkIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Multi-cloud and hybrid networking design
              </li>
              <li>
                <svg className={styles.checkIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Workload migration & data synchronization
              </li>
              <li>
                <svg className={styles.checkIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Cost optimization and serverless design
              </li>
            </ul>

            <div className={styles.techStack}>
              <span className={styles.techBadge}>AWS</span>
              <span className={styles.techBadge}>Azure</span>
              <span className={styles.techBadge}>GCP</span>
              <span className={styles.techBadge}>Serverless</span>
            </div>
          </div>

          {/* Service 2 - DevOps */}
          <div className={`${styles.serviceItem} glass-panel`}>
            <div className={styles.serviceHeader}>
              <div className={styles.iconBox}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
              </div>
              <h2>DevOps & CI/CD Orchestration</h2>
            </div>
            
            <p className={styles.serviceDesc}>
              Automate your testing, compilation, and environment provisioning. We treat infrastructure as code and run stateless container schedulers to build resilient, automated delivery loops.
            </p>

            <ul className={styles.featureList}>
              <li>
                <svg className={styles.checkIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Declarative Infrastructure as Code (IaC)
              </li>
              <li>
                <svg className={styles.checkIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Kubernetes cluster operations & deployment automation
              </li>
              <li>
                <svg className={styles.checkIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Stateless runner pools & GitHub/GitLab pipelines
              </li>
            </ul>

            <div className={styles.techStack}>
              <span className={styles.techBadge}>Terraform</span>
              <span className={styles.techBadge}>Kubernetes</span>
              <span className={styles.techBadge}>Helm</span>
              <span className={styles.techBadge}>GitHub Actions</span>
            </div>
          </div>

          {/* Service 3 - DevSecOps */}
          <div className={`${styles.serviceItem} glass-panel`}>
            <div className={styles.serviceHeader}>
              <div className={styles.iconBox}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h2>DevSecOps & Compliance</h2>
            </div>
            
            <p className={styles.serviceDesc}>
              Inject compliance guidelines at runtime. We deploy automated image linters, vault stores for secrets management, and network policies to secure your data and pass SOC2/ISO audit gates.
            </p>

            <ul className={styles.featureList}>
              <li>
                <svg className={styles.checkIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Vulnerability scanning & static code analysis (SAST/DAST)
              </li>
              <li>
                <svg className={styles.checkIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Secrets rotation & least-privilege IAM policies
              </li>
              <li>
                <svg className={styles.checkIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                SOC2 / ISO 27001 compliance audit preparation
              </li>
            </ul>

            <div className={styles.techStack}>
              <span className={styles.techBadge}>HashiCorp Vault</span>
              <span className={styles.techBadge}>Trivy</span>
              <span className={styles.techBadge}>SOC2 Auditing</span>
              <span className={styles.techBadge}>IAM Policies</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
