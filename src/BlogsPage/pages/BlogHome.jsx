import { useEffect, useState } from "react";
import "../BlogsPage.css";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { fetchPublishedPosts } from "../lib/posts";

function Home() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    let ignore = false;

    async function loadPosts() {
      setStatus("loading");
      setMessage("");

      const { data, error, configured } = await fetchPublishedPosts();

      if (ignore) {
        return;
      }

      if (!configured) {
        setPosts([]);
        setStatus("error");
        setMessage("Add your Supabase URL and publishable key in .env to load posts.");
        return;
      }

      if (error) {
        setPosts([]);
        setStatus("error");
        setMessage("Could not load posts from Supabase right now.");
        return;
      }

      setPosts(data);
      setStatus("ready");
    }

    loadPosts();

    return () => {
      ignore = true;
    };
  }, []);

  const featured = posts[0];
  const sidebarPosts = posts.slice(1, 4);
  const recentPosts = posts.slice(1);

  let heroTitle = "";
  let heroMessage = "";

  if (status === "loading") {
    heroTitle = "Loading posts...";
    heroMessage = "Fetching your latest published posts from Supabase.";
  } else if (status === "error") {
    heroTitle = "Supabase setup needed";
    heroMessage = message;
  } else if (!featured) {
    heroTitle = "No published posts yet";
    heroMessage = "Create a post in your Supabase Table Editor and it will show up here.";
  }

  return (
    <div className="home-page">

      <section className="hero-section">
        <h1 className="main-blog-title">
          Blog <span className="text-gradient">Page</span>
        </h1>
        
        <div className="hero-container">
          {featured ? (
            <>
              <div className="hero-main">
                <Link to={`/blog/${featured.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="hero-main-card">
                    <div className="hero-main-image-wrapper">
                      <img src={featured.image} alt={featured.title} className="hero-main-image" />
                      <div className="hero-main-overlay">
                        <div className="hero-main-content">
                          <span className="hero-badge pulse">{featured.category || "Editor's Pick"}</span>
                          <h1 className="hero-main-title">{featured.title}</h1>
                          <div className="hero-main-meta">
                            <span className="hero-author">
                              <span className="avatar-placeholder">{featured.author?.charAt(0)}</span>
                              {featured.author}
                            </span>
                            <div className="card-meta-right">
                              <span className="hero-date">{featured.date || "Today"}</span>
                              {featured.readTime && (
                                <>
                                  <span className="meta-separator" aria-hidden="true">|</span>
                                  <span className="hero-read-time">{featured.readTime}</span>
                                </>
                              )}
                            </div>
                          </div>
                          <span className="read-more-btn" style={{ display: "inline-block" }}>
                            {"Read Article ➜"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="hero-sidebar">
                <div className="hero-sidebar-header">
                  <h3 className="hero-sidebar-title">Trending Now</h3>
                  <div className="title-underline"></div>
                </div>
                <div className="hero-posts">
                  {sidebarPosts.map((blog, index) => (
                    <Link to={`/blog/${blog.slug}`} key={blog.id} style={{ textDecoration: "none", color: "inherit" }}>
                      <div className="hero-post-card" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="hero-post-number">0{index + 1}</div>
                        <div className="hero-post-image-wrapper">
                          <img src={blog.image} alt={blog.title} className="hero-post-image" />
                        </div>
                        <div className="hero-post-info">
                          <h4 className="hero-post-title">{blog.title}</h4>
                          <p className="hero-post-author">By {blog.author}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="hero-empty-state">
              <p className="hero-empty-kicker">Supabase</p>
              <h2 className="hero-empty-title">{heroTitle}</h2>
              <p className="hero-empty-text">{heroMessage}</p>
            </div>
          )}
        </div>
      </section>

      <section className="recent-section">
        <div className="recent-container">
          <div className="section-header">
            <h2 className="section-title">Recent Posts</h2>
            <p className="section-subtitle">Dive into our latest thoughts and stories</p>
            <div className="header-decoration"></div>
          </div>
          <div className="recent-grid">
            {recentPosts.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
            {recentPosts.length === 0 && (
              <p className="no-posts">
                {status === "loading"
                  ? "Loading posts..."
                  : status === "error"
                    ? message
                    : "No more posts available"}
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
