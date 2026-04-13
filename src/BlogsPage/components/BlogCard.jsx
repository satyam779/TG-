import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <Link to={`/blog/${blog.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="card">
        <div className="card-image-wrapper">
          <img src={blog.image} alt={blog.title} />
          {blog.category && <span className="card-category-badge">{blog.category}</span>}
        </div>
        <div className="card-content">
          <h3 className="card-title">{blog.title}</h3>
          {blog.description && <p className="card-description">{blog.description}</p>}
          <div className="card-meta">
            <span className="card-author">By {blog.author}</span>
            <div className="card-meta-right">
              {blog.date && <span className="card-date">{blog.date}</span>}
              {blog.date && blog.readTime && <span className="meta-separator" aria-hidden="true">|</span>}
              {blog.readTime && <span className="card-read-time">{blog.readTime}</span>}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
