import Head from "next/head";
import React, { useEffect } from "react";
import DefaultLayout from "../../layouts/Default";

const Blog = () => {
  const [posts, setPosts] = React.useState([]);
  const fetchPosts = async () => {
    const response = await fetch("/api/blogs");
    const data = await response.json();
    setPosts(data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(posts);
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
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src={post.image.url}
                  class="card-img-top"
                  alt={post.image.url}
                />
                <div class="card-body">
                  <h5 class="card-title">{post.name}</h5>
                  <p class="card-text">{post.body.substring(0, 120)} ...</p>
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Blog;
