import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { Link } from 'react-router-dom';
import { courseDetails } from './coursesModalData';
import './coursesPage.css';

import appDevelopmentImage from './assets/CoursesPageImages/optimized/app-development.jpg';
import artificialIntelligenceImage from './assets/CoursesPageImages/optimized/artificial-intelligence.jpg';
import childImage from './assets/CoursesPageImages/optimized/child-image.png';
import electronicsImage from './assets/CoursesPageImages/optimized/electronics.jpg';
import gameDevelopmentImage from './assets/CoursesPageImages/optimized/game-development.jpg';
import internetOfThingsImage from './assets/CoursesPageImages/optimized/internet-of-things-iot.jpg';
import pythonProgrammingImage from './assets/CoursesPageImages/optimized/python-programming.jpg';
import roboticsAutomationImage from './assets/CoursesPageImages/optimized/robotics-automation.jpg';
import scratchProgrammingImage from './assets/CoursesPageImages/optimized/scratch-programming.jpg';
import testimonial1Image from './assets/CoursesPageImages/optimized/testimonial-1.png';
import testimonial2Image from './assets/CoursesPageImages/optimized/testimonial-2.png';
import testimonial3Image from './assets/CoursesPageImages/optimized/testimonial-3.png';
import testimonial4Image from './assets/CoursesPageImages/optimized/testimonial-4.png';
import testimonial5Image from './assets/CoursesPageImages/optimized/testimonial-5.png';
import testimonial6Image from './assets/CoursesPageImages/optimized/testimonial-6.png';
import testimonial7Image from './assets/CoursesPageImages/optimized/testimonial-7.png';
import testimonial8Image from './assets/CoursesPageImages/optimized/testimonial-8.png';
import testimonial9Image from './assets/CoursesPageImages/optimized/testimonial-9.png';
import testimonial10Image from './assets/CoursesPageImages/optimized/testimonial-10.png';
import webDevelopmentImage from './assets/CoursesPageImages/optimized/web-development.jpg';

import cmsComputerAnimationJson from './assets/CoursesPageImages/CMS computer animation.json?url';
import codingJson from './assets/CoursesPageImages/Coding.json?url';
import developmentOfAiJson from './assets/CoursesPageImages/Development Of Artificial Intelligence.json?url';
import ideaWithBooksJson from './assets/CoursesPageImages/Idea with books.json?url';
import readingJson from './assets/CoursesPageImages/Reading.json?url';
import roboheadLoadingJson from './assets/CoursesPageImages/Robohead Loading.json?url';
import studentWithLaptopJson from './assets/CoursesPageImages/student with laptop.json?url';
import classroomVideo1 from './assets/CoursesPageImages/Course page - Video 1.mp4';
import classroomVideo2 from './assets/CoursesPageImages/Course page - Video 2.mp4';
import classroomVideo3 from './assets/CoursesPageImages/Course page - Video 3.mp4';
import classroomVideo4 from './assets/CoursesPageImages/Course page - Video 4.mp4';
import classroomVideo5 from './assets/CoursesPageImages/Course page - Video 5.mp4';
import classroomVideo6 from './assets/CoursesPageImages/Course page - Video 6.mp4';
import classroomVideo7 from './assets/CoursesPageImages/Course page - Video 7.mp4';
import classroomVideo8 from './assets/CoursesPageImages/Course page - Video 8.mp4';

const classroomVideos = [
  classroomVideo1,
  classroomVideo2,
  classroomVideo3,
  classroomVideo4,
  classroomVideo5,
  classroomVideo6,
  classroomVideo7,
  classroomVideo8,
];

function CoursesPage() {
  const pageRootRef = useRef(null);
  const MODAL_CLOSE_MS = 140;

  useEffect(() => {
    let modalCloseTimer = null;

    const syncModalClass = () => {
      if (!pageRootRef.current) {
        return;
      }

      if (document.body.classList.contains('modal-open')) {
        pageRootRef.current.classList.add('modal-open');
      } else {
        pageRootRef.current.classList.remove('modal-open');
      }
    };

    const bodyClassObserver = new MutationObserver(syncModalClass);
    bodyClassObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    syncModalClass();

    const scrollToCurrentHash = () => {
      if (!window.location.hash) {
        return;
      }
      const hashId = window.location.hash.slice(1);
      if (!hashId) {
        return;
      }
      const target = document.getElementById(hashId);
      if (!target) {
        return;
      }
      target.scrollIntoView({ block: 'start' });
    };

    const runHashScroll = () => {
      window.requestAnimationFrame(scrollToCurrentHash);
    };

    const populateList = (elementId, dataArray) => {
      const container = document.getElementById(elementId);
      if (!container) return;

      container.innerHTML = '';
      if (!dataArray || !dataArray.length) return;

      const fragment = document.createDocumentFragment();
      dataArray.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        fragment.appendChild(li);
      });
      container.appendChild(fragment);
    };

    const openCourseModal = (courseKey) => {
      const course = courseDetails[courseKey];
      if (!course) return;

      const modal = document.getElementById('courseModal');
      if (!modal) return;

      const modalTitle = document.getElementById('modalTitle');
      const modalSessions = document.getElementById('modalSessions');
      const modalProjectsCount = document.getElementById('modalProjectsCount');
      const modalAssessment = document.getElementById('modalAssessment');
      const modalDescription = document.getElementById('modalDescription');
      const modalDuration = document.getElementById('modalDuration');

      if (modalTitle) modalTitle.textContent = course.title;
      if (modalSessions) modalSessions.textContent = course.sessions;
      if (modalProjectsCount) modalProjectsCount.textContent = course.projectsCount;
      if (modalAssessment) modalAssessment.textContent = course.assessment;
      if (modalDescription) modalDescription.textContent = course.description;
      if (modalDuration) modalDuration.textContent = course.duration;

      populateList('modalLearn', course.whatWillYouLearn);
      populateList('modalCurriculum', course.curriculum);
      populateList('modalProjects', course.projects);
      populateList('modalSkills', course.skills);

      modal.classList.remove('closing');
      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden', 'false');
      window.requestAnimationFrame(() => {
        modal.classList.add('show');
      });
      document.body.classList.add('modal-open');
    };

    const closeModal = () => {
      const modal = document.getElementById('courseModal');
      if (!modal) return;

      if (!modal.classList.contains('show') || modal.classList.contains('closing')) return;

      modal.classList.remove('show');
      modal.classList.add('closing');

      if (modalCloseTimer) {
        window.clearTimeout(modalCloseTimer);
      }

      modalCloseTimer = window.setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('closing');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
        modalCloseTimer = null;
      }, MODAL_CLOSE_MS);
    };

    const handleDocumentClick = (e) => {
      const button = e.target.closest('.know-more');
      if (!button) return;

      e.preventDefault();
      const courseKey = button.getAttribute('data-course');
      if (courseKey && courseDetails[courseKey]) {
        openCourseModal(courseKey);
      }
    };

    const modal = document.getElementById('courseModal');
    const closeBtn = modal ? modal.querySelector('.close-modal') : null;

    const handleOverlayClick = (e) => {
      if (e.target === modal) {
        closeModal();
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
        closeModal();
      }
    };

    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('keydown', handleEscape);
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }
    if (modal) {
      modal.addEventListener('click', handleOverlayClick);
    }

    runHashScroll();
    window.addEventListener('hashchange', runHashScroll);
    const pageRootNode = pageRootRef.current;

    return () => {
      bodyClassObserver.disconnect();
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('keydown', handleEscape);
      if (closeBtn) {
        closeBtn.removeEventListener('click', closeModal);
      }
      if (modal) {
        modal.removeEventListener('click', handleOverlayClick);
      }
      if (modalCloseTimer) {
        window.clearTimeout(modalCloseTimer);
      }
      window.removeEventListener('hashchange', runHashScroll);
      document.body.classList.remove('modal-open');
    };
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const createdAnimations = [];
    const createdObservers = [];
    const cleanupTimers = [];
    const cleanupStoryInteractions = [];

    const initializeHeroBackground = () => {
      const container = document.getElementById('heroBackgroundAnimation');
      if (!container || container.children.length > 0) return;

      const createHeroSVG = () => {
        container.innerHTML = `
          <svg class="hero-scene" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs>
              <linearGradient id="heroSky" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#002a52"></stop>
                <stop offset="55%" stop-color="#0a4a85"></stop>
                <stop offset="100%" stop-color="#1a6cb0"></stop>
              </linearGradient>
              <radialGradient id="heroSun" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stop-color="#ffeaa6" stop-opacity="0.85"></stop>
                <stop offset="100%" stop-color="#ffeaa6" stop-opacity="0"></stop>
              </radialGradient>
            </defs>
            <rect width="1440" height="900" fill="url(#heroSky)"></rect>
            <g class="hero-clouds">
              <ellipse class="hero-cloud hero-cloud-a" cx="220" cy="220" rx="170" ry="62"></ellipse>
              <ellipse class="hero-cloud hero-cloud-b" cx="1240" cy="250" rx="210" ry="70"></ellipse>
              <ellipse class="hero-cloud hero-cloud-c" cx="820" cy="160" rx="140" ry="52"></ellipse>
            </g>
            <g class="hero-floating-icons">
              <text class="hero-icon hero-icon-a" x="160" y="190">{ }</text>
              <text class="hero-icon hero-icon-b" x="1060" y="300">&lt;/&gt;</text>
              <text class="hero-icon hero-icon-c" x="560" y="120">AI</text>
            </g>
            <path class="hero-hill-back" d="M0 640 C220 570, 520 700, 760 620 C980 545, 1210 650, 1440 600 L1440 900 L0 900 Z"></path>
            <path class="hero-hill-front" d="M0 700 C260 620, 520 760, 760 700 C980 650, 1200 760, 1440 710 L1440 900 L0 900 Z"></path>
            <g class="hero-gear-system">
              <g class="hero-gear hero-gear-a" transform="translate(260 665)">
                <circle r="44"></circle>
                <line x1="-44" y1="0" x2="44" y2="0"></line>
                <line x1="0" y1="-44" x2="0" y2="44"></line>
                <line x1="-31" y1="-31" x2="31" y2="31"></line>
                <line x1="-31" y1="31" x2="31" y2="-31"></line>
                <circle class="hero-gear-center" r="12"></circle>
              </g>
              <g class="hero-gear hero-gear-b" transform="translate(350 724)">
                <circle r="30"></circle>
                <line x1="-30" y1="0" x2="30" y2="0"></line>
                <line x1="0" y1="-30" x2="0" y2="30"></line>
                <line x1="-21" y1="-21" x2="21" y2="21"></line>
                <line x1="-21" y1="21" x2="21" y2="-21"></line>
                <circle class="hero-gear-center" r="8"></circle>
              </g>
            </g>
            <g class="hero-play-scene">
              <g class="hero-kid hero-kid-coder" transform="translate(446 652)">
                <circle class="kid-head" cx="0" cy="-82" r="26"></circle>
                <rect class="kid-body kid-body-coder" x="-20" y="-48" width="40" height="64" rx="19"></rect>
                <line class="kid-leg" x1="-8" y1="16" x2="-14" y2="72"></line>
                <line class="kid-leg" x1="8" y1="16" x2="16" y2="72"></line>
                <line class="kid-arm" x1="-20" y1="-18" x2="-50" y2="-30"></line>
                <line class="kid-arm" x1="20" y1="-18" x2="46" y2="-8"></line>
              </g>
              <g class="hero-kid hero-kid-left" transform="translate(520 645)">
                <circle class="kid-head" cx="0" cy="-86" r="30"></circle>
                <rect class="kid-body kid-body-left" x="-24" y="-52" width="48" height="70" rx="22"></rect>
                <line class="kid-leg" x1="-11" y1="18" x2="-22" y2="78"></line>
                <line class="kid-leg" x1="11" y1="18" x2="24" y2="78"></line>
                <line class="kid-arm" x1="-24" y1="-18" x2="-56" y2="8"></line>
                <g class="kid-arm-wave"><line class="kid-arm" x1="24" y1="-18" x2="60" y2="-58"></line></g>
              </g>
              <g class="hero-kid hero-kid-right" transform="translate(940 650)">
                <circle class="kid-head" cx="0" cy="-84" r="28"></circle>
                <rect class="kid-body kid-body-right" x="-22" y="-50" width="44" height="66" rx="20"></rect>
                <line class="kid-leg" x1="-10" y1="16" x2="-24" y2="76"></line>
                <line class="kid-leg" x1="10" y1="16" x2="20" y2="76"></line>
              </g>
              <g class="hero-robot" transform="translate(735 642)">
                <rect class="robot-body" x="-56" y="-78" width="112" height="128" rx="24"></rect>
                <rect class="robot-face" x="-40" y="-56" width="80" height="48" rx="12"></rect>
                <circle class="robot-eye robot-eye-left" cx="-16" cy="-33" r="6"></circle>
                <circle class="robot-eye robot-eye-right" cx="16" cy="-33" r="6"></circle>
                <rect class="robot-mouth" x="-16" y="-18" width="32" height="6" rx="3"></rect>
                <line class="robot-antenna" x1="0" y1="-78" x2="0" y2="-102"></line>
                <circle class="robot-signal" cx="0" cy="-110" r="8"></circle>
              </g>
            </g>
          </svg>
        `;
      };

      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(createHeroSVG, { timeout: 2000 });
      } else {
        const timer = window.setTimeout(createHeroSVG, 100);
        cleanupTimers.push(timer);
      }
    };

    const loadLottieAnimations = () => {
      const containers = document.querySelectorAll('[data-lottie]');
      if (!containers.length) return;

      const loadLottieOnVisible = (container) => {
        if (container.dataset.loaded === 'true') return;
        const jsonPath = container.dataset.lottie;
        if (!jsonPath) return;

        container.dataset.loaded = 'true';
        try {
          const animation = lottie.loadAnimation({
            container,
            renderer: 'svg',
            loop: true,
            autoplay: !prefersReducedMotion,
            path: jsonPath,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          });
          createdAnimations.push(animation);
        } catch (err) {
          console.error(err);
          container.dataset.loaded = 'false';
        }
      };

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadLottieOnVisible(entry.target);
              observer.unobserve(entry.target);
            }
          });
        }, { rootMargin: '100px', threshold: 0.1 });

        containers.forEach((container) => observer.observe(container));
        createdObservers.push(observer);
      } else {
        containers.forEach((container) => loadLottieOnVisible(container));
      }
    };

    const initializeStoryTrack = () => {
      const track = document.querySelector('.story-track');
      if (!track || track.dataset.loopReady === 'true') return;
      const viewport = document.querySelector('.story-viewport');

      const items = Array.from(track.children);
      if (items.length < 2) return;

      const fragment = document.createDocumentFragment();
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        fragment.appendChild(clone);
      });
      track.appendChild(fragment);
      track.dataset.loopReady = 'true';
      track.classList.add('is-looping');

      if (!viewport) return;

      const pauseScroll = () => {
        if (track.classList.contains('is-looping')) {
          track.style.animationPlayState = 'paused';
        }
      };

      const resumeScroll = () => {
        if (track.classList.contains('is-looping')) {
          track.style.animationPlayState = 'running';
        }
      };

      const attachStoryListener = (eventName, handler, options) => {
        viewport.addEventListener(eventName, handler, options);
        cleanupStoryInteractions.push(() => viewport.removeEventListener(eventName, handler, options));
      };

      attachStoryListener('pointerenter', pauseScroll);
      attachStoryListener('pointerleave', resumeScroll);
      attachStoryListener('touchstart', pauseScroll, { passive: true });
      attachStoryListener('touchend', resumeScroll, { passive: true });
      attachStoryListener('touchcancel', resumeScroll, { passive: true });
    };

    const initializeSectionRevealAnimations = () => {
      const selectors = ['.courses-section .card', '.future-point'];
      const revealTargets = [];

      selectors.forEach((selector) => {
        document.querySelectorAll(selector).forEach((element, index) => {
          element.classList.add('section-animate');
          element.style.setProperty('--reveal-order', String(index));
          revealTargets.push(element);
        });
      });

      if (!revealTargets.length) return;

      if (!('IntersectionObserver' in window)) {
        revealTargets.forEach((element) => element.classList.add('is-visible'));
        return;
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
      });

      revealTargets.forEach((element) => observer.observe(element));
      createdObservers.push(observer);
    };

    initializeHeroBackground();
    if (!prefersReducedMotion) {
      loadLottieAnimations();
      initializeSectionRevealAnimations();
    }
    initializeStoryTrack();

    return () => {
      createdObservers.forEach((observer) => observer.disconnect());
      createdAnimations.forEach((animation) => {
        if (animation && typeof animation.destroy === 'function') {
          animation.destroy();
        }
      });
      cleanupTimers.forEach((timer) => window.clearTimeout(timer));
      cleanupStoryInteractions.forEach((cleanup) => cleanup());
    };
  }, []);

  useEffect(() => {
    const reelsContainer = document.querySelector('.reels-container');
    if (!reelsContainer) return;

    const cards = Array.from(reelsContainer.querySelectorAll('.reel-card'));
    const videos = Array.from(reelsContainer.querySelectorAll('.reel-bg'));
    const cleanups = [];
    let isPointerDown = false;
    let dragStartX = 0;
    let initialScrollLeft = 0;

    const syncPausedState = (video) => {
      const card = video.closest('.reel-card');
      if (!card) return;
      card.classList.toggle('is-paused', video.paused);
      const control = card.querySelector('.play-btn-circle');
      if (control) {
        control.setAttribute('aria-label', video.paused ? 'Play video' : 'Pause video');
      }
    };

    const playVideo = (video, withSound = false) => {
      videos.forEach((otherVideo) => {
        if (otherVideo !== video) {
          otherVideo.pause();
          otherVideo.muted = true;
          syncPausedState(otherVideo);
        }
      });

      video.muted = !withSound;

      const playAttempt = video.play();
      if (playAttempt && typeof playAttempt.catch === 'function') {
        playAttempt.catch(() => {
          video.muted = true;
          const mutedAttempt = video.play();
          if (mutedAttempt && typeof mutedAttempt.catch === 'function') {
            mutedAttempt.catch(() => syncPausedState(video));
          }
        });
      }
      syncPausedState(video);
    };

    videos.forEach((video) => {
      video.loop = true;
      video.playsInline = true;
      video.preload = 'metadata';
      video.controls = false;
      video.muted = true;
      syncPausedState(video);

      const onPlay = () => syncPausedState(video);
      const onPause = () => syncPausedState(video);
      video.addEventListener('play', onPlay);
      video.addEventListener('pause', onPause);
      cleanups.push(() => video.removeEventListener('play', onPlay));
      cleanups.push(() => video.removeEventListener('pause', onPause));
    });

    cards.forEach((card) => {
      const video = card.querySelector('.reel-bg');
      const button = card.querySelector('.play-btn-circle');
      if (!video || !button) return;

      const onButtonClick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (video.paused) {
          playVideo(video, true);
        } else {
          video.pause();
          video.muted = true;
          syncPausedState(video);
        }
      };

      const onCardClick = (e) => {
        if (e.target.closest('.play-btn-circle')) return;
        e.preventDefault();
        e.stopPropagation();

        if (video.paused) {
          playVideo(video, false);
        } else {
          video.pause();
          video.muted = true;
          syncPausedState(video);
        }
      };

      button.addEventListener('click', onButtonClick);
      card.addEventListener('click', onCardClick);
      cleanups.push(() => button.removeEventListener('click', onButtonClick));
      cleanups.push(() => card.removeEventListener('click', onCardClick));
    });

    const onPointerDown = (event) => {
      isPointerDown = true;
      dragStartX = event.clientX;
      initialScrollLeft = reelsContainer.scrollLeft;
      reelsContainer.classList.add('dragging');
    };

    const onPointerMove = (event) => {
      if (!isPointerDown) return;

      const deltaX = event.clientX - dragStartX;
      reelsContainer.scrollLeft = initialScrollLeft - deltaX;
    };

    const onPointerUp = () => {
      isPointerDown = false;
      reelsContainer.classList.remove('dragging');
    };

    reelsContainer.addEventListener('pointerdown', onPointerDown);
    reelsContainer.addEventListener('pointermove', onPointerMove);
    reelsContainer.addEventListener('pointerup', onPointerUp);
    reelsContainer.addEventListener('pointerleave', onPointerUp);
    reelsContainer.addEventListener('pointercancel', onPointerUp);
    cleanups.push(() => reelsContainer.removeEventListener('pointerdown', onPointerDown));
    cleanups.push(() => reelsContainer.removeEventListener('pointermove', onPointerMove));
    cleanups.push(() => reelsContainer.removeEventListener('pointerup', onPointerUp));
    cleanups.push(() => reelsContainer.removeEventListener('pointerleave', onPointerUp));
    cleanups.push(() => reelsContainer.removeEventListener('pointercancel', onPointerUp));

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <div className="courses-page-container" ref={pageRootRef}>
      <header className="hero" id="home">
        <div id="heroBackgroundAnimation" className="hero-bg" aria-hidden="true"></div>
        <div className="hero-lottie" data-lottie={cmsComputerAnimationJson} aria-hidden="true"></div>
        <div className="hero-lottie2" data-lottie={roboheadLoadingJson} aria-hidden="true"></div>
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="kit-title">
              Leading the Future of Tech Education with <span className="accent">Robotics & Coding</span>
            </h1>
          </div>
          <div className="hero-image">
            <img
              src={childImage}
              alt="Kids in India learning robotics and coding at TechyGuide Robotics Centre"
              className="hero-img"
              width="600"
              height="400"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </header>

      <main>
        <section className="courses-section" id="courses">
          <h2 className="courses-title">
            Our <span className="accent">Courses</span>
          </h2>
          <div className="grid-wrapper">
            <article className="card">
              <img
                src={roboticsAutomationImage}
                alt="Student assembling an intelligent robot kit using sensors and hardware"
                className="card-img card-error-handle no-white-bg"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                width="400"
                height="280"
              />
              <h2 className="courses-name">Robo champ course</h2>
              <p>Master hardware and automation.</p>
              <p>Master hardware, sensors, and core engineering skills while building and programming intelligent robots.</p>
              <button type="button" className="know-more" data-course="Robotics">Know more</button>
              <Link to="/shop?category=Courses" className="btn-claim" aria-label="Buy Robotics course">Buy Now</Link>
            </article>

            <article className="card">
              <img
                src={pythonProgrammingImage}
                alt="Laptop screen showing Python programming code for beginners"
                className="card-img card-error-handle no-white-bg"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                width="400"
                height="280"
              />
              <h2 className="courses-name">Python Programming</h2>
              <p>Learn logic and programming.</p>
              <p>Begin your coding journey with Python’s powerful and beginner-friendly syntax, widely used in AI, Data Science and etc.</p>
              <button type="button" className="know-more" data-course="Coding">Know more</button>
              <Link to="/shop?category=Courses" className="btn-claim" aria-label="Buy Python Coding course">Buy Now</Link>
            </article>

            <article className="card">
              <img
                src={artificialIntelligenceImage}
                alt="Illustration of neural networks and AI systems for student learning"
                className="card-img card-error-handle no-white-bg"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                width="400"
                height="280"
              />
              <h2 className="courses-name">Artificial Intelligence</h2>
              <p>Discover the future of technology.</p>
              <p>Explore the future of tech. Create smart systems that learn and adapt automatically.</p>
              <button type="button" className="know-more" data-course="AI">Know more</button>
              <Link to="/shop?category=Courses" className="btn-claim" aria-label="Buy AI course">Buy Now</Link>
            </article>

            <article className="card">
              <img
                src={appDevelopmentImage}
                alt="Mobile app interface design on a smartphone screen for kids project"
                className="card-img card-error-handle"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                width="400"
                height="280"
              />
              <h2 className="courses-name">App Development</h2>
              <p>Learn mobile app development. </p>
              <p>Students create user-friendly apps for smartphones and tablets using real programming concepts.</p>
              <button type="button" className="know-more" data-course="AppDev">Know more</button>
              <Link to="/shop?category=Courses" className="btn-claim" aria-label="Buy App Development course">Buy Now</Link>
            </article>

            <article className="card">
              <img
                src={webDevelopmentImage}
                alt="Building a website using HTML CSS and JavaScript code snippets"
                className="card-img card-error-handle"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                width="400"
                height="280"
              />
              <h2 className="courses-name">Web Development</h2>
              <p>Learn website development and coding. </p>
              <p>Students use HTML, CSS and JavaScript to build interactive web pages and web Applications.</p>
              <button type="button" className="know-more" data-course="WebDev">Know more</button>
              <Link to="/shop?category=Courses" className="btn-claim" aria-label="Buy Web Development course">Buy Now</Link>
            </article>

            <article className="card">
              <img
                src={gameDevelopmentImage}
                alt="2D game design interface with character sprites and gameplay logic"
                className="card-img card-error-handle"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                width="400"
                height="280"
              />
              <h2 className="courses-name">Game Development</h2>
              <p>Learn hardware based game development.</p>
              <p>Build interactive embedded arcade games using Python fundamentals and ESP32 microcontroller.</p>
              <button type="button" className="know-more" data-course="Games">Know more</button>
              <Link to="/shop?category=Courses" className="btn-claim" aria-label="Buy Game Development course">Buy Now</Link>
            </article>

            <article className="card">
              <img
                src={internetOfThingsImage}
                alt="IoT smart device and connected sensor network"
                className="card-img card-error-handle no-white-bg"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                width="400"
                height="280"
              />
              <h2 className="courses-name">Internet of Things (IoT)</h2>
              <p>Learn Internet of Things (IoT) fundamentals and smart device development.</p>
              <p>Build smart automation projects using sensors, WiFi, and connected devices.</p>
              <button type="button" className="know-more" data-course="IoT">Know more</button>
              <Link to="/shop?category=Courses" className="btn-claim" aria-label="Buy IoT course">Buy Now</Link>
            </article>

            <article className="card">
              <img
                src={scratchProgrammingImage}
                alt="Scratch visual programming interface for kids"
                className="card-img card-error-handle no-white-bg"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                width="400"
                height="280"
              />
              <h2 className="courses-name">Scratch Programming</h2>
              <p>Learn Scratch programming <br/>fundamentals through creative visual coding.</p>
              <p>Build interactive games and animations using events, variables and game logic.</p>
              <button type="button" className="know-more" data-course="Scratch">Know more</button>
              <Link to="/shop?category=Courses" className="btn-claim" aria-label="Buy Scratch Programming course">Buy Now</Link>
            </article>

            <article className="card">
              <img
                src={electronicsImage}
                alt="Electronic components and circuit boards"
                className="card-img card-error-handle no-white-bg"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                width="400"
                height="280"
              />
              <h2 className="courses-name">Electronics </h2>
              <p>Learn electronics fundamentals<br/> through practical circuit building.</p>
              <p>Build interactive electronic projects<br /> using LEDs, motors, sensors, and control circuits.</p>
              <button type="button" className="know-more" data-course="Electronics">Know more</button>
              <Link to="/shop?category=Courses" className="btn-claim" aria-label="Buy Electronics course">Buy Now</Link>
            </article>
          </div>
        </section>

        <div id="courseModal" className="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle" aria-hidden="true">
          <div className="modal-content">
            <button type="button" className="close-modal" aria-label="Close modal">&times;</button>

            <h1 id="modalTitle"></h1>

            <div className="modal-stats">
              <span id="modalSessions"></span>
              <span id="modalProjectsCount"></span>
              <span id="modalAssessment"></span>
            </div>

            <Link to="/shop?category=Courses" className="btn-claim modal-btn">Buy Now</Link>

            <div className="modal-body-section">
              <h3>What will you learn</h3>
              <ul id="modalLearn" className="curriculum-list"></ul>
            </div>

            <div className="modal-body-section">
              <h3>Course Description</h3>
              <p id="modalDescription"></p>
            </div>

            <div className="modal-body-section">
              <h3>Duration</h3>
              <p id="modalDuration"></p>
            </div>

            <div className="modal-body-section">
              <h3>Curriculum</h3>
              <ul id="modalCurriculum" className="curriculum-list"></ul>
            </div>

            <div className="modal-body-section">
              <h3>Projects You&apos;ll Build</h3>
              <ul id="modalProjects" className="curriculum-list"></ul>
            </div>

            <div className="modal-body-section">
              <h3>Skills You&apos;ll Master</h3>
              <ul id="modalSkills" className="curriculum-list"></ul>
            </div>
          </div>
        </div>

        <section className="info-flow-section" id="why-choose">
          <div className="why-choose-bg" id="whyChooseBg" aria-hidden="true"></div>
          <div className="content-wrapper">
            <h2 className="main-title orange">Why Students Should Learn Robotics, Coding and AI Skills Today?</h2>

            <div className="future-points">
              <div className="future-point">
                <div className="point-content">
                  <div className="point-number">01</div>
                  <h3>Build Smart Machines, Not Just Use Them</h3>
                  <p>Your child learns how robots, sensors and smart devices actually work.</p>
                  <p>They develop hands-on problem-solving skills by building real robotics projects.</p>
                  <div className="future-impact"><strong>Future Impact:</strong> Builds strong STEM foundations and prepares students for robotics, automation, electronics and AI careers.</div>
                </div>
                <div className="point-image" data-lottie={developmentOfAiJson}></div>
              </div>

              <div className="future-point reverse">
                <div className="point-content">
                  <div className="point-number">02</div>
                  <h3>Learn the Technology Shaping the Future</h3>
                  <p>Your child learns how Artificial Intelligence and machine learning work in real life applications.</p>
                  <p>They build logical thinking and analytical skills from an early age.</p>
                  <div className="future-impact"><strong>Future Impact:</strong> Prepares students for high-demand careers in AI, data science and intelligent systems.</div>
                </div>
                <div className="point-image" data-lottie={readingJson}></div>
              </div>

              <div className="future-point">
                <div className="point-content">
                  <div className="point-number">03</div>
                  <h3>Create the Digital World</h3>
                  <p>Your child learns how websites and web applications are designed and built.</p>
                  <p>hey develop creativity while gaining practical coding and problem-solving skills.</p>
                  <div className="future-impact"><strong>Future Impact:</strong> Enables students to build websites, digital products and even launch their own online projects.</div>
                </div>
                <div className="point-image" data-lottie={studentWithLaptopJson}></div>
              </div>

              <div className="future-point reverse">
                <div className="point-content">
                  <div className="point-number">04</div>
                  <h3>Strong Foundation in Coding</h3>
                  <p>Python is beginner-friendly yet powerful, making it ideal for young learners.</p>
                  <p>Students use it in AI, automation, game development and software projects.</p>
                  <div className="future-impact"><strong>Future Impact:</strong> Builds core programming skills and prepares children for multiple technology careers.</div>
                </div>
                <div className="point-image" data-lottie={codingJson}></div>
              </div>

              <div className="future-point">
                <div className="point-content">
                  <div className="point-number">05</div>
                  <h3>Turn Ideas into Real Applications</h3>
                  <p>Students learn to design and develop mobile apps and web applications.</p>
                  <p>They understand how digital platforms and online businesses actually work.</p>
                  <div className="future-impact"><strong>Future Impact:</strong> Builds practical tech skills and confidence to create projects, startups and future career opportunities.</div>
                </div>
                <div className="point-image" data-lottie={ideaWithBooksJson}></div>
              </div>
            </div>
          </div>
        </section>

        <section className="reels-section">
          <div className="section-header">
            <h2 className="section-title">Classroom <span className="accent">Moments</span></h2>
          </div>

          <div className="reels-wrapper">
            <div className="reels-container" role="list" tabIndex="0" aria-label="Classroom moments reels">
              {classroomVideos.map((videoSrc, index) => (
                <div className="reel-card" role="listitem" key={videoSrc}>
                  <video className="reel-bg" loop playsInline preload="none">
                    <source src={videoSrc} type="video/mp4" />
                  </video>
                  <div className="reel-overlay">
                    <button type="button" className="play-btn-circle" aria-label={`Play classroom video ${index + 1}`}>
                      <span className="play-icon"></span>
                    </button>
                    <div className="reel-info"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="stories">
          <div className="container">
            <h2 className="section-title">Success <span className="accent">Stories</span></h2>
            <div className="story-viewport">
              <div className="story-track" role="list">
                <div className="story-item" role="listitem"><img src={testimonial1Image} alt="Student success story" loading="lazy" decoding="async" fetchPriority="low" width="400" height="300" className="img-error-handle no-white-bg" /></div>
                <div className="story-item" role="listitem"><img src={testimonial2Image} alt="Student success story" loading="lazy" decoding="async" fetchPriority="low" width="400" height="300" className="img-error-handle no-white-bg" /></div>
                <div className="story-item" role="listitem"><img src={testimonial3Image} alt="Student success story" loading="lazy" decoding="async" fetchPriority="low" width="400" height="300" className="img-error-handle no-white-bg" /></div>
                <div className="story-item" role="listitem"><img src={testimonial4Image} alt="Student success story" loading="lazy" decoding="async" fetchPriority="low" width="400" height="300" className="img-error-handle no-white-bg" /></div>
                <div className="story-item" role="listitem"><img src={testimonial5Image} alt="Student success story" loading="lazy" decoding="async" fetchPriority="low" width="400" height="300" className="img-error-handle no-white-bg" /></div>
                <div className="story-item" role="listitem"><img src={testimonial6Image} alt="Student success story" loading="lazy" decoding="async" fetchPriority="low" width="400" height="300" className="img-error-handle no-white-bg" /></div>
                <div className="story-item" role="listitem"><img src={testimonial7Image} alt="Student success story" loading="lazy" decoding="async" fetchPriority="low" width="400" height="300" className="img-error-handle no-white-bg" /></div>
                <div className="story-item" role="listitem"><img src={testimonial8Image} alt="Student success story" loading="lazy" decoding="async" fetchPriority="low" width="400" height="300" className="img-error-handle no-white-bg" /></div>
                <div className="story-item" role="listitem"><img src={testimonial9Image} alt="Student success story" loading="lazy" decoding="async" fetchPriority="low" width="400" height="300" className="img-error-handle no-white-bg" /></div>
                <div className="story-item" role="listitem"><img src={testimonial10Image} alt="Student success story" loading="lazy" decoding="async" fetchPriority="low" width="400" height="300" className="img-error-handle no-white-bg" /></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CoursesPage;
