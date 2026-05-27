import styles from "./page.module.css";

export const metadata = {
  title: "Services | SamyugTech Cloud Consulting",
  description: "Explore our Cloud Consulting, DevOps Automation, and DevSecOps services.",
};

export default function Services() {
  return (
    <div className={styles.pageContainer}>
      <div className="container">
        <h1 className={styles.pageTitle}>Our <span className="text-gradient">Services</span></h1>
        
        <div className={styles.serviceItem}>
          <div className={styles.serviceContent}>
            <h2>☁️ Cloud Consulting & Migration</h2>
            <p>
              We specialize in end-to-end architecture design, seamless migrations, and infrastructure optimization for AWS, Microsoft Azure, and Google Cloud Platform.
              Our international enterprise-grade solutions ensure high availability and scalable performance.
            </p>
            <ul className={styles.featureList}>
              <li>Cloud Readiness Assessment</li>
              <li>Multi-Cloud & Hybrid Strategies</li>
              <li>Disaster Recovery Planning</li>
            </ul>
          </div>
        </div>

        <div className={styles.serviceItem}>
          <div className={styles.serviceContent}>
            <h2>⚙️ DevOps & Automation</h2>
            <p>
              Accelerate your time-to-market with automated CI/CD pipelines and Infrastructure as Code (IaC). 
              We utilize cutting-edge tools like Terraform, Ansible, and Kubernetes to build resilient release cycles.
            </p>
            <ul className={styles.featureList}>
              <li>Continuous Integration & Delivery (CI/CD)</li>
              <li>Container Orchestration (Kubernetes/Docker)</li>
              <li>Infrastructure as Code (Terraform)</li>
            </ul>
          </div>
        </div>

        <div className={styles.serviceItem}>
          <div className={styles.serviceContent}>
            <h2>🔒 DevSecOps</h2>
            <p>
              Security is not an afterthought. We embed robust security protocols and continuous compliance checks 
              directly into your DevOps pipeline, safeguarding your assets against modern threats while maintaining international compliance.
            </p>
            <ul className={styles.featureList}>
              <li>Automated Security Scanning</li>
              <li>Compliance & Governance (SOC2, ISO)</li>
              <li>Identity & Access Management (IAM)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
