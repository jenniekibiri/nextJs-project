import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div>
      <Head>
        <title>nextjs blog</title>
        <link rel="icon" href="/blog.png" />
        <meta property="og:title" content="blog home" key="title" />
      </Head>

      <main>
        <div className={styles.container}>
          <h1 class="text-primary">Hello Next.js</h1>
        </div>
      </main>
    </div>
  );
};

export default Home;
