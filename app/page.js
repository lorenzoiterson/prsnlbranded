"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Why per channel, not a flat monthly rate?",
    a: "Because a B2B founder needs LinkedIn above everything else. A course creator needs YouTube. You pay for what actually moves your business, not for channels that don't. If you want all three channels, you get a 10% discount on the total.",
  },
  {
    q: "How long until I see results?",
    a: "Most clients see meaningful engagement and inbound within 60 to 90 days. The first month is positioning and foundation. The second is when content starts compounding. Month three is when the first inbound leads usually arrive. Personal brands are not a sprint.",
  },
  {
    q: "Do I need to be on camera?",
    a: "For PRSNL Method, yes — but barely. We write your scripts, direct your delivery, and edit everything. Your job is 20 to 30 minutes of recording per week. For PRSNL Authority, our crew comes to you and handles the entire production day.",
  },
  {
    q: "What if I already have an audience?",
    a: "Even better. We position and monetise what you already have. Most founders with existing audiences are leaving pipeline on the table because their brand is inconsistent or doesn't connect clearly to their offer. That's exactly what we fix.",
  },
  {
    q: "Why do you turn clients away?",
    a: "Because we cap client numbers to protect quality. We take a maximum of 5 clients per account manager and a maximum of 4 PRSNL Authority clients total. If we can't deliver the result, we don't take the money.",
  },
  {
    q: "What's included in the per-channel price?",
    a: "LinkedIn: 12 posts per month, engagement management, strategy, and monthly review. Instagram: 12 Reels or carousels per month, posting management, and strategy. YouTube: 2 long-form videos per month with full editing, thumbnail, and optimisation. All channels include weekly alignment and monthly reporting.",
  },
  {
    q: "Can I cancel anytime?",
    a: "PRSNL Method requires a 6-month minimum commitment. Personal brands compound over time, and a 30-day engagement would be a disservice to both of us. After 6 months, it's rolling monthly with 30 days notice.",
  },
  {
    q: "Why PRSNLBRANDED and not a LinkedIn ghostwriter?",
    a: "Most ghostwriters write posts. We build the system around the posts: strategy, channel mix, positioning, distribution, and reporting tied to your business goals. A ghostwriter is a freelancer. We are a brand-building operation.",
  },
];

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("PRSNL Method");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeSegment, setActiveSegment] = useState(null);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    instagram: "", linkedin: "", goal: "",
    role: "", revenue: "", industry: "",
  });

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setSubmitted(false);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "";
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.firstName || !form.email) { alert("Please fill name and email."); return; }
    try {
      await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, plan: selectedPlan }),
      });
    } catch (e) {}
    setSubmitted(true);
  };

  const segments = [
    {
      id: "b2b",
      label: "B2B founder",
      sub: "Agency, SaaS, consulting",
      channel: "LinkedIn-first",
      pain: "You know LinkedIn would drive pipeline. You've tried posting yourself. They die at 200 views.",
      outcome: "Close more deals before the sales call. Be the name your prospects recognise before you even reach out.",
      platform: "LinkedIn + YouTube",
    },
    {
      id: "creator",
      label: "Info-product creator",
      sub: "Course, community, digital product",
      channel: "YouTube + Reels",
      pain: "You have expertise worth selling. But your audience isn't growing fast enough to support the launch you want.",
      outcome: "Build an audience that buys before you launch. Turn views into email subscribers, subscribers into buyers.",
      platform: "YouTube + Instagram",
    },
    {
      id: "coach",
      label: "Coach or consultant",
      sub: "1-on-1, group programme, retainer",
      channel: "Instagram + LinkedIn",
      pain: "You're fully booked through referrals but can't scale. The moment the referrals slow, so does the revenue.",
      outcome: "Build inbound that doesn't depend on word of mouth. Wake up to DMs from people who already want to work with you.",
      platform: "Instagram + LinkedIn",
    },
  ];

  return (
    <main>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">PRSNLBRANDED</div>
        <div className="nav-links">
          <a className="nav-link nav-icon" href="https://instagram.com/prsnlbranded" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a className="nav-link nav-icon" href="#" aria-label="YouTube" onClick={(e) => e.preventDefault()}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
            </svg>
          </a>
          <a className="nav-link" href="https://visionacle.com" target="_blank" rel="noopener noreferrer">Mastermind</a>
          <a className="nav-link" href="/roadmap">Get free roadmap</a>
          <button className="nav-cta" onClick={() => openModal("PRSNL Method")}>Apply</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="eyebrow">For founders, creators, operators</div>
        <h1 className="h1">
          We help entrepreneurs build{" "}
          <i>unforgettable personal brands.</i>
        </h1>
        <p className="lead">
          Your personal brand is your most valuable asset. Whether it's to tell your story, sell your product, or own your space, we help you build the brand that gets you there.
        </p>
        <div className="hero-ctas">
          <button className="btn-main" onClick={() => openModal("PRSNL Method")}>Apply for a spot</button>
          <a href="/roadmap" className="btn-main btn-light">Get free roadmap →</a>
        </div>
      </section>

      {/* MOODBOARD */}
      <section className="moodboard-wrap">
        <div className="moodboard-pinterest">
          {[
            { src: "/images/house_cars.jpg", t: "Lifestyle", s: "Show your status" },
            { src: "/images/hamilton.jpg", t: "Icon", s: "Build your legacy" },
            { src: "/images/f1.jpg", t: "Environment", s: "Show your arena" },
            { src: "/images/podcast.jpg", t: "Talking head", s: "Show your voice" },
            { src: "/images/tuscany.jpg", t: "Destination", s: "Show your world" },
            { src: "/images/ferrari_work.jpg", t: "Behind the scenes", s: "Show your work" },
            { src: "/images/billiard.jpg", t: "Moments", s: "Show your life" },
            { src: "/images/running.jpg", t: "Routine", s: "Show your discipline" },
            { src: "/images/yacht.jpg", t: "Travel", s: "Show your reach" },
          ].map((img, i) => (
            <div key={i} className="mb-cell">
              <img src={img.src} alt={img.t} />
              <div className="mb-cap">
                <div className="mb-cap-t">{img.t}</div>
                <div className="mb-cap-s">{img.s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SELF-SELECTOR */}
      <section className="selector-section">
        <div className="selector-inner">
          <div className="eyebrow">Who is this for</div>
          <div className="s-h2">Which one are you?</div>
          <p className="s-lead">Your business model determines your channel mix. Pick yours and we'll show you exactly how we'd build your brand.</p>
          <div className="selector-grid">
            {segments.map((seg) => (
              <div
                key={seg.id}
                className={`seg-card ${activeSegment === seg.id ? "active" : ""}`}
                onClick={() => setActiveSegment(activeSegment === seg.id ? null : seg.id)}
              >
                <div className="seg-tag">{seg.channel}</div>
                <div className="seg-title">{seg.label}</div>
                <div className="seg-sub">{seg.sub}</div>
                <div className="seg-arrow">{activeSegment === seg.id ? "↑" : "↓"}</div>
              </div>
            ))}
          </div>

          {activeSegment && (() => {
            const seg = segments.find(s => s.id === activeSegment);
            return (
              <div className="seg-detail">
                <div className="seg-detail-inner">
                  <div className="seg-detail-left">
                    <div className="seg-detail-label">The problem</div>
                    <p className="seg-detail-text">{seg.pain}</p>
                    <div className="seg-detail-label" style={{marginTop: 20}}>The outcome</div>
                    <p className="seg-detail-text">{seg.outcome}</p>
                  </div>
                  <div className="seg-detail-right">
                    <div className="seg-detail-label">Recommended channel mix</div>
                    <div className="seg-channel-badge">{seg.platform}</div>
                    <p className="seg-detail-text" style={{marginTop: 12}}>We adapt the strategy to your business model, not the other way around.</p>
                    <button className="btn-main" style={{marginTop: 20}} onClick={() => openModal("PRSNL Method")}>
                      Apply for a spot →
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* WHY YOU NEED A PERSONAL BRAND */}
      <section className="section">
        <div className="eyebrow">The case</div>
        <div className="s-h2">Why you need a personal brand.</div>
        <div className="s-lead">The market is noisier than ever. The experts who build a real personal brand right now will own the next decade in their space.</div>
        <div className="problems">
          {[
            { text: "Your competitors with weaker skills are closing more deals — because they show up and you don't.", icon: "→" },
            { text: "Clients Google you before they call you. What they find determines whether they call.", icon: "→" },
            { text: "Without a brand, every deal starts cold. With one, they start warm.", icon: "→" },
            { text: "A personal brand is the only asset that compounds without you working more hours.", icon: "→" },
            { text: "The people you want to reach already follow someone in your space. That someone should be you.", icon: "→" },
          ].map((item, i) => (
            <div key={i} className="problem problem-arrow">
              <div className="problem-x">{item.icon}</div>
              <div className="problem-t">{item.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BANNER */}
      <div style={{ background: "#0a0a0a" }}>
        <img src="/images/billiard.jpg" alt="" className="banner-img" style={{ filter: "brightness(0.75)" }} />
      </div>

      {/* VIDEO FOCUS */}
      <section className="video-section">
        <div className="video-inner">
          <div className="eyebrow">What we actually do</div>
          <div className="s-h2">We make founders unforgettable on video.</div>
          <p className="s-lead">Not posts. Not ghostwriting. Video — the format with the highest trust, the longest shelf life, and the deepest connection with your audience. Three types. One system.</p>
          <div className="video-grid">
            <div className="video-card">
              <div className="video-card-num">01</div>
              <div className="video-card-title">Aesthetic lifestyle</div>
              <div className="video-card-desc">Cinematic content that shows who you are without you saying a word. Your environment, your world, your energy. The kind of video that makes people stop scrolling and follow.</div>
              <div className="video-card-tag">Instagram · TikTok · YouTube Shorts</div>
            </div>
            <div className="video-card video-card-dark">
              <div className="video-card-num">02</div>
              <div className="video-card-title">The Documentary</div>
              <div className="video-card-desc">Your story, told with intention. We spend a day with you and build a film that captures your journey, your expertise, and your vision. The asset that makes people want to work with you before they've said a word to you.</div>
              <div className="video-card-tag">YouTube · LinkedIn · Sales asset</div>
            </div>
            <div className="video-card">
              <div className="video-card-num">03</div>
              <div className="video-card-title">The VSL</div>
              <div className="video-card-desc">A direct-to-camera sales video built to convert. We script it, direct it, and edit it. You record it once. It sells for you 24 hours a day — on your site, your landing page, your funnel.</div>
              <div className="video-card-tag">Sales funnel · Landing page · Webinar</div>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section-wide dark">
        <div className="container">
          <div className="eyebrow">The approach</div>
          <div className="s-h2" style={{ color: "#f7f6f2" }}>Story. Film. Distribute.</div>
          <div className="s-lead">Three steps. Executed with obsessive attention to quality. Every founder has a story worth telling. We make sure the right people see it.</div>
          <div className="formula">
            <div className="f-cell">
              <div className="f-num">01</div>
              <div className="f-t">Story</div>
              <div className="f-d">We extract your story, sharpen your positioning, and define exactly how you want to be known. Your brand starts here, before a single frame is shot.</div>
            </div>
            <div className="f-cell">
              <div className="f-num">02</div>
              <div className="f-t">Film</div>
              <div className="f-d">Aesthetic lifestyle content, documentary films, VSLs. We come to you. We direct, shoot, and edit everything — long-form and short-form, consistently.</div>
            </div>
            <div className="f-cell">
              <div className="f-num">03</div>
              <div className="f-t">Distribute</div>
              <div className="f-d">We publish across your channels, manage engagement, and amplify with paid when the content earns it. One video becomes a week of content across every platform.</div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="platforms-section">
        <div className="platforms-inner">
          <div className="eyebrow">Where we grow you</div>
          <div className="platforms-grid">
            <div className="plat-item">
              <div className="plat-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="plat-icon plat-1">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                <span className="plat-name">Instagram</span>
              </div>
              <p className="plat-desc">Perfect for B2C and personal brand visibility. Reels, carousels, and stories that build trust and drive direct messages from warm leads.</p>
              <div className="plat-best">Best for: coaches, creators, consumer brands</div>
            </div>
            <div className="plat-item">
              <div className="plat-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="plat-icon plat-2">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
                <span className="plat-name">YouTube</span>
              </div>
              <p className="plat-desc">The highest-trust platform on the internet. Long-form content that positions you as the definitive expert. Evergreen content that sells while you sleep.</p>
              <div className="plat-best">Best for: course creators, SaaS founders, thought leaders</div>
            </div>
            <div className="plat-item">
              <div className="plat-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="plat-icon plat-3">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
                <span className="plat-name">LinkedIn</span>
              </div>
              <p className="plat-desc">The B2B powerhouse. Where founders, executives and decision-makers spend their attention. Thought leadership that turns connections into clients.</p>
              <div className="plat-best">Best for: B2B founders, agency owners, consultants</div>
            </div>
            <div className="plat-item">
              <div className="plat-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="plat-icon plat-4">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                </svg>
                <span className="plat-name">TikTok</span>
              </div>
              <p className="plat-desc">Unmatched organic reach. The fastest way to reach a cold audience and grow from zero. Short, punchy content that turns strangers into followers.</p>
              <div className="plat-best">Best for: B2C brands, creators, consumer-facing founders</div>
            </div>
          </div>
          <div className="plat-cta-wrap">
            <button className="btn-main" onClick={() => openModal("PRSNL Method")}>Apply for a spot</button>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <div className="process-inner">
          <div className="eyebrow">The process</div>
          <div className="s-h2" style={{ color: "#f7f6f2" }}>The individual steps of the PRSNLBRANDED experience.</div>
          <div className="s-lead">Discreet. Intentional. Built to compound.</div>
          <div className="timeline">
            {[
              { title: "Application & alignment", desc: "Discovery call to align on vision, define your goals, and select the right tier for your situation.", side: "left" },
              { title: "Strategy & positioning", desc: "We define who you are, what you stand for, and how you'll be remembered. Bespoke positioning, not templates.", side: "right" },
              { title: "Production & creation", desc: "Scripts, shoots, carousels, editorials. Either we hand you the playbook, or we come to you and capture it ourselves.", side: "left" },
              { title: "Editing & alignment", desc: "Premium editing in our house style. Weekly review sessions to keep your brand sharp and consistent.", side: "right" },
              { title: "Distribution & growth", desc: "Hand-managed publishing across your channels. Organic compounding, with paid amplification when ready.", side: "left" },
              { title: "Reporting & iteration", desc: "Monthly performance reviews tied to your business goals — pipeline, inbound, impressions. We refine what works.", side: "right" },
            ].map((step, i) => (
              <div key={i} className={`timeline-item ${step.side}`}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-title">{step.title}</div>
                  <div className="timeline-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team-section">
        <div className="team-inner">
          <div className="eyebrow">Who we are</div>
          <div className="s-h2">Operators, not gurus.</div>
          <p className="s-lead">Two people who actually know how to build a brand. One who has done it at scale. One who knows how to put it on film.</p>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-photo">
                <img src="/images/photo2.jpg" alt="Lorenzo Iterson" />
              </div>
              <div className="team-info">
                <div className="team-name">Lorenzo Iterson</div>
                <div className="team-role">Founder · Brand Strategist</div>
                <p className="team-bio">Five years building paid media at scale and digital offers from zero. Marketer for the Dutch Grand Prix at Circuit Zandvoort. Co-founder of Visionacle, an invite-only network for serious operators in Europe. I build the strategy, run the sales calls, and make sure every client gets treated like an Authority client.</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-photo">
                <img src="/images/photo1.jpg" alt="Stefano" />
              </div>
              <div className="team-info">
                <div className="team-name">Stefano</div>
                <div className="team-role">Creative Director · Filmmaker</div>
                <p className="team-bio">The eye behind the lens. Stefano directs and shoots everything we produce — from aesthetic lifestyle content to full documentary films. His work doesn't look like agency content. It looks like something you'd stop scrolling for.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing">
        <div className="pricing-header">
          <div className="eyebrow">Two ways in</div>
          <div className="s-h2">Choose your level of involvement.</div>
          <div className="s-lead">Done-with-you or done-for-you. Both built around video as the primary asset — the highest-trust format on the internet.</div>
        </div>
        <div className="pricing-grid pricing-two">
          <div className="plan dark">
            <div className="plan-eyebrow">DWY · Most popular</div>
            <div className="plan-name">PRSNL Method</div>
            <div className="plan-price">€997</div>
            <div className="plan-period">per channel / per month · 6-month minimum</div>
            <div className="plan-desc">
              <strong style={{ color: "#fff" }}>We handle the content.</strong> Strategy, scripts, editing, daily posting. Long-form and short-form video. You give direction and record. We make it look like it belongs on a premium channel.
            </div>
            <ul className="plan-feats">
              <li>Full content strategy and video positioning</li>
              <li>Long-form and short-form video production</li>
              <li>Scripts written in your voice</li>
              <li>Professional editing in our house style</li>
              <li>Daily posting managed on your channels</li>
              <li>Weekly alignment session</li>
              <li>Monthly performance review</li>
              <li>10% discount when adding a second channel</li>
              <li>Direct access to the team via Slack</li>
            </ul>
            <button className="plan-btn" onClick={() => openModal("PRSNL Method")}>Apply for a spot</button>
          </div>
          <div className="plan">
            <div className="plan-eyebrow">DFY · By application</div>
            <div className="plan-name">PRSNL Authority</div>
            <div className="plan-price plan-price-na">Pricing on call</div>
            <div className="plan-period">tailored monthly retainer · max 4 clients</div>
            <div className="plan-desc">
              <strong>We come out to you.</strong> One full production day per month at your home or chosen location. Aesthetic lifestyle content, documentary films, VSLs — everything captured and distributed end-to-end.
            </div>
            <ul className="plan-feats">
              <li>On-location production day per month</li>
              <li>Aesthetic lifestyle content (cinematic, no-talking)</li>
              <li>Founder Documentary — your story on film</li>
              <li>VSL production for your sales funnel</li>
              <li>Long-form and short-form edited and distributed</li>
              <li>Multi-platform publishing managed</li>
              <li>Paid amplification and PR included</li>
              <li>LinkedIn ghostwriting</li>
              <li>Weekly strategic call with Lorenzo</li>
              <li><strong>Visionacle Mastermind access included</strong></li>
              <li>Direct access to the team via Slack</li>
            </ul>
            <button className="plan-btn" onClick={() => openModal("PRSNL Authority")}>Apply to learn more</button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="faq-inner">
          <div className="eyebrow">FAQ</div>
          <div className="s-h2">Common questions.</div>
          <div className="faq-list">
            {faqs.map((item, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? "open" : ""}`}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{item.q}</span>
                  <span className="faq-icon">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="faq-a">{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER YACHT */}
      <div style={{ background: "#0a0a0a" }}>
        <img src="/images/yacht.jpg" alt="" className="banner-img" style={{ filter: "brightness(0.65)", maxHeight: 280 }} />
      </div>

      {/* CONTACT */}
      <section className="contact-block">
        <div className="contact-inner">
          <div className="contact-eyebrow">Apply</div>
          <div className="contact-h">Built for the few. <i>Not the many.</i></div>
          <div className="contact-d">We take a maximum of 5 PRSNL Method clients per account manager and 4 PRSNL Authority clients total. Apply to see if we are a fit.</div>
          <button className="contact-btn" onClick={() => openModal("PRSNL Method")}>Apply now</button>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="disclaimer-section">
        <div className="disclaimer-inner">
          <p><strong>Inspiration, not endorsement.</strong> PRSNLBRANDED is independently owned and operated. References to figures like Alex Hormozi, Iman Gadzhi, Justin Welsh, Daniel Priestley, Codie Sanchez, and Sahil Bloom appear only as cultural touchstones. None of these individuals endorse or are affiliated with PRSNLBRANDED.</p>
          <p><strong>Photography & imagery.</strong> Visual content on this site is used for mood-board and illustrative purposes only.</p>
          <p><strong>Results disclaimer.</strong> Personal brand outcomes vary based on starting point, niche, consistency, and execution. We make no income or growth guarantees.</p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>PRSNLBRANDED</div>
          <div className="footer-sub">prsnlbranded.com</div>
        </div>
      </footer>

      {/* MODAL */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            {!submitted ? (
              <>
                <p className="modal-d">Tell us about you. We review every application personally.</p>
                <div className="form-grid">
                  <input name="firstName" placeholder="First name" value={form.firstName} onChange={handleChange} />
                  <input name="lastName" placeholder="Last name" value={form.lastName} onChange={handleChange} />
                </div>
                <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
                <input name="instagram" placeholder="Instagram handle (optional)" value={form.instagram} onChange={handleChange} />
                <input name="linkedin" placeholder="LinkedIn URL (optional)" value={form.linkedin} onChange={handleChange} />
                <select name="role" value={form.role} onChange={handleChange}>
                  <option value="">Your role</option>
                  <option value="B2B Founder">B2B Founder (agency, SaaS, consulting)</option>
                  <option value="Creator">Info-product creator / course creator</option>
                  <option value="Coach">Coach or consultant</option>
                  <option value="Executive">Executive</option>
                  <option value="Other">Other</option>
                </select>
                <select name="revenue" value={form.revenue} onChange={handleChange}>
                  <option value="">Annual revenue</option>
                  <option value="<100k">Less than €100k</option>
                  <option value="100k-500k">€100k – €500k</option>
                  <option value="500k-2m">€500k – €2M</option>
                  <option value="2m+">€2M+</option>
                </select>
                <select name="industry" value={form.industry} onChange={handleChange}>
                  <option value="">Industry</option>
                  <option value="SaaS">SaaS</option>
                  <option value="Agency">Agency</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Ecommerce">Ecommerce</option>
                  <option value="Finance">Finance / Investing</option>
                  <option value="Creator">Creator / Info-product</option>
                  <option value="Real estate">Real estate</option>
                  <option value="Other">Other</option>
                </select>
                <select name="goal" value={form.goal} onChange={handleChange}>
                  <option value="">Your #1 goal</option>
                  <option value="Inbound">Generate inbound leads</option>
                  <option value="Authority">Build authority in my space</option>
                  <option value="Sell">Sell my product or service</option>
                  <option value="Raise">Raise funding or attract partners</option>
                  <option value="Hire">Attract talent</option>
                </select>
                <button className="modal-submit" onClick={handleSubmit}>Submit application</button>
              </>
            ) : (
              <div className="modal-success">
                <div className="modal-success-h">Application received.</div>
                <p>We review every application personally. If you're a fit, we'll be in touch within 48 hours.</p>
                <button className="modal-submit" onClick={closeModal}>Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
