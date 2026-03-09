"use client";

import { useState, useEffect, useRef } from "react";

const WHATSAPP_URL = "https://wa.me/919742815666?text=Hi%2C%20I%27d%20like%20to%20book%20a%20consultation%20with%20One%20Good%20Watch.";

const NAV_LINKS = ["How It Works", "About", "Book a Consultation"];

const SUBSTACK_POSTS = [
  { title: "Why Your First Watch Should Bore You", teaser: "The case for restraint when everything is screaming for your attention." },
  { title: "Grey Market, Decoded", teaser: "What the AD won't tell you — and what the grey dealer hopes you won't ask." },
  { title: "The Case for Buying Slowly", teaser: "Why the best collections are built over years, not afternoons." },
];

const TIERS = [
  {
    name: "Entry",
    range: "Under ₹2L",
    duration: "15 min",
    desc: "A focused conversation and a curated shortlist. The right start for a considered watch habit.",
    deliverable: "Clarity on where to start",
    tag: "Micro-brands · Entry Luxury",
  },
  {
    name: "Sweet Spot",
    range: "₹5L – ₹10L",
    duration: "30–45 min",
    desc: "A serious purchase deserves serious counsel. A deep profile, a considered shortlist, and an introduction to the right source.",
    deliverable: "A clear path to the right watch",
    tag: "First Luxury · Core Collection",
    featured: true,
  },
  {
    name: "Collector",
    range: "Above ₹10L",
    duration: "60 min",
    desc: "For those who know what they want but need someone who can actually get it. Peer conversation. Procurement partnership.",
    deliverable: "Direction, access, and the right source",
    tag: "Allocated · Grey · Investment",
  },
];

const STEPS = [
  { n: "01", title: "Book your call", body: "Choose your engagement, fill a short brief, pick a time. That's it." },
  { n: "02", title: "We talk", body: "15, 45, or 60 minutes depending on your purchase. Unhurried. Honest." },
  { n: "03", title: "Buy with confidence", body: "A considered, personalised recommendation arrives within 24 hours. Go it alone, or let us facilitate the procurement entirely." },
];

// Wound Daily wordmark as inline SVG
const WoundDailyMark = ({ width = 220 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width={width} style={{ display: "block" }}>
    <text x="400" y="190" textAnchor="middle"
      fontFamily="'Cormorant Garamond', Georgia, 'Times New Roman', serif"
      fontSize="110" fontWeight="300" letterSpacing="18" fill="#e8e4dc">WOUND</text>
    <line x1="270" y1="212" x2="530" y2="212" stroke="#2a2820" strokeWidth="0.8"/>
    <text x="406" y="300" textAnchor="middle"
      fontFamily="'Cormorant Garamond', Georgia, 'Times New Roman', serif"
      fontSize="110" fontStyle="italic" fontWeight="300" letterSpacing="18" fill="#c8b887">Daily</text>
    <text x="400" y="348" textAnchor="middle"
      fontFamily="'Courier New', monospace" fontSize="11" letterSpacing="4.5" fill="#8a8070">
      ON WATCHES. COLLECTED SLOWLY.
    </text>
  </svg>
);

export default function OneGoodWatch() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#0e0e0e", color: "#e8e4dc", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Mono:wght@300;400&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .nav-link {
          font-family: 'DM Mono', 'Courier New', monospace;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #b0aa9e;
          cursor: pointer;
          transition: color 0.3s;
          background: none;
          border: none;
          text-decoration: none;
        }
        .nav-link:hover { color: #e8e4dc; }

        .hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 300;
          font-size: clamp(56px, 9vw, 120px);
          line-height: 0.92;
          letter-spacing: -0.02em;
          color: #e8e4dc;
        }

        .section-label {
          font-family: 'DM Mono', 'Courier New', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #8a8070;
        }

        .section-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 300;
          font-size: clamp(36px, 5vw, 60px);
          line-height: 1.1;
          color: #e8e4dc;
        }

        .body-text {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 22px;
          line-height: 1.75;
          color: #b8b2a8;
          font-weight: 400;
        }

        .tier-card {
          border: 1px solid #2a2820;
          padding: 40px 36px;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        .tier-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #c8b887, transparent);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .tier-card:hover::before { opacity: 1; }
        .tier-card:hover { border-color: #3d3930; background: #141410 !important; }
        .tier-card.featured::before { opacity: 0.6; }

        .tier-range {
          font-family: 'Cormorant Garamond', serif;
          font-size: 30px;
          font-weight: 300;
          color: #c8b887;
          font-style: italic;
        }

        .tier-name {
          font-family: 'DM Mono', 'Courier New', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #8a8070;
        }

        .tier-desc {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          line-height: 1.7;
          color: #b8b2a8;
          font-weight: 400;
        }

        .tier-tag {
          font-family: 'DM Mono', 'Courier New', monospace;
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #6a6458;
        }

        .step-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 56px;
          font-weight: 300;
          color: #6a6458;
          line-height: 1;
          font-style: italic;
        }

        .step-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 400;
          color: #e8e4dc;
        }

        .step-body {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          line-height: 1.7;
          color: #8a8070;
          font-weight: 400;
        }

        .cta-btn {
          font-family: 'DM Mono', 'Courier New', monospace;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          background: #c8b887;
          color: #0e0e0e;
          border: none;
          padding: 16px 36px;
          cursor: pointer;
          transition: all 0.3s;
          display: inline-block;
        }
        .cta-btn:hover { background: #e8e4dc; }

        .cta-btn-ghost {
          font-family: 'DM Mono', 'Courier New', monospace;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          background: transparent;
          color: #c8b887;
          border: 1px solid #3d3930;
          padding: 15px 36px;
          cursor: pointer;
          transition: all 0.3s;
          display: inline-block;
        }
        .cta-btn-ghost:hover { border-color: #c8b887; color: #e8e4dc; }

        .post-card {
          border-bottom: 1px solid #1e1c18;
          padding: 32px 0;
          cursor: pointer;
          transition: all 0.3s;
        }
        .post-card:hover .post-title { color: #c8b887; }

        .post-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 400;
          color: #e8e4dc;
          transition: color 0.3s;
          line-height: 1.3;
        }

        .post-teaser {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          color: #7a7468;
          font-style: italic;
          line-height: 1.6;
          margin-top: 8px;
        }

        .divider { border: none; border-top: 1px solid #1e1c18; }

        .about-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(22px, 2.8vw, 30px);
          font-style: italic;
          font-weight: 300;
          color: #e8e4dc;
          line-height: 1.55;
        }

        .featured-badge {
          font-family: 'DM Mono', 'Courier New', monospace;
          font-size: 9px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #0e0e0e;
          background: #c8b887;
          padding: 4px 10px;
          display: inline-block;
        }

        .philosophy-text {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 17px;
          font-style: italic;
          color: #8a8070;
          white-space: nowrap;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 1s ease forwards; }
        .fade-up-delay { animation: fadeUp 1s ease 0.3s forwards; opacity: 0; }
        .fade-up-delay-2 { animation: fadeUp 1s ease 0.6s forwards; opacity: 0; }

        .hero-sub {
          font-family: 'DM Mono', 'Courier New', monospace;
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #8a8070;
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 40px", height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(14,14,14,0.96)" : "transparent",
        borderBottom: scrolled ? "1px solid #1e1c18" : "1px solid transparent",
        transition: "all 0.4s",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}>
        <button onClick={() => scrollTo("hero")} style={{
          fontFamily: "'DM Mono', 'Courier New', monospace",
          fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase",
          color: "#e8e4dc", background: "none", border: "none", cursor: "pointer",
        }}>One Good Watch</button>
        <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
          {NAV_LINKS.map(link => (
            <button key={link} className="nav-link"
              onClick={() => scrollTo(link.toLowerCase().replace(/\s+/g, "-"))}>
              {link}
            </button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" ref={heroRef} style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "flex-end", padding: "0 40px 80px",
        position: "relative", overflow: "hidden",
      }}>
        {/* Background circles */}
        <div style={{ position: "absolute", top: "12%", right: "-5%", width: "45vw", height: "45vw", borderRadius: "50%", border: "1px solid #1e1c18", opacity: 0.4 }} />
        <div style={{ position: "absolute", top: "8%", right: "-10%", width: "55vw", height: "55vw", borderRadius: "50%", border: "1px solid #181614", opacity: 0.25 }} />

        <div style={{ maxWidth: 900, position: "relative", zIndex: 1 }}>
          <div className="hero-sub fade-up" style={{ marginBottom: 32 }}>
            Luxury Watch Advisory — India
          </div>
          <h1 className="hero-title fade-up-delay">
            One<br />
            <span style={{ fontStyle: "italic", color: "#c8b887" }}>Good</span><br />
            Watch.
          </h1>
          <div style={{ marginTop: 48, maxWidth: 540 }} className="fade-up-delay-2">
            <p className="body-text" style={{ marginBottom: 40 }}>
              Buying a serious watch is one of the few decisions where taste, knowledge, and timing all have to align. Most people navigate it alone. They don't have to.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button className="cta-btn" onClick={() => window.open(WHATSAPP_URL, "_blank")}>Start the Conversation</button>
              <button className="cta-btn-ghost" onClick={() => scrollTo("how-it-works")}>How it works</button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 40, right: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <div style={{ width: 1, height: 60, background: "linear-gradient(to bottom, transparent, #3d3930)" }} />
          <span className="section-label" style={{ writingMode: "vertical-rl" }}>Scroll</span>
        </div>
      </section>

      {/* PHILOSOPHY STRIP */}
      <div style={{ borderTop: "1px solid #1e1c18", borderBottom: "1px solid #1e1c18", padding: "28px 40px", display: "flex", gap: 60, overflowX: "auto" }}>
        {[
          "Judgment over volume",
          "Taste over trend",
          "The right watch at the right moment",
          "Transparency built into every engagement",
        ].map((p, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 20, whiteSpace: "nowrap" }}>
            {i > 0 && <div style={{ width: 4, height: 4, background: "#3d3930", borderRadius: "50%", flexShrink: 0 }} />}
            <span className="philosophy-text">{p}</span>
          </div>
        ))}
      </div>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ padding: "120px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 80 }}>
            <div className="section-label" style={{ marginBottom: 20 }}>The Process</div>
            <h2 className="section-title">Three steps.<br />One right watch.</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 0 }}>
            {STEPS.map((step, i) => (
              <div key={i} style={{
                padding: "40px 32px",
                borderLeft: i === 0 ? "1px solid #1e1c18" : "none",
                borderRight: "1px solid #1e1c18",
                borderTop: "1px solid #1e1c18",
                borderBottom: "1px solid #1e1c18",
              }}>
                <div className="step-num">{step.n}</div>
                <div className="step-title" style={{ marginTop: 16, marginBottom: 12 }}>{step.title}</div>
                <div className="step-body">{step.body}</div>
              </div>
            ))}
          </div>

          {/* Tiers */}
          <div style={{ marginTop: 100, marginBottom: 60 }}>
            <div className="section-label" style={{ marginBottom: 20 }}>Engagement Tiers</div>
            <h2 className="section-title">Three ways to work together.</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 1, background: "#1e1c18" }}>
            {TIERS.map((tier, i) => (
              <div key={i} className={`tier-card${tier.featured ? " featured" : ""}`}
                style={{ background: tier.featured ? "#111108" : "#0e0e0e" }}>
                {tier.featured && (
                  <div style={{ marginBottom: 20 }}>
                    <span className="featured-badge">Most common</span>
                  </div>
                )}
                <div className="tier-name" style={{ marginBottom: 12 }}>{tier.name}</div>
                <div className="tier-range" style={{ marginBottom: 24 }}>{tier.range}</div>
                <div className="tier-desc" style={{ marginBottom: 32 }}>{tier.desc}</div>
                <hr className="divider" style={{ marginBottom: 24 }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div>
                    <div className="tier-tag" style={{ marginBottom: 6 }}>What follows</div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, color: "#c8b887", fontStyle: "italic" }}>
                      {tier.deliverable}
                    </div>
                  </div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#6a6458", letterSpacing: "0.1em" }}>
                    {tier.duration}
                  </div>
                </div>
                <div className="tier-tag" style={{ marginTop: 24 }}>{tier.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "120px 40px", borderTop: "1px solid #1e1c18", background: "#090908" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
          <div>
            <div className="section-label" style={{ marginBottom: 20 }}>About</div>
            <h2 className="section-title" style={{ marginBottom: 40 }}>
              Instinct. Network.<br />Judgment.
            </h2>
            <p className="body-text" style={{ marginBottom: 24 }}>
              This practice was built on over a decade of being the person friends call before they buy something significant. Not because I know more than everyone — because I've made enough considered decisions myself, and a few wrong ones, to recognise both early.
            </p>
            <p className="body-text" style={{ marginBottom: 24 }}>
              My own collection spans Grand Seiko, Jaeger-LeCoultre, IWC, Zenith, Omega, Panerai, Tudor and others. Each piece was chosen with deliberation. Several were chosen after deliberating too long, watching something I wanted disappear.
            </p>
            <p className="body-text">
              The dealer relationships that make this practice work took years to build. The judgment that makes them worth calling took longer.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <blockquote className="about-quote" style={{ marginBottom: 48, paddingLeft: 32, borderLeft: "2px solid #3d3930" }}>
              "The market does not need another watch retailer. It needs someone with taste, relationships, and the confidence to say: this one — and here is why."
            </blockquote>
            <div className="section-label" style={{ marginBottom: 16 }}>From Wound Daily</div>
            <div style={{ marginBottom: 28 }}>
              <WoundDailyMark width={180} />
            </div>
            <button className="cta-btn-ghost" style={{ alignSelf: "flex-start" }}
              onClick={() => window.open("https://roopeshbalakrishna.substack.com", "_blank")}>
              Read the Substack ↗
            </button>
          </div>
        </div>
      </section>

      {/* SUBSTACK STRIP */}
      <section style={{ padding: "80px 40px", borderTop: "1px solid #1e1c18" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
            <div className="section-label">From Wound Daily</div>
            <button className="nav-link" style={{ fontSize: 10 }}>All posts ↗</button>
          </div>
          <hr className="divider" />
          {SUBSTACK_POSTS.map((post, i) => (
            <div key={i} className="post-card">
              <div className="post-title">{post.title}</div>
              <div className="post-teaser">{post.teaser}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BOOK */}
      <section id="book-a-consultation" style={{ padding: "120px 40px", borderTop: "1px solid #1e1c18", background: "#090908", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div className="section-label" style={{ marginBottom: 24 }}>Book a Consultation</div>
          <h2 className="section-title" style={{ marginBottom: 40 }}>
            One conversation.<br />
            <span style={{ fontStyle: "italic", color: "#c8b887" }}>One right watch.</span>
          </h2>
          <p className="body-text" style={{ marginBottom: 40, maxWidth: 480, margin: "0 auto 40px" }}>
            Select your engagement below, then start a conversation on WhatsApp. A short brief before we talk is all it takes.
          </p>

          <div style={{ display: "block", marginBottom: 60 }}>
            <button className="cta-btn" style={{ fontSize: 12, padding: "20px 52px" }}
              onClick={() => window.open(WHATSAPP_URL, "_blank")}>
              Message on WhatsApp
            </button>
          </div>

          <div style={{ marginBottom: 24 }}>
            <p style={{ fontFamily: "'DM Mono', 'Courier New', monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6a6458", textAlign: "center" }}>
              +91 97428 15666 · Responds within 24 hours
            </p>
          </div>

          <div style={{ padding: "32px", border: "1px solid #1e1c18", textAlign: "left" }}>
            <div className="section-label" style={{ marginBottom: 16 }}>A note on why this exists</div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 19, lineHeight: 1.75, color: "#8a8070", fontStyle: "italic" }}>
              Collecting watches is one of the few things that rewards patience, curiosity, and a genuine point of view. It isn't about spending because you can — it's about knowing what you want, understanding why it matters, and building something over time that reflects who you are. That's what this practice is here to help with. Whether you're starting out or figuring out what's next.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: "1px solid #1e1c18", padding: "48px 40px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 24,
      }}>
        <div>
          <div style={{ fontFamily: "'DM Mono', 'Courier New', monospace", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "#e8e4dc", marginBottom: 8 }}>
            One Good Watch
          </div>
          <div className="section-label">Luxury Watch Advisory · India</div>
        </div>
        <div style={{ display: "flex", gap: 40 }}>
          {["How It Works", "About", "Book", "Wound Daily ↗"].map(link => (
            <button key={link} className="nav-link">{link}</button>
          ))}
        </div>
        <div className="section-label">© 2025 One Good Watch</div>
      </footer>
    </div>
  );
}
