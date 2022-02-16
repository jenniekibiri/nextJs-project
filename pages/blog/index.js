import Head from "next/head";
import { useRouter } from "next/router";

import React, { useEffect } from "react";

const Blogs = () => {
  const [posts, setPosts] = React.useState([]);
  const fetchPosts = async () => {
    const response = await fetch("/api/blogs");
    const data = await response.json();
    setPosts(data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Blog Home</title>
        <meta property="og:title" content="blog home" key="title" />
      </Head>

      <div className="container mt-5">
        <div className="row">
          {posts.map((post) => (
            <div className="col-md-4" key={post.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={post.image.url}
                  className="card-img-top"
                  alt={post.image.url}
                />
                <div className="card-body">
                  <h5 className="card-title">{post.name}</h5>
                  <p className="card-text">{post.body.substring(0, 120)} ...</p>
                  <button
                    onClick={()=>router.push(`/blog/${post.id}`)}
                    className="btn btn-primary"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Blogs;
