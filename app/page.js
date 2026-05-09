"use client";

import { useState } from "react";

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("PRSNL Studio");
  const [submitted, setSubmitted] = useState(false);
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

  return (
    <div className="prsnl">
      <nav className="nav">
        <div className="nav-logo">PRSNLBRANDED</div>
        <button className="nav-cta" onClick={() => openModal("PRSNL Studio")}>
          Apply
        </button>
      </nav>

      <div className="hero">
        <div className="eyebrow">For founders, creators, executives</div>
        <h1 className="h1">
          Your name is <i>your biggest asset.</i>
        </h1>
        <p className="lead">
          We turn experts into authority brands. From positioning to content to growth, we build the machine that makes your name pay.
        </p>
        <button className="btn-main" onClick={() => openModal("PRSNL Studio")}>
          Apply for a spot
        </button>
      </div>

      <div className="moodboard">
        <div className="cell tall">
          <img src="/images/house_cars.jpg" alt="" />
          <div className="cell-cap">
            <div className="cell-cap-t">The reward</div>
            <div className="cell-cap-s">Lifestyle of authority</div>
          </div>
        </div>
        <div className="cell">
          <img src="/images/ferrari_work.jpg" alt="" />
          <div className="cell-cap">
            <div className="cell-cap-t">The work</div>
            <div className="cell-cap-s">Daily craft</div>
          </div>
        </div>
        <div className="cell">
          <img src="/images/yacht.jpg" alt="" />
          <div className="cell-cap">
            <div className="cell-cap-t">The mission</div>
            <div className="cell-cap-s">Brands that print money</div>
          </div>
        </div>
        <div className="cell">
          <img src="/images/podcast.jpg" alt="" />
          <div className="cell-cap">
            <div className="cell-cap-t">The voice</div>
            <div className="cell-cap-s">Speak. Show up.</div>
          </div>
        </div>
        <div className="cell">
          <img src="/images/running.jpg" alt="" />
          <div className="cell-cap">
            <div className="cell-cap-t">The discipline</div>
            <div className="cell-cap-s">Consistency wins</div>
          </div>
        </div>
        <div className="cell">
          <img src="/images/f1.jpg" alt="" />
          <div className="cell-cap">
            <div className="cell-cap-t">The arena</div>
            <div className="cell-cap-s">Where pros compete</div>
          </div>
        </div>
        <div className="cell-text cream">
          <div className="cell-text-eyebrow">The outcome</div>
          <div className="cell-text-h">Authority that pays.</div>
        </div>
      </div>

      <div className="section">
        <div className="eyebrow">The problem</div>
        <div className="s-h2">Why most experts stay invisible.</div>
        <div className="s-lead">
          You are talented, but the audience does not know you exist. Sound familiar?
        </div>
        <div className="problems">
          {[
            "You post sometimes, then disappear for 3 weeks.",
            "You do not know what to say or how to say it.",
            "Your content gets 12 likes from your friends.",
            "You are the best in your field but nobody finds you.",
            "You spend hours on content with nothing to show for it.",
          ].map((t, i) => (
            <div key={i} className="problem">
              <div className="problem-x">×</div>
              <div className="problem-t">{t}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: "#0a0a0a" }}>
        <img
          src="/images/tuscany.jpg"
          alt=""
          className="banner-img"
          style={{ filter: "brightness(0.7)" }}
        />
      </div>

      <div className="section-wide dark">
        <div className="container">
          <div className="eyebrow">Our formula</div>
          <div className="s-h2" style={{ color: "#f5f2ec" }}>
            Position. Produce.<br />Distribute.
          </div>
          <div className="s-lead">
            A three-part system, executed weekly. We use the same playbook the top names of the industry built their empires with — sharp positioning, consistent production, and aggressive distribution.
          </div>
          <div className="formula">
            <div className="f-cell">
              <div className="f-num">01</div>
              <div className="f-t">Position</div>
              <div className="f-d">Sharp positioning. Real story. Visual identity.</div>
            </div>
            <div className="f-cell">
              <div className="f-num">02</div>
              <div className="f-t">Produce</div>
              <div className="f-d">Posts, scripts, carousels, newsletters. Done.</div>
            </div>
            <div className="f-cell">
              <div className="f-num">03</div>
              <div className="f-t">Distribute</div>
              <div className="f-d">Organic plus paid amplification when ready.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="who-block">
        <div className="who-photo">
          <img src="/images/penthouse.jpg" alt="" />
        </div>
        <div className="who-text">
          <div className="who-eyebrow">Who we are</div>
          <div className="who-h">Operators, not gurus.</div>
          <div className="who-d">
            My name is Lorenzo Iterson. 5 years of paid media at scale and building digital offers. Built brands from zero with my team. Marketer for the Dutch Grand Prix at Circuit Zandvoort and co-founder of Visionacle, an invite-only networking community. We help operators build real authority, not vanity.
          </div>
        </div>
      </div>

      <div className="pricing">
        <div className="pricing-header">
          <div className="eyebrow">Three ways to work with us</div>
          <div className="s-h2">Pick your level of involvement.</div>
          <div className="s-lead">
            DIY for self-starters. DWY where we edit for you. DFY where we come to you.
          </div>
        </div>

        <div className="pricing-grid">
          <div className="plan">
            <div className="plan-eyebrow">DIY · Self-paced</div>
            <div className="plan-name">PRSNL Sprint</div>
            <div className="plan-price">€297</div>
            <div className="plan-period">one-time payment</div>
            <div className="plan-desc">
              Build your personal brand yourself with our system. The same playbook we use for our clients, in Notion.
            </div>
            <ul className="plan-feats">
              <li>Notion playbook with full positioning system</li>
              <li>30+ content templates and hook frameworks</li>
              <li>Examples from top personal brands analyzed</li>
              <li>2-hour video course</li>
              <li>Private Discord community</li>
            </ul>
            <button className="plan-btn" onClick={() => openModal("PRSNL Sprint")}>
              Get started
            </button>
          </div>

          <div className="plan dark">
            <div className="plan-eyebrow">DWY · Most popular</div>
            <div className="plan-name">PRSNL Studio</div>
            <div className="plan-price">€997</div>
            <div className="plan-period">per month</div>
            <div className="plan-desc">
              You record. <strong style={{color:"#fff"}}>We edit and publish.</strong> We hand you strategy and scripts. You shoot in 30 minutes a week. We do the rest.
            </div>
            <ul className="plan-feats">
              <li>Personal brand strategy and positioning</li>
              <li>12 ready-to-record scripts per month</li>
              <li><strong style={{color:"#fff"}}>Full editing done by our team</strong></li>
              <li>Posting handled on your channels</li>
              <li>Weekly review and feedback call</li>
              <li>Monthly performance reporting</li>
            </ul>
            <button className="plan-btn" onClick={() => openModal("PRSNL Studio")}>
              Apply for a spot
            </button>
          </div>

          <div className="plan">
            <div className="plan-eyebrow">DFY · By application</div>
            <div className="plan-name">PRSNL Authority</div>
            <div className="plan-price plan-price-na">Pricing on call</div>
            <div className="plan-period">tailored monthly retainer</div>
            <div className="plan-desc">
              <strong>We come to you.</strong> One full day per month at your home or studio. We film, direct, edit, and publish. You stay in your zone.
            </div>
            <ul className="plan-feats">
              <li>One full-day shoot per month, on location</li>
              <li>Our crew comes to your home or studio</li>
              <li>Full content production and editing</li>
              <li>Multi-platform publishing managed</li>
              <li>Paid ads and PR included</li>
              <li>LinkedIn ghostwriting</li>
              <li>Weekly strategic call</li>
            </ul>
            <button className="plan-btn" onClick={() => openModal("PRSNL Authority")}>
              Apply to learn more
            </button>
          </div>
        </div>
      </div>

      <div style={{ background: "#0a0a0a" }}>
        <img
          src="/images/yacht.jpg"
          alt=""
          className="banner-img"
          style={{ filter: "brightness(0.65)", maxHeight: 300 }}
        />
      </div>

      <div className="contact-block">
        <div className="contact-inner">
          <div className="contact-eyebrow">Ready to start</div>
          <div className="contact-h">
            Your name. <i>Worth more.</i>
          </div>
          <div className="contact-d">
            We only take a handful of clients each month. Apply to see if we are a fit.
          </div>
          <button className="contact-btn" onClick={() => openModal("PRSNL Studio")}>
            Apply now
          </button>
        </div>
      </div>

      <div className="disclaimer">
        <div className="disclaimer-inner">
          <div className="disclaimer-t">Disclaimer</div>
          <div className="disclaimer-d">
            <strong>Inspiration, not endorsement.</strong> Names like Alex Hormozi, Iman Gadzhi, Justin Welsh, Codie Sanchez, Sahil Bloom and Daniel Priestley are referenced as benchmarks of what world-class personal branding looks like. They are not our clients and we have no commercial affiliation with them. Our methodology is built on studying their public playbooks, plus our own 5+ years of paid media and content work.
            <br /><br />
            <strong>About the photography.</strong> All images on this page are used for moodboard and aesthetic reference only. They do not depict our clients, our team, or actual results. If you are the photographer or subject of any image and would like it removed, contact us and we will take it down within 48 hours.
            <br /><br />
            <strong>Results.</strong> Building a personal brand requires consistent effort. Results vary based on your starting point, niche, and execution. We do not guarantee specific outcomes.
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-l">PRSNLBRANDED</div>
        <div className="footer-r">prsnlbranded.com</div>
      </footer>

      <div className={`modal ${modalOpen ? "open" : ""}`} onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
        <div className="modal-inner">
          {!submitted ? (
            <>
              <div className="mh">
                <div className="mt">
                  Apply for a spot.<i>{selectedPlan}</i>
                </div>
                <button className="mc" onClick={closeModal}>×</button>
              </div>

              <div className="frow">
                <div className="fg">
                  <label className="fl">First name</label>
                  <input className="fi" type="text" name="firstName" value={form.firstName} onChange={handleChange} />
                </div>
                <div className="fg">
                  <label className="fl">Last name</label>
                  <input className="fi" type="text" name="lastName" value={form.lastName} onChange={handleChange} />
                </div>
              </div>

              <div className="fg">
                <label className="fl">Email</label>
                <input className="fi" type="email" name="email" value={form.email} onChange={handleChange} />
              </div>

              <div className="frow">
                <div className="fg">
                  <label className="fl">Instagram</label>
                  <input className="fi" type="text" name="instagram" placeholder="@handle" value={form.instagram} onChange={handleChange} />
                </div>
                <div className="fg">
                  <label className="fl">LinkedIn</label>
                  <input className="fi" type="text" name="linkedin" placeholder="/in/..." value={form.linkedin} onChange={handleChange} />
                </div>
              </div>

              <div className="fg">
                <label className="fl">Main goal</label>
                <select className="fs" name="goal" value={form.goal} onChange={handleChange}>
                  <option value="">Select your goal</option>
                  <option>Grow audience and reach</option>
                  <option>Generate inbound leads</option>
                  <option>Position as industry authority</option>
                  <option>Monetize existing audience</option>
                  <option>Build personal brand from scratch</option>
                  <option>Get speaking gigs and press</option>
                </select>
              </div>

              <div className="fg">
                <label className="fl">What you do</label>
                <select className="fs" name="role" value={form.role} onChange={handleChange}>
                  <option value="">Select role</option>
                  <option>Founder / CEO</option>
                  <option>Executive / C-suite</option>
                  <option>Creator / Influencer</option>
                  <option>Consultant / Freelancer</option>
                  <option>Coach / Speaker</option>
                  <option>Investor</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="fg">
                <label className="fl">Annual revenue</label>
                <select className="fs" name="revenue" value={form.revenue} onChange={handleChange}>
                  <option value="">Select range</option>
                  <option>Pre-revenue</option>
                  <option>€0 – €50k</option>
                  <option>€50k – €150k</option>
                  <option>€150k – €500k</option>
                  <option>€500k – €1M</option>
                  <option>€1M – €5M</option>
                  <option>€5M+</option>
                </select>
              </div>

              <div className="fg">
                <label className="fl">Industry</label>
                <select className="fs" name="industry" value={form.industry} onChange={handleChange}>
                  <option value="">Select industry</option>
                  <option>SaaS / Tech</option>
                  <option>E-commerce / DTC</option>
                  <option>Marketing / Agency</option>
                  <option>Finance / Investing</option>
                  <option>Coaching / Education</option>
                  <option>Real Estate</option>
                  <option>Health / Fitness</option>
                  <option>Creative / Media</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="fg">
                <label className="fl">Plan interested in</label>
                <div className="psel">
                  {["PRSNL Sprint", "PRSNL Studio", "PRSNL Authority"].map((p) => (
                    <div
                      key={p}
                      className={`popt ${selectedPlan === p ? "sel" : ""}`}
                      onClick={() => setSelectedPlan(p)}
                    >
                      {p === "PRSNL Sprint" ? "Sprint" : p === "PRSNL Studio" ? "Studio" : "Authority"}
                    </div>
                  ))}
                </div>
              </div>

              <button className="fbtn" onClick={handleSubmit}>
                Submit application ↗
              </button>
            </>
          ) : (
            <div className="success show">
              <div className="sicon">✓</div>
              <div className="st">Application received.</div>
              <div className="ss">
                We review every application personally and reply within 48 hours.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
