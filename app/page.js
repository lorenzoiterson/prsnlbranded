"use client";
import { useState } from "react";

const CALENDAR_URL = "https://tidycal.com/itersonmedia/prsnlbranded";

export default function Page() {
  const [openFaq, setOpenFaq] = useState(null);

  const openCalendar = () => {
    window.open(CALENDAR_URL, "_blank", "noopener,noreferrer");
  };

  const faqs = [
    { q: "What exactly do you make?", a: "A cinematic short documentary about you and your story. Plus a full library of B-roll footage that becomes your content for the months ahead. We don't write posts. We make films." },
    { q: "Do I need to be on camera?", a: "Yes — but we make it easy. We direct everything, guide your delivery, and shoot it cinematically. You don't need to be a performer. You just need to be yourself." },
    { q: "Where do you film?", a: "We come to you. Your city, your home, your office, wherever your story lives. For founders whose story involves travel, we go there too." },
    { q: "What is Visionacle?", a: "Visionacle is our in-person network of founders. Every PRSNLBRANDED client gets a seat at the table — real dinners and events in Amsterdam, Milano, Tokyo, Bali and Cape Town. We film you there too." },
    { q: "How long until I have content?", a: "After the shoot, your documentary and first wave of content are ready within weeks. One shoot day produces months of material." },
    { q: "Why do you work by application?", a: "We take a limited number of founders at a time. Filming properly takes focus. If we can't give your story the attention it deserves, we don't take it on." },
    { q: "Is this only for big companies?", a: "No. It's for founders doing something worth remembering — whatever the size. What matters is that you have a real story and you're serious about telling it." },
    { q: "What happens after I apply?", a: "You book a call with us directly. We talk through your story, your goals, and whether we're the right studio to film it. No pressure, no script." },
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
          <h2 className="cv-h">You're building something remarkable. <span className="cv-h-mute">Nobody can see it.</span></h2>
          <div className="prob-list">
            {[
              "Your content doesn't match the level you actually operate at.",
              "Your story — the real one — has never been told properly.",
              "You know you should be visible, but you don't have the time to figure out how.",
              "The founders winning attention aren't better than you. They're just seen.",
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
            Your story is your most valuable asset. Most founders never tell it. We make sure yours gets told.
          </div>
          <div className="domino-sub">A film studio for founders.</div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="cv-section">
        <div className="cv-inner-wide">
          <div className="eyebrow">What you get</div>
          <h2 className="cv-h">We film your story. <span className="cv-h-mute">Then we keep the camera rolling.</span></h2>
          <p className="cv-lead">We fly to you and turn your journey into a cinematic film — then a year of content, then a seat at the table.</p>
          <div className="solution-grid">
            <div className="sol-card">
              <div className="sol-num">01</div>
              <div className="sol-title">The Documentary</div>
              <div className="sol-desc">A cinematic short film about you. How you started, where you're going, why it matters. The story only you have.</div>
              <div className="sol-platforms">Your signature asset</div>
            </div>
            <div className="sol-card sol-card-featured">
              <div className="sol-num">02</div>
              <div className="sol-title">A Year of Content</div>
              <div className="sol-desc">We capture a full library of cinematic B-roll. One shoot becomes months of content across every platform.</div>
              <div className="sol-platforms">Instagram · YouTube · LinkedIn · TikTok</div>
            </div>
            <div className="sol-card">
              <div className="sol-num">03</div>
              <div className="sol-title">A Seat at Visionacle</div>
              <div className="sol-desc">Every client joins our in-person founder network. Real rooms, real connections. We film you there too.</div>
              <div className="sol-platforms">Amsterdam · Milano · Tokyo · Bali · Cape Town</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-wide dark">
        <div className="container">
          <div className="eyebrow">How it works</div>
          <h2 className="cv-h cv-h-light">From your story to your screen.</h2>
          <div className="steps-grid">
            <div className="step-cell">
              <div className="step-num">01</div>
              <div className="step-t">Apply</div>
              <div className="step-d">Tell us your story and your goals.</div>
            </div>
            <div className="step-cell">
              <div className="step-num">02</div>
              <div className="step-t">The call</div>
              <div className="step-d">We align on your vision and the right way to film it.</div>
            </div>
            <div className="step-cell">
              <div className="step-num">03</div>
              <div className="step-t">We fly to you</div>
              <div className="step-d">Our crew comes to you and films everything.</div>
            </div>
            <div className="step-cell">
              <div className="step-num">04</div>
              <div className="step-t">Visionacle</div>
              <div className="step-d">You join the network and the in-person events.</div>
            </div>
            <div className="step-cell">
              <div className="step-num">05</div>
              <div className="step-t">Your content engine</div>
              <div className="step-d">Your film and your content go out, month after month.</div>
            </div>
          </div>
          <div className="cv-cta-row">
            <button className="btn-main btn-on-dark" onClick={openCalendar}>Apply for a spot</button>
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section className="cv-section cv-section-alt">
        <div className="cv-inner-wide">
          <div className="eyebrow">Ways to work with us</div>
          <h2 className="cv-h">Three ways in.</h2>
          <p className="cv-lead">Every level is built around one thing: telling your story on film. Pricing is discussed on your call.</p>
          <div className="tier-grid">
            <div className="tier-card">
              <div className="tier-eyebrow">Done with you</div>
              <div className="tier-name">The Content Engine</div>
              <div className="tier-desc">You record, we make it cinematic. Strategy, editing and publishing handled for you — month after month.</div>
              <ul className="tier-feats">
                <li>Content strategy built around your story</li>
                <li>Professional editing in our house style</li>
                <li>Publishing managed across your channels</li>
                <li>Monthly content, consistently</li>
                <li>A seat at Visionacle</li>
              </ul>
              <button className="tier-btn" onClick={openCalendar}>Apply</button>
            </div>
            <div className="tier-card tier-featured">
              <div className="tier-eyebrow">The flagship</div>
              <div className="tier-name">The Documentary</div>
              <div className="tier-desc">We fly to you and film your story. One cinematic founder film, plus a full B-roll library you own forever.</div>
              <ul className="tier-feats">
                <li>Cinematic short documentary about you</li>
                <li>Full B-roll library — a year of content</li>
                <li>On-location production, we come to you</li>
                <li>Direction, filming and editing end to end</li>
                <li>A seat at Visionacle</li>
              </ul>
              <button className="tier-btn tier-btn-light" onClick={openCalendar}>Apply</button>
            </div>
            <div className="tier-card">
              <div className="tier-eyebrow">Done for you</div>
              <div className="tier-name">Studio Partnership</div>
              <div className="tier-desc">Your complete content operation. The Documentary, recurring shoots, full management and your conversion video.</div>
              <ul className="tier-feats">
                <li>Everything in The Documentary</li>
                <li>Recurring shoot days through the year</li>
                <li>Full content management and distribution</li>
                <li>VSL for your sales funnel</li>
                <li>Priority access at Visionacle</li>
              </ul>
              <button className="tier-btn" onClick={openCalendar}>Apply</button>
            </div>
          </div>
        </div>
      </section>

      {/* VISIONACLE */}
      <section className="vis-section">
        <div className="vis-inner">
          <div className="eyebrow vis-eyebrow">The network</div>
          <h2 className="cv-h cv-h-light">Every client joins Visionacle.</h2>
          <p className="vis-lead">
            PRSNLBRANDED isn't only a studio. When you become a client, you join Visionacle — our in-person network of founders. Real dinners. Real events. Real rooms of people building something serious. And when you're there, we film you too: the table becomes another piece of your story.
          </p>
          <div className="vis-cities">
            {["Amsterdam", "Milano", "Tokyo", "Bali", "Cape Town"].map((c, i) => (
              <div key={i} className="vis-city">{c}</div>
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
              <p className="team-bio">5 years in paid media and digital growth. Marketer for the Dutch Grand Prix. Founder of Visionacle, the in-person network for founders across Europe and beyond. I run every project and every call personally.</p>
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
