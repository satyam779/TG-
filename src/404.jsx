import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./404.css";

function NotFound() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fontLink = document.createElement("link");
    fontLink.rel = "preconnect";
    fontLink.href = "https://fonts.googleapis.com";

    const fontLink2 = document.createElement("link");
    fontLink2.rel = "preconnect";
    fontLink2.href = "https://fonts.gstatic.com";
    fontLink2.crossOrigin = "";

    const fontSheet = document.createElement("link");
    fontSheet.rel = "stylesheet";
    fontSheet.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap";

    document.head.appendChild(fontLink);
    document.head.appendChild(fontLink2);
    document.head.appendChild(fontSheet);

    const canvas = canvasRef.current;
    const ctx = canvas ? canvas.getContext("2d") : null;

    if (!canvas || !ctx) {
      return () => {
        if (fontLink.parentNode) fontLink.parentNode.removeChild(fontLink);
        if (fontLink2.parentNode) fontLink2.parentNode.removeChild(fontLink2);
        if (fontSheet.parentNode) fontSheet.parentNode.removeChild(fontSheet);
      };
    }

    let W;
    let H;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const nodes = [];
    const COUNT = 80;

    class Node {
      constructor() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > W) this.vx *= -1;
        if (this.y < 0 || this.y > H) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#00ff9c";
        ctx.fill();
      }
    }

    for (let i = 0; i < COUNT; i++) {
      nodes.push(new Node());
    }

    let rafId;

    const animate = () => {
      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        n1.update();
        n1.draw();

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(0,255,156,${1 - dist / 120})`;
            ctx.stroke();
          }
        }
      }

      rafId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (rafId) window.cancelAnimationFrame(rafId);

      if (fontLink.parentNode) fontLink.parentNode.removeChild(fontLink);
      if (fontLink2.parentNode) fontLink2.parentNode.removeChild(fontLink2);
      if (fontSheet.parentNode) fontSheet.parentNode.removeChild(fontSheet);
    };
  }, []);

  return (
    <div className="not-found-page">
      <canvas id="bg404" ref={canvasRef}></canvas>
      <div className="background">
        <div className="grid-pattern"></div>
      </div>

      <div className="decoration decoration-1"></div>
      <div className="decoration decoration-2"></div>

      <main className="container">
        <div className="error-code">404</div>

        <h1 className="headline">Page Not Found</h1>

        <p className="description">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="buttons">
          <button type="button" className="btn primary" onClick={() => navigate("/")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Go Home
          </button>
          <button
            type="button"
            className="btn secondary"
            onClick={() => {
              window.location.href = "https://course.techyguide.in/";
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <line x1="20" y1="8" x2="20" y2="14"></line>
              <line x1="23" y1="11" x2="17" y2="11"></line>
            </svg>
            Register Now
          </button>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
