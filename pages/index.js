import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/HomeNew.module.css';

export default function Home() {
  const [isWaveOpen, setIsWaveOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Sofie Con Sal</title>
        <meta name="description" content="Personal website of Sofie Con Sal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/design" className={styles.navLink}>Design</Link>
          <Link href="/writing" className={styles.navLink}>Writing</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Sofie Con Sal</h1>

        <p className={styles.lead}>
          Designer & writer. I make tactile things and small editorial projects. Click the wave to learn more.
        </p>

        {/* Wave component at the bottom */}
        <div
          className={`${styles.waveContainer} ${isWaveOpen ? styles.open : ''}`}
          onClick={() => setIsWaveOpen((s) => !s)}
          role="button"
          tabIndex={0}
          aria-expanded={isWaveOpen}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setIsWaveOpen((s) => !s);
          }}
        >
          <div className={styles.waveContent} aria-hidden={!isWaveOpen}>
            <h2>About Me</h2>
            <p>
              I’m Sofie — I blend visual design and writing to make slow, considered pieces. I’m interested in
              typography, texture, and the small systems that support storytelling. This site is a quietly curated
              portfolio and notebook.
            </p>
            <p>Click the wave again to close.</p>
          </div>

          <svg className={styles.waveSvg} viewBox="0 0 1440 260" preserveAspectRatio="none" aria-hidden>
            <defs>
              <linearGradient id="g1" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="#FAA320" />
                <stop offset="100%" stopColor="#FAA320" />
              </linearGradient>
            </defs>
            <g className={styles.waveGroup}>
              <path className={styles.wavePath} d="M0,160 C240,220 480,100 720,140 C960,180 1200,80 1440,120 L1440,260 L0,260 Z" fill="url(#g1)" />
              <path className={styles.wavePath} d="M0,180 C240,140 480,200 720,160 C960,120 1200,200 1440,160 L1440,260 L0,260 Z" opacity="0.6" fill="url(#g1)" />
            </g>
          </svg>
        </div>
      </main>
    </div>
  );
}