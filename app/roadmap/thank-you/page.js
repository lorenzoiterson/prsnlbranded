"use client";

import { useEffect } from "react";

export default function ThankYouPage() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="rm-wrap">
      <nav className="nav">
        <a
          href="/"
          className="nav-logo"
          style={{ textDecoration: "none", color: "#0a0a0a" }}
        >
          PRSNLBRANDED
        </a>
        <div className="nav-links">
          <a className="nav-link" href="/">
            Home
          </a>
        </div>
      </nav>

      <div className="ty-wrap">
        <div className="ty-inner">
          <div className="eyebrow">Step 1 of 2</div>
          <h1 className="rm-h1">
            Your roadmap is <i>on its way.</i>
          </h1>
          <p className="rm-lead" style={{ textAlign: "center", margin: "0 auto 48px" }}>
            Check your inbox in the next few minutes. While you wait, watch the video below to understand the exact system we use.
          </p>

          {/* VSL PLACEHOLDER */}
          <div className="ty-vsl">
            <div className="ty-vsl-inner">
              <div className="ty-vsl-icon">▶</div>
              <div className="ty-vsl-label">Video coming soon</div>
              <div className="ty-vsl-sub">We'll add the full walkthrough here shortly.</div>
            </div>
          </div>

          {/* SCHEDULE CALL */}
          <div className="ty-schedule">
            <div className="ty-eyebrow">Step 2 of 2</div>
            <div className="ty-card-h">Schedule your call.</div>
            <p className="ty-card-d">
              Pick a time that works for you. 30 minutes. We'll walk through your situation and map out exactly what your personal brand needs to grow.
            </p>
          </div>

          {/* CALENDLY EMBED */}
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/lorenzoiterson/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=0a0a0a"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </div>
    </div>
  );
}
