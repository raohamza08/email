import type { CSSProperties } from "react";

type CSSVars = CSSProperties & Record<"--i", number>;

export default function ThankYou() {
  const name = "Rao Hamza Badar";

  return (
    <main className="wrap">
      {/* Layers */}
      <div className="bg-base" />
      <div className="sweep" aria-hidden="true" />
      <div className="ripple" aria-hidden="true" />
      <div className="grid-floor" aria-hidden="true" />

      {/* Content card */}
      <section className="panel">
        <div className="ring" aria-hidden="true" />
        <h1 className="title">Thank you!</h1>
        <p className="subtitle">Your confirmation has been received.</p>

        <div className="name">— {name}</div>

      </section>

      {/* Orbital cyan particles (CSS-only) */}
      <div className="particles" aria-hidden="true">
        {Array.from({ length: 28 }).map((_, i) => (
          <span key={i} style={{ "--i": i } as CSSVars} />
        ))}
      </div>

      <style>{`
        :root{
          --black: #05080c;
          --deep: #07121b;
          --cyan: #00e5ff;
          --cyan-2: #17b6b2;
          --cyan-glow: 0 0 10px rgba(0,229,255,.7), 0 0 24px rgba(0,229,255,.35);
          --card: rgba(255,255,255,0.04);
          --stroke: rgba(0,229,255,0.22);
          --text: #eaf9ff;
          --muted: #9bd6e2;
        }

        *{ box-sizing: border-box }
        html, body { height: 100% }
        body { margin: 0; background: var(--black); color: var(--text); }

        .wrap{
          position: relative;
          min-height: 100dvh;
          display: grid;
          place-items: center;
          overflow: hidden;
          isolation: isolate;
          padding: 24px;
        }

        /* Deep vignette + cyan bloom */
        .bg-base{
          position: absolute; inset: -20%;
          background:
            radial-gradient(1200px 600px at 50% 10%, rgba(0,229,255,.15), transparent 60%),
            radial-gradient(1000px 800px at 10% 80%, rgba(0,229,255,.08), transparent 60%),
            radial-gradient(900px 900px at 90% 70%, rgba(0,229,255,.06), transparent 60%),
            linear-gradient(180deg, var(--deep), var(--black));
          filter: saturate(110%);
          z-index: -4;
        }

        /* Cyan scanning sweep */
        .sweep{
          position: absolute; inset: -50% -50%;
          background:
            conic-gradient(from 0deg, rgba(0,229,255,0) 0deg, rgba(0,229,255,.18) 30deg, rgba(0,229,255,0) 60deg);
          mix-blend-mode: screen;
          animation: spin 18s linear infinite;
          z-index: -3;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* Concentric ripple rings from center */
        .ripple::before,
        .ripple::after{
          content:"";
          position: absolute; left: 50%; top: 35%;
          width: 40vmin; height: 40vmin; border-radius: 50%;
          transform: translate(-50%, -50%) scale(0.6);
          border: 2px solid rgba(0,229,255,.35);
          box-shadow: var(--cyan-glow);
          animation: ripple 4.5s ease-out infinite;
          filter: blur(.2px);
        }
        .ripple::after{
          animation-delay: 1.8s;
          opacity: .75;
        }
        @keyframes ripple {
          0% { transform: translate(-50%, -50%) scale(0.4); opacity: .9; }
          70% { opacity: .18; }
          100% { transform: translate(-50%, -50%) scale(1.25); opacity: 0; }
        }

        /* Tron-like floor grid */
        .grid-floor{
          position: absolute; left: 50%; bottom: -6%;
          width: 140vw; height: 60vh;
          transform: translateX(-50%) perspective(700px) rotateX(65deg);
          background:
            linear-gradient(transparent 29px, rgba(0,229,255,.25) 30px) 0 0/ 60px 60px,
            linear-gradient(90deg, transparent 29px, rgba(0,229,255,.25) 30px) 0 0/ 60px 60px;
          box-shadow: 0 -10px 60px rgba(0,229,255,.15) inset;
          mask-image: linear-gradient(to top, black 30%, transparent 100%);
          animation: slide 8s linear infinite;
          z-index: -1;
        }
        @keyframes slide {
          to { background-position: 0 60px, 60px 0; }
        }

        /* Card */
        .panel{
          position: relative;
          width: min(740px, 92vw);
          padding: 36px 30px 40px;
          border-radius: 20px;
          background: var(--card);
          border: 1px solid var(--stroke);
          backdrop-filter: blur(12px) saturate(115%);
          -webkit-backdrop-filter: blur(12px) saturate(115%);
          box-shadow:
            0 18px 60px rgba(0,0,0,.45),
            0 0 0 1px rgba(255,255,255,.04) inset;
        }

       

        .title{
          margin: 8px 0 8px;
          text-align: center;
          font-size: clamp(26px, 5vw, 40px);
          letter-spacing: .4px;
          background: linear-gradient(90deg, #a6ffff, var(--cyan), #a6ffff);
          -webkit-background-clip: text; background-clip: text;
          color: transparent;
          text-shadow: 0 2px 10px rgba(0,229,255,.2);
        }
        .subtitle{
          margin: 0 auto 18px;
          text-align: center;
          color: var(--muted);
          max-width: 60ch;
          font-size: clamp(14px, 2.4vw, 16px);
        }
        .name{
          text-align: center;
          color: #c6f9ff;
          font-weight: 700;
          margin: 6px 0 24px;
          letter-spacing: .2px;
          text-shadow: var(--cyan-glow);
        }

       

        /* Orbital particles around header area */
        .particles{
          position: absolute; inset: 0; pointer-events: none; z-index: 1;
        }
        .particles span{
          --size: 3px;
          --radius: calc(40px + (var(--i) * 4px));
          --duration: calc(6s + (var(--i) * .12s));
          --alpha: calc((80 - (var(--i) * 2)) / 100);
          position: absolute; left: 50%; top: 32%;
          width: var(--size); height: var(--size);
          background: rgba(0,229,255, var(--alpha));
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(0,229,255, .65);
          transform-origin: 0 0;
          animation: orbit var(--duration) linear infinite;
          filter: saturate(140%);
        }
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(var(--radius)) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(var(--radius)) rotate(-360deg); }
        }

        @media (max-width: 500px){
          .panel{ padding: 28px 18px 32px; }
        }
      `}</style>
    </main>
  );
}
