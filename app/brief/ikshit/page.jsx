"use client";
import { useState, useEffect } from "react";

const PASSWORD = "ogw2603";

const GOLD = "#c8b887";
const DARK = "#0e0e0e";
const MID = "#6a6458";
const LIGHT = "#f5f4f0";
const RULE = "#1e1c18";

// ─── DATA ────────────────────────────────────────────────────────────────────

const client = {
  name: "Ikshit Sharda",
  date: "16 March 2026",
  preparedBy: "Roopesh Balakrishna",
};

const sections = [
  {
    id: "profile",
    label: "Section 1",
    title: "Your Profile",
    body: [
      "Ikshit — you named the PRX. I'm not going to pretend I didn't notice. The PRX is a good watch. It's well-made, well-priced, and the internet will tell you it's the obvious first buy. But you also said you want something that stays for generations. Something that gets handed down and told about. Those are two very different briefs, and the PRX only answers one of them.",
      "Here's what I know about you. You rode a Ducati Monster. You work at Apple. Neither of those things is an accident — they're choices that say something about how you think. You don't buy a Honda because it's sensible. You buy something with a point of view, an engine worth understanding, and a shape that means something. The watch brief you actually described — heritage, daily wear, something worth passing on — deserves the same standard. So let's talk about what that watch actually is.",
    ],
  },
  {
    id: "brief",
    label: "Section 2",
    title: "What You're Looking For",
    bullets: [
      "Budget: Under ₹2L — firm ceiling for now",
      "Use: Daily wear — on the wrist constantly, needs to earn that place",
      "Intent: A first serious watch — one that starts a collection, not just fills a wrist",
      "Heritage: A watch with a story — something worth explaining to someone who asks",
      "Pre-owned: Open — I am reaching out to contacts. If the right piece comes up, it changes this brief entirely",
    ],
  },
];

const watches = [

  {
    id: "nomos",
    img1: "/watches/nomos-product.jpg",
    img2: "/watches/nomos-wrist.jpg",
    name: "NOMOS Glashütte Club Campus",
    ref: "Ref. 722.GB",
    why: "This is the one that makes sense the moment you see it — if you understand what you are looking at. NOMOS is the largest manufacturer of mechanical watches in Germany, made entirely in Glashütte — the only town outside Switzerland with that credential. The Club Campus is their most accessible entry point: 38.5mm, bold Arabic numerals, in-house Alpha movement, and a night sky blue dial that is genuinely beautiful without announcing itself. It is the watch equivalent of a product built by people who care deeply about getting every detail right and have no interest in telling you about it. For someone who chose a Monster and works at Apple — the logic will be immediate.",
    specs: "38.5mm polished stainless steel case. In-house Calibre Alpha hand-wound, 17 jewels, 43-hour power reserve. Blue dial, luminous numerals, small seconds at 6. Sapphire crystal. 30m water resistance. Leather strap.",
    caveat: "Hand-wound only. No automatic rotor — you wind it daily. Some find this a ritual worth keeping. Others find it easy to forget. Know which one you are before you commit.",
    availability: "Available new with authorised dealers. ₹1.83L. Sourcing on request.",
  },

  {
    id: "baltic",
    img1: "/watches/baltic-product.jpg",
    img2: "/watches/baltic-wrist.jpg",
    name: "Baltic Aquascaphe",
    ref: "Ref. AQUAMK2",
    why: "Baltic was founded in 2017 by a French watchmaker who spent years obsessing over mid-century dive watches before deciding to build his own. The Aquascaphe is the result — a 39mm vintage-inspired diver assembled in Besançon with an ETA movement, domed sapphire crystal, and a dial that looks like it was pulled from 1965. It is not a heritage watch in the traditional sense. But it is a watch with a genuine point of view, built by people who care about getting details right. At ₹70K–₹80K new via No Hype Horology, it leaves serious room in the budget for what comes next.",
    specs: "39mm stainless steel case. ETA 2824-2 automatic. 38-hour power reserve. Domed sapphire crystal. 200m water resistance. Leather or NATO strap.",
    caveat: "ETA movement is solid but not exceptional. If movement finishing matters to you, look elsewhere. The value argument is the whole point here — the design quality punches well above the price.",
    availability: "Available with select dealers and on request.",
  },
  {
    id: "tourby",
    img1: "/watches/tourby-product.jpg",
    img2: "/watches/tourby-angled.jpg",
    name: "Tourby Marine Automatic Enamel 37",
    ref: "German independent",
    why: "This is the one nobody in your office will be able to place — and that is the point. Tourby is a small German independent. The Marine 37 has an enamel lacquer dial — a technique that involves firing glass at extreme temperatures and that normally lives on watches costing four to five times more. Pair that with heat-blued steel hands, a La Joux-Perret automatic adjusted in 5 positions, and 68 hours of power reserve, and you have a watch that is significantly more serious than its price suggests. The kind of thing a Ducati rider would understand immediately — all the engineering, none of the badge.",
    specs: "37mm stainless steel case, 9.45mm thin. La Joux-Perret automatic, 24 jewels, 68-hour power reserve. Accuracy −2/+8 seconds per day. Domed sapphire crystal. 100m water resistance. Leather strap.",
    caveat: "37mm is compact. On a larger wrist it sits as a dress watch, not a statement. The enamel dial is irreplaceable if damaged — handle with more care than a standard watch.",
    availability: "Available with select dealers and on request.",
  },
  {
    id: "earthen",
    img1: "/watches/earthen-product.jpg",
    img2: "/watches/earthen-wrist.jpg",
    name: "Earthen Co Summit Whiteout MK II",
    ref: "Ceramic field watch",
      why: "Ceramic cases are a luxury material — you find them on Rado, on IWC, on watches that start at ₹3L. Earthen Co is a Hong Kong brand founded by watch collectors, and they built the Summit in full ceramic at under ₹80K. Inspired by the IWC Mark XI pilot dial, Miyota 9039 movement, 100m water resistance, and a white ceramic case with a matte black dial that creates contrast so clean it looks designed by the same person who designed your MacBook. For a first watch it is an extraordinary conversation starter. Currently sold out — I am sourcing.",
    specs: "38mm white ceramic case, 10mm thin. Miyota 9039 automatic, 24 jewels, 42-hour power reserve. 100m water resistance. White sailcloth strap and NATO included.",
    caveat: "Miyota movement is reliable but not refined. This is a watch you buy for the case material, the design, and the value — not the movement. Currently sold out; availability subject to sourcing.",
    availability: "Available on request. Pricing approximately ₹75K–₹80K.",
  },
  {
    id: "farer",
    img1: "/watches/farer-product.jpg",
    img2: "/watches/farer-lume.jpg",
    name: "Farer Lander IV GMT",
    ref: "39.5mm Swiss automatic",
    why: "Farer is a British brand, Swiss-made, founded in 2015 by people who felt that bold dial design had disappeared from watchmaking at this price point. The Lander IV is their GMT — 39.5mm, Sellita SW330-2 movement, sea green sunray dial with Arabic numerals overprinted with Super-LumiNova, screw-down crown, sapphire caseback. A GMT complication means two time zones simultaneously — useful if you travel, and the kind of function that makes a watch earn its keep daily. The colour and personality of this watch are genuinely different from everything else on this list. For someone who rode a Monster, the Lander is the watch that grins back at you.",
    specs: "39.5mm stainless steel case, 10.8mm thin. Sellita SW330-2 GMT automatic, 25 jewels, 56-hour power reserve. 100m water resistance. Screw-down crown. Sapphire caseback.",
    caveat: "The dial is bold — sea green with GMT hand in red. If your wardrobe runs conservative this will feel loud. It is designed to be looked at. Not for everyone.",
    availability: "Available with select dealers and on request.",
  },
];



const nextSteps = [
  "After our call, the goal is simple: narrow this shortlist down to one or two pieces that genuinely fit — not just the budget, but the brief you actually described. Heritage, daily wear, something worth passing on.",
  "Come prepared to tell me which of these you felt drawn to and why. The ones that made you pause are more useful than the ones that just made sense on paper. Once we have a short list, I will take care of the rest — sourcing, viewing, and making sure what ends up on your wrist is the right call.",
  "One thing before we speak: if you have not seen the Panerai PAM00753 on a wrist in photos, look it up. 45mm is a commitment and I want you to arrive with eyes open.",
];

// ─── PASSWORD GATE ────────────────────────────────────────────────────────────

function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const attempt = () => {
    if (value.toLowerCase() === PASSWORD) {
      onUnlock();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setValue("");
    }
  };

  return (
    <div style={{
      minHeight: "100vh", background: DARK, display: "flex",
      alignItems: "center", justifyContent: "center",
      fontFamily: "'DM Mono', monospace",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=DM+Mono:wght@300;400&display=swap');
        @keyframes fadeIn { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes shake { 0%,100%{transform:translateX(0)} 20%,60%{transform:translateX(-8px)} 40%,80%{transform:translateX(8px)} }
        .gate-box { animation: fadeIn 0.8s ease forwards; }
        .shake { animation: shake 0.4s ease; }
        .pw-input { background: transparent; border: none; border-bottom: 1px solid #3a3830;
          color: #f0ece4; font-family: 'DM Mono', monospace; font-size: 13px;
          letter-spacing: 0.2em; padding: 12px 0; width: 100%; outline: none;
          text-align: center; transition: border-color 0.3s; }
        .pw-input:focus { border-bottom-color: ${GOLD}; }
        .pw-btn { background: transparent; border: 1px solid #3a3830; color: ${GOLD};
          font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.2em;
          text-transform: uppercase; padding: 14px 48px; cursor: pointer;
          transition: all 0.25s; margin-top: 24px; }
        .pw-btn:hover { border-color: ${GOLD}; background: rgba(200,184,135,0.05); }
      `}</style>

      <div className="gate-box" style={{ textAlign: "center", maxWidth: 320, padding: "0 24px" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.25em", color: MID, textTransform: "uppercase", marginBottom: 32 }}>
          ONE GOOD WATCH
        </div>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, color: "#f0ece4", lineHeight: 1.2, marginBottom: 8 }}>
          Watch Advisory
        </div>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, color: GOLD, fontStyle: "italic", lineHeight: 1.2, marginBottom: 40 }}>
          Briefing
        </div>
        <div style={{ width: 32, height: 1, background: GOLD, margin: "0 auto 40px" }} />
        <div style={{ fontSize: 10, letterSpacing: "0.2em", color: MID, textTransform: "uppercase", marginBottom: 20 }}>
          Access Code
        </div>
        <div className={shake ? "shake" : ""}>
          <input
            className="pw-input"
            type="password"
            value={value}
            placeholder="· · · · · · · ·"
            onChange={e => { setValue(e.target.value); setError(false); }}
            onKeyDown={e => e.key === "Enter" && attempt()}
            autoFocus
          />
          {error && (
            <div style={{ fontSize: 10, color: "#c47c7c", letterSpacing: "0.15em", marginTop: 10, textTransform: "uppercase" }}>
              Incorrect code
            </div>
          )}
        </div>
        <button className="pw-btn" onClick={attempt}>Enter</button>
      </div>
    </div>
  );
}

// ─── WATCH CARD ───────────────────────────────────────────────────────────────

function WatchCard({ watch, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      border: `1px solid ${RULE}`, marginBottom: 2,
      transition: "border-color 0.3s",
      borderColor: open ? "#3a3830" : RULE,
    }}>
      {/* Header row */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "28px 36px", cursor: "pointer",
          background: open ? "#141210" : "transparent",
          transition: "background 0.25s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: MID, letterSpacing: "0.15em", minWidth: 28 }}>
            {String(index + 1).padStart(2, "0")}
          </div>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, color: "#f0ece4", fontWeight: 600 }}>
              {watch.name}
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: MID, marginTop: 5, letterSpacing: "0.1em" }}>
              {watch.ref}
            </div>
          </div>
        </div>
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: 18, color: open ? GOLD : MID,
          transition: "color 0.25s, transform 0.25s",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
        }}>+</div>
      </div>

      {/* Expanded content */}
      {open && (
        <div style={{ borderTop: `1px solid ${RULE}` }}>

          {/* Two images side by side */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
            {watch.img1 ? (
              <img src={watch.img1} alt={watch.name} style={{
                width: "100%", height: 320, objectFit: "cover", display: "block",
              }} />
            ) : (
              <div style={{ height: 320, background: "#0d0c0a", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 15, color: "#2a2820", fontStyle: "italic" }}>Image pending</span>
              </div>
            )}
            {watch.img2 ? (
              <img src={watch.img2} alt={`${watch.name} on wrist`} style={{
                width: "100%", height: 320, objectFit: "cover", display: "block",
              }} />
            ) : (
              <div style={{ height: 320, background: "#0d0c0a", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 15, color: "#2a2820", fontStyle: "italic" }}>Image pending</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div style={{ padding: "40px 36px 36px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
              <div style={{ gridColumn: "1 / -1" }}>
                <Label>Why this fits you</Label>
                <Body>{watch.why}</Body>
              </div>
              <div>
                <Label>Key characteristics</Label>
                <Body muted>{watch.specs}</Body>
              </div>
              <div>
                <Label>One honest caveat</Label>
                <Body muted italic>{watch.caveat}</Body>
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <Label>Availability</Label>
                <Body muted>{watch.availability}</Body>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── TYPOGRAPHY HELPERS ───────────────────────────────────────────────────────

function Label({ children }) {
  return (
    <div style={{
      fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.2em",
      textTransform: "uppercase", color: MID, marginBottom: 12,
    }}>{children}</div>
  );
}

function Body({ children, muted, italic }) {
  return (
    <p style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 21, lineHeight: 1.85,
      color: muted ? "#8a8070" : "#d8d4cc",
      fontStyle: italic ? "italic" : "normal",
      margin: "0 0 16px",
    }}>{children}</p>
  );
}

function SectionLabel({ text }) {
  return (
    <div style={{
      fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.25em",
      textTransform: "uppercase", color: MID, marginBottom: 14,
    }}>{text}</div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 600,
      color: "#f0ece4", margin: "0 0 36px", lineHeight: 1.2,
    }}>{children}</h2>
  );
}

function Rule() {
  return <div style={{ borderTop: `1px solid ${RULE}`, margin: "80px 0" }} />;
}

// ─── MAIN BRIEF ───────────────────────────────────────────────────────────────

function Brief() {
  return (
    <div style={{ background: DARK, minHeight: "100vh", color: "#d8d4cc" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=DM+Mono:wght@300;400&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        * { box-sizing: border-box; }
        body { margin: 0; }
        .fade-up { animation: fadeUp 0.9s ease forwards; }
        .fade-up-2 { animation: fadeUp 0.9s 0.15s ease both; }
        .fade-up-3 { animation: fadeUp 0.9s 0.3s ease both; }
      `}</style>

      {/* Header */}
      <header style={{
        borderBottom: `1px solid ${RULE}`, padding: "24px 60px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        position: "sticky", top: 0, background: DARK, zIndex: 10,
      }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.25em", color: MID, textTransform: "uppercase" }}>
          One Good Watch
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.15em", color: "#3a3830", textTransform: "uppercase" }}>
          Confidential — {client.name}
        </div>
      </header>

      {/* Cover */}
      <div style={{ padding: "120px 60px 100px", borderBottom: `1px solid ${RULE}` }}>
        <div className="fade-up" style={{ maxWidth: 720 }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, letterSpacing: "0.25em", color: MID, textTransform: "uppercase", marginBottom: 28 }}>
            Watch Advisory Briefing
          </div>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif", margin: 0,
            fontSize: "clamp(60px, 8vw, 100px)", lineHeight: 1.05, fontWeight: 600,
          }}>
            <span style={{ color: "#f0ece4", display: "block" }}>Prepared</span>
            <span style={{ color: GOLD, fontStyle: "italic", display: "block" }}>for {client.name}</span>
          </h1>
        </div>

        <div className="fade-up-2" style={{ display: "flex", gap: 60, marginTop: 60 }}>
          {[
            ["Date", client.date],
            ["Prepared by", client.preparedBy],
          ].map(([label, value]) => (
            <div key={label}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: MID, marginBottom: 8 }}>{label}</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, color: "#d8d4cc" }}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "80px 60px" }}>

        {/* Sections 1 & 2 */}
        {sections.map((s, i) => (
          <div key={s.id} style={{ marginBottom: 80 }}>
            <SectionLabel text={s.label} />
            <SectionTitle>{s.title}</SectionTitle>
            {s.body && s.body.map((p, j) => <Body key={j}>{p}</Body>)}
            {s.bullets && (
              <div style={{ borderLeft: `2px solid ${RULE}`, paddingLeft: 24 }}>
                {s.bullets.map((b, j) => (
                  <div key={j} style={{ display: "flex", gap: 16, marginBottom: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 4, height: 4, background: MID, borderRadius: "50%", marginTop: 10, flexShrink: 0 }} />
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 19, color: "#d8d4cc", lineHeight: 1.7 }}>{b}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <Rule />

        {/* Section 3 — Shortlist */}
        <div style={{ marginBottom: 80 }}>
          <SectionLabel text="Section 3" />
          <SectionTitle>The Shortlist</SectionTitle>
          <Body>Seven options across two categories — established houses and microbrands. The microbrands here are not consolation prizes. They are the picks that serious collectors are making right now at this price point. Each one earns its place.</Body>
          <div style={{ marginTop: 40 }}>
            {watches.map((w, i) => <WatchCard key={w.id} watch={w} index={i} />)}
          </div>
        </div>

        <Rule />

        {/* Section 4 — Next Steps */}
        <div style={{ marginBottom: 80 }}>
          <SectionLabel text="Section 4" />
          <SectionTitle>Next Steps</SectionTitle>
          {nextSteps.map((p, i) => <Body key={i}>{p}</Body>)}
        </div>

        {/* Footer */}
        <div style={{ borderTop: `1px solid ${RULE}`, paddingTop: 48, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.2em", color: "#3a3830", textTransform: "uppercase" }}>
            One Good Watch · onegoodwatch.in · +91 97428 15666
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.15em", color: "#3a3830" }}>
            © {new Date().getFullYear()} Roopesh Balakrishna
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────

export default function IkshitBrief() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("ogw_brief_auth") === "true") setUnlocked(true);
    } catch {}
  }, []);

  const handleUnlock = () => {
    try { sessionStorage.setItem("ogw_brief_auth", "true"); } catch {}
    setUnlocked(true);
  };

  if (!unlocked) return <PasswordGate onUnlock={handleUnlock} />;
  return <Brief />;
}
