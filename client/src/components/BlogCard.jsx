import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { id, title, author, image, content, date } = blog;

  return (
    <div className="card bg-base-100 my-5 w-96 shadow-sm">
      <figure>
        <img className="h-60 w-auto" src={image} alt={title + " image-" + id} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="line-clamp-3">{content}</p>
        <div className="flex justify-between">
          <p className="font-bold">{author} </p>
          <p className="font-bold">{date} </p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/blog-details/${id}`}>
            <button className="btn btn-primary">Read Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
