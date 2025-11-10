import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { initialBlogs } from "../constants/initialBlogs";

const BlogDetailsPage = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const foundBlog = initialBlogs.find(
      (blog) => blog.id === Number(blogId)
    );
    setBlog(foundBlog);
  }, [blogId]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div
      className="flex flex-col justify-center items-center text-center"
      style={{
        padding: "40px 20px",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Image */}
      <div
        style={{
          width: "70%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <img
          src={blog.image}
          alt={blog.title}
          style={{
            width: "100%",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Title */}
      <h1
        style={{
          fontWeight: "700",
          fontSize: "2.5rem",
          marginBottom: "15px",
          color: "#1e1e1e",
          width: "70%",
        }}
      >
        {blog.title}
      </h1>

      {/* Author & Date */}
      <p
        className="text-muted"
        style={{
          fontSize: "1.1rem",
          marginBottom: "25px",
          width: "70%",
        }}
      >
        ✍️ {blog.author} &nbsp;&nbsp;📅 {blog.date}
      </p>

      {/* Content */}
      <p
        style={{
          width: "70%",
          fontSize: "1.15rem",
          lineHeight: "1.8",
          color: "#333",
          textAlign: "justify",
          marginBottom: "50px",
        }}
      >
        {blog.content}
      </p>

      {/* Back Button */}
      <button
        onClick={() => navigate("/home")}
        style={{
          backgroundColor: "#1c2a4a", // dark blue-black tone
          color: "#fff",
          padding: "12px 30px",
          border: "none",
          borderRadius: "8px",
          fontSize: "1rem",
          fontWeight: "500",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#243c6b")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#1c2a4a")}
      >
        🔙 Back to Blogs
      </button>
    </div>
  );
};

export default BlogDetailsPage;
