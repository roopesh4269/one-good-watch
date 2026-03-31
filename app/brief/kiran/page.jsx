"use client";
import { useState, useEffect } from "react";

const PASSWORD = "ogw8811";

const GOLD = "#c8b887";
const DARK = "#0e0e0e";
const MID = "#6a6458";
const LIGHT = "#f5f4f0";
const RULE = "#1e1c18";

// ─── DATA ────────────────────────────────────────────────────────────────────

const client = {
  name: "Kiran Kalakuntla",
  date: "31 March 2026",
  preparedBy: "Roopesh Balakrishna",
};

const sections = [
  {
    id: "profile",
    label: "Section 1",
    title: "Your Profile",
    body: [
      "Kiran – you said sport and functional. Daily wear, on the wrist constantly. Movement complexity pulls you in. And you want it to hold value. That last part is where most people get this wrong: they walk into a watch purchase with the appreciation argument and walk out with a TAG Heuer. So let us be precise about what this brief actually means.",
      "You built ekincare from a standing start. $27M raised. Duke Engineering Management. Angel investor writing cheques into other people's ideas. The kind of person who does not buy something because it is sensible – who buys something because they have thought it through and they are right. A watch for you is not a flex. It is a position. And positions require a thesis. Mine is this: at ₹2L–₹5L, the watch that simultaneously earns daily wear, carries real mechanical interest, and holds financial ground is a short list. Five watches long, to be exact.",
    ],
  },
  {
    id: "brief",
    label: "Section 2",
    title: "What You're Looking For",
    bullets: [
      "Budget: ₹2L–₹5L – with room to stretch for the right piece",
      "Use: Daily wear – on the wrist constantly, needs to work with everything",
      "Style: Sport and functional – not a dress watch, not a conversation piece",
      "Movement: Complexity matters – you want to understand what you are wearing",
      "Value: Appreciation matters – this is not just a purchase, it is a position",
      "Purchase: First serious watch – the one that starts the collection",
    ],
  },
];

const watches = [
  {
    id: "pelagos",
    img1: "/watches/kiran-pelagos-product.jpg",
    img2: "/watches/kiran-pelagos-wrist.jpg",
    name: "Tudor Pelagos 39",
    ref: "Ref. M25407N-0001 · ₹4,83,000 MRP",
    why: "Titanium at this price is almost unheard of. Most watches in this bracket are steel – full stop. The Pelagos 39 gives you a full titanium case and bracelet, which means it sits lighter on the wrist than anything else on this list. The MT5402 is Tudor's own in-house movement – COSC-certified chronometer, 70-hour power reserve, visible through a sapphire caseback. The snowflake hands are a Tudor signature that no other brand uses. 200m water resistance, ceramic bezel insert, and the kind of tool-watch seriousness that does not apologise for itself. Tudor's appreciation trajectory has been one of the strongest in the segment – they made in-house movements, Rolex parentage provides the service network, and the brand has been consistently gaining collector respect since 2015. This is the pick if appreciation is the primary argument.",
    specs: "39mm titanium case and bracelet, 11.8mm thick. In-house Calibre MT5402 automatic, COSC-certified, 70-hour power reserve. Unidirectional rotating ceramic bezel. 200m water resistance. Sapphire caseback. Snowflake hands.",
    caveat: "₹4,83,000 MRP is the top of your stated range. Ethos and other ADs will negotiate – expect 5–10% off. The titanium bracelet is exceptional but the watch is heavy on the dial side due to the bezel. Try it on if you can before committing.",
    availability: "MRP ₹4,83,000. Negotiation expected at authorised dealers.",
  },
  {
    id: "iwc",
    img1: "/watches/kiran-iwc-product.jpg",
    img2: "/watches/kiran-iwc-angled.jpg",
    name: "IWC Pilot's Watch Mark XX",
    ref: "Ref. IW328207 · ₹5,83,000 MRP",
    why: "The Mark line started in 1948 – built for the Royal Air Force, designed around one principle: tell the time in an instant, in any conditions. The Mark XX is the current iteration of that 76-year brief. What makes it genuinely interesting for you is the Calibre 32111: IWC's own movement, 120-hour power reserve – five full days – which is exceptional at any price point, let alone this one. The soft-iron inner case protects the movement from magnetic fields, a design feature carried unchanged from the original. 40mm wears perfectly as a daily piece. The white dial and Arabic numerals make it the most legible watch on this list by some distance. IWC sits firmly in the established Swiss house tier – service network, heritage, and the brand recognition that holds value. Over budget at MRP, but IWC is one of the most negotiated brands at Indian ADs.",
    specs: "40mm stainless steel case. In-house Calibre 32111 automatic, 120-hour power reserve. Soft-iron inner case for magnetic resistance. 10 bar (100m) water resistance. Sapphire crystal. EasX-CHANGE strap system. Date at 3.",
    caveat: "₹5,83,000 MRP is above your stated ceiling. With negotiation and the right AD relationship, it can come within ₹5L – but it requires a conversation. Go in knowing the number you want. Worth it if the movement story and the heritage argument speak to you.",
    availability: "MRP ₹5,83,000. Significant negotiation possible at authorised dealers.",
  },
  {
    id: "farer",
    img1: "/watches/kiran-farer-product.jpg",
    img2: "/watches/kiran-farer-lume.jpg",
    name: "Farer Lander IV GMT",
    ref: "Ref. Lander IV 39.5mm · ~₹1,65,000 via NoHype",
    why: "British design, Swiss-made, founded in 2015. The Lander IV is their GMT – which means two time zones simultaneously, tracked by a fourth hand that runs a 24-hour scale independently of the main time. This is a real mechanical complication, not a display function, powered by a Sellita SW330-2 in the 'Top Grade' specification – adjusted for accuracy in five positions. The sea green sunray dial with Arabic numerals overprinted fourteen times with Super-LumiNova, a screw-down crown, sapphire caseback, and 100m water resistance. The lume on this watch in low light is extraordinary – the second shot shows you why. At ~₹1,65,000 via No Hype Horology, it is the value outlier on this list, and that is the point: it leaves room in the budget for a second piece. The GMT function is genuinely useful if you work with teams in other time zones – which, as a founder and investor, you do.",
    specs: "39.5mm stainless steel case, 10.8mm thin. Sellita SW330-2 GMT automatic, Top Grade, adjusted in 5 positions. 25 jewels, 56-hour power reserve. 100m water resistance. Screw-down crown. Sapphire caseback. Sea green sunray dial.",
    caveat: "The dial is bold – sea green with a red GMT hand and orange seconds. If your wardrobe is conservative this will feel loud. It is designed to be noticed. The movement is Sellita, not in-house – excellent quality but not the complexity story the IWC or Tudor can tell.",
    availability: "Approximately ₹1,65,000 delivered. Available with select dealers.",
  },
  {
    id: "oris",
    img1: "/watches/kiran-oris-product.jpg",
    img2: "/watches/kiran-oris-angled.jpg",
    name: "Oris ProPilot Date",
    ref: "Ref. 01 733 7805 4163 · ₹2,25,000 MRP",
    why: "The movement argument. Oris Calibre 733-1 is a modified Sellita base with a see-through caseback – you can watch the mechanism work. Knurled bezel borrowed from pilot watch heritage, 41mm, Arabic numerals, date at 6. 100m water resistance. But the real story here is value: at ₹2,25,000 MRP with AD negotiation, you are getting a Swiss automatic with a visible movement, sapphire caseback, and a pilot watch aesthetic that has decades of credibility behind it. Oris is one of the few remaining independent Swiss brands not owned by a conglomerate – still family-run, still making deliberate choices about what they produce. The ProPilot is their working person's pilot watch, and it is honest about what it is. For a first watch, it does not try to be more than it is – which is sometimes exactly what you need.",
    specs: "41mm stainless steel case, 11.7mm thick. Calibre 733-1 automatic. See-through caseback. 100m water resistance. Sapphire crystal. Grey dial with Arabic numerals. Date at 6. Leather strap with deployant clasp.",
    caveat: "The most conservative choice on this list aesthetically. The grey dial and leather strap are understated to the point of invisibility. Excellent if that is the brief – less interesting if you want the watch to say something. Also the weakest appreciation argument of the five.",
    availability: "MRP ₹2,25,000. Available at authorised dealers.",
  },
  {
    id: "arcanaut",
    img1: "/watches/kiran-arcanaut-wrist.jpg",
    img2: "/watches/kiran-arcanaut-lume.jpg",
    name: "Arcanaut ARC II D'Arc Roast",
    ref: "33 pieces worldwide · ~₹4,00,000 via NoHype",
    why: "Nothing on this list – or anyone else's list – is like this watch. The dial is made from real ground coffee beans. James Thompson, Arcanaut's materials director, spent years developing a composite that binds freshly ground coffee with a UV-resistant resin, mills it into a plate, and cuts it into a dial. Each of the 33 dials is fractionally different – the grain, the texture, the depth. The ARC II case is micro-blasted 316L stainless steel, CNC-milled in Copenhagen, with hand-polished highlights applied by Danish watchmakers. The Soprod M100 inside is a Swiss-made automatic adjusted in 5 positions. There is no numbers track, no date, no GMT – just hours and minutes and a dial that looks like an espresso puck photographed from space. It is 33 pieces worldwide, full stop. You bought a watch that 32 other people on the planet own. As a founder who has spent years building something genuinely different from everything else in the market – you will understand immediately why this exists.",
    specs: "40.52mm stainless steel case, 12.82mm thick, 49.06mm lug-to-lug. Soprod M100 Swiss automatic, adjusted in 5 positions, 28,800vph, 42-hour power reserve. 100m water resistance. Real coffee composite dial – unique per piece. 33 pieces total production.",
    caveat: "Time-only – no date, no GMT, no complication. The resale market for Arcanaut is thin outside collector circles. This is not an appreciation play – it is a statement of taste. Buy it because you want to own something that nobody else in the room has ever seen, not because it will be worth more in five years.",
    availability: "Approximately ₹4,00,000 delivered. 33 pieces worldwide – need to confirm availability before anything else.",
  },
];

const nextSteps = [
  "After our call, we narrow it down to one watch. One piece that fits your wrist, your brief and the way you actually live. You said daily wear and you meant it. That rules out anything you will be careful around.",
  "Come with a view. Not necessarily a decision – a direction. Tell me which of these pulled at you and why. The one that made you pause is more useful than the one that just made sense on paper. Once we know the direction, we can handle the rest.",
  "Speak soon.",
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
      <div
        className="card-header"
        onClick={() => setOpen(!open)}
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          cursor: "pointer",
          background: open ? "#141210" : "transparent",
          transition: "background 0.25s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: MID, letterSpacing: "0.15em", minWidth: 28 }}>
            {String(index + 1).padStart(2, "0")}
          </div>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 21, color: "#f0ece4", fontWeight: 600 }}>
              {watch.name}
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: MID, marginTop: 4, letterSpacing: "0.1em" }}>
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

      {open && (
        <div style={{ borderTop: `1px solid ${RULE}` }}>
          <div className="img-grid">
            {watch.img1 ? (
              <img src={watch.img1} alt={watch.name} style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }} />
            ) : (
              <div style={{ height: 320, background: "#0d0c0a", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 15, color: "#2a2820", fontStyle: "italic" }}>Image pending</span>
              </div>
            )}
            {watch.img2 ? (
              <img src={watch.img2} alt={`${watch.name} detail`} style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }} />
            ) : (
              <div style={{ height: 320, background: "#0d0c0a", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 15, color: "#2a2820", fontStyle: "italic" }}>Image pending</span>
              </div>
            )}
          </div>

          <div className="card-content">
            <div className="content-grid">
              <div className="full-col">
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
              <div className="full-col">
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

// ─── TYPOGRAPHY ───────────────────────────────────────────────────────────────

function Label({ children }) {
  return (
    <div style={{
      fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.2em",
      textTransform: "uppercase", color: MID, marginBottom: 10,
    }}>{children}</div>
  );
}

function Body({ children, muted, italic }) {
  return (
    <p style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 17, lineHeight: 1.75,
      color: muted ? "#8a8070" : "#d8d4cc",
      fontStyle: italic ? "italic" : "normal",
      margin: "0 0 16px",
    }}>{children}</p>
  );
}

function SectionLabel({ text }) {
  return (
    <div style={{
      fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.25em",
      textTransform: "uppercase", color: MID, marginBottom: 12,
    }}>{text}</div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 600,
      color: "#f0ece4", margin: "0 0 28px", lineHeight: 1.2,
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
        .img-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; }
        .content-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        .full-col { grid-column: 1 / -1; }
        .cover-pad { padding: 120px 60px 100px; border-bottom: 1px solid #1e1c18; }
        .content-pad { max-width: 860px; margin: 0 auto; padding: 80px 60px; }
        .card-header { padding: 28px 36px; }
        .card-content { padding: 40px 36px 36px; }
        @media (max-width: 640px) {
          .img-grid { grid-template-columns: 1fr; }
          .img-grid img { height: 260px !important; }
          .content-grid { grid-template-columns: 1fr; gap: 24px; }
          .full-col { grid-column: 1; }
          .cover-pad { padding: 60px 24px 56px; }
          .content-pad { padding: 48px 24px; }
          .card-header { padding: 20px 20px; }
          .card-content { padding: 24px 20px 28px; }
          .brief-header { padding: 16px 20px !important; }
        }
      `}</style>

      <header className="brief-header" style={{
        borderBottom: `1px solid ${RULE}`, padding: "24px 60px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        position: "sticky", top: 0, background: DARK, zIndex: 10,
      }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.25em", color: MID, textTransform: "uppercase" }}>
          One Good Watch
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.15em", color: "#3a3830", textTransform: "uppercase" }}>
          Confidential – {client.name}
        </div>
      </header>

      <div className="cover-pad">
        <div className="fade-up" style={{ maxWidth: 720 }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.25em", color: MID, textTransform: "uppercase", marginBottom: 20 }}>
            Watch Advisory Briefing
          </div>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif", margin: 0,
            fontSize: "clamp(36px, 7vw, 72px)", lineHeight: 1.05, fontWeight: 600,
          }}>
            <span style={{ color: "#f0ece4", display: "block" }}>Prepared</span>
            <span style={{ color: GOLD, fontStyle: "italic", display: "block" }}>for {client.name}</span>
          </h1>
        </div>

        <div className="fade-up-2" style={{ display: "flex", gap: 60, marginTop: 60, flexWrap: "wrap" }}>
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

      <div className="content-pad">

        {sections.map((s) => (
          <div key={s.id} style={{ marginBottom: 80 }}>
            <SectionLabel text={s.label} />
            <SectionTitle>{s.title}</SectionTitle>
            {s.body && s.body.map((p, j) => <Body key={j}>{p}</Body>)}
            {s.bullets && (
              <div style={{ borderLeft: `2px solid ${RULE}`, paddingLeft: 24 }}>
                {s.bullets.map((b, j) => (
                  <div key={j} style={{ display: "flex", gap: 16, marginBottom: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 4, height: 4, background: MID, borderRadius: "50%", marginTop: 10, flexShrink: 0 }} />
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, color: "#d8d4cc", lineHeight: 1.7 }}>{b}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <Rule />

        <div style={{ marginBottom: 80 }}>
          <SectionLabel text="Section 3" />
          <SectionTitle>The Shortlist</SectionTitle>
          <Body>Five options across two tiers – established Swiss houses and precision independents. The range in price is deliberate: the Farer at ₹1,65,000 and the Oris at ₹2,25,000 are not lesser choices. They are different arguments. Come to the call knowing which argument you find most compelling.</Body>
          <div style={{ marginTop: 40 }}>
            {watches.map((w, i) => <WatchCard key={w.id} watch={w} index={i} />)}
          </div>
        </div>

        <Rule />

        <div style={{ marginBottom: 80 }}>
          <SectionLabel text="Section 4" />
          <SectionTitle>Next Steps</SectionTitle>
          {nextSteps.map((p, i) => <Body key={i}>{p}</Body>)}
        </div>

        <div style={{ borderTop: `1px solid ${RULE}`, paddingTop: 48, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
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

export default function KiranBrief() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("ogw_kiran_auth") === "true") setUnlocked(true);
    } catch {}
  }, []);

  const handleUnlock = () => {
    try { sessionStorage.setItem("ogw_kiran_auth", "true"); } catch {}
    setUnlocked(true);
  };

  if (!unlocked) return <PasswordGate onUnlock={handleUnlock} />;
  return <Brief />;
}
