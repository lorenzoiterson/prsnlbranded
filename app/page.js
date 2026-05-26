"use client";
import { useState } from "react";
import BentoGallery from "./BentoGallery";
import VisionacleGlobe from "./VisionacleGlobe";

const CALENDAR_URL = "https://tidycal.com/prsnlbranded/apply";

export default function Page() {
  const [openFaq, setOpenFaq] = useState(null);

  const openCalendar = () => {
    window.open(CALENDAR_URL, "_blank", "noopener,noreferrer");
  };

  const faqs = [
    { q: "What does PRSNLBRANDED help with?", a: "PRSNLBRANDED makes a cinematic founder film about the founder and their story, plus a full library of B-roll footage that becomes their content for the months ahead. Not written posts — films." },
    { q: "Does the founder need to be on camera?", a: "Yes, but PRSNLBRANDED makes it easy. The team directs everything, guides delivery, and shoots it cinematically. No performing required — just being yourself." },
    { q: "Where does PRSNLBRANDED film?", a: "The crew comes to the founder. Their city, their home, their office — wherever the story lives. For founders whose story involves travel, the team goes there too." },
    { q: "What is Visionacle?", a: "Visionacle is an in-person network of founders. Every PRSNLBRANDED client joins it — real dinners and events in Amsterdam, Milano, Tokyo, Bali and Cape Town, captured on camera as part of the founder's story." },
    { q: "How long until there is content?", a: "After the shoot, the founder film and first wave of content are ready within weeks. One shoot day produces months of material." },
    { q: "Why does PRSNLBRANDED work by application?", a: "PRSNLBRANDED takes a limited number of founders at a time. Filming properly takes focus. If the team can't give a story the attention it deserves, they don't take it on." },
    { q: "Is this only for big companies?", a: "No. It's for founders doing something worth remembering — whatever the size. What matters is having a real story and being serious about telling it." },
    { q: "What happens after a founder applies?", a: "The founder books a call directly. PRSNLBRANDED talks through the story, the goals, and whether it's the right studio to film it. No pressure, no script." },
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
          <p className="cv-lead">PRSNLBRANDED flies to the founder and turns their journey into a cinematic film — then a year of content, built on a clear strategy.</p>
          <div className="solution-grid">
            <div className="sol-card">
              <div className="sol-num">01</div>
              <div className="sol-title">The Founder Film</div>
              <div className="sol-desc">A cinematic short film about the founder. How they started, where they're going, why it matters. The story only they have.</div>
              <div className="sol-platforms">The signature asset</div>
            </div>
            <div className="sol-card sol-card-featured">
              <div className="sol-num">02</div>
              <div className="sol-title">A Year of Content</div>
              <div className="sol-desc">A full library of cinematic B-roll, captured in one shoot. Months of content across every platform, from a single day of filming.</div>
              <div className="sol-platforms">YouTube · LinkedIn · Instagram · TikTok</div>
            </div>
            <div className="sol-card">
              <div className="sol-num">03</div>
              <div className="sol-title">Content Strategy</div>
              <div className="sol-desc">A clear content plan behind every asset. What to post, where, and why — so the footage works as a system, not just a film.</div>
              <div className="sol-platforms">The plan that ties it together</div>
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
              <div className="step-t">We edit</div>
              <div className="step-d">The footage becomes a film and a library of content.</div>
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
                <li>Ongoing direction and feedback</li>
              </ul>
              <button className="tier-btn" onClick={openCalendar}>Apply</button>
            </div>
            <div className="tier-card tier-featured">
              <div className="tier-eyebrow">The flagship</div>
              <div className="tier-name">The Founder Film</div>
              <div className="tier-desc">PRSNLBRANDED flies to the founder and films their story. One cinematic founder film, plus a full B-roll library they own forever.</div>
              <ul className="tier-feats">
                <li>Cinematic founder film</li>
                <li>Full B-roll library — a year of content</li>
                <li>On-location production, the crew comes to you</li>
                <li>Direction, filming and editing end to end</li>
                <li>Content strategy included</li>
              </ul>
              <button className="tier-btn tier-btn-light" onClick={openCalendar}>Apply</button>
            </div>
            <div className="tier-card">
              <div className="tier-eyebrow">Done for you</div>
              <div className="tier-name">Studio Partnership</div>
              <div className="tier-desc">A complete content operation. The Founder Film, recurring shoots, full management and a conversion video.</div>
              <ul className="tier-feats">
                <li>Everything in The Founder Film</li>
                <li>Recurring shoot days through the year</li>
                <li>Full content management and distribution</li>
                <li>VSL for the sales funnel</li>
                <li>Priority placement and support</li>
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
            PRSNLBRANDED isn't only a studio. When you become a client, you join Visionacle — an in-person network of founders. Real dinners. Real events. Real rooms of people building something serious. And when you're there, the camera comes too: the table becomes another piece of your story.
          </p>
          <VisionacleGlobe />
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
