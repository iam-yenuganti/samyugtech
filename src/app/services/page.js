import styles from "./page.module.css";

export const metadata = {
  title: "Services | SamyugTech Cloud Consulting",
  description: "Explore our AIOps consulting, LLMOps pipelines, and AI DevSecOps services designed for global scale.",
};

export default function Services() {
  return (
    <div className={styles.pageContainer}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Our <span className="text-gradient">Specializations</span></h1>
          <p className={styles.pageSubtitle}>
            We design, scale, and secure AI workloads on multi-cloud environments, enabling reliable model delivery and autonomous system maintenance.
          </p>
        </div>

        <div className={styles.servicesList}>
          {/* Service 1 - AIOps */}
          <div className={`${styles.serviceItem} glass-panel`}>
            <div className={styles.serviceHeader}>
              <div className={styles.iconBox}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>
              </div>
              <h2>AIOps & Smart Infrastructure</h2>
            </div>
            
            <p className={styles.serviceDesc}>
              Move beyond manual incident triage. We build predictive telemetry systems, launch self-repairing EKS/GKE cluster topologies, and use load-forecasting metrics to scale and optimize your multi-cloud hosting costs.
            </p>

            <ul className={styles.featureList}>
              <li>
                <svg className={styles.checkIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Auto-triage and self-repairing Kubernetes nodes
              </li>
              <li>
                <svg className={styles.checkIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Predictive system resource loading models
              </li>
              <li>
                <svg className={styles.checkIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Dynamically scaled GPU cluster optimization
              </li>
            </ul>

            <div className={styles.techStack}>
              <span className={styles.techBadge}>AIOps</span>
              <span className={styles.techBadge}>Kubernetes</span>
              <span className={styles.techBadge}>Vertex AI</span>
              <span className={styles.techBadge}>GPU Scaling</span>
            </div>
          </div>

          {/* Service 2 - LLMOps */}
          <div className={`${styles.serviceItem} glass-panel`}>
            <div className={styles.serviceHeader}>
              <div className={styles.iconBox}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
              </div>
              <h2>LLMOps & AI Agent Integration</h2>
            </div>
            
            <p className={styles.serviceDesc}>
              Streamline model fine-tuning and host foundation models reliably. We design fast pipelines for embeddings generation, manage vector database architectures (Milvus, Pinecone, pgvector), and scale secure containerized AI Agent networks.
            </p>

            <ul className={styles.featureList}>
              <li>
                <svg className={styles.checkIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Embedding pipeline and vector storage layout (PGVector/Milvus)
              </li>
              <li>
                <svg className={styles.checkIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Model registry, fine-tuning scripts, and weights updates
              </li>
              <li>
                <svg className={styles.checkIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Secure multi-agent network orchestration in Kubernetes
              </li>
            </ul>

            <div className={styles.techStack}>
              <span className={styles.techBadge}>LLMOps</span>
              <span className={styles.techBadge}>Milvus / Pinecone</span>
              <span className={styles.techBadge}>PGVector</span>
              <span className={styles.techBadge}>LangChain / LlamaIndex</span>
            </div>
          </div>

          {/* Service 3 - AI DevSecOps */}
          <div className={`${styles.serviceItem} glass-panel`}>
            <div className={styles.serviceHeader}>
              <div className={styles.iconBox}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h2>AI DevSecOps & Governance</h2>
            </div>
            
            <p className={styles.serviceDesc}>
              Bake data security directly into your model pipelines. We construct automated prompt/input guardrails, safeguard API tokens from leaking, filter sensitive data from model training datasets, and compile compliance audit reports.
            </p>

            <ul className={styles.featureList}>
              <li>
                <svg className={styles.checkIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Automated model guardrails & prompt injection scanning
              </li>
              <li>
                <svg className={styles.checkIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                PII data filtering for model training compliance
              </li>
              <li>
                <svg className={styles.checkIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                SOC2 / GDPR compliance for AI model host applications
              </li>
            </ul>

            <div className={styles.techStack}>
              <span className={styles.techBadge}>Model Guardrails</span>
              <span className={styles.techBadge}>GDPR Compliance</span>
              <span className={styles.techBadge}>Vault Store</span>
              <span className={styles.techBadge}>AI Auditing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
