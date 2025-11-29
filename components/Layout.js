import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/HomeNew.module.css';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.logoLink}>
          <img 
            src="/Images/SCSLOGO.png" 
            alt="Sofie Con Sal Logo" 
            className={styles.logo}
          />
        </Link>
        <nav className={styles.nav} aria-label="Main navigation">
          <div className={styles.menuContainer}>
            <button 
              className={styles.kebabMenu} 
              aria-label="Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            {isMenuOpen && (
              <div className={styles.dropdownMenu}>
                <Link href="/design" className={styles.navLink}>Design</Link>
                <Link href="/writing" className={styles.navLink}>Writing</Link>
              </div>
            )}
          </div>
        </nav>
      </header>
      {children}
    </div>
  );
}