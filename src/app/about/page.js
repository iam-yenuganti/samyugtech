import styles from "./page.module.css";

export const metadata = {
  title: "About Us | SamyugTech Cloud Consulting",
  description: "Learn about our vision and expertise in global cloud automation.",
};

export default function About() {
  return (
    <div className={styles.pageContainer}>
      <div className="container">
        <h1 className={styles.pageTitle}>About <span className="text-gradient">SamyugTech</span></h1>
        <div className={styles.contentGrid}>
          <div className="glass-panel">
            <h2>Our Vision</h2>
            <p>
              To be the premier global partner for enterprises seeking secure, scalable, and automated cloud solutions.
              We believe in infrastructure as code, continuous delivery, and embedding security directly into the lifecycle.
            </p>
          </div>
          <div className="glass-panel">
            <h2>Global Standards</h2>
            <p>
              Operating on an international scale, we adhere to the highest compliance and performance standards.
              Our clientele spans multiple continents, trusting us to manage their most critical AWS, Azure, and GCP workloads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
