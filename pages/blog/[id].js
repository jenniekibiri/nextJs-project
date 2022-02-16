import React, { useEffect,useState } from "react";
import Footer from "../../components/Footer";
import DefaultLayout from "../../layouts/Default";
import { useRouter } from "next/router";
export const Blog = () => {
  const { id } = useRouter().query;
  const [blog, setBlog] = useState(null);
  const fetchCat = async () => {
    const response = await fetch(`/api/cats/${id}`);
    const data = await response.json();
    setBlog(data);
  };
  useEffect(() => {
    fetchCat();
    }, []);

  return (
    <div>
      <DefaultLayout></DefaultLayout>
      <div className="container mt-5" style={{ display: "flex" }}>
        <img src={blog.image.url} />
        <div className="mx-5">
          <h1>{blog.name}</h1>
          <p>{blog.body} </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
