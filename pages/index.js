import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div>
      <Head>
        <title>nextjs blog</title>
        <link rel="icon" href="/blog.png" />
        <meta property="og:title" content="blog home" key="title" />
      </Head>
      <Nav />
      <main>
        <div className={styles.container}>
          <div className="row">
            <div className="col-md-4">
              <div class="card" style={{width: "18rem"}}>
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              
            </div>
                      </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
