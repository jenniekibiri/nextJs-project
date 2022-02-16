import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Blog from "./blog";
import DefaultLayout from "../layouts/Default";

const Home = () => {
  return (
    <div>
      <Head>
        <title>nextjs blog</title>
        <link rel="icon" href="/blog.png" />
        <meta property="og:title" content="blog home" key="title" />
      </Head>
     <DefaultLayout>
     <div className={styles.container}>
          <Blog />
        </div>
     
     </DefaultLayout>
     <Footer />
    </div>
  );
};

export default Home;
