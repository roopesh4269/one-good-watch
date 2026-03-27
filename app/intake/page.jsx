"use client";
import { useState, useEffect } from "react";

const GOLD = "#c8b887";
const DARK = "#0e0e0e";
const MID = "#6a6458";
const RULE = "#1e1c18";
const DIM = "#2a2820";

// ─── QUESTION FLOWS ───────────────────────────────────────────────────────────

const SHARED = [
  {
    id: "name",
    type: "text",
    label: "Let's start with your name.",
    placeholder: "Your name",
    field: "name",
    required: true,
  },
  {
    id: "phone",
    type: "tel",
    label: "Best number to reach you on.",
    placeholder: "+91",
    field: "phone",
    required: true,
  },
  {
    id: "prompt",
    type: "choice",
    label: "What's prompting this search right now?",
    field: "prompt",
    options: [
      "My first serious watch purchase",
      "Adding to a collection I've already started",
      "A gift for someone",
      "Just exploring — no rush",
    ],
  },
  {
    id: "relationship",
    type: "choice",
    label: "How would you describe your relationship with watches?",
    field: "relationship",
    options: [
      "Just getting started — still learning the landscape",
      "I know a little — follow some brands and references",
      "Follow the space closely — read, research, obsess a little",
      "Serious collector — been at this a while",
    ],
  },
  {
    id: "budget",
    type: "choice",
    label: "What's the budget you're working with?",
    field: "budget",
    branch: true,
    options: [
      { label: "Under ₹2L", tier: 1 },
      { label: "₹2L – ₹5L", tier: 1 },
      { label: "₹5L – ₹10L", tier: 2 },
      { label: "Above ₹10L", tier: 3 },
    ],
  },
  {
    id: "radar",
    type: "text",
    label: "Any watches already on your radar?",
    placeholder: "Brand, reference, or just a description. 'Nothing yet' is fine.",
    field: "radar",
    required: false,
  },
];

const TIER1 = [
  {
    id: "t1_for",
    type: "choice",
    label: "What's this watch primarily for?",
    field: "t1_for",
    options: [
      "Daily wear — on the wrist constantly",
      "Occasional or special use",
      "A gift for someone",
    ],
  },
  {
    id: "t1_style",
    type: "choice",
    label: "Which of these feels most like you?",
    field: "t1_style",
    options: [
      "Classic and understated",
      "Sport and functional",
      "Micro-brand / independent",
      "Not sure yet — open to suggestions",
    ],
  },
  {
    id: "t1_pull",
    type: "text",
    label: "In one line — what pulls you toward watches?",
    placeholder: "What draws you to them?",
    field: "t1_pull",
    required: false,
  },
];

const TIER2 = [
  {
    id: "t2_occasions",
    type: "multichoice",
    label: "What occasions are you buying for?",
    field: "t2_occasions",
    options: [
      "Daily wear",
      "Boardroom / professional",
      "Travel",
      "Special occasions",
      "Something that does it all",
    ],
  },
  {
    id: "t2_owns",
    type: "text",
    label: "Do you own any watches already?",
    placeholder: "Brands and references if you know them. 'Nothing yet' is fine.",
    field: "t2_owns",
    required: false,
  },
  {
    id: "t2_sensibility",
    type: "choice",
    label: "How would you describe your watch sensibility?",
    field: "t2_sensibility",
    options: [
      "Dress / classic",
      "Sport / robust",
      "Diver",
      "Pilot / aviation",
      "No strong preference — show me what fits",
    ],
  },
  {
    id: "t2_wrist",
    type: "choice",
    label: "How would you describe your wrist?",
    field: "t2_wrist",
    options: [
      "Slim (under 16cm)",
      "Medium (16–18cm)",
      "Larger (18cm+)",
      "Not sure",
    ],
  },
  {
    id: "t2_value",
    type: "choice",
    label: "How important is value retention to this purchase?",
    field: "t2_value",
    options: [
      "Important — I'd like it to hold or appreciate",
      "Somewhat — I'd prefer it not to lose badly",
      "Not a priority — I'm buying to wear, not invest",
    ],
  },
  {
    id: "t2_source",
    type: "choice",
    label: "How did you find One Good Watch?",
    field: "t2_source",
    options: [
      "Wound Daily (Substack)",
      "A referral from someone I know",
      "Other",
    ],
  },
];

const TIER3 = [
  {
    id: "t3_budget_specific",
    type: "choice",
    label: "More specifically, what's the budget for this piece?",
    field: "t3_budget_specific",
    options: [
      "₹10L – ₹20L",
      "₹20L – ₹50L",
      "₹50L+",
      "Flexible — depends on finding the right piece",
    ],
  },
  {
    id: "t3_owns",
    type: "text",
    label: "What do you currently own?",
    placeholder: "Key pieces if you'd like to share.",
    field: "t3_owns",
    required: false,
  },
  {
    id: "t3_missing",
    type: "text",
    label: "What's missing — functionally, aesthetically, or emotionally?",
    placeholder: "Sometimes it's specific. Sometimes it's a feeling. Both are useful.",
    field: "t3_missing",
    required: false,
  },
  {
    id: "t3_movement",
    type: "choice",
    label: "Any strong movement preference?",
    field: "t3_movement",
    options: [
      "Automatic",
      "Hand-wound",
      "Open to both",
      "Depends entirely on the piece",
    ],
  },
  {
    id: "t3_complications",
    type: "choice",
    label: "What complications are you drawn to?",
    field: "t3_complications",
    options: [
      "Simple three-hand",
      "Date",
      "GMT / dual time",
      "Chronograph",
      "Grand complication",
      "No preference — the right watch first",
    ],
  },
  {
    id: "t3_material",
    type: "choice",
    label: "Any case material preferences?",
    field: "t3_material",
    options: [
      "Steel",
      "Gold (yellow / rose / white)",
      "Titanium",
      "Platinum",
      "Truly open",
    ],
  },
  {
    id: "t3_wear",
    type: "text",
    label: "How do you wear watches — how often, with what, and where?",
    placeholder: "A daily driver and a piece worn twice a year are very different briefs.",
    field: "t3_wear",
    required: false,
  },
  {
    id: "t3_purchase_thinking",
    type: "choice",
    label: "How do you think about this purchase?",
    field: "t3_purchase_thinking",
    options: [
      "Purely emotional — I want to love it",
      "Balanced — should hold up financially too",
      "Primarily value-driven — appreciation matters",
    ],
  },
  {
    id: "t3_timeline",
    type: "choice",
    label: "What's your timeline?",
    field: "t3_timeline",
    options: [
      "Ready to move now",
      "Within the next 3 months",
      "Exploring — no pressure",
    ],
  },
];

const ENDINGS = {
  1: {
    title: "You're all set.",
    body: "I'll review this before we speak. See you on the call.",
  },
  2: {
    title: "Perfect.",
    body: "I'll review your answers so we can get straight to the good part. See you on the call.",
  },
  3: {
    title: "Good to have this.",
    body: "This gives me a clear picture. I'll come prepared. Looking forward to our conversation.",
  },
};

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function OGWIntake() {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0); // index into current flow
  const [tier, setTier] = useState(null); // 1, 2, or 3
  const [phase, setPhase] = useState("shared"); // shared | tier | done
  const [animating, setAnimating] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  // Current question
  const flow = phase === "shared" ? SHARED : phase === "tier" ? (tier === 1 ? TIER1 : tier === 2 ? TIER2 : TIER3) : [];
  const question = flow[step] || null;

  // Progress calculation
  const tierFlow = tier === 1 ? TIER1 : tier === 2 ? TIER2 : TIER3;
  const totalShared = SHARED.length;
  const totalTier = tier ? tierFlow.length : 6;
  const total = totalShared + totalTier;
  const sharedDone = phase === "shared" ? step : totalShared;
  const tierDone = phase === "tier" ? step : phase === "done" ? totalTier : 0;
  const current = sharedDone + tierDone;
  const progress = Math.min((current / total) * 100, 100);

  const transition = (fn) => {
    setAnimating(true);
    setTimeout(() => { fn(); setAnimating(false); }, 260);
  };

  const answer = answers[question?.field] || "";

  const handleChoice = (value) => {
    if (question.type === "multichoice") {
      setMultiSelected(prev =>
        prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
      );
      return;
    }
    const newAnswers = { ...answers, [question.field]: value };
    setAnswers(newAnswers);

    if (question.branch) {
      const opt = question.options.find(o => o.label === value);
      const newTier = opt?.tier || 2;
      setTier(newTier);
      transition(() => {
        if (step + 1 < SHARED.length) {
          setStep(step + 1);
        } else {
          setPhase("tier");
          setStep(0);
        }
      });
    } else {
      advance(newAnswers);
    }
  };

  const advance = (currentAnswers = answers) => {
    const ans = currentAnswers || answers;
    if (question.type === "multichoice") {
      setAnswers({ ...ans, [question.field]: multiSelected.join(", ") });
      setMultiSelected([]);
    }
    transition(() => {
      if (phase === "shared") {
        if (step + 1 < SHARED.length) {
          setStep(step + 1);
        } else {
          setPhase("tier");
          setStep(0);
        }
      } else if (phase === "tier") {
        const tFlow = tier === 1 ? TIER1 : tier === 2 ? TIER2 : TIER3;
        if (step + 1 < tFlow.length) {
          setStep(step + 1);
        } else {
          submitForm(ans);
        }
      }
    });
  };

  const submitForm = async (finalAnswers) => {
    setSending(true);
    setPhase("done");
    try {
      if (window.emailjs) {
        const body = Object.entries(finalAnswers)
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n");
        await window.emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
          from_name: finalAnswers.name || "Unknown",
          from_phone: finalAnswers.phone || "—",
          budget: finalAnswers.budget || "—",
          message: body,
          to_email: "roopesh.balakrishna@gmail.com",
        });
      }
    } catch (e) {
      console.error(e);
    }
    setSending(false);
    setSubmitted(true);
  };

  const canAdvance = () => {
    if (!question) return false;
    if (question.type === "multichoice") return multiSelected.length > 0;
    if (question.required === false) return true;
    return !!(answers[question.field] || "").trim();
  };

  useEffect(() => {
    if (!document.getElementById("emailjs-sdk")) {
      const s = document.createElement("script");
      s.id = "emailjs-sdk";
      s.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
      s.onload = () => window.emailjs?.init("YOUR_EMAILJS_PUBLIC_KEY");
      document.head.appendChild(s);
    }
  }, []);

  // ── DONE SCREEN ────────────────────────────────────────────────────────────
  if (phase === "done") {
    const ending = ENDINGS[tier] || ENDINGS[2];
    return (
      <div style={{ minHeight: "100vh", background: DARK, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
        <style>{fonts + baseStyles}</style>
        <div style={{ textAlign: "center", maxWidth: 480 }} className="fade-up">
          <div className="mono" style={{ fontSize: 10, letterSpacing: "0.25em", color: MID, textTransform: "uppercase", marginBottom: 32 }}>One Good Watch</div>
          <div style={{ width: 32, height: 1, background: GOLD, margin: "0 auto 40px" }} />
          <div className="serif" style={{ fontSize: 40, color: "#f0ece4", fontWeight: 600, marginBottom: 16, lineHeight: 1.1 }}>{ending.title}</div>
          <div className="serif" style={{ fontSize: 20, color: MID, fontStyle: "italic", lineHeight: 1.7 }}>{ending.body}</div>
          <div style={{ marginTop: 48 }}>
            <a href="https://onegoodwatch.in" style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.2em", color: MID, textTransform: "uppercase", textDecoration: "none" }}>
              ← Back to One Good Watch
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (!question) return null;

  return (
    <div style={{ minHeight: "100vh", background: DARK, display: "flex", flexDirection: "column" }}>
      <style>{fonts + baseStyles}</style>

      {/* Progress bar */}
      <div style={{ height: 1, background: RULE, position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, height: "100%", background: GOLD, width: `${progress}%`, transition: "width 0.5s ease" }} />
      </div>

      {/* Header */}
      <div style={{ padding: "24px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${RULE}` }}>
        <div className="mono" style={{ fontSize: 10, letterSpacing: "0.25em", color: MID, textTransform: "uppercase" }}>One Good Watch</div>
        <div className="mono" style={{ fontSize: 10, color: DIM, letterSpacing: "0.1em" }}>
          {current} of {total}
        </div>
      </div>

      {/* Question */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 24px" }}>
        <div style={{ maxWidth: 640, width: "100%", opacity: animating ? 0 : 1, transform: animating ? "translateY(12px)" : "translateY(0)", transition: "opacity 0.25s ease, transform 0.25s ease" }}>

          {/* Label */}
          <div className="serif" style={{ fontSize: "clamp(22px, 4vw, 34px)", color: "#f0ece4", fontWeight: 600, lineHeight: 1.25, marginBottom: 40 }}>
            {question.label}
          </div>

          {/* Text input */}
          {(question.type === "text" || question.type === "tel") && (
            <div>
              <input
                className="q-input"
                type={question.type}
                placeholder={question.placeholder}
                value={answers[question.field] || ""}
                onChange={e => setAnswers({ ...answers, [question.field]: e.target.value })}
                onKeyDown={e => e.key === "Enter" && canAdvance() && advance()}
                autoFocus
              />
              <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 16 }}>
                <button
                  className="q-btn"
                  onClick={() => advance()}
                  disabled={!canAdvance()}
                  style={{ opacity: canAdvance() ? 1 : 0.4 }}
                >
                  {question.required === false && !answers[question.field] ? "Skip →" : "Continue →"}
                </button>
                {question.required === false && (
                  <span className="mono" style={{ fontSize: 10, color: DIM, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Optional
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Single choice */}
          {question.type === "choice" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {question.options.map((opt, i) => {
                const label = typeof opt === "string" ? opt : opt.label;
                const selected = answers[question.field] === label;
                return (
                  <button
                    key={i}
                    className="q-choice"
                    onClick={() => handleChoice(label)}
                    style={{ borderColor: selected ? GOLD : RULE, color: selected ? GOLD : "#d8d4cc", background: selected ? "rgba(200,184,135,0.05)" : "transparent" }}
                  >
                    <span className="mono" style={{ fontSize: 10, color: selected ? GOLD : DIM, marginRight: 16, letterSpacing: "0.1em" }}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    {label}
                  </button>
                );
              })}
            </div>
          )}

          {/* Multi choice */}
          {question.type === "multichoice" && (
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                {question.options.map((opt, i) => {
                  const selected = multiSelected.includes(opt);
                  return (
                    <button
                      key={i}
                      className="q-choice"
                      onClick={() => handleChoice(opt)}
                      style={{ borderColor: selected ? GOLD : RULE, color: selected ? GOLD : "#d8d4cc", background: selected ? "rgba(200,184,135,0.05)" : "transparent" }}
                    >
                      <span className="mono" style={{ fontSize: 10, color: selected ? GOLD : DIM, marginRight: 16, letterSpacing: "0.1em" }}>
                        {selected ? "✓" : String.fromCharCode(65 + i)}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <button className="q-btn" onClick={() => advance()} disabled={!canAdvance()} style={{ opacity: canAdvance() ? 1 : 0.4 }}>
                  Continue →
                </button>
                <span className="mono" style={{ fontSize: 10, color: DIM, letterSpacing: "0.1em", textTransform: "uppercase" }}>Select all that apply</span>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: "20px 40px", borderTop: `1px solid ${RULE}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button
          onClick={() => {
            if (step > 0) transition(() => setStep(step - 1));
            else if (phase === "tier") transition(() => { setPhase("shared"); setStep(SHARED.length - 1); });
          }}
          className="mono"
          style={{ fontSize: 10, color: step === 0 && phase === "shared" ? DIM : MID, letterSpacing: "0.15em", textTransform: "uppercase", background: "none", border: "none", cursor: step === 0 && phase === "shared" ? "default" : "pointer", padding: 0 }}
          disabled={step === 0 && phase === "shared"}
        >
          ← Back
        </button>
        <div className="mono" style={{ fontSize: 9, color: DIM, letterSpacing: "0.1em" }}>onegoodwatch.in</div>
      </div>
    </div>
  );
}

// ─── STYLES ───────────────────────────────────────────────────────────────────

const fonts = `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Mono:wght@300;400&display=swap');`;

const baseStyles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #0e0e0e; }
  @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
  .fade-up { animation: fadeUp 0.7s ease forwards; }
  .serif { font-family: 'Cormorant Garamond', serif; }
  .mono { font-family: 'DM Mono', 'Courier New', monospace; }
  .q-input {
    background: transparent;
    border: none;
    border-bottom: 1px solid #2a2820;
    color: #f0ece4;
    font-family: 'Cormorant Garamond', serif;
    font-size: 24px;
    padding: 12px 0;
    width: 100%;
    outline: none;
    transition: border-color 0.25s;
  }
  .q-input::placeholder { color: #2a2820; }
  .q-input:focus { border-bottom-color: #c8b887; }
  .q-btn {
    background: transparent;
    border: 1px solid #3a3830;
    color: #c8b887;
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    padding: 16px 40px;
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
  }
  .q-btn:hover:not(:disabled) { border-color: #c8b887; background: rgba(200,184,135,0.04); }
  .q-btn:disabled { cursor: default; }
  .q-choice {
    background: transparent;
    border: 1px solid #1e1c18;
    color: #d8d4cc;
    font-family: 'Cormorant Garamond', serif;
    font-size: 18px;
    padding: 18px 24px;
    text-align: left;
    cursor: pointer;
    transition: border-color 0.2s, color 0.2s, background 0.2s;
    display: flex;
    align-items: center;
    width: 100%;
  }
  .q-choice:hover { border-color: #3a3830; }
  @media (max-width: 640px) {
    .q-choice { font-size: 16px; padding: 16px 18px; }
    .q-input { font-size: 20px; }
  }
`;
