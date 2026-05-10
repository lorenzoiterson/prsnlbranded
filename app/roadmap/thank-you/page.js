"use client";

export default function ThankYouPage() {
  return (
    <div className="rm-wrap">
      <nav className="nav">
        <a href="/" className="nav-logo" style={{ textDecoration: "none", color: "#0a0a0a" }}>
          PRSNLBRANDED
        </a>
        <div className="nav-links">
          <a className="nav-link" href="/">Home</a>
        </div>
      </nav>

      <div className="ty-wrap">
        <div className="ty-inner">
          <div className="eyebrow">Step 1 of 2</div>
          <h1 className="rm-h1">
            Your roadmap is on its way.
          </h1>
          <p className="rm-lead">
            Check your inbox in the next few minutes. We've sent you our complete personal brand playbook — the same one we use with paying clients.
          </p>

          <div className="ty-card">
            <div className="ty-eyebrow">In the meantime</div>
            <div className="ty-card-h">Read this while you wait.</div>
            <p className="ty-card-d">
              The "How to Build a Personal Brand" playbook walks you through the exact 6-step system. 30+ pages of frameworks, templates, and real examples.
            </p>
            <a
              href="/playbook.pdf"
              className="btn-main"
              download
            >
              Download the playbook
            </a>
          </div>

          <div className="ty-divider"></div>

          <div className="ty-card">
            <div className="ty-eyebrow">Want it built for you?</div>
            <div className="ty-card-h">Book a 30-min strategy call.</div>
            <p className="ty-card-d">
              If you'd rather have us build your personal brand for you — or with you — let's talk. 30 minutes, no pitch unless you ask.
            </p>
            <a
              href="https://calendly.com/lorenzoiterson/30min"
              className="btn-main"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book your call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
