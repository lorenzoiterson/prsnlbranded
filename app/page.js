"use client";
import { useState } from "react";

const CALENDAR_URL = "https://tidycal.com/itersonmedia/prsnlbranded";

export default function Page() {
  const [openFaq, setOpenFaq] = useState(null);

  const openCalendar = () => {
    window.open(CALENDAR_URL, "_blank", "noopener,noreferrer");
  };

  const faqs = [
    { q: "Do I need to be on camera?", a: "Barely. We script everything and direct your delivery. For PRSNL Method it's 20 to 30 minutes of recording per week. For PRSNL Authority, our crew comes to you and runs the entire production day." },
    { q: "How long until I see results?", a: "Most clients see meaningful inbound within 60 to 90 days. Month one is foundation. Month two is signal. Month three is when the calls start coming in." },
    { q: "What if I already have an audience?", a: "Even better. Most founders with an existing audience are leaving pipeline on the table because the brand is inconsistent. That is exactly what we fix." },
    { q: "Why per channel, not a flat rate?", a: "A B2B founder needs LinkedIn. A course creator needs YouTube. You only pay for what moves your business. Add a second channel and get 10% off." },
    { q: "Can I cancel anytime?", a: "PRSNL Method has a 6-month minimum. Personal brands compound over time. After that, it rolls month to month with 30 days notice." },
    { q: "Why do you turn clients away?", a: "We cap at a few clients per account manager and a maximum of 4 PRSNL Authority clients. If we cannot deliver the result, we do not take the money." },
    { q: "What is the difference between Method and Authority?", a: "Method is done with you. You record, we produce and distribute. Authority is done for you. Our crew comes to your location and films everything, end to end." },
    { q: "Why PRSNLBRANDED and not a freelancer?", a: "A freelancer posts content. We build the system: positioning, video production, channel strategy and reporting tied to your pipeline. We are an operation, not a contractor." },
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
          <button className="nav-cta" onClick={openCalendar}>Apply</button>
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
          <button className="btn-main" onClick={openCalendar}>Apply for a spot</button>
          <a href="/roadmap" className="btn-main btn-light">Get free roadmap →</a>
        </div>
      </section>

      {/* MOODBOARD — unchanged */}
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

      {/* PROBLEM */}
      <section className="cv-section">
        <div className="cv-inner">
          <div className="eyebrow">The problem</div>
          <h2 className="cv-h">You're invisible. <span className="cv-h-mute">And you know it.</span></h2>
          <div className="prob-list">
            {[
              "Competitors with weaker skills win the deals — because they show up and you don't.",
              "Clients Google you before they call. What they find decides everything.",
              "Every deal starts cold. Every introduction starts from zero.",
              "The people you want to reach already follow someone. That someone isn't you.",
            ].map((t, i) => (
              <div key={i} className="prob-item">
                <span className="prob-x">✕</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIG DOMINO */}
      <section className="domino-section">
        <div className="domino-inner">
          <div className="domino-statement">
            Imagine if people knew who you were, and what you could do for them, before you ever spoke.
          </div>
          <div className="domino-sub">That is what a personal brand does.</div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="cv-section">
        <div className="cv-inner-wide">
          <div className="eyebrow">The solution</div>
          <h2 className="cv-h">Video-first personal branding.</h2>
          <p className="cv-lead">Video is the highest-trust format on the internet. We build yours — three assets, one system.</p>
          <div className="solution-grid">
            <div className="sol-card">
              <div className="sol-num">01</div>
              <div className="sol-title">Aesthetic Lifestyle</div>
              <div className="sol-desc">Cinematic content. No talking. Pure image. The scroll-stopper that makes people follow.</div>
              <div className="sol-platforms">Instagram · TikTok · Shorts</div>
            </div>
            <div className="sol-card sol-card-featured">
              <div className="sol-num">02</div>
              <div className="sol-title">The Documentary</div>
              <div className="sol-desc">Your story on film. One day, one asset. The film that closes clients before the call.</div>
              <div className="sol-platforms">YouTube · LinkedIn · Sales asset</div>
            </div>
            <div className="sol-card">
              <div className="sol-num">03</div>
              <div className="sol-title">The VSL</div>
              <div className="sol-desc">You record once. It sells every day. Built to convert on your funnel.</div>
              <div className="sol-platforms">Funnel · Landing page · Webinar</div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES — conversion driver */}
      <section className="section-wide dark">
        <div className="container">
          <div className="eyebrow">What you walk away with</div>
          <h2 className="cv-h cv-h-light">A brand that does the selling for you.</h2>
          <div className="outcome-grid">
            <div className="outcome-cell">
              <div className="outcome-t">Inbound that compounds</div>
              <div className="outcome-d">Stop chasing. Wake up to people who already know you, already trust you, and already want to work with you.</div>
            </div>
            <div className="outcome-cell">
              <div className="outcome-t">Authority in your space</div>
              <div className="outcome-d">Become the name people think of first. When they have a problem you solve, you're the obvious answer.</div>
            </div>
            <div className="outcome-cell">
              <div className="outcome-t">Warm deals, not cold ones</div>
              <div className="outcome-d">Every call starts with the prospect already sold. You're closing, not convincing.</div>
            </div>
            <div className="outcome-cell">
              <div className="outcome-t">An asset that lasts</div>
              <div className="outcome-d">A personal brand is the one asset that keeps paying you back, long after the content goes out.</div>
            </div>
          </div>
          <div className="cv-cta-row">
            <button className="btn-main btn-on-dark" onClick={openCalendar}>Apply for a spot</button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="cv-section">
        <div className="cv-inner-wide">
          <div className="eyebrow">How it works</div>
          <h2 className="cv-h">Story. Film. Distribute.</h2>
          <p className="cv-lead">A simple system, run every month, with obsessive attention to quality.</p>
          <div className="formula">
            <div className="f-cell">
              <div className="f-num">01</div>
              <div className="f-t">Story</div>
              <div className="f-d">We define your positioning and exactly how you want to be known.</div>
            </div>
            <div className="f-cell">
              <div className="f-num">02</div>
              <div className="f-t">Film</div>
              <div className="f-d">We come to you. Direct, shoot and edit — long-form and short-form.</div>
            </div>
            <div className="f-cell">
              <div className="f-num">03</div>
              <div className="f-t">Distribute</div>
              <div className="f-d">One shoot becomes a month of content across every platform.</div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="cv-section cv-section-alt">
        <div className="cv-inner-wide">
          <div className="eyebrow">Where we grow you</div>
          <h2 className="cv-h">The right channel for your business.</h2>
          <div className="platforms-grid">
            {[
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="plat-icon plat-1"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
                name: "Instagram", desc: "Visual reach and personal connection.", best: "Coaches · Creators · Consumer brands"
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="plat-icon plat-2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>,
                name: "YouTube", desc: "Deep trust and long-term authority.", best: "Course creators · SaaS · Thought leaders"
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="plat-icon plat-3"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
                name: "LinkedIn", desc: "Where B2B decisions get made.", best: "Founders · Agency owners · Consultants"
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="plat-icon plat-4"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>,
                name: "TikTok", desc: "The fastest organic reach available.", best: "B2C · Creators · Consumer-facing founders"
              },
            ].map((p, i) => (
              <div key={i} className="plat-item">
                <div className="plat-icon-wrap">{p.icon}<span className="plat-name">{p.name}</span></div>
                <p className="plat-desc">{p.desc}</p>
                <div className="plat-best">{p.best}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="cv-section">
        <div className="cv-inner-wide">
          <div className="eyebrow">Who we are</div>
          <h2 className="cv-h">Operators, not gurus.</h2>
          <div className="founder-card">
            <div className="founder-photo">
              <img src="/images/photo2.jpg" alt="Lorenzo Iterson" />
            </div>
            <div className="founder-info">
              <div className="team-name">Lorenzo Iterson</div>
              <div className="team-role">Founder</div>
              <p className="team-bio">5 years in paid media and digital growth. Marketer for the Dutch Grand Prix. Co-founder of Visionacle, an invite-only network for operators across Europe. I run the strategy and the calls personally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="cv-section cv-section-alt">
        <div className="cv-inner-wide">
          <div className="eyebrow">Two ways in</div>
          <h2 className="cv-h">Choose your level.</h2>
          <p className="cv-lead">Both built around video. Both built to turn your brand into pipeline.</p>
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
              <button className="plan-btn" onClick={openCalendar}>Apply for a spot</button>
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
                <li>Visionacle Mastermind included</li>
                <li>Direct access via Slack</li>
              </ul>
              <button className="plan-btn" onClick={openCalendar}>Apply to learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="cv-section">
        <div className="cv-inner">
          <div className="eyebrow">FAQ</div>
          <h2 className="cv-h">Common questions.</h2>
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
      <div className="final-banner">
        <img src="/images/yacht.jpg" alt="" />
        <div className="final-overlay">
          <div className="contact-eyebrow">Apply</div>
          <div className="contact-h">Built for the few. <i>Not the many.</i></div>
          <div className="contact-d">We take a limited number of clients per quarter to protect the result. If you're serious about your brand, book a call.</div>
          <button className="contact-btn" onClick={openCalendar}>Book your call</button>
        </div>
      </div>

      {/* DISCLAIMER */}
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
    </main>
  );
}
