import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <svg
            className={styles.logoIcon}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00ffc2" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <line x1="16" y1="9" x2="9" y2="21" stroke="url(#logoGrad)" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="16" y1="9" x2="23" y2="21" stroke="url(#logoGrad)" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="9" y1="21" x2="23" y2="21" stroke="url(#logoGrad)" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="16" cy="9" r="4.5" fill="#040508" stroke="url(#logoGrad)" strokeWidth="2.5" />
            <circle cx="9" cy="21" r="4.5" fill="#040508" stroke="url(#logoGrad)" strokeWidth="2.5" />
            <circle cx="23" cy="21" r="4.5" fill="#040508" stroke="url(#logoGrad)" strokeWidth="2.5" />
            <circle cx="16" cy="9" r="1.5" fill="var(--accent-primary)" />
            <circle cx="9" cy="21" r="1.5" fill="var(--accent-primary)" />
            <circle cx="23" cy="21" r="1.5" fill="var(--accent-secondary)" />
          </svg>
          <span className={styles.logoText}>
            samyug<span className="text-gradient">.tech</span>
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
