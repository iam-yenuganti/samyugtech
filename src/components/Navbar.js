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
            <path d="M16 2C8.268 2 2 8.268 2 16c0 3.08.993 5.93 2.684 8.25" stroke="url(#logoGrad)" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M30 16c0 7.732-6.268 14-14 14-3.08 0-5.93-.993-8.25-2.684" stroke="url(#logoGrad)" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M12 12c0-1.657 1.343-3 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2c1.657 0 3-1.343 3-3" stroke="url(#logoGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className={styles.logoText}>
            <span className="text-gradient">Samyug</span>Tech™
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
