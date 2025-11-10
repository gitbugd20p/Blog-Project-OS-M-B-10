import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage.";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import CreateBlogPage from "../pages/CreateBlogPage";
import BlogDetailsPage from "../pages/BlogDetailsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/home", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/create-blog", element: <CreateBlogPage /> },
      { path: "/blog-details/:blogId", element: <BlogDetailsPage /> },
    ],
  },
]);

export default routes;
