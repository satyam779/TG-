import { useState, useEffect } from 'react';
import './OpenResources.css';

const resources = [
  {
    id: 0,
    title: "Building a Line Follower Robot | Arduino",
    src: "https://www.youtube.com/embed/A1_F4F_2pP8?autoplay=1",
    date: "Oct 24, 2024",
    category: "Robotics",
    tags: ["Robotics", "Arduino"],
    duration: "10:05",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    blogHtml: `
      <h2>Project Overview</h2>
      <p>A Line Follower Robot uses IR sensors to detect contrast on the floor. It's the "Hello World" of robotics.</p>
      <h2>Code Snippet</h2>
      <div class="code-block">
if (leftSensor == LOW && rightSensor == LOW) { moveForward(); } 
else if (leftSensor == HIGH) { turnRight(); }
      </div>`
  },
  {
    id: 1,
    title: "Introduction to Python for AI",
    src: "https://www.youtube.com/embed/rfscVS0vtbw?autoplay=1",
    date: "Oct 20, 2024",
    category: "AI & Coding",
    tags: ["AI", "Python"],
    duration: "15:30",
    img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2032&auto=format&fit=crop",
    blogHtml: `<h2>Why Python?</h2><p>Python is the standard for AI due to libraries like TensorFlow and OpenCV.</p>`
  },
  {
    id: 2,
    title: "3D Printing Tips for Beginners",
    src: "https://www.youtube.com/embed/Yamj3805p6E?autoplay=1",
    date: "Oct 15, 2024",
    category: "3D Printing",
    tags: ["3D Print", "Cura"],
    duration: "08:45",
    img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop",
    blogHtml: `<h2>Bed Leveling</h2><p>Ensure your nozzle is a paper's thickness away from the bed.</p>`
  },
  {
    id: 3,
    title: "Smart Home IoT Project using NodeMCU",
    src: "https://www.youtube.com/embed/h0576_t0jlw?autoplay=1",
    date: "Sep 30, 2024",
    category: "IoT",
    tags: ["IoT", "ESP8266"],
    duration: "12:20",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    blogHtml: `<h2>IoT Basics</h2><p>Control lights using a web server hosted on the ESP8266 chip.</p>`
  },
  {
    id: 4,
    title: "Obstacle Avoidance Robot with Ultrasonics",
    src: "https://www.youtube.com/embed/6qLhJpW4Q_w?autoplay=1",
    date: "Nov 01, 2024",
    category: "Robotics",
    tags: ["Robotics", "Sensors"],
    duration: "14:10",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    blogHtml: `<h2>Ultrasonic Logic</h2><p>Using sound waves to detect distance and avoid crashes.</p>`
  },
  {
    id: 5,
    title: "Raspberry Pi vs Arduino: Which one?",
    src: "https://www.youtube.com/embed/k-xP5Fp8bYc?autoplay=1",
    date: "Nov 05, 2024",
    category: "IoT",
    tags: ["Hardware", "Guide"],
    duration: "09:50",
    img: "https://images.unsplash.com/photo-1550041473-d296a1a8dc80?q=80&w=2070&auto=format&fit=crop",
    blogHtml: `<h2>Comparison</h2><p>Arduino is a microcontroller (simple tasks). Pi is a microprocessor (mini computer).</p>`
  },
  {
    id: 6,
    title: "Scratch Coding: Flappy Bird Game",
    src: "https://www.youtube.com/embed/Z0H8bCqQdNM?autoplay=1",
    date: "Nov 08, 2024",
    category: "AI & Coding",
    tags: ["Scratch", "Game Dev"],
    duration: "25:00",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    blogHtml: `<h2>Logic Building</h2><p>Learn gravity physics and collision detection using block coding.</p>`
  },
  {
    id: 7,
    title: "Tinkercad Tutorial: Design a Keychain",
    src: "https://www.youtube.com/embed/g0pSfyEP4hk?autoplay=1",
    date: "Nov 12, 2024",
    category: "3D Printing",
    tags: ["CAD", "Design"],
    duration: "11:15",
    img: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?q=80&w=2004&auto=format&fit=crop",
    blogHtml: `<h2>3D Modeling</h2><p>Grouping shapes and adding text holes for 3D printing.</p>`
  },
  {
    id: 8,
    title: "Soldering 101: Best Practices",
    src: "https://www.youtube.com/embed/vIT4ra6Mo0s?autoplay=1",
    date: "Nov 15, 2024",
    category: "Robotics",
    tags: ["Skill", "Electronics"],
    duration: "08:30",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    blogHtml: `<h2>Safety First</h2><p>Always tin your tip and use flux for a clean joint.</p>`
  }
];

function OpenResources() {
  const [view, setView] = useState('library'); // 'library' or 'player'
  const [selectedResourceId, setSelectedResourceId] = useState(null);
  const [displayedResources, setDisplayedResources] = useState(resources);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // Set SEO metadata and scroll to top for the Open Resources page
  useEffect(() => {
    // Set page title
    document.title = 'Open STEM Learning Library | Robotics, AI & Coding Resources';

    // Set or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Access free STEM learning resources including robotics tutorials, AI coding lessons, IoT projects, Arduino guides, and 3D printing tutorials for students.');
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', 'Access free STEM learning resources including robotics tutorials, AI coding lessons, IoT projects, Arduino guides, and 3D printing tutorials for students.');
      document.head.appendChild(metaDescription);
    }

    // Add or update canonical tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', 'https://techyguide.com/open-learning-library-stem-resources');
      document.head.appendChild(canonicalLink);
    } else {
      canonicalLink.setAttribute('href', 'https://techyguide.com/open-learning-library-stem-resources');
    }

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Cleanup iframe when switching views
  useEffect(() => {
    if (view === 'library') {
      const iframes = document.querySelectorAll('.openresources-page-root iframe');
      iframes.forEach(iframe => iframe.src = '');
    }
  }, [view]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    const filtered = resources.filter(r =>
      r.title.toLowerCase().includes(term) ||
      r.tags.some(tag => tag.toLowerCase().includes(term))
    );
    setDisplayedResources(filtered);
    setActiveFilter('all');
  };

  const handleFilter = (category) => {
    setActiveFilter(category);
    setSearchTerm('');
    
    if (category === 'all') {
      setDisplayedResources(resources);
    } else {
      const filtered = resources.filter(r =>
        r.category.toLowerCase().includes(category.toLowerCase())
      );
      setDisplayedResources(filtered);
    }
  };

  const openPlayer = (id) => {
    setSelectedResourceId(id);
    setView('player');
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    setView('library');
    setSelectedResourceId(null);
  };

  const selectedResource = resources.find(r => r.id === selectedResourceId);

  return (
    <div className="openresources-page-root">
      {view === 'library' ? (
        <>
          {/* HEADER WITH SEARCH */}
          <header className="openresources-header">
            <div className="openresources-container openresources-nav-center">
              <div className="openresources-cool-search">
                <input
                  type="text"
                  id="searchInput"
                  placeholder="Search resources (e.g. Drone, Python, IoT)..."
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <button>
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </header>

          {/* LIBRARY VIEW */}
          <div className="openresources-library-view">
            <section className="openresources-library-hero">
              <div className="openresources-hero-content">
                <h1>Open Learning <span className="openresources-text-orange">Library</span></h1>
                <p>Access premium STEM tutorials, code repositories, and circuit diagrams for free.</p>
              </div>
              <div className="openresources-filter-bar">
                <button
                  className={`openresources-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                  onClick={() => handleFilter('all')}
                >
                  All Resources
                </button>
                <button
                  className={`openresources-filter-btn ${activeFilter === 'robotics' ? 'active' : ''}`}
                  onClick={() => handleFilter('robotics')}
                >
                  <i className="fas fa-robot"></i> Robotics
                </button>
                <button
                  className={`openresources-filter-btn ${activeFilter === 'ai' ? 'active' : ''}`}
                  onClick={() => handleFilter('ai')}
                >
                  <i className="fas fa-brain"></i> AI & Coding
                </button>
                <button
                  className={`openresources-filter-btn ${activeFilter === 'iot' ? 'active' : ''}`}
                  onClick={() => handleFilter('iot')}
                >
                  <i className="fas fa-wifi"></i> IoT
                </button>
                <button
                  className={`openresources-filter-btn ${activeFilter === '3d' ? 'active' : ''}`}
                  onClick={() => handleFilter('3d')}
                >
                  <i className="fas fa-cube"></i> 3D Printing
                </button>
              </div>
            </section>

            <section className="openresources-library-grid-section">
              <div className="container">
                <div className="openresources-video-grid">
                  {displayedResources.map(video => (
                    <div
                      key={video.id}
                      className="openresources-lib-card"
                      onClick={() => openPlayer(video.id)}
                    >
                      <div className="openresources-thumb-wrapper">
                        <img src={video.img} alt={video.title} />
                        <span className="openresources-duration">{video.duration}</span>
                      </div>
                      <div className="openresources-card-content">
                        <div className="openresources-tags">
                          {video.tags.map((tag, idx) => (
                            <span key={idx} className="openresources-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3>{video.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </>
      ) : (
        /* PLAYER VIEW */
        <div className="openresources-player-view">
          <div className="container">
            <button className="openresources-btn-back" onClick={goHome}>
              <i className="fas fa-arrow-left"></i> Back to Library
            </button>

            <main className="openresources-resource-container">
              <section className="openresources-main-content">
                <div className="openresources-video-frame-wrapper">
                  <iframe
                    id="main-video-frame"
                    src={selectedResource?.src || ''}
                    title="Video Player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <article className="openresources-blog-wrapper">
                  <h1 className="openresources-blog-title">{selectedResource?.title || 'Loading Title...'}</h1>
                  <div className="openresources-blog-meta">
                    <span className="openresources-blog-date">{selectedResource?.date || 'Oct 24, 2024'}</span> •{' '}
                    <span className="openresources-text-orange">
                      {selectedResource?.category || 'Category'}
                    </span>
                  </div>
                  <hr className="openresources-divider" />

                  <div
                    className="openresources-blog-body"
                    dangerouslySetInnerHTML={{ __html: selectedResource?.blogHtml || '' }}
                  ></div>
                </article>
              </section>

              <aside className="openresources-sidebar-playlist">
                <div className="openresources-playlist-header">
                  <h3>Up Next</h3>
                </div>
                <div className="openresources-playlist-items">
                  {resources
                    .filter(v => v.id !== selectedResourceId)
                    .map(video => (
                      <div
                        key={video.id}
                        className="openresources-video-card"
                        onClick={() => openPlayer(video.id)}
                      >
                        <div className="openresources-playlist-thumb">
                          <img src={video.img} alt="thumb" />
                        </div>
                        <div className="openresources-playlist-info">
                          <h4>{video.title}</h4>
                          <span>{video.duration}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </aside>
            </main>
          </div>
        </div>
      )}
    </div>
  );
}

export default OpenResources;
