import { useState } from "react";
import { initialBlogs } from "../constants/initialBlogs";

const CreateBlogPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    author: "",
    date: "",
    content: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // compute new id (handles empty initialBlogs gracefully)
    const maxId =
      initialBlogs.length > 0
        ? Math.max(...initialBlogs.map((b) => b.id))
        : 0;
    const newBlog = { id: maxId + 1, ...formData };

    // For now, just log it (you can push to a state/store or POST to backend later)
    console.log("Created blog:", newBlog);

    setMessage(`✅ Blog "${formData.title || "Untitled"}" created successfully!`);

    // reset only the form fields (keep message separate)
    setFormData({
      title: "",
      image: "",
      author: "",
      date: "",
      content: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">📝 Create a New Blog</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg"
      >
        {/* Title */}
        <div className="mb-4 text-left">
          <label className="block font-semibold mb-2">Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            type="text"
            className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Image URL */}
        <div className="mb-4 text-left">
          <label className="block font-semibold mb-2">Image URL</label>
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            type="text"
            className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="https://images.unsplash.com/..."
          />
        </div>

        {/* Author */}
        <div className="mb-4 text-left">
          <label className="block font-semibold mb-2">Author</label>
          <input
            name="author"
            value={formData.author}
            onChange={handleChange}
            type="text"
            className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Date */}
        <div className="mb-4 text-left">
          <label className="block font-semibold mb-2">Date</label>
          <input
            name="date"
            value={formData.date}
            onChange={handleChange}
            type="date"
            placeholder="DD-MM-YYYY"
            className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Content */}
        <div className="mb-6 text-left">
          <label className="block font-semibold mb-2">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="6"
            className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write your blog content here..."
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 rounded-md font-semibold text-white"
          style={{ backgroundColor: "#1c2a4a" }}
        >
          ➕ Create Blog
        </button>
      </form>

      {/* Message (separate state) */}
      {message && (
        <p className="mt-5 text-green-600 font-medium">{message}</p>
      )}
    </div>
  );
};

export default CreateBlogPage;
