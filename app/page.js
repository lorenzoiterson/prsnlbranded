"use client";

import { useState } from "react";

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("PRSNL Method");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    instagram: "",
    linkedin: "",
    goal: "",
    role: "",
    revenue: "",
    industry: "",
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.firstName || !form.email) {
      alert("Please fill name and email.");
      return;
    }
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
    {
      q: "How fast will I see results?",
      a: "Most clients see meaningful traction within 60 to 90 days. Building authority is compound: the first month is foundation, the second is signal, the third is when inbound starts. We are not promising overnight virality.",
    },
    {
      q: "Do I need to be on camera?",
      a: "We make it as easy as possible. For PRSNL Method, scripts and direction are provided so you only need 30 minutes of recording per week. For PRSNL Authority, our crew comes to you and handles the shoot end-to-end. Most clients film once a month or less.",
    },
    {
      q: "What if I have no audience yet?",
      a: "Most of our clients start from zero or near-zero. The system is designed to build from scratch. Existing audience helps but is not required.",
    },
    {
      q: "Which platform should I focus on?",
      a: "Depends on your goal and your industry. We map this in the strategy phase. LinkedIn for B2B authority, Instagram and TikTok for B2C and creator economy, X for tech and finance. Most clients run two platforms in sync.",
    },
    {
      q: "What if I am too busy?",
      a: "That is exactly why we built PRSNL Authority. We come to you one day per month and handle everything else. Your only job is to show up.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Studio and Authority are month-to-month with no long-term contract. Cancel with 30 days notice.",
    },
    {
      q: "Do you guarantee results?",
      a: "No serious agency does, and the ones that do are lying. We guarantee execution, consistency, and quality. Results depend on your starting point, niche, and how well you show up.",
    },
    {
      q: "Why should I trust you?",
      a: "5 years of paid media at scale, marketing for the Dutch Grand Prix at Circuit Zandvoort, and co-founder of Visionacle (invite-only networking community). We have built brands and run campaigns that move millions.",
    },
  ];

  return (
    <main>
      <nav className="nav">
        <div className="nav-logo">PRSNLBRANDED</div>
        <div className="nav-links">
          <a
            className="nav-link nav-icon"
            href="https://instagram.com/prsnlbranded"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a className="nav-link nav-icon" href="#" aria-label="YouTube" onClick={(e) => e.preventDefault()}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>
          <a
            className="nav-link"
            href="https://visionacle.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mastermind
          </a>
          <a className="nav-link" href="/roadmap">
            Get free roadmap
          </a>
          <button className="nav-cta" onClick={() => openModal("PRSNL Method")}>
            Apply
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="eyebrow">For founders, creators, operators</div>
        <h1 className="h1">
          We help entrepreneurs <i>build unforgettable personal brands.</i>
        </h1>
        <p className="lead">
          Your personal brand is your most valuable asset. Whether it's to tell your story, sell your product, or own your space, we help you build the brand that gets you there.
        </p>
        <div className="hero-ctas">
          <button className="btn-main" onClick={() => openModal("PRSNL Method")}>
            Apply for a spot
          </button>
          <a href="/roadmap" className="btn-main btn-light">
            Get free roadmap
          </a>
        </div>
      </section>

      {/* WHY BLOCKS + PLATFORMS */}
      <section className="why-section">
        <div className="why-inner">
          <div className="why-grid">
            <div className="why-block">
              <div className="why-num">01</div>
              <div className="why-title">Sell more of your existing offer</div>
              <div className="why-desc">Your audience already trusts you. A real personal brand turns that trust into pipeline, deals, and revenue you don't have to chase.</div>
            </div>
            <div className="why-block">
              <div className="why-num">02</div>
              <div className="why-title">Attract inbound clients</div>
              <div className="why-desc">Stop hunting. Start being found. The right brand makes the right people reach out to you, pre-qualified and ready to work.</div>
            </div>
            <div className="why-block">
              <div className="why-num">03</div>
              <div className="why-title">Become the go-to name</div>
              <div className="why-desc">When people in your space have a problem you solve, your name should be the first they think of. That's what authority means.</div>
            </div>
          </div>

          <div className="platforms-row">
            <div className="platform-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              <span>Instagram</span>
            </div>
            <div className="platform-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
              </svg>
              <span>YouTube</span>
            </div>
            <div className="platform-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              <span>LinkedIn</span>
            </div>
            <div className="platform-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
              </svg>
              <span>TikTok</span>
            </div>
          </div>
        </div>
      </section>

      {/* MOODBOARD */}
      <section className="moodboard-wrap">
        <div className="moodboard-pinterest">
          <div className="mb-col">
            <div className="mb-cell mb-tall">
              <img src="/images/house_cars.jpg" alt="" />
              <div className="mb-cap">
                <div className="mb-cap-t">Lifestyle</div>
                <div className="mb-cap-s">Show your status</div>
              </div>
            </div>
            <div className="mb-cell mb-short">
              <img src="/images/podcast.jpg" alt="" />
              <div className="mb-cap">
                <div className="mb-cap-t">Talking head</div>
                <div className="mb-cap-s">Show your voice</div>
              </div>
            </div>
            <div className="mb-cell mb-medium">
              <img src="/images/running.jpg" alt="" />
              <div className="mb-cap">
                <div className="mb-cap-t">Routine</div>
                <div className="mb-cap-s">Show your discipline</div>
              </div>
            </div>
            <div className="mb-cell mb-short">
              <img src="/images/g_wagon.jpg" alt="" />
              <div className="mb-cap">
                <div className="mb-cap-t">Workflow</div>
                <div className="mb-cap-s">Show your system</div>
              </div>
            </div>
          </div>
          <div className="mb-col">
            <div className="mb-cell mb-short">
              <img src="/images/ferrari_work.jpg" alt="" />
              <div className="mb-cap">
                <div className="mb-cap-t">Behind the scenes</div>
                <div className="mb-cap-s">Show your work</div>
              </div>
            </div>
            <div className="mb-cell mb-xtall">
              <img src="/images/f1.jpg" alt="" />
              <div className="mb-cap">
                <div className="mb-cap-t">Environment</div>
                <div className="mb-cap-s">Show your arena</div>
              </div>
            </div>
            <div className="mb-cell mb-medium">
              <img src="/images/yacht.jpg" alt="" />
              <div className="mb-cap">
                <div className="mb-cap-t">Travel</div>
                <div className="mb-cap-s">Show your reach</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="section">
        <div className="eyebrow">The reality</div>
        <div className="s-h2">Why most experts stay invisible.</div>
        <div className="s-lead">
          You are exceptional at what you do. The market does not know it. Sound familiar?
        </div>
        <div className="problems">
          {[
            "You post in waves. Three weeks on, three weeks silent.",
            "You know what to do. You just never have the time to do it well.",
            "Your content sounds like everyone else in your industry.",
            "You hate the cheap, salesy creator playbook. So you do nothing.",
            "You are losing deals to people with weaker substance and stronger presence.",
          ].map((t, i) => (
            <div key={i} className="problem">
              <div className="problem-x">×</div>
              <div className="problem-t">{t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BANNER TUSCANY */}
      <div style={{ background: "#0a0a0a" }}>
        <img
          src="/images/tuscany.jpg"
          alt=""
          className="banner-img"
          style={{ filter: "brightness(0.7)" }}
        />
      </div>

      {/* APPROACH (DARK) */}
      <section className="section-wide dark">
        <div className="container">
          <div className="eyebrow">The approach</div>
          <div className="s-h2" style={{ color: "#f7f6f2" }}>
            Position. Produce.<br />Distribute.
          </div>
          <div className="s-lead">
            A three-part system, executed weekly. The same operating model the names you respect have used to build their authority, done with discipline, not noise.
          </div>
          <div className="formula">
            <div className="f-cell">
              <div className="f-num">01</div>
              <div className="f-t">Position</div>
              <div className="f-d">Sharp positioning. Real story. Visual identity that holds.</div>
            </div>
            <div className="f-cell">
              <div className="f-num">02</div>
              <div className="f-t">Produce</div>
              <div className="f-d">Long-form. Short-form. Newsletters. Consistently.</div>
            </div>
            <div className="f-cell">
              <div className="f-num">03</div>
              <div className="f-t">Distribute</div>
              <div className="f-d">Organic compounding, with paid amplification when warranted.</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE (DARK) */}
      <section className="process-section">
        <div className="process-inner">
          <div className="eyebrow">The process</div>
          <div className="s-h2" style={{ color: "#f7f6f2" }}>
            The individual steps of the PRSNLBRANDED experience.
          </div>
          <div className="s-lead">Discreet. Intentional. Built to compound.</div>

          <div className="timeline">
            <div className="timeline-item left">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-title">Application & alignment</div>
                <div className="timeline-desc">Discovery call to align on vision, define your goals, and select the right tier for your situation.</div>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-title">Strategy & positioning</div>
                <div className="timeline-desc">We define who you are, what you stand for, and how you'll be remembered. Bespoke positioning, not templates.</div>
              </div>
            </div>
            <div className="timeline-item left">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-title">Production & creation</div>
                <div className="timeline-desc">Scripts, shoots, carousels, editorials. Either we hand you the playbook, or we come to you and capture it ourselves.</div>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-title">Editing & alignment</div>
                <div className="timeline-desc">Premium editing in our house style. Weekly review sessions to keep your brand sharp and consistent.</div>
              </div>
            </div>
            <div className="timeline-item left">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-title">Distribution & growth</div>
                <div className="timeline-desc">Hand-managed publishing across your channels. Organic compounding, with paid amplification when ready.</div>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-title">Reporting & iteration</div>
                <div className="timeline-desc">Monthly performance reviews. We refine the system based on what's working, not on guesses.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="who-block">
        <div className="who-photo">
          <img src="/images/penthouse.jpg" alt="" />
        </div>
        <div className="who-text">
          <div className="who-eyebrow">Who we are</div>
          <div className="who-h">Operators, not gurus.</div>
          <div className="who-d">
            My name is Lorenzo Iterson. Five years building paid media at scale and digital offers from zero. Marketer for the Dutch Grand Prix at Circuit Zandvoort. Co-founder of Visionacle, an invite-only network for serious operators in Europe. We build personal brands the way we'd build them for ourselves.
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing">
        <div className="pricing-header">
          <div className="eyebrow">Two ways in</div>
          <div className="s-h2">Choose your level of involvement.</div>
          <div className="s-lead">
            Done-with-you or done-for-you. Both built to compound your brand into a real business asset.
          </div>
        </div>

        <div className="pricing-grid pricing-two">
          <div className="plan dark">
            <div className="plan-eyebrow">DWY · Most popular</div>
            <div className="plan-name">PRSNL Method</div>
            <div className="plan-price">€997</div>
            <div className="plan-period">per month</div>
            <div className="plan-desc">
              <strong style={{ color: "#fff" }}>We handle the content.</strong> Strategy, scripts, editing, daily posting. Long-form and short-form. You give direction. We make it happen.
            </div>
            <ul className="plan-feats">
              <li>Full content strategy and positioning</li>
              <li>Long-form and short-form content production</li>
              <li>Scripts written for you</li>
              <li>Daily posting managed on your channels</li>
              <li>
                <strong style={{ color: "#fff" }}>Full editing in our house style</strong>
              </li>
              <li>Weekly alignment session</li>
              <li>Monthly performance review</li>
              <li>Direct access to me and the team via Slack</li>
            </ul>
            <button className="plan-btn" onClick={() => openModal("PRSNL Method")}>
              Apply for a spot
            </button>
          </div>

          <div className="plan">
            <div className="plan-eyebrow">DFY · By application</div>
            <div className="plan-name">PRSNL Authority</div>
            <div className="plan-price plan-price-na">Pricing on call</div>
            <div className="plan-period">tailored monthly retainer</div>
            <div className="plan-desc">
              <strong>We come out to you</strong> at your home or chosen location. End-to-end production, editing, and distribution. We create b-roll and videos, long-form and short-form.
            </div>
            <ul className="plan-feats">
              <li>On-location shoots at your home or chosen location</li>
              <li>Our crew comes to you</li>
              <li>B-roll, long-form and short-form video production</li>
              <li>End-to-end editing and distribution</li>
              <li>Multi-platform publishing managed</li>
              <li>Paid amplification and PR included</li>
              <li>LinkedIn ghostwriting</li>
              <li>Weekly strategic call</li>
              <li>
                <strong>Visionacle Mastermind access included</strong>
              </li>
              <li>Direct access to me and the team via Slack</li>
            </ul>
            <button className="plan-btn" onClick={() => openModal("PRSNL Authority")}>
              Apply to learn more
            </button>
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
        <img
          src="/images/yacht.jpg"
          alt=""
          className="banner-img"
          style={{ filter: "brightness(0.65)", maxHeight: 300 }}
        />
      </div>

      {/* CONTACT */}
      <section className="contact-block">
        <div className="contact-inner">
          <div className="contact-eyebrow">Apply</div>
          <div className="contact-h">
            Built for the few. <i>Not the many.</i>
          </div>
          <div className="contact-d">
            We take a small number of clients each month. Apply to see if we are a fit.
          </div>
          <button className="contact-btn" onClick={() => openModal("PRSNL Method")}>
            Apply now
          </button>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="disclaimer-section">
        <div className="disclaimer-inner">
          <p>
            <strong>Inspiration, not endorsement.</strong> PRSNLBRANDED is independently owned and operated. References to figures like Alex Hormozi, Iman Gadzhi, Justin Welsh, Daniel Priestley, Codie Sanchez, and Sahil Bloom appear only as cultural touchstones in personal branding. None of these individuals or their companies endorse, are affiliated with, or have any business relationship with PRSNLBRANDED.
          </p>
          <p>
            <strong>Photography & imagery.</strong> Visual content on this site is used for mood-board and illustrative purposes only. It is not intended to represent specific clients, locations, deliverables, or outcomes.
          </p>
          <p>
            <strong>Results disclaimer.</strong> Personal brand outcomes vary based on starting point, niche, consistency, and execution. We make no income or growth guarantees. Past or anecdotal results referenced in marketing materials are not promises of future performance.
          </p>
        </div>
      </section>

      {/* FOOTER */}
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
            <button className="modal-close" onClick={closeModal} aria-label="Close">
              ×
            </button>

            {!submitted ? (
              <>
                <div className="modal-eyebrow">Apply for</div>
                <div className="modal-h">{selectedPlan}</div>
                <p className="modal-d">
                  Tell us about you. We review every application personally.
                </p>

                <div className="form-grid">
                  <input
                    name="firstName"
                    placeholder="First name"
                    value={form.firstName}
                    onChange={handleChange}
                  />
                  <input
                    name="lastName"
                    placeholder="Last name"
                    value={form.lastName}
                    onChange={handleChange}
                  />
                </div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                />
                <input
                  name="instagram"
                  placeholder="Instagram handle (optional)"
                  value={form.instagram}
                  onChange={handleChange}
                />
                <input
                  name="linkedin"
                  placeholder="LinkedIn URL (optional)"
                  value={form.linkedin}
                  onChange={handleChange}
                />

                <select name="role" value={form.role} onChange={handleChange}>
                  <option value="">Your role</option>
                  <option value="Founder">Founder</option>
                  <option value="Creator">Creator</option>
                  <option value="Executive">Executive</option>
                  <option value="Coach">Coach / Consultant</option>
                  <option value="Other">Other</option>
                </select>

                <select name="revenue" value={form.revenue} onChange={handleChange}>
                  <option value="">Annual revenue</option>
                  <option value="<100k">Less than €100k</option>
                  <option value="100k-500k">€100k - €500k</option>
                  <option value="500k-2m">€500k - €2M</option>
                  <option value="2m+">€2M+</option>
                </select>

                <select name="industry" value={form.industry} onChange={handleChange}>
                  <option value="">Industry</option>
                  <option value="SaaS">SaaS</option>
                  <option value="Agency">Agency</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Ecommerce">Ecommerce</option>
                  <option value="Finance">Finance / Investing</option>
                  <option value="Real estate">Real estate</option>
                  <option value="Other">Other</option>
                </select>

                <select name="goal" value={form.goal} onChange={handleChange}>
                  <option value="">Your #1 goal</option>
                  <option value="Inbound">Generate inbound leads</option>
                  <option value="Authority">Build authority</option>
                  <option value="Sell">Sell my product/service</option>
                  <option value="Hire">Attract talent</option>
                  <option value="Exit">Exit / sell my company</option>
                </select>

                <button className="modal-submit" onClick={handleSubmit}>
                  Submit application
                </button>
              </>
            ) : (
              <div className="modal-success">
                <div className="modal-success-h">Application received.</div>
                <p>
                  We review every application personally. If you're a fit, we'll be in touch within 48 hours.
                </p>
                <button className="modal-submit" onClick={closeModal}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
