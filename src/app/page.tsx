import Image from 'next/image';
import styles from './page.module.css';
<<<<<<< HEAD
=======
import Logout from '../components/Logout';
>>>>>>> main

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
<<<<<<< HEAD
          height={50}
=======
          height={100}
>>>>>>> main
          priority
        />
        <ol>
          <li>
            Get started by editing this shit <code>src/app/page.tsx</code>.
          </li>
<<<<<<< HEAD
          <li>Save and see your fucked up bad changes instantly.</li>
=======
          <li>Save and see your fucked up little bad desicions instantly.</li>
>>>>>>> main
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy your shit now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our terrible docs
          </a>
<<<<<<< HEAD
=======
          <Logout />
          {/* <a
            href="/login"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Log in
          </a> */}
>>>>>>> main
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn totall bullshit
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Huh?
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to trashjs.org →
        </a>
      </footer>
    </div>
  );
}
