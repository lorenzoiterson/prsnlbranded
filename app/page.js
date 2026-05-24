"use client";
import { useState } from "react";

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("PRSNL Method");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    instagram: "", linkedin: "",
    role: "", revenue: "", goal: "",
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

  const faqs = [
    { q: "Do I need to be on camera?", a: "For PRSNL Method — barely. We script everything and direct your delivery. 20–30 minutes of recording per week. For PRSNL Authority, our crew comes to you and runs the entire production day." },
    { q: "How long until I see results?", a: "Most clients see meaningful inbound within 60–90 days. Month one is foundation. Month two is signal. Month three is when the calls start coming in." },
    { q: "Why per channel, not a flat rate?", a: "Because a B2B founder needs LinkedIn. A course creator needs YouTube. You only pay for what moves your business. Add a second channel and get 10% off." },
    { q: "What if I already have an audience?", a: "Even better. Most founders with existing audiences are leaving pipeline on the table because the brand is inconsistent. That's exactly what we fix." },
    { q: "Can I cancel anytime?", a: "PRSNL Method requires a 6-month minimum. Personal brands compound over time. After that, rolling monthly with 30 days notice." },
    { q: "Why do you turn clients away?", a: "We cap at 5 PRSNL Method clients per account manager and 4 PRSNL Authority clients total. Quality over quantity. If we can't deliver, we don't take the money." },
    { q: "What's the difference between Method and Authority?", a: "Method is done-with-you. You record, we edit and publish. Authority is done-for-you. Our crew comes to your location, shoots everything, and handles the full distribution." },
    { q: "Why PRSNLBRANDED and not a ghostwriter?", a: "A ghostwriter writes posts. We build the system around them: strategy, video production, channel mix, and reporting tied to your business goals. Not impressions. Pipeline." },
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
          <a className="nav-link" href="/roadmap">Free roadmap</a>
          <button className="nav-cta" onClick={() => openModal("PRSNL Method")}>Apply</button>
        </div>
      </nav>

      {/* HERO — unchanged */}
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
            { src: "/images/house_cars.jpg", t: "Lifestyle" },
            { src: "/images/hamilton.jpg", t: "Icon" },
            { src: "/images/f1.jpg", t: "Environment" },
            { src: "/images/podcast.jpg", t: "Voice" },
            { src: "/images/tuscany.jpg", t: "Destination" },
            { src: "/images/ferrari_work.jpg", t: "Behind the scenes" },
            { src: "/images/billiard.jpg", t: "Moments" },
            { src: "/images/running.jpg", t: "Routine" },
            { src: "/images/yacht.jpg", t: "Travel" },
          ].map((img, i) => (
            <div key={i} className="mb-cell">
              <img src={img.src} alt={img.t} />
              <div className="mb-cap"><div className="mb-cap-t">{img.t}</div></div>
            </div>
          ))}
        </div>
      </section>

      {/* BRUNSON STEP 1 — THE PROBLEM */}
      <section className="brunson-problem">
        <div className="brunson-inner">
          <div className="eyebrow">The problem</div>
          <h2 className="brunson-h">You're invisible. And you know it.</h2>
          <div className="prob-list">
            {[
              "Competitors with weaker skills are winning deals — because they show up online and you don't.",
              "Clients Google you before they call. What they find determines whether they call.",
              "You're posting occasionally, getting nowhere, and slowly convincing yourself it doesn't work.",
              "Every deal starts cold. Every introduction starts from zero.",
              "The people you want to reach already follow someone in your space. That someone isn't you.",
            ].map((t, i) => (
              <div key={i} className="prob-item">
                <span className="prob-x">×</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRUNSON STEP 2 — THE BIG DOMINO */}
      <section className="domino-section">
        <div className="domino-inner">
          <div className="domino-statement">
            If people knew who you were, what you stood for, and what you could do for them — before you ever spoke to them — everything would be easier.
          </div>
          <div className="domino-sub">That's what a real personal brand does.</div>
        </div>
      </section>

      {/* BRUNSON STEP 3 — THE SOLUTION */}
      <section className="solution-section">
        <div className="solution-inner">
          <div className="eyebrow">The solution</div>
          <h2 className="brunson-h">Video-first personal branding.</h2>
          <p className="solution-lead">Not posts. Not ghostwriting. Video — the highest-trust format on the internet. The one that makes people feel like they already know you before they've said a word to you.</p>

          <div className="solution-grid">
            <div className="sol-card">
              <div className="sol-num">01</div>
              <div className="sol-title">Aesthetic Lifestyle</div>
              <div className="sol-desc">Cinematic content. No talking. Pure image. Your world, your taste, your standard.</div>
              <div className="sol-platforms">Instagram · TikTok · Shorts</div>
            </div>
            <div className="sol-card sol-card-featured">
              <div className="sol-num">02</div>
              <div className="sol-title">The Documentary</div>
              <div className="sol-desc">Your story on film. One day. One asset. The thing people watch before they decide to work with you.</div>
              <div className="sol-platforms">YouTube · LinkedIn · Sales asset</div>
            </div>
            <div className="sol-card">
              <div className="sol-num">03</div>
              <div className="sol-title">The VSL</div>
              <div className="sol-desc">You record once. It sells for you every day. On your funnel, your site, your DMs.</div>
              <div className="sol-platforms">Funnel · Landing page · Webinar</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-wide dark">
        <div className="container">
          <div className="eyebrow">How it works</div>
          <h2 className="s-h2" style={{ color: "#f7f6f2" }}>Story. Film. Distribute.</h2>
          <div className="formula">
            <div className="f-cell">
              <div className="f-num">01</div>
              <div className="f-t">Story</div>
              <div className="f-d">We extract your positioning and define exactly how you want to be known.</div>
            </div>
            <div className="f-cell">
              <div className="f-num">02</div>
              <div className="f-t">Film</div>
              <div className="f-d">We come to you. Direct, shoot, and edit — long-form and short-form.</div>
            </div>
            <div className="f-cell">
              <div className="f-num">03</div>
              <div className="f-t">Distribute</div>
              <div className="f-d">One video becomes a week of content across every platform. We manage it all.</div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="platforms-section">
        <div className="platforms-inner">
          <div className="eyebrow">Where we grow you</div>
          <div className="platforms-grid">
            {[
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="plat-icon plat-1"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
                name: "Instagram", desc: "Reels, carousels, stories. B2C and personal brand visibility.", best: "Coaches · Creators · Consumer brands"
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="plat-icon plat-2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>,
                name: "YouTube", desc: "Long-form authority. Content that compounds for years.", best: "Course creators · SaaS · Thought leaders"
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="plat-icon plat-3"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
                name: "LinkedIn", desc: "B2B authority. Where decisions get made.", best: "Founders · Agency owners · Consultants"
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="plat-icon plat-4"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>,
                name: "TikTok", desc: "Fastest organic reach. Grow from zero.", best: "B2C · Creators · Consumer-facing founders"
              },
            ].map((p, i) => (
              <div key={i} className="plat-item">
                <div className="plat-icon-wrap">{p.icon}<span className="plat-name">{p.name}</span></div>
                <p className="plat-desc">{p.desc}</p>
                <div className="plat-best">{p.best}</div>
              </div>
            ))}
          </div>
          <div className="plat-cta-wrap">
            <button className="btn-main" onClick={() => openModal("PRSNL Method")}>Apply for a spot</button>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team-section">
        <div className="team-inner">
          <div className="eyebrow">Who we are</div>
          <h2 className="s-h2">Operators, not gurus.</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-photo">
                <img src="/images/photo2.jpg" alt="Lorenzo Iterson" />
              </div>
              <div className="team-info">
                <div className="team-name">Lorenzo Iterson</div>
                <div className="team-role">Founder · Brand Strategist</div>
                <p className="team-bio">5 years in paid media and digital growth. Marketer for the Dutch Grand Prix. Co-founder of Visionacle. I run the strategy and the sales calls.</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-photo">
                <img src="/images/photo1.jpg" alt="Stefano" />
              </div>
              <div className="team-info">
                <div className="team-name">Stefano</div>
                <div className="team-role">Creative Director · Filmmaker</div>
                <p className="team-bio">The eye behind the lens. Stefano directs and shoots everything. His work doesn't look like agency content. It looks like something you'd stop scrolling for.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing">
        <div className="pricing-header">
          <div className="eyebrow">Two ways in</div>
          <h2 className="s-h2">Choose your level.</h2>
        </div>
        <div className="pricing-grid pricing-two">
          <div className="plan dark">
            <div className="plan-eyebrow">DWY · Most popular</div>
            <div className="plan-name">PRSNL Method</div>
            <div className="plan-price">€997</div>
            <div className="plan-period">per channel / per month · 6-month minimum</div>
            <div className="plan-desc"><strong style={{ color: "#fff" }}>You record. We handle the rest.</strong> Scripts, editing, daily posting. Long-form and short-form. Add a second channel and get 10% off.</div>
            <ul className="plan-feats">
              <li>Full video content strategy</li>
              <li>Long-form and short-form production</li>
              <li>Scripts written in your voice</li>
              <li>Professional editing — our house style</li>
              <li>Daily posting on your channels</li>
              <li>Weekly alignment session</li>
              <li>Monthly performance review</li>
              <li>Direct access via Slack</li>
            </ul>
            <button className="plan-btn" onClick={() => openModal("PRSNL Method")}>Apply for a spot</button>
          </div>
          <div className="plan">
            <div className="plan-eyebrow">DFY · By application</div>
            <div className="plan-name">PRSNL Authority</div>
            <div className="plan-price plan-price-na">Pricing on call</div>
            <div className="plan-period">tailored retainer · max 4 clients</div>
            <div className="plan-desc"><strong>We come to you.</strong> One full production day per month at your location. Aesthetic content, Documentary, VSL — all captured and distributed.</div>
            <ul className="plan-feats">
              <li>On-location production day per month</li>
              <li>Aesthetic lifestyle content</li>
              <li>Founder Documentary</li>
              <li>VSL for your sales funnel</li>
              <li>Full editing and multi-platform distribution</li>
              <li>Paid amplification and PR</li>
              <li>LinkedIn ghostwriting</li>
              <li>Weekly call with Lorenzo</li>
              <li><strong>Visionacle Mastermind included</strong></li>
              <li>Direct access via Slack</li>
            </ul>
            <button className="plan-btn" onClick={() => openModal("PRSNL Authority")}>Apply to learn more</button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="faq-inner">
          <div className="eyebrow">FAQ</div>
          <h2 className="s-h2">Common questions.</h2>
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

      {/* FINAL CTA */}
      <div style={{ background: "#0a0a0a" }}>
        <img src="/images/yacht.jpg" alt="" className="banner-img" style={{ filter: "brightness(0.55)", maxHeight: 260 }} />
      </div>

      <section className="contact-block">
        <div className="contact-inner">
          <div className="contact-eyebrow">Apply</div>
          <div className="contact-h">Built for the few. <i>Not the many.</i></div>
          <div className="contact-d">We take a maximum of 5 Method clients per account manager and 4 Authority clients total.</div>
          <button className="contact-btn" onClick={() => openModal("PRSNL Method")}>Apply now</button>
        </div>
      </section>

      <section className="disclaimer-section">
        <div className="disclaimer-inner">
          <p><strong>Inspiration, not endorsement.</strong> PRSNLBRANDED is independently owned and operated. References to public figures appear only as cultural touchstones. None endorse or are affiliated with PRSNLBRANDED.</p>
          <p><strong>Photography & imagery.</strong> Visual content is used for mood-board and illustrative purposes only.</p>
          <p><strong>Results disclaimer.</strong> Personal brand outcomes vary. We make no income or growth guarantees.</p>
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
                <input name="instagram" placeholder="Instagram or LinkedIn URL" value={form.instagram} onChange={handleChange} />
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
                <select name="goal" value={form.goal} onChange={handleChange}>
                  <option value="">Your #1 goal</option>
                  <option value="Inbound">Generate inbound leads</option>
                  <option value="Authority">Build authority in my space</option>
                  <option value="Sell">Sell my product or service</option>
                  <option value="Raise">Raise funding or attract partners</option>
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
