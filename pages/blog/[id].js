import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import DefaultLayout from "../../layouts/Default";
import { useRouter } from "next/router";
const Blog = () => {
  const router = useRouter();
  const { id } = router.query;

  const [blog, setBlog] = useState(null);
  const fetchCat = async () => {
 
    const response = await fetch(`/api/blogs/${id}`);
    const data = await response.json();
    setBlog(data);
  };
  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div>
      <DefaultLayout></DefaultLayout>
      {blog && (
        <div className="container mt-5" style={{ display: "flex" }}>
          <img src={blog.image.url} alt={blog.image.alt} />
          <div className="mx-5">
            <h1>{blog.name}</h1>
            <p>{blog.body}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};
export default Blog;
