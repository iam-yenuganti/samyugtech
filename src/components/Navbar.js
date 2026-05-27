import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <svg
            className={styles.logoIcon}
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
          <span className={styles.logoText}>
            <span className="text-gradient">Samyug</span>Tech
          </span>
        </Link>
        
        <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className={styles.navLink}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.navLink}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.contactBtn}>
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
