import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <span className="text-gradient">Samyug</span>Tech
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/contact" className="btn-primary" style={{ padding: "0.5rem 1.5rem", fontSize: "0.875rem" }}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
