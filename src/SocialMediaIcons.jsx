import "./SocialMediaIcons.css";

function SocialMediaIcons() {
  return (
    <div className="tg-social-fixed-root">
      <div className="tg-social-container">
        <a
          href="https://www.facebook.com/TechyG24/"
          target="_blank"
          className="tg-social-btn tg-social-facebook"
        >
          <span className="tg-social-icon">f</span>
        </a>

        <a
          href="https://www.instagram.com/techyg24"
          target="_blank"
          className="tg-social-btn tg-social-instagram"
        >
          <span className="tg-social-icon">📷</span>
        </a>

        <a
          href="https://x.com/techyg24"
          target="_blank"
          className="tg-social-btn tg-social-twitter"
        >
          <span className="tg-social-icon">𝕏</span>
        </a>

        <a
          href="https://www.linkedin.com/company/techyg24/posts/?feedView=all"
          target="_blank"
          className="tg-social-btn tg-social-linkedin"
        >
          <span className="tg-social-icon">in</span>
        </a>
      </div>
    </div>
  );
}

export default SocialMediaIcons;
