"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RoadmapPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    audience: "",
    blocker: "",
    handle: "",
  });

  const update = (k, v) => setForm({ ...form, [k]: v });

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/roadmap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("submit failed");
      router.push("/roadmap/thank-you");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

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

      <div className="rm-grid">
        <div className="rm-photo">
          <img src="/images/podcast.jpg" alt="" />
        </div>

        <div className="rm-form-side">
          <div className="rm-form-inner">
            <div className="eyebrow">Free resource</div>
            <h1 className="rm-h1">
              Get your free <i>personal brand roadmap.</i>
            </h1>
            <p className="rm-lead">
              Tell us where you are. We'll send you a personalized roadmap to where you want to be — built on the same system we use with our clients.
            </p>

            <ul className="rm-bullets">
              <li>A custom 30-day plan based on your situation</li>
              <li>The exact framework we use with paying clients</li>
              <li>Sent straight to your inbox in minutes</li>
            </ul>

            <form onSubmit={submit} className="rm-form">
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Handle you want to grow (e.g. @yourname on LinkedIn)"
                value={form.handle}
                onChange={(e) => update("handle", e.target.value)}
                required
              />
              <select
                value={form.audience}
                onChange={(e) => update("audience", e.target.value)}
                required
              >
                <option value="">Current audience size</option>
                <option value="0-500">0 - 500</option>
                <option value="500-2k">500 - 2k</option>
                <option value="2k-10k">2k - 10k</option>
                <option value="10k-50k">10k - 50k</option>
                <option value="50k+">50k+</option>
              </select>
              <select
                value={form.blocker}
                onChange={(e) => update("blocker", e.target.value)}
                required
              >
                <option value="">Your biggest blocker right now</option>
                <option value="No time">No time to create content</option>
                <option value="No clarity">No clarity on what to post</option>
                <option value="Inconsistent">Can't stay consistent</option>
                <option value="No growth">Posting but no growth</option>
                <option value="Low quality">Quality of content is low</option>
                <option value="No strategy">No clear strategy</option>
              </select>

              {error && <div className="rm-error">{error}</div>}

              <button type="submit" className="btn-main" disabled={submitting}>
                {submitting ? "Sending..." : "Get my free roadmap"}
              </button>

              <div className="rm-disclaimer">
                Your data stays with us. No spam. Unsubscribe anytime.
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
