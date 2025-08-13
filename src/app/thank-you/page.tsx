import type { CSSProperties } from "react";

type CSSVarI = CSSProperties & Record<"--i", number>;

export default function ThankYou() {
  const name = "Rao Hamza Badar";

  return (
    <main className="container">
      <div className="bg-gradient" />
      <div className="bg-grid" />
      <div className="glow-orb orb-1" />
      <div className="glow-orb orb-2" />

      <section className="card">
        <div className="border-anim" aria-hidden="true" />
        <div className="check">
          <svg viewBox="0 0 64 64" aria-hidden="true">
            <circle className="circle" cx="32" cy="32" r="28" />
            <path className="tick" d="M18 33 L28 43 L46 22" />
          </svg>
        </div>

        <h1 className="title">Thanks! Confirmation received.</h1>
        <p className="subtitle">Your response has been recorded successfully.</p>

        <div className="signature">
          <span>— {name}</span>
        </div>

        <a className="btn" href="/" aria-label="Go back to home">
          Go back home
          <span className="sheen" aria-hidden="true" />
        </a>
      </section>

      {/* Confetti (typed CSS var) */}
      <div className="confetti" aria-hidden="true">
        {Array.from({ length: 28 }).map((_, i) => (
          <span key={i} style={{ "--i": i } as CSSVarI} />
        ))}
      </div>

      <style>{`
        :root{
          --bg1:#0b1220; --bg2:#0c1729; --cyan:#06b6d4; --blue:#3b82f6; --pink:#ec4899;
          --card:rgba(255,255,255,0.06); --stroke:rgba(255,255,255,0.18);
          --text:#e8f0ff; --muted:#9fb2d8;
        }
        *{box-sizing:border-box} html,body{height:100%} body{margin:0;background:var(--bg1);color:var(--text)}
        .container{position:relative;min-height:100dvh;display:grid;place-items:center;overflow:hidden;isolation:isolate;padding:24px}
        .bg-gradient{position:absolute;inset:-20% -20%;background:conic-gradient(from 0deg at 50% 50%,rgba(6,182,212,0.18),transparent 35%,rgba(59,130,246,0.14) 55%,transparent 75%,rgba(236,72,153,0.10));animation:spin 18s linear infinite;filter:blur(40px) saturate(120%);z-index:-3}
        @keyframes spin{to{transform:rotate(360deg)}}
        .bg-grid{position:absolute;inset:0;background:radial-gradient(circle at 50% 50%,rgba(255,255,255,0.08),transparent 40%),repeating-linear-gradient(0deg,rgba(255,255,255,0.06),rgba(255,255,255,0.06) 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,rgba(255,255,255,0.06),rgba(255,255,255,0.06) 1px,transparent 1px,transparent 40px);opacity:.25;transform:translateZ(0);animation:drift 22s ease-in-out infinite alternate;z-index:-2}
        @keyframes drift{0%{transform:translate3d(0,0,0) scale(1)}100%{transform:translate3d(0,-20px,0) scale(1.02)}}
        .glow-orb{position:absolute;width:38vmin;height:38vmin;border-radius:50%;filter:blur(30px);opacity:.35;mix-blend-mode:screen;z-index:-1}
        .orb-1{background:radial-gradient(circle at 30% 30%,#22d3ee,transparent 60%);top:-8vmin;left:-6vmin;animation:float1 14s ease-in-out infinite}
        .orb-2{background:radial-gradient(circle at 70% 70%,#60a5fa,transparent 60%);bottom:-10vmin;right:-8vmin;animation:float2 16s ease-in-out infinite}
        @keyframes float1{0%,100%{transform:translate(0,0)}50%{transform:translate(10px,-12px)}}
        @keyframes float2{0%,100%{transform:translate(0,0)}50%{transform:translate(-14px,10px)}}
        .card{position:relative;width:min(720px,92vw);padding:32px 28px 36px;border-radius:20px;background:var(--card);border:1px solid var(--stroke);box-shadow:0 10px 40px rgba(0,0,0,0.35),inset 0 1px 0 rgba(255,255,255,0.08);backdrop-filter:blur(12px) saturate(120%);-webkit-backdrop-filter:blur(12px) saturate(120%)}
        .border-anim{position:absolute;inset:-2px;border-radius:22px;padding:2px;background:conic-gradient(from 180deg,var(--cyan),var(--blue),var(--pink),var(--cyan));-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;animation:border-rotate 5s linear infinite;opacity:.9;pointer-events:none}
        @keyframes border-rotate{to{transform:rotate(360deg)}}
        .check{display:grid;place-items:center;width:94px;height:94px;margin:0 auto 14px;border-radius:50%;background:radial-gradient(circle at 35% 30%,rgba(34,211,238,.35),transparent 60%);position:relative}
        .check svg{width:72px;height:72px}
        .circle{fill:none;stroke:rgba(255,255,255,0.25);stroke-width:3;stroke-dasharray:176;stroke-dashoffset:176;animation:draw 1s ease-out forwards .1s}
        .tick{fill:none;stroke:#22d3ee;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;filter:drop-shadow(0 0 8px rgba(34,211,238,.65));stroke-dasharray:48;stroke-dashoffset:48;animation:draw 700ms ease-out forwards .5s}
        @keyframes draw{to{stroke-dashoffset:0}}
        .title{margin:6px 0 6px;font-size:clamp(22px,4vw,32px);letter-spacing:.3px;text-align:center;text-shadow:0 1px 0 rgba(255,255,255,0.05)}
        .subtitle{margin:0 auto 18px;text-align:center;color:var(--muted);max-width:56ch;font-size:clamp(14px,2.4vw,16px)}
        .signature{text-align:center;margin:6px 0 22px;color:#cfe6ff;opacity:.9;font-weight:600}
        .btn{--btn:#06b6d4;position:relative;display:inline-flex;align-items:center;gap:10px;margin:0 auto;padding:14px 22px;border-radius:999px;color:#001217;font-weight:800;text-decoration:none;background:linear-gradient(180deg,#8be8ff,#5ed6ef 45%,#44cde8 60%,#18b8d6 100%);box-shadow:0 10px 28px rgba(6,182,212,0.35),inset 0 1px 0 rgba(255,255,255,.6);outline:none;border:0;justify-content:center;width:max-content;transition:transform .2s ease, box-shadow .2s ease;animation:pulse 2.4s ease-in-out infinite}
        .btn:hover{transform:translateY(-2px);box-shadow:0 14px 34px rgba(6,182,212,0.45),inset 0 1px 0 rgba(255,255,255,.7)}
        @keyframes pulse{0%,100%{filter:saturate(100%)}50%{filter:saturate(120%)}}
        .btn .sheen{position:absolute;inset:0;border-radius:inherit;overflow:hidden;pointer-events:none}
        .btn .sheen::before{content:"";position:absolute;inset:-40%;background:conic-gradient(from 0deg,rgba(255,255,255,0),rgba(255,255,255,0.55),rgba(255,255,255,0));animation:sheen 3s ease-in-out infinite;mix-blend-mode:screen}
        @keyframes sheen{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
        .confetti{position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:2}
        .confetti span{--size:calc(6px + (var(--i) % 3) * 2px);position:absolute;left:50%;top:42%;width:var(--size);height:var(--size);background:hsl(calc((var(--i) * 37) % 360), 90%, 60%);transform:translate(-50%, -50%) rotate(0deg);border-radius:2px;animation:pop 900ms ease-out forwards, fall 1400ms cubic-bezier(.2,.7,.2,1) forwards;animation-delay:calc(20ms * var(--i));opacity:.95}
        @keyframes pop{to{transform:translate(-50%,-50%) rotate(180deg) scale(1.3)}}
        @keyframes fall{to{transform:translate(calc(-50% + (var(--i) - 14) * 12px), calc(-50% + 160px + (var(--i) % 5) * 8px)) rotate(calc((var(--i) * 23) * 1deg));opacity:0}}
        @media (max-width:480px){.card{padding:26px 18px 30px}}
      `}</style>
    </main>
  );
}
