import { useState } from 'react'
import './App.css'

// ─── ICONS ────────────────────────────────────────────────────────────────────
const CalIcon = () => (
  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="url(#cal-grad)"/>
    <defs>
      <linearGradient id="cal-grad" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#4285F4"/>
        <stop offset="50%" stopColor="#EA4335"/>
        <stop offset="100%" stopColor="#34A853"/>
      </linearGradient>
    </defs>
    <rect x="5" y="6" width="14" height="13" rx="2" fill="white" opacity="0.9"/>
    <line x1="5" y1="10" x2="19" y2="10" stroke="#4285F4" strokeWidth="1.5"/>
    <line x1="8" y1="6" x2="8" y2="4" stroke="#EA4335" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="16" y1="6" x2="16" y2="4" stroke="#34A853" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="8" y="13" width="3" height="3" rx="0.5" fill="#4285F4" opacity="0.7"/>
    <rect x="13" y="13" width="3" height="3" rx="0.5" fill="#EA4335" opacity="0.7"/>
  </svg>
)

const TelegramIcon = () => (
  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#229ED9"/>
    <path d="M5.5 11.8l10.2-3.9c.5-.2.9.1.7.7l-1.7 8.2c-.1.5-.5.6-.9.4L11 15.1l-1.4 1.4c-.2.2-.4.2-.5-.1L8 14l-2.5-.8c-.5-.2-.5-.5.1-.7z" fill="white"/>
  </svg>
)

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
)

const UnfairIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
)

// ─── VIBE TAGS DATA ────────────────────────────────────────────────────────────
const vibeTags = [
  { id: 'photography', emoji: '📷', label: 'Photography', cls: 'photography' },
  { id: 'music', emoji: '🎵', label: 'Music', cls: 'music' },
  { id: 'adventure', emoji: '⛺', label: 'Adventure', cls: 'adventure' },
  { id: 'games', emoji: '🎮', label: 'Video Games', cls: 'games' },
  { id: 'football', emoji: '⚽', label: 'Football', cls: 'football' },
  { id: 'culture', emoji: '🌍', label: 'Local Culture', cls: 'culture' },
  { id: 'foodie', emoji: '🍜', label: 'Foodie', cls: 'foodie' },
  { id: 'swimming', emoji: '🏊', label: 'Swimming', cls: 'swimming' },
  { id: 'movies', emoji: '🎬', label: 'Movies', cls: 'movies' },
  { id: 'coffee', emoji: '☕', label: 'Coffee', cls: 'coffee' },
  { id: 'reading', emoji: '📚', label: 'Reading', cls: 'reading' },
  { id: 'travel', emoji: '✈️', label: 'Travel', cls: 'travel' },
  { id: 'cooking', emoji: '🍳', label: 'Cooking', cls: 'cooking' },
  { id: 'tech', emoji: '💻', label: 'Technology', cls: 'tech' },
  { id: 'news', emoji: '📰', label: 'News', cls: 'news' },
  { id: 'camping', emoji: '🏕️', label: 'Camping', cls: 'camping' },
]

// ─── VIBE MODAL COMPONENT ─────────────────────────────────────────────────────
function VibeModal({ isDark }) {
  const [selected, setSelected] = useState(
    new Set(['photography', 'music', 'adventure', 'games', 'football', 'culture', 'foodie'])
  )

  const toggle = (id) => {
    setSelected(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <div className="vibe-modal" style={isDark ? { background: '#f8f8f8' } : {}}>
      <div className="vibe-close-btn">
        <div className="vibe-close-icon">✕</div>
      </div>
      <div className="vibe-title">What's Your Vibe?</div>
      <div className="vibe-subtitle">Choose what you're into and let others know.</div>
      <div className="vibe-interests-label">Interests</div>
      <div className="vibe-tags">
        {vibeTags.map(tag => (
          <button
            key={tag.id}
            className={`vibe-tag${selected.has(tag.id) ? ` selected ${tag.cls}` : ''}`}
            onClick={() => toggle(tag.id)}
          >
            <span>{tag.emoji}</span>
            <span>{tag.label}</span>
          </button>
        ))}
      </div>
      <div className="vibe-show-all">Show all</div>
      <div className="vibe-footer">
        <span className="vibe-count">{selected.size}/30 selected</span>
        <button className="vibe-continue-btn">Continue</button>
      </div>
    </div>
  )
}

// ─── WORK SAMPLES TAB ─────────────────────────────────────────────────────────
function WorkSamples() {
  return (
    <div className="cards-container">

      {/* ── CARD 1: VECTOR ── */}
      <div className="project-card vector-card">
        <div className="vector-card-nav">
          <div className="vector-nav-links">
            <span>Product</span>
            <span>Case studies</span>
            <span>Docs</span>
            <span>Pricing</span>
          </div>
          <div className="vector-logo">
            <span className="vector-logo-icon">✦</span>
            <span>Vector</span>
          </div>
          <button className="vector-nav-cta">Book a call</button>
        </div>

        <img
          src="/vector_hero.jpg"
          alt="Two professionals working on laptops in a desert landscape"
          className="vector-hero-image"
        />

        <div className="vector-tagline-area">
          <h2 className="vector-tagline-heading">
            Built for teams,<br />
            <span className="muted">real</span> time saved.
          </h2>
          <p className="vector-tagline-sub">
            See how teams using Vector cut hours of manual work down to minutes,
            with workflows that run themselves, week after week.
          </p>

          <div className="vector-sub-cards">
            <div className="sub-card sub-card-fintech">
              <span className="sub-card-label">Fintech</span>
            </div>
            <div className="sub-card sub-card-ecommerce">
              <span className="sub-card-label">Ecommerce</span>
            </div>
            <div className="sub-card sub-card-web3">
              <span className="sub-card-label">Web3</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── CARD 2: LOGIN (Step Into Tomorrow) ── */}
      <div className="project-card login-card">
        <div className="login-card-visual">
          <img src="/desert_bg.jpg" alt="Cinematic desert monoliths landscape" />
          <div className="login-card-visual-text">
            <h3>Step Into Tomorrow</h3>
            <p>Your next journey starts here. Securely access your workspace and keep building.</p>
          </div>
        </div>

        <div className="login-card-form">
          <div>
            <div className="login-field-label">Email</div>
            <input className="login-field-input" type="email" placeholder="name@example.com" />
          </div>
          <div>
            <div className="login-field-label">Password</div>
            <input className="login-field-input" type="password" defaultValue="••••••••••••••" />
          </div>
          <div className="login-field-row">
            <label className="login-remember">
              <input type="checkbox" /> Remember me
            </label>
            <span className="login-forgot">Forgot your password?</span>
          </div>
          <button className="login-submit">Log In</button>
          <div className="login-divider">or login with</div>
          <div className="login-oauth">
            <button className="oauth-btn">
              <svg width="14" height="14" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Google
            </button>
            <button className="oauth-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Apple
            </button>
          </div>
          <div className="login-register">
            Don't have an account? <strong>Register Now.</strong>
          </div>
        </div>
      </div>

      {/* ── CARD 3: VESTIGE ── */}
      <div className="project-card vestige-card">
        <div className="vestige-nav">
          <div className="vestige-brand">VESTIGE®</div>
          <div className="vestige-nav-links">
            <span className="active">Overview</span>
            <span>Services</span>
            <span>Projects</span>
            <span>Archives</span>
          </div>
          <span className="vestige-cta-link">Get in touch</span>
        </div>
        <div className="vestige-content">
          <div className="vestige-text-side">
            <h2 className="vestige-headline">
              Vestige turns ambition into something the world can see.
            </h2>
            <div className="vestige-sub-cta">
              <button className="vestige-btn-primary">Our work</button>
              <span className="vestige-btn-secondary">See the team →</span>
            </div>
          </div>
          <div className="vestige-image-side">
            <img src="/vestige.jpg" alt="Editorial fashion photograph" />
          </div>
        </div>
      </div>

      {/* ── CARD 4: VIBE SELECTION ── */}
      <div className="project-card vibe-card">
        <div className="vibe-card-inner-grid">
          <VibeModal />
          <VibeModal isDark />
        </div>
      </div>

      {/* ── CARD 5: FITNESS APP ── */}
      <div className="project-card fitness-card">
        <div className="fitness-card-header">
          <img className="fitness-canyon-img" src="/desert_bg.jpg" alt="Canyon landscape" style={{objectPosition: 'center 30%'}} />
        </div>
        <div className="fitness-widgets-row">
          <div className="fitness-widget fitness-widget-light">
            <div className="fitness-widget-topbar">
              <span className="fitness-widget-time" style={{color:'#888'}}>6:57 PM</span>
              <span className="fitness-widget-heart">❤️ 96</span>
            </div>
            <div className="fitness-steps" style={{color:'#111'}}>7,842</div>
            <div className="fitness-label">steps today</div>
            <div className="fitness-activity">
              <div className="fitness-activity-icon">🚶</div>
              <div>
                <div className="fitness-activity-name" style={{color:'#111'}}>Walk</div>
                <div style={{fontSize:'11px',color:'#888'}}>Active</div>
              </div>
            </div>
          </div>
          <div className="fitness-widget fitness-widget-dark">
            <div className="fitness-widget-topbar">
              <span className="fitness-widget-time">6:57 PM</span>
              <span className="fitness-widget-heart">❤️ 96</span>
            </div>
            <div className="fitness-steps">7,842</div>
            <div className="fitness-label">steps today</div>
            <div className="fitness-activity">
              <div className="fitness-activity-icon">🚶</div>
              <div>
                <div className="fitness-activity-name">Walk</div>
                <div style={{fontSize:'11px',color:'rgba(255,255,255,0.5)'}}>Active</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

// ─── CASE STUDIES TAB ─────────────────────────────────────────────────────────
const caseStudies = [
  {
    tag: 'SaaS / B2B',
    title: 'Vector — Redesigning the Workflow Engine',
    desc: 'How a complete design overhaul of Vector\'s core product reduced churn by 34% and increased trial-to-paid conversion by 2.1×.',
    role: 'Lead Designer',
    duration: '3 months',
    outcome: '+34% retention',
  },
  {
    tag: 'Fintech',
    title: 'Redesigning the Investment Dashboard for Clarity',
    desc: 'Simplifying complex financial data into an intuitive interface that non-expert users could act on confidently.',
    role: 'Product Designer',
    duration: '6 weeks',
    outcome: '-41% support tickets',
  },
  {
    tag: 'Brand / Web',
    title: 'VESTIGE® — Building a Premium Agency Presence',
    desc: 'Creating a high-impact brand identity and web presence that communicates premium value from the first scroll.',
    role: 'Brand + Web Designer',
    duration: '4 weeks',
    outcome: '3× inquiry rate',
  },
  {
    tag: 'Mobile / Health',
    title: 'Fitness Tracker App — Making Health Feel Beautiful',
    desc: 'A health tracking app that balances data density with visual delight — making daily tracking feel effortless.',
    role: 'UI Designer',
    duration: '2 months',
    outcome: '4.9★ App Store',
  },
]

function CaseStudies() {
  return (
    <div className="case-studies-grid">
      {caseStudies.map((cs, i) => (
        <div key={i} className="case-study-card">
          <span className="case-study-tag">{cs.tag}</span>
          <h3 className="case-study-title">{cs.title}</h3>
          <p className="case-study-desc">{cs.desc}</p>
          <div className="case-study-meta">
            <div className="meta-item">
              <strong>{cs.role}</strong>
              Role
            </div>
            <div className="meta-item">
              <strong>{cs.duration}</strong>
              Duration
            </div>
            <div className="meta-item">
              <strong>{cs.outcome}</strong>
              Outcome
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [activeTab, setActiveTab] = useState('work')

  return (
    <div className="portfolio-root">

      {/* ── LEFT SIDEBAR ── */}
      <aside className="sidebar">
        <div className="sidebar-availability">
          <span className="availability-dot" />
          Available for projects
        </div>

        <img
          src="/avatar.jpg"
          alt="Sameer Singh"
          className="sidebar-avatar"
        />

        <div className="sidebar-name">Sameer Singh</div>
        <div className="sidebar-handle">@samtwtss</div>

        <p className="sidebar-bio-heading">
          Hey, I'm Sameer, an independent{' '}
          <strong>Web &amp; Product designer</strong> for{' '}
          <strong>SaaS startups.</strong>
        </p>

        <p className="sidebar-bio">
          I design sites and products that feel premium and turn visitors into{' '}
          <strong>actual customers</strong>. I care a lot about the small stuff,
          spacing, copy, the one extra click that shouldn't be there.
        </p>

        <div className="sidebar-ctas">
          <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className="btn-dark">
            <CalIcon />
            Book a call
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="btn-light">
            <TelegramIcon />
            Message me
          </a>
        </div>

        <div className="sidebar-contact-label">got a project in mind? let's chat :)</div>
        <div className="sidebar-socials">
          <a href="https://x.com/samtwtss" target="_blank" rel="noopener noreferrer" className="social-tag">
            <XIcon /> X
          </a>
          <a href="https://instagram.com/design.sameer" target="_blank" rel="noopener noreferrer" className="social-tag">
            <InstagramIcon /> Instagram
          </a>
          <a href="mailto:hello@samwrks.in" className="social-tag">
            <MailIcon /> Email
          </a>
          <a href="#" className="social-tag">
            <UnfairIcon /> Unfair <span className="italic-label">(for collabs)</span>
          </a>
        </div>
      </aside>

      {/* ── MAIN CONTENT ── */}
      <main className="main-content">
        <div className="tab-toggle-bar">
          <button
            id="tab-work-samples"
            className={`tab-btn ${activeTab === 'work' ? 'active' : 'inactive'}`}
            onClick={() => setActiveTab('work')}
          >
            Work samples
          </button>
          <button
            id="tab-case-studies"
            className={`tab-btn ${activeTab === 'cases' ? 'active' : 'inactive'}`}
            onClick={() => setActiveTab('cases')}
          >
            Case studies
          </button>
        </div>

        {activeTab === 'work' ? <WorkSamples /> : <CaseStudies />}
      </main>

    </div>
  )
}
