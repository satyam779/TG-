import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from './components/SEO';
import './RobothroneWinners.css';

// Winner images
import i1 from './assets/RobothronePageImages/i1.png';
import i2 from './assets/RobothronePageImages/i2.png';
import i3 from './assets/RobothronePageImages/i3.png';
import j1 from './assets/RobothronePageImages/j1.png';
import j2 from './assets/RobothronePageImages/j2.png';
import j3 from './assets/RobothronePageImages/j3.png';
import s1 from './assets/RobothronePageImages/s1.png';
import s2 from './assets/RobothronePageImages/s2.png';
import s3 from './assets/RobothronePageImages/s3.png';
import laurelGold from './assets/RobothronePageImages/laurel-gold.png';
import laurelSilver from './assets/RobothronePageImages/laurel-silver.png';
import laurelBronze from './assets/RobothronePageImages/laurel-bronze.png';

// ── Data  ──
const DATA = {
  junior: {
    label: 'Junior',
    age: '8–10',
    winners: [
      { id: 'j1', place: 1, trophy: '🏆', team: 'Electra', project: 'Rescue Game', school: 'EPIC DIGITAL LAB', members: ['Alankar', 'Riyana'], score: 85, img: j1, video: 'https://www.youtube.com/embed/XrRFg0DZ_AY' },
      { id: 'j2', place: 2, trophy: '🥈', team: 'Robonex', project: 'Autometic Hand Wash Dispenser', school: 'EPIC DIGITAL LAB', members: ['Aadipt', 'Kiyara'], score: 80, img: j2, video: 'https://www.youtube.com/embed/KCQ5qDKcp54' },
      { id: 'j3', place: 3, trophy: '🥉', team: 'Jagrit-Jasmeet', project: 'Autometic Street Light', school: 'ST. Andrews School', members: ['Jagrit', 'Jasmeet'], score: 79, img: j3, video: 'https://www.youtube.com/embed/ut0T2ekKc2g' }
    ]
  },
  intermediate: {
    label: 'Intermediate',
    age: '11–13',
    winners: [
      { id: 'i1', place: 1, trophy: '🏆', team: 'FireFalcon', project: 'AGNI Auto Fire Fighting Robot', school: 'Public English Medium School, Phulbani', members: ['Ansuman', 'Kiran'], score: 94, img: i1, video: 'https://www.youtube.com/embed/cXpdSEk4H9Y' },
      { id: 'i2', place: 2, trophy: '🥈', team: 'VisionX', project: 'NAMRATA AI Face Attendance System', school: 'Public English Medium School, Phulbani', members: ['Namrata Mishara'], score: 93, img: i2, video: 'https://www.youtube.com/embed/OAmW9IC6W-U' },
      { id: 'i3', place: 3, trophy: '🥉', team: 'Vector', project: 'Visionsort', school: "EPIC DIGITAL LABS", members: ["Ved Gala", 'Samantha'], score: 92, img: i3, video: 'https://www.youtube.com/embed/9AVuLfXwj2Q' }
    ]
  },
  senior: {
    label: 'Senior',
    age: '14–16',
    winners: [
      { id: 's1', place: 1, trophy: '🏆', team: 'VIKAS_TNEPUC-CHARAN_TNEPUC', project: 'Carbo Toxified', school: 'TNEPUC', members: ['Vikas', 'Charan'], score: 87, img: s1, video: 'https://www.youtube.com/embed/bzEJOcte2sU' },
      { id: 's2', place: 2, trophy: '🥈', team: 'KEERTHANA_TNEPUC-KAVANA_TNEPUC', project: 'Healthhawk', school: 'TNEPUC', members: ['Keerthana', 'Kavana'], score: 82, img: s2, video: 'https://www.youtube.com/embed/aF_VbHzDS88' },
      { id: 's3', place: 3, trophy: '🥉', team: 'Volt', project: 'Robotic Hand', school: 'EPIC DIGITAL LABS', members: ['Aditya', 'Advarya'], score: 81, img: s3, video: 'https://www.youtube.com/embed/rKFw2GbRkdQ' }
    ]
  }
};

const APPRECIATION_DATA = {
  junior: [
    { prize: '1st', group: 'Electra', innovation: 23, tech: 27, functionality: 17, presentation: 12, impact: 6, total: 85 },
    { prize: '2nd', group: 'Robonex', innovation: 21, tech: 22, functionality: 18, presentation: 11, impact: 8, total: 80 },
    { prize: '3rd', group: 'Jagrit-Jasmit', innovation: 21, tech: 24, functionality: 16, presentation: 9, impact: 9, total: 79 },
  ],
  intermediate: [
    { prize: '1st', group: 'FireFalcon', innovation: 24, tech: 29, functionality: 18, presentation: 14, impact: 9, total: 94 },
    { prize: '2nd', group: 'VisionX', innovation: 23, tech: 28, functionality: 19, presentation: 14, impact: 9, total: 93 },
    { prize: '3rd', group: 'Vector', innovation: 24, tech: 27, functionality: 18, presentation: 14, impact: 9, total: 92 },
    { prize: '4th', group: 'Rishi Segregator (Appreciation for Best functionality and real world Impact)', innovation: 23, tech: 27, functionality: 19, presentation: 13, impact: 9, total: 91 },
  ],
  senior: [
    { prize: '1st', group: 'VIKAS_TNEPUC-CHARAN_TNEPUC', innovation: 23, tech: 26, functionality: 17, presentation: 12, impact: 9, total: 87 },
    { prize: '2nd', group: 'KEERTHANA_TNEPUC-KAVANA_TNEPUC', innovation: 22, tech: 25, functionality: 14, presentation: 12, impact: 9, total: 82 },
    { prize: '3rd', group: 'Volt', innovation: 21, tech: 25, functionality: 16, presentation: 11, impact: 8, total: 81 },
  ]
};

const SPECIAL_AWARDS = [
  {
    id: 'sa1',
    title: 'School Spirit Award',
    subtitle: 'Robothrone 2.0',
    recipient: 'Gyan Vikash',
    location: 'Govindpur, Berhampur',
    iconType: 'spirit'
  },
  {
    id: 'sa2',
    title: 'School of the Year',
    subtitle: 'Robothrone 2.0',
    recipient: 'Shree Guru Vidyadhiraj New English Pre-University College',
    location: '',
    iconType: 'school'
  },
  {
    id: 'sa3',
    title: 'Robotics Excellence Award',
    subtitle: 'Robothrone 2.0',
    recipient: 'Abhyash Techno School',
    location: '',
    iconType: 'excellence'
  },
  {
    id: 'sa4',
    title: 'Mentor of the Year Award',
    subtitle: 'Robothrone 2.0',
    recipient: 'Prachi Kumatekar',
    location: 'EPIC DIGITAL LAB',
    iconType: 'mentor'
  }
];

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

function AwardIcon({ type }) {
  switch (type) {
    case 'spirit':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case 'school':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      );
    case 'excellence':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      );
    case 'mentor':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.5 1 3.5.7.8 1.3 1.5 1.5 2.5" />
          <line x1="9" y1="18" x2="15" y2="18" />
          <line x1="10" y1="22" x2="14" y2="22" />
        </svg>
      );
    default:
      return null;
  }
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

        {/* Prizes & Rewards Callout */}
        <div className="rw-rewards-callout">
          <div className="rw-rewards-glow-circle" />
          <div className="rw-rewards-content">
            <span className="rw-rewards-badge">🎁 Prizes &amp; Rewards</span>
            <p className="rw-rewards-text">
              Each winner will get <strong>Cash Prize + DIY Kit + Certificate + Medal</strong>
            </p>
          </div>
          <Link to="/robothrone" className="rw-rewards-button">
            Know More
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        {/* Appreciation Section */}
        <section className="rw-appreciation-section">
          <div className="rw-appreciation-title-area">
            <div className="rw-appreciation-badge">💯Evaluation Scorecards</div>
  
          </div>

          <div className="rw-scorecards-stack">
            {Object.entries(APPRECIATION_DATA).map(([catKey, list]) => {
              const label = catKey === 'junior' ? 'Junior Category (Ages 8-10)' :
                            catKey === 'intermediate' ? 'Intermediate Category (Ages 11-13)' :
                            'Senior Category (Ages 14-16)';
              return (
                <div key={catKey} className="rw-scorecard-card">
                  <h3>{label}</h3>
                  <div className="rw-table-wrapper">
                    <table className="rw-score-table">
                      <thead>
                        <tr>
                          <th>Prize</th>
                          <th>Group</th>
                          <th>Innovation &amp; Creativity (25)</th>
                          <th>Technical Implementation (30)</th>
                          <th>Functionality (20)</th>
                          <th>Presentation &amp; Doc. (15)</th>
                          <th>Real-World Impact (10)</th>
                          <th>Total Score (100)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {list.map((row, index) => {
                          const medalClass = row.prize === '1st' ? 'gold' : 
                                             row.prize === '2nd' ? 'silver' : 
                                             row.prize === '3rd' ? 'bronze' : 'other';
                          return (
                            <tr key={index}>
                              <td>
                                <span className={`rw-table-medal ${medalClass}`}>
                                  {row.prize}
                                </span>
                              </td>
                              <td style={{ fontWeight: 600 }}>{row.group}</td>
                              <td>
                                <span className="rw-score-cell">{row.innovation}</span>
                                <span className="rw-score-max-cell">/25</span>
                              </td>
                              <td>
                                <span className="rw-score-cell">{row.tech}</span>
                                <span className="rw-score-max-cell">/30</span>
                              </td>
                              <td>
                                <span className="rw-score-cell">{row.functionality}</span>
                                <span className="rw-score-max-cell">/20</span>
                              </td>
                              <td>
                                <span className="rw-score-cell">{row.presentation}</span>
                                <span className="rw-score-max-cell">/15</span>
                              </td>
                              <td>
                                <span className="rw-score-cell">{row.impact}</span>
                                <span className="rw-score-max-cell">/10</span>
                              </td>
                              <td>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                  <span className={`rw-total-score-badge ${medalClass}-bg`}>
                                    {row.total} <span style={{ fontSize: '0.65rem', marginLeft: '2px', opacity: 0.7 }}>/100</span>
                                  </span>
                                  <div className="rw-bar-mini">
                                    <div className={`rw-bar-mini-fill ${medalClass}`} style={{ width: `${row.total}%` }}></div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Special Recognition Awards */}
        <section className="rw-special-awards-section">
          <div className="rw-special-awards-title-area">
            <div className="rw-special-awards-badge">🏅 Special Recognition</div>
            <h2 className="rw-special-awards-title">Most Appreciated Awards of the Year</h2>
            <p className="rw-special-awards-subtitle">
              Honoring institutions, mentors, and teams showing outstanding spirit, dedication, and technical excellence in Robothrone 2.0.
            </p>
          </div>

          <div className="rw-special-awards-grid">
            {SPECIAL_AWARDS.map((award) => (
              <div key={award.id} className={`rw-special-award-card rw-card-${award.iconType}`}>
                <div className="rw-special-award-icon-container">
                  <AwardIcon type={award.iconType} />
                </div>
                <div className="rw-special-award-tag">{award.subtitle}</div>
                <h3 className="rw-special-award-title">{award.title}</h3>
                <div className="rw-special-award-divider" />
                <div className="rw-special-award-recipient">
                  <div className="rw-special-award-label">Recipient</div>
                  <div className="rw-special-award-name">{award.recipient}</div>
                  {award.location && (
                    <div className="rw-special-award-location">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px', verticalAlign: 'middle', display: 'inline-block' }}>
                        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {award.location}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
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
