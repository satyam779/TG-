import { useState, useEffect } from 'react';
import SEO from './components/SEO';
import './RobothroneWinners.css';

// Winner images
import AboutRobothrone1 from './assets/RobothronePageImages/About Robothrone - 1.webp';
import junior from './assets/RobothronePageImages/Junior 8-10.webp';
import CompetitionSnapshots1 from './assets/RobothronePageImages/Competition Snapshots - 1.webp';
import AboutRobothrone2 from './assets/RobothronePageImages/About Robothrone - 2.webp';
import intermediate from './assets/RobothronePageImages/Intermediate 11-13.webp';
import CompetitionSnapshots2 from './assets/RobothronePageImages/Competition Snapshots - 2.webp';
import AboutRobothrone3 from './assets/RobothronePageImages/About Robothrone - 3.webp';
import senior from './assets/RobothronePageImages/Senior 14-16.webp';
import CompetitionSnapshots3 from './assets/RobothronePageImages/Competition Snapshots - 3.webp';
import laurelGold from './assets/RobothronePageImages/laurel-gold.png';
import laurelSilver from './assets/RobothronePageImages/laurel-silver.png';
import laurelBronze from './assets/RobothronePageImages/laurel-bronze.png';

// ── Data ──
const DATA = {
  junior: {
    label: 'Junior',
    age: '8–10',
    winners: [
      { id: 'j1', place: 1, trophy: '🏆', team: 'Electra', project: 'Rescue Game', school: 'EPIC DIGITAL LAB', members: ['Alankar', 'Kiyara'], score: 79, img: AboutRobothrone1, video: 'https://www.youtube.com/embed/xmnoCihbOQw' },
      { id: 'j2', place: 2, trophy: '🥈', team: 'Robonex', project: 'Autometic Hand Wash Dispenser', school: 'EPIC DIGITAL LAB', members: ['Aadipt', 'Riyana'], score: 80, img: junior, video: 'https://www.youtube.com/embed/xmnoCihbOQw' },
      { id: 'j3', place: 3, trophy: '🥉', team: 'Jagrit-Jasmit', project: 'Autometic Street Light', school: 'ST. Andrews School', members: ['Jagrit', 'Jasmeet'], score: 79, img: CompetitionSnapshots1, video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE_3' }
    ]
  },
  intermediate: {
    label: 'Intermediate',
    age: '11–13',
    winners: [
      { id: 'i1', place: 1, trophy: '🏆', team: 'FireFalcon', project: 'AGNI Auto Fire Fighting Robot', school: 'Public English Medium School, Phulbani', members: ['Ansuman', 'Kiran'], score: 94, img: AboutRobothrone2, video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE_4' },
      { id: 'i2', place: 2, trophy: '🥈', team: 'VisionX', project: 'NAMRATA AI Face Attendance System', school: 'Public English Medium School, Phulbani', members: ['Namrata Mishara'], score: 93, img: intermediate, video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE_5' },
      { id: 'i3', place: 3, trophy: '🥉', team: 'Vector', project: 'Visionsort', school: "EPIC DIGITAL LABS", members: ["Ved Gala", 'Samantha'], score: 92, img: CompetitionSnapshots2, video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE_6' }
    ]
  },
  senior: {
    label: 'Senior',
    age: '14–16',
    winners: [
      { id: 's1', place: 1, trophy: '🏆', team: 'VIKAS_TNEPUC-CHARAN_TNEPUC', project: 'Carbo Toxified', school: 'TNEPUC', members: ['Vikas', 'Charan'], score: 87, img: AboutRobothrone3, video: 'https://www.youtube.com/embed/xmnoCihbOQw' },
      { id: 's2', place: 2, trophy: '🥈', team: 'KEERTHANA_TNEPUC-KAVANA_TNEPUC', project: 'Healthhawk', school: 'TNEPUC', members: ['Keerthana', 'Kavana'], score: 82, img: senior, video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE_8' },
      { id: 's3', place: 3, trophy: '🥉', team: 'Volt', project: 'Robotic Hand', school: 'EPIC DIGITAL LABS', members: ['Aditya', 'Advarya'], score: 94.2, img: CompetitionSnapshots3, video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE_9' }
    ]
  }
};

const PLACE_MAP = { 1: { label: '1st Place', cls: 'gold' }, 2: { label: '2nd Place', cls: 'silver' }, 3: { label: '3rd Place', cls: 'bronze' } };

// Image asset paths for custom PNG laurels
const LAUREL_MAP = {
  1: laurelGold,
  2: laurelSilver,
  3: laurelBronze
};

// Flexible Laurel Image wrapper with graceful fallback placeholder
function LaurelBadge({ rank }) {
  const configs = {
    1: { cls: 'gold' },
    2: { cls: 'silver' },
    3: { cls: 'bronze' }
  };
  const c = configs[rank];
  return (
    <div className={`rw-laurel-badge rw-laurel-${c.cls}`} aria-hidden="true">
      <img
        src={LAUREL_MAP[rank]}
        alt={`Laurel rank ${rank}`}
        className="rw-laurel-img"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.parentNode.classList.add('placeholder-active');
        }}
      />
      <div className="rw-laurel-placeholder-num">{rank}</div>
    </div>
  );
}

// Static confetti (no Math.random during render)
const CONFETTI = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${(i * 23 + 5) % 100}%`,
  delay: `${(i * 0.37) % 6}s`,
  dur: `${6 + ((i * 1.1) % 4)}s`,
  w: 4 + ((i * 3) % 6),
  h: 8 + ((i * 5) % 10)
}));

export default function RobothroneWinners() {
  const [tab, setTab] = useState('junior');
  const [modal, setModal] = useState(null);

  const cat = DATA[tab];

  useEffect(() => {
    if (!modal) return;
    const fn = (e) => { if (e.key === 'Escape') setModal(null); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [modal]);

  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modal]);

  return (
    <div className="rw-page">
      <SEO
        title="Robothrone Competition Winners 2026 | TechyGuide"
        description="Meet the brilliant winners of the national Robothrone Robotics & Coding Competition across Junior, Intermediate, and Senior categories."
        canonical="https://techyguide.com/robothrone/winners/"
      />

      {/* Confetti */}
      <div className="rw-confetti-wrap" aria-hidden="true">
        {CONFETTI.map((c) => (
          <div key={c.id} className="rw-conf" style={{ left: c.left, animationDelay: c.delay, animationDuration: c.dur, width: `${c.w}px`, height: `${c.h}px` }} />
        ))}
      </div>

      <div className="rw-container">

        <div className="rw-header-section">
          {/* Badge */}
          <div className="rw-badge">🏆 ROBOTHRONE National Competition Winners</div>

          {/* Page Title */}
          <h1 className="rw-title">Future Innovators: The Stars of Robothrone 2026</h1>

          {/* Subtitle */}
          <p className="rw-subtitle">
            Heartfelt congratulations to all participants! Your creativity and hard work have truly inspired us.
          </p>
        </div>

        {/* Tabs */}
        <nav className="rw-tabs" aria-label="Categories">
          {Object.entries(DATA).map(([key, c]) => (
            <button
              key={key}
              type="button"
              className={`rw-tab ${tab === key ? 'active' : ''}`}
              onClick={() => setTab(key)}
            >
              {c.label} (Age {c.age})
            </button>
          ))}
        </nav>

        {/* Cards */}
        <section className="rw-grid" aria-live="polite" key={tab}>
          {cat.winners.map((w) => {
            const p = PLACE_MAP[w.place];
            return (
              <article key={w.id} className={`rw-card ${p.cls}`}>
                {/* Floating Olympic Wreath Laurel Badge */}
                <LaurelBadge rank={w.place} />

                {/* Image */}
                <div className="rw-card-img">
                  <img src={w.img} alt={w.team} loading="lazy" />
                </div>

                {/* Body */}
                <div className="rw-card-body">
                  <h2 className="rw-team">{w.team}</h2>
                  <p className="rw-project">"{w.project}"</p>

                  <div className="rw-school">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                    </svg>
                    <span>{w.school}</span>
                  </div>

                  <div className="rw-divider" />

                  {/* Score */}
                  <div className="rw-score-row">
                    <span className="rw-score-label">Score</span>
                    <div>
                      <span className="rw-score-val">{w.score}</span>
                      <span className="rw-score-max">/100</span>
                    </div>
                  </div>

                  <div className="rw-bar-track">
                    <div className="rw-bar-fill" style={{ width: `${w.score}%` }} />
                  </div>

                  {/* Roster */}
                  <div className="rw-roster-label">Team Members</div>
                  <div className="rw-chips">
                    {w.members.map((m) => (
                      <span key={m} className="rw-chip">{m}</span>
                    ))}
                  </div>

                  {/* Video */}
                  <button type="button" className="rw-video-btn" onClick={() => setModal(w)}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    Watch Video Demo
                  </button>
                </div>
              </article>
            );
          })}
        </section>
      </div>

      {/* Modal */}
      {modal && (
        <div className="rw-overlay" onClick={() => setModal(null)} role="dialog" aria-modal="true">
          <div className="rw-modal" onClick={(e) => e.stopPropagation()}>
            <div className="rw-modal-head">
              <div>
                <h3>{modal.team} — {PLACE_MAP[modal.place].label}</h3>
                <p>{modal.project}</p>
              </div>
              <button type="button" className="rw-modal-x" onClick={() => setModal(null)} aria-label="Close">✕</button>
            </div>
            <div className="rw-modal-video">
            <iframe 
              src={modal.video} 
              title={`${modal.team} Video Demo`} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
