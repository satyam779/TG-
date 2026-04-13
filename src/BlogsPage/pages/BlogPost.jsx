import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchPublishedPostById, fetchRecentPublishedPosts } from "../lib/posts";

function renderFormattedText(text) {
  const pattern = /<link>(.*?)@(.*?)<\/?link>|<b>(.*?)<\/?b>/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[1] && match[2]) {
      parts.push(
        <a
          key={`link-${match.index}`}
          href={match[2].trim()}
          target="_blank"
          rel="noreferrer"
          className="blog-post-inline-link"
        >
          {match[1].trim()}
        </a>
      );
    } else if (match[3]) {
      parts.push(
        <strong key={`bold-${match.index}`} className="blog-post-strong">
          {match[3].trim()}
        </strong>
      );
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

function renderContentBlock(block, index) {
  const trimmedBlock = block.trim();
  const imageMatch =
    trimmedBlock.match(/^<image>(.*?)@(.*?)<\/?image>$/) ||
    trimmedBlock.match(/^<image>(.*?)<\/?image>$/);

  if (imageMatch) {
    const imageUrl = (imageMatch[1] || "").trim();
    const caption = (imageMatch[2] || "").trim();

    return (
      <figure key={index} className="blog-post-image-block">
        <img
          src={imageUrl}
          alt={caption || "Article image"}
          className="blog-post-content-image"
        />
        {caption && <figcaption className="blog-post-image-caption">{caption}</figcaption>}
      </figure>
    );
  }

  return (
    <p key={index} className="blog-post-paragraph">
      {renderFormattedText(block)}
    </p>
  );
}

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    let ignore = false;

    async function loadPost() {
      setStatus("loading");
      setMessage("");

      const { data, error, configured } = await fetchPublishedPostById(id);

      if (ignore) {
        return;
      }

      if (!configured) {
        setPost(null);
        setStatus("error");
        setMessage("Add your Supabase URL and publishable key in .env.local to load posts.");
        return;
      }

      if (error) {
        setPost(null);
        setStatus("error");
        setMessage("Could not load this post from Supabase right now.");
        return;
      }

      if (!data) {
        setPost(null);
        setRecentPosts([]);
        setStatus("not_found");
        setMessage("The article you requested does not exist or is not published.");
        return;
      }

      setPost(data);
      const recentResult = await fetchRecentPublishedPosts(4, data.id);

      if (!ignore && !recentResult.error) {
        setRecentPosts(recentResult.data);
      }

      setStatus("ready");
    }

    loadPost();

    return () => {
      ignore = true;
    };
  }, [id]);

  if (status !== "ready" || !post) {
    const title =
      status === "loading"
        ? "Loading post..."
        : status === "error"
          ? "Supabase setup needed"
          : "Post not found";

    const description =
      status === "loading"
        ? "Fetching the article from Supabase."
        : message;

    return (
      <main className="blog-post-page">
        <section className="blog-post-body-section">
          <div className="blog-post-shell">
            <div className="not-found-card">
              <p className="blog-post-sidebar-title">{status === "not_found" ? "404" : "Supabase"}</p>
              <h1 className="blog-post-heading">{title}</h1>
              <p className="blog-post-summary">{description}</p>
              <Link to="/" className="back-home-btn">
                Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="blog-post-page">
      <section className="blog-post-hero">
        <div className="blog-post-shell blog-post-hero-grid">
          <div className="blog-post-copy">
            <Link to="/" className="back-link">
              {"← Back to all posts"}
            </Link>
            <span className="hero-badge">{post.category}</span>
            <h1 className="blog-post-heading">{post.title}</h1>
            <p className="blog-post-summary">{post.description}</p>
            <div className="blog-post-meta">
              <span className="hero-author">
                <span className="avatar-placeholder">{post.author?.charAt(0)}</span>
                {post.author}
              </span>
              <div className="card-meta-right">
                <span>{post.date}</span>
                {post.readTime && (
                  <>
                    <span className="meta-separator" aria-hidden="true">|</span>
                    <span>{post.readTime}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="blog-post-image-panel">
            <img src={post.image} alt={post.title} className="blog-post-image" />
          </div>
        </div>
      </section>

      <section className="blog-post-body-section">
        <div className="blog-post-shell blog-post-layout">
          <article className="blog-post-article">
            {post.content.map((block, index) => renderContentBlock(block, index))}
          </article>

          <aside className="blog-post-sidebar">
            <div className="blog-post-sidebar-card">
              <p className="blog-post-sidebar-title">Article Details</p>
              <div className="blog-post-sidebar-list">
                <div className="blog-post-sidebar-row">
                  <span className="sidebar-label">Category</span>
                  <span>{post.category}</span>
                </div>
                <div className="blog-post-sidebar-row">
                  <span className="sidebar-label">Published</span>
                  <span>{post.date}</span>
                </div>
                <div className="blog-post-sidebar-row">
                  <span className="sidebar-label">Reading time</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {recentPosts.length > 0 && (
              <div className="blog-post-sidebar-card">
                <p className="blog-post-sidebar-title">Recent Posts</p>
                <div className="blog-post-recent-list">
                  {recentPosts.map((recentPost) => (
                    <Link
                      key={recentPost.id}
                      to={`/blog/${recentPost.id}`}
                      className="blog-post-recent-item"
                    >
                      <img
                        src={recentPost.image}
                        alt={recentPost.title}
                        className="blog-post-recent-image"
                      />
                      <div className="blog-post-recent-content">
                        <p className="blog-post-recent-title">{recentPost.title}</p>
                        <p className="blog-post-recent-meta">
                          {recentPost.date}
                          {recentPost.readTime ? ` | ${recentPost.readTime}` : ""}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}

export default BlogPost;
