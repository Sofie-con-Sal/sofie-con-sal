import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [isScrollOpen, setIsScrollOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Sofie Con Sal</title>
        <meta name="description" content="Personal website of Sofie Con Sal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sofie Con Sal
        </h1>

        <div className={`${styles.scroll} ${isScrollOpen ? styles.open : ''}`} onClick={() => setIsScrollOpen(!isScrollOpen)}>
          <div className={styles.scrollContent}>
            <h2>About Me</h2>
            <p>
              [Your about me text here]
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}