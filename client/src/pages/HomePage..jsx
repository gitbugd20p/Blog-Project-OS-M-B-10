import BlogCard from "../components/BlogCard";
import { initialBlogs } from "../constants/initialBlogs";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <div className="flex min-h-96 items-center justify-center border">
        <p>Banner</p>
      </div>

      <div className="my-5 grid grid-cols-3 justify-items-center gap-2">
        {initialBlogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
