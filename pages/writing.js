import Layout from '../components/Layout';
import styles from '../styles/HomeNew.module.css';

export default function Writing() {
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>Writing</h1>
        <div className={styles.content}>
          <a 
            href="https://substack.com/@shirtstories" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.substackLink}
          >
            Sh!rt Stor!es
          </a>
        </div>
      </main>
    </Layout>
  );
}