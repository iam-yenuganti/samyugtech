import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.logo}>
            <span className="text-gradient">Samyug</span>Tech
          </Link>
          <p>End-to-end automation, DevSecOps, and Cloud Consulting across AWS, Azure, and GCP.</p>
        </div>
        <div className={styles.footerLinks}>
          <h3>Company</h3>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className={styles.footerLinks}>
          <h3>Legal</h3>
          <ul>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} SamyugTech. All rights reserved.</p>
      </div>
    </footer>
  );
}
