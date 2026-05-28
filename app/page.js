"use client";
import { useState } from "react";
import BentoGallery from "./BentoGallery";

const CALENDAR_URL = "https://tidycal.com/prsnlbranded/apply";

export default function Page() {
  const [openFaq, setOpenFaq] = useState(null);

  const openCalendar = () => {
    window.open(CALENDAR_URL, "_blank", "noopener,noreferrer");
  };

  const faqs = [
    { q: "What does PRSNLBRANDED help with?", a: "PRSNLBRANDED creates high-end personal brand content for established founders. The flagship service is a multi-day shoot on location, producing cinematic images, videos and lifestyle reels, plus editing and consulting around it." },
    { q: "How does the fly-out shoot work?", a: "The team comes to the founder for a shooting period of 3 to 5 days. Everything is captured on location: high-end images, videos and lifestyle reels, then distributed through the partner network." },
    { q: "Does the founder need to be on camera?", a: "Yes, but PRSNLBRANDED makes it easy. The team directs everything, guides delivery, and shoots it cinematically. No performing required, just being yourself." },
    { q: "Can PRSNLBRANDED only edit existing content?", a: "Yes. The editing service works with content the founder already has, optimizing it for each platform and combining aesthetics with storytelling, without a full shoot." },
    { q: "What does the consulting include?", a: "Direct contact via phone and text, an analysis of existing content, and a tailored gameplan for branding, positioning and content." },
    { q: "Why does PRSNLBRANDED work by application?", a: "PRSNLBRANDED takes a limited number of founders at a time. High-end work takes focus. If the team can't give a project the attention it deserves, they don't take it on." },
    { q: "Is this only for big companies?", a: "No. It's for founders who value quality and a powerful personal brand, whatever the size. What matters is being serious about status, authority and influence." },
    { q: "What happens after a founder applies?", a: "The founder books a call directly. PRSNLBRANDED talks through the goals and the right service, then builds a tailored plan. No pressure, no script." },
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
        </div>
      </section>

      {/* GALLERY — interactive bento */}
      <section className="moodboard-wrap">
        <BentoGallery
          imageItems={[
            { id: 1, title: "Lifestyle", desc: "The world you've built.", url: "/images/house_cars.jpg" },
            { id: 2, title: "Icon", desc: "Presence that carries.", url: "/images/hamilton.jpg" },
            { id: 3, title: "Environment", desc: "Where your story happens.", url: "/images/f1.jpg" },
            { id: 4, title: "Voice", desc: "Your message, on camera.", url: "/images/podcast.jpg" },
            { id: 5, title: "Destination", desc: "The journey behind the brand.", url: "/images/tuscany.jpg" },
            { id: 6, title: "Behind the scenes", desc: "The work nobody sees.", url: "/images/ferrari_work.jpg" },
            { id: 7, title: "Moments", desc: "The life around the work.", url: "/images/billiard.jpg" },
            { id: 8, title: "Routine", desc: "Discipline, on film.", url: "/images/running.jpg" },
            { id: 9, title: "Travel", desc: "Your reach, captured.", url: "/images/yacht.jpg" },
          ]}
        />
      </section>

      {/* PLATFORMS STRIP */}
      <section className="logo-strip">
        <div className="logo-strip-inner">
          <div className="logo-strip-label">We grow your personal brand on</div>
          <div className="logo-strip-row">
            <div className="logo-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
              </svg>
              <span>YouTube</span>
            </div>
            <div className="logo-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
              <span>LinkedIn</span>
            </div>
            <div className="logo-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              <span>Instagram</span>
            </div>
            <div className="logo-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
              </svg>
              <span>TikTok</span>
            </div>
          </div>
        </div>
      </section>

      {/* JUST FOR YOU */}
      <section className="cv-section">
        <div className="cv-inner-wide">
          <div className="svc-eyebrow">Just for you</div>
          <h2 className="cv-h">What defines you?</h2>
          <div className="svc-defines">
            {[
              "You value quality and exclusivity.",
              "You prioritise a powerful personal brand.",
              "You aim to elevate your status and influence.",
              "You seek seamless, high-end solutions.",
            ].map((t, i) => (
              <div key={i} className="svc-define-item">
                <span className="svc-check">✓</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES + CARDS */}
      <section className="cv-section cv-section-alt">
        <div className="cv-inner-wide">
          <div className="eyebrow">Our services</div>
          <h2 className="cv-h">Learn more about what we do.</h2>
          <p className="cv-lead svc-intro-lead">Redefining personal branding for established entrepreneurs worldwide. High-end content to elevate your status, authority and influence.</p>
          <div className="svc-grid">
            <div className="svc-card svc-card-featured">
              <div className="svc-tag">Full spectrum</div>
              <div className="svc-title">We fly out to you</div>
              <div className="svc-sub">What is included</div>
              <ul className="svc-feats">
                <li>A shooting period of 3 to 5 days</li>
                <li>High-end images and videos</li>
                <li>Creation of lifestyle reels</li>
                <li>Content distribution via partner network</li>
                <li>24/7 consulting</li>
                <li>Concierge service</li>
              </ul>
              <button className="svc-btn svc-btn-light" onClick={openCalendar}>Apply</button>
            </div>

            <div className="svc-card">
              <div className="svc-tag">Editing</div>
              <div className="svc-title">Long-form and short-form</div>
              <div className="svc-sub">What is included</div>
              <ul className="svc-feats">
                <li>Editing of existing content</li>
                <li>Optimization for each platform</li>
                <li>Aesthetics combined with storytelling</li>
              </ul>
              <button className="svc-btn" onClick={openCalendar}>Apply</button>
            </div>

            <div className="svc-card">
              <div className="svc-tag">Consulting</div>
              <div className="svc-title">Branding, positioning and content</div>
              <div className="svc-sub">What is included</div>
              <ul className="svc-feats">
                <li>Direct contact via phone and text</li>
                <li>Analysis of existing content</li>
                <li>Tailored gameplan</li>
              </ul>
              <button className="svc-btn" onClick={openCalendar}>Apply</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="cv-section cv-section-alt">
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
          <div className="contact-d">We take a limited number of founders at a time. If your story is worth telling, book a call.</div>
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
