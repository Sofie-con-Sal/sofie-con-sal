import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/HomeNew.module.css';
import Layout from '../components/Layout';

export default function Home() {
  const [isWaveOpen, setIsWaveOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorHovering, setIsCursorHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over clickable elements
      const target = e.target;
      const isClickable = target.closest('a, button, [role="button"]');
      setIsCursorHovering(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Sofie Con Sal</title>
        <meta name="description" content="Personal website of Sofie Con Sal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Sofie Con Sal</h1>

        <p className={styles.lead}>
          Designer & writer.
        </p>
        <p className={styles.subLead}>
          Click the wave to learn more.
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
          <div
            className={styles.waveContent}
            aria-hidden={!isWaveOpen}
            onClick={(e) => e.stopPropagation()} /* prevent clicks inside content from closing the panel */
          >
            <button
              className={styles.closeButton}
              onClick={(e) => {
                e.stopPropagation();
                setIsWaveOpen(false);
              }}
              aria-label="Close about panel"
            >
              ×
            </button>

            <h2>Welcome to my personal website!</h2>
            <p>
              I'm Sofie, a designer, writer, and multidisciplinary creative fond of making all things tactile, digital, and narrative. I'm currently working on a graphic-tee-inspired short story series (Sh!rt Stor!es), developing a folk-horror novel, exploring jewelry design through Blender, and expanding my UX/UI skills in Figma.
            </p>

            <p style={{ marginTop: '2rem' }}>
              <strong>About this site:</strong>
            </p>
            <ul>
              <li>The background is a photo I took on my camera (Olympus OM-2 using Ilford ORTHO Plus 80 film).</li>
              <li>Red waves were created on Figma.</li>
              <li>Top lefthand logo was created using ProCreate.</li>
            </ul>
          </div>

          <svg className={styles.waveSvg} viewBox="0 0 3456 1117" preserveAspectRatio="none" aria-hidden>
            <defs>
              <linearGradient id="paint0_linear_35_223" x1="864.37" y1="763" x2="864.37" y2="1116.9" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#8A0907" />
                <stop offset="0.08" stopColor="#7B0907" />
                <stop offset="0.18" stopColor="#6C0807" />
                <stop offset="0.29" stopColor="#500908" />
                <stop offset="0.43" stopColor="#340909" />
              </linearGradient>
              <linearGradient id="paint1_linear_35_223" x1="864.37" y1="841.009" x2="864.37" y2="1116.9" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#8A0907" />
                <stop offset="0.17" stopColor="#7B0907" />
                <stop offset="0.26" stopColor="#6C0807" />
                <stop offset="0.41" stopColor="#500908" />
                <stop offset="0.64" stopColor="#340909" />
              </linearGradient>
              <linearGradient id="paint2_linear_35_223" x1="864.37" y1="865.744" x2="864.37" y2="1116.9" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#8A0907" />
                <stop offset="0.15" stopColor="#7B0907" />
                <stop offset="0.27" stopColor="#6C0807" />
                <stop offset="0.41" stopColor="#500908" />
                <stop offset="0.66" stopColor="#340909" />
              </linearGradient>
            </defs>

            {/* First wave group */}
            <g className={styles.waveGroup}>
              <path
                className={`${styles.wavePath} ${styles.wavePath1}`}
                d="M-9 763L39.5209 776.318C88.0418 789.637 185.084 816.274 282.122 816.274C379.164 816.274 476.206 789.637 573.248 789.637C670.287 789.637 767.328 816.274 864.37 816.274C961.412 816.274 1058.45 789.637 1155.49 789.637C1252.53 789.637 1349.58 816.274 1446.62 816.274C1543.66 816.274 1640.7 789.637 1689.22 776.318L1737.74 763V1116.9H-9V763Z"
                fill="url(#paint0_linear_35_223)"
              />

              <path
                className={`${styles.wavePath} ${styles.wavePath2}`}
                d="M-9 894.285L39.5209 880.966C88.0418 867.646 185.084 841.009 282.122 841.009C379.164 841.009 476.206 867.646 573.248 867.646C670.287 867.646 767.328 841.009 864.37 841.009C961.412 841.009 1058.45 867.646 1155.49 867.646C1252.53 867.646 1349.58 841.009 1446.62 841.009C1543.66 841.009 1640.7 867.646 1689.22 880.966L1737.74 894.285V1116.9H-9V894.285Z"
                fill="url(#paint1_linear_35_223)"
              />

              <path
                className={`${styles.wavePath} ${styles.wavePath3}`}
                d="M-9 865.744L39.5209 879.063C88.0418 892.381 185.084 919.018 282.122 919.018C379.164 919.018 476.206 892.381 573.248 892.381C670.287 892.381 767.328 919.018 864.37 919.018C961.412 919.018 1058.45 892.381 1155.49 892.381C1252.53 892.381 1349.58 919.018 1446.62 919.018C1543.66 919.018 1640.7 892.381 1689.22 879.063L1737.74 865.744V1116.9H-9V865.744Z"
                fill="url(#paint2_linear_35_223)"
              />
            </g>

            {/* Duplicate wave group for seamless loop - offset by viewBox width */}
            <g className={styles.waveGroup} transform="translate(1728, 0)">
              <path
                className={`${styles.wavePath} ${styles.wavePath1}`}
                d="M-9 763L39.5209 776.318C88.0418 789.637 185.084 816.274 282.122 816.274C379.164 816.274 476.206 789.637 573.248 789.637C670.287 789.637 767.328 816.274 864.37 816.274C961.412 816.274 1058.45 789.637 1155.49 789.637C1252.53 789.637 1349.58 816.274 1446.62 816.274C1543.66 816.274 1640.7 789.637 1689.22 776.318L1737.74 763V1116.9H-9V763Z"
                fill="url(#paint0_linear_35_223)"
              />

              <path
                className={`${styles.wavePath} ${styles.wavePath2}`}
                d="M-9 894.285L39.5209 880.966C88.0418 867.646 185.084 841.009 282.122 841.009C379.164 841.009 476.206 867.646 573.248 867.646C670.287 867.646 767.328 841.009 864.37 841.009C961.412 841.009 1058.45 867.646 1155.49 867.646C1252.53 867.646 1349.58 841.009 1446.62 841.009C1543.66 841.009 1640.7 867.646 1689.22 880.966L1737.74 894.285V1116.9H-9V894.285Z"
                fill="url(#paint1_linear_35_223)"
              />

              <path
                className={`${styles.wavePath} ${styles.wavePath3}`}
                d="M-9 865.744L39.5209 879.063C88.0418 892.381 185.084 919.018 282.122 919.018C379.164 919.018 476.206 892.381 573.248 892.381C670.287 892.381 767.328 919.018 864.37 919.018C961.412 919.018 1058.45 892.381 1155.49 892.381C1252.53 892.381 1349.58 919.018 1446.62 919.018C1543.66 919.018 1640.7 892.381 1689.22 879.063L1737.74 865.744V1116.9H-9V865.744Z"
                fill="url(#paint2_linear_35_223)"
              />
            </g>
          </svg>
        </div>

        {/* Custom cursor */}
        <div
          className={`${styles.customCursor} ${isCursorHovering ? styles.hover : ''}`}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        />
      </main>
    </Layout>
  );
}