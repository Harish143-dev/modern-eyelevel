import React, { useEffect, useMemo, useRef, useState } from 'react';

/* ------------------------------------------------------------------ *
 *  iPhone 16 Pro — physically-referenced CSS device
 *
 *  Everything is expressed in `cqw` (1% of the device width) so the
 *  frame, rails, corner radii and buttons stay proportional at any
 *  size. Real-world reference: 71.45 x 149.6 x 8.25 mm, 6.3" display.
 *    - outer aspect ratio ....... 71.45 / 149.6
 *    - titanium rail face ....... ~1.15 mm  -> 1.60 cqw
 *    - black glass border ....... ~1.40 mm  -> 1.95 cqw
 *    - corner radius ............ ~12.5 mm  -> 17.6 cqw
 * ------------------------------------------------------------------ */

export type Iphone16ProFinish =
  | 'theme'
  | 'black'
  | 'white'
  | 'natural'
  | 'desert'
  | 'cosmic';

/** Cross-section tones of a brushed titanium rail, outer edge -> inner edge. */
type Metal = {
  edge: string;   // extreme silhouette, where light falls away
  spec: string;   // polished chamfer highlight
  light: string;
  mid: string;
  dark: string;
  inner: string;  // shaded lip where metal meets the glass
  seam: string;   // antenna band inlay
};

const FINISHES: Record<Exclude<Iphone16ProFinish, 'theme'>, Metal> = {
  natural: {
    edge: '#6d6862', spec: '#fdfbf7', light: '#e2ded6',
    mid: '#bfbab0', dark: '#8b867d', inner: '#403c37', seam: '#a9a49a',
  },
  black: {
    edge: '#0c0c0e', spec: '#9a9aa1', light: '#5c5c62',
    mid: '#3a3a3f', dark: '#232327', inner: '#0a0a0c', seam: '#4a4a50',
  },
  white: {
    edge: '#a6a49f', spec: '#ffffff', light: '#f6f5f2',
    mid: '#e0ded8', dark: '#b5b3ac', inner: '#5f5d58', seam: '#cfcdc6',
  },
  desert: {
    edge: '#7f6a51', spec: '#fdf4e6', light: '#ebd8bd',
    mid: '#cdb492', dark: '#a2886a', inner: '#4e3f2d', seam: '#bda98a',
  },
  cosmic: {
    edge: '#8d3d12', spec: '#ffdcbc', light: '#f9a463',
    mid: '#ee7a2c', dark: '#c1571a', inner: '#5f2a0c', seam: '#e08a45',
  },
};

const RAIL = 1.6;    // titanium rail face, cqw
const BEZEL = 1.95;  // black glass border, cqw
const R_DEV = 17.6;  // device corner radius, cqw
const R_BEZ = R_DEV - RAIL;
const R_SCR = R_BEZ - BEZEL;

const cq = (n: number) => `${n}cqw`;
const off = (n: number) => `calc(100% - ${n}cqw)`;

/**
 * Injected once by the component so this file stays drop-in portable — copy it
 * into any React + Tailwind project with no config changes required.
 */
const KEYFRAMES = `
@keyframes ip16-float {
  0%,100% { transform: translateY(0) rotateX(2deg) rotateY(-9deg); }
  50%     { transform: translateY(-18px) rotateX(-2deg) rotateY(9deg); }
}
@keyframes ip16-sheen {
  0%,100% { opacity: 0.55; }
  50%     { opacity: 0.85; }
}
.ip16-float { animation: ip16-float 9s ease-in-out infinite; }
.ip16-sheen { animation: ip16-sheen 7s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) {
  .ip16-float, .ip16-sheen { animation: none; }
}`;

/** Rail cross-section read left -> right across the whole device. */
function railGradient(m: Metal) {
  return `linear-gradient(90deg,
    ${m.edge} 0,
    ${m.spec} ${cq(0.16)},
    ${m.light} ${cq(0.4)},
    ${m.mid} ${cq(0.8)},
    ${m.dark} ${cq(1.2)},
    ${m.inner} ${cq(1.6)},
    ${m.mid} ${cq(3.4)},
    ${m.mid} ${off(3.4)},
    ${m.inner} ${off(1.6)},
    ${m.dark} ${off(1.2)},
    ${m.mid} ${off(0.8)},
    ${m.light} ${off(0.4)},
    ${m.spec} ${off(0.16)},
    ${m.edge} 100%)`;
}

/** Top rail faces the light, bottom rail faces away. Fades out before the corners. */
const RAIL_SHADING = `linear-gradient(180deg,
  rgba(255,255,255,0.50) 0,
  rgba(255,255,255,0.14) ${cq(1.3)},
  rgba(255,255,255,0) ${cq(4)},
  rgba(0,0,0,0) ${off(4)},
  rgba(0,0,0,0.30) ${off(1.3)},
  rgba(0,0,0,0.60) 100%)`;

/** A titanium button, viewed edge-on from the front. */
function buttonGradient(m: Metal, side: 'left' | 'right') {
  // Weighted so the face stays as bright as the rail it sits on. It stops at
  // `dark` rather than `inner` — going fully black here would merge the button
  // with the rail's own shaded lip and read as one blob touching the bezel.
  const stops = `${m.edge} 0,
    ${m.spec} 16%,
    ${m.light} 38%,
    ${m.mid} 74%,
    ${m.dark} 100%`;
  return `linear-gradient(${side === 'left' ? 90 : 270}deg, ${stops})`;
}

/** Adds KEYFRAMES to <head> exactly once, however many devices are on the page. */
function useKeyframes() {
  useEffect(() => {
    if (typeof document === 'undefined' || !document.head) return;
    const ID = 'ip16-pro-keyframes';
    if (document.getElementById(ID)) return;
    const el = document.createElement('style');
    el.id = ID;
    el.textContent = KEYFRAMES;
    document.head.appendChild(el);
  }, []);
}

function useIsDark() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof document === 'undefined' || !document.documentElement?.classList?.contains) {
      return false;
    }
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    if (typeof document === 'undefined' || !document.documentElement || typeof MutationObserver === 'undefined') {
      return;
    }
    const el = document.documentElement;
    const obs = new MutationObserver(() => {
      setDark(el.classList?.contains?.('dark') ?? false);
    });
    obs.observe(el, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  return dark;
}

/* ---------------------------- sub-parts ---------------------------- */

/** Antenna inlay across a rail. `y` is a % of device height. */
const AntennaBand: React.FC<{ y: number; m: Metal }> = ({ y, m }) => (
  <div
    aria-hidden
    className="absolute pointer-events-none"
    style={{
      top: `${y}%`,
      left: 0,
      right: 0,
      height: cq(0.34),
      background: `linear-gradient(180deg, rgba(0,0,0,0.28), ${m.seam} 45%, rgba(255,255,255,0.35) 70%, rgba(0,0,0,0.18))`,
      opacity: 0.55,
      mixBlendMode: 'overlay',
    }}
  />
);

type BtnProps = {
  m: Metal;
  side: 'left' | 'right';
  top: number;     // % of device height
  height: number;  // % of device height
  label: string;
};

/** Protrusion of a button past the rail, cqw (~0.9 mm on the real device). */
const BTN_OUT = 0.62;
/**
 * How far the button tucks back under the rail. Deliberately tiny: the rail is
 * only 1.6 cqw wide, so anything more swallows its specular highlight and the
 * button appears to run into the bezel.
 */
const BTN_TUCK = 0.16;

/**
 * A titanium button seen head-on. It repeats the rail's own cross-section —
 * silhouette, chamfer specular, body — then falls into a dark seam where it
 * meets the frame, which is what reads as "proud of the surface".
 */
const HardwareButton: React.FC<BtnProps> = ({ m, side, top, height, label }) => {
  const isLeft = side === 'left';
  const cap = cq(0.26);   // rounded outer corners
  const flat = cq(0.1);   // inner corners sit flush against the rail

  return (
    <div
      aria-label={label}
      className="absolute pointer-events-none"
      style={{
        top: `${top}%`,
        height: `${height}%`,
        [side]: cq(-BTN_OUT),
        width: cq(BTN_OUT + BTN_TUCK),
        background: buttonGradient(m, side),
        borderRadius: isLeft
          ? `${cap} ${flat} ${flat} ${cap}`
          : `${flat} ${cap} ${cap} ${flat}`,
        boxShadow: `0 0 0 0.5px rgba(0,0,0,0.3)`,
      } as React.CSSProperties}
    >
      {/* the ends roll away from the light, so they read as rounded caps */}
      <div
        className="absolute inset-0"
        style={{
          borderRadius: 'inherit',
          background: `linear-gradient(180deg,
            rgba(255,255,255,0.5) 0,
            rgba(255,255,255,0.12) ${cq(0.35)},
            rgba(255,255,255,0) ${cq(0.9)},
            rgba(0,0,0,0) ${off(0.9)},
            rgba(0,0,0,0.28) ${off(0.35)},
            rgba(0,0,0,0.55) 100%)`,
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
};

const DynamicIsland: React.FC = () => (
  <div
    aria-hidden
    className="absolute left-1/2 -translate-x-1/2 z-30 pointer-events-none"
    style={{
      top: '1.65%',
      width: '31.5%',
      height: '3.8%',
      borderRadius: '999px',
      background: '#000',
      boxShadow: 'inset 0 0 0 0.5px rgba(255,255,255,0.06), 0 0.5px 1px rgba(0,0,0,0.9)',
    }}
  >
    {/* front camera: barrel, iris, coating flare, specular pin */}
    <div
      className="absolute rounded-full"
      style={{
        right: '9%',
        top: '50%',
        transform: 'translateY(-50%)',
        aspectRatio: '1 / 1',
        height: '48%',
        background:
          'radial-gradient(circle at 34% 30%, #1d2436 0%, #0d1220 40%, #04060b 66%, #080a10 100%)',
        boxShadow: 'inset 0 0 0 0.5px rgba(90,115,170,0.22)',
      }}
    >
      <div
        className="absolute rounded-full"
        style={{
          inset: '28%',
          background:
            'radial-gradient(circle at 38% 32%, rgba(70,105,180,0.38), rgba(6,8,14,0.92) 72%)',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          left: '20%',
          top: '16%',
          width: '18%',
          height: '18%',
          background: 'rgba(255,255,255,0.55)',
        }}
      />
    </div>
    {/* Face ID dot projector — barely visible under the glass, as on the real device */}
    <div
      className="absolute rounded-full"
      style={{
        left: '13%',
        top: '50%',
        transform: 'translateY(-50%)',
        aspectRatio: '1 / 1',
        height: '30%',
        background: 'radial-gradient(circle, rgba(28,31,38,0.85), rgba(0,0,0,0) 72%)',
      }}
    />
  </div>
);

const StatusBar: React.FC<{ time: string; color?: 'light' | 'dark' }> = ({ time, color = 'light' }) => (
  <div
    className={`absolute left-0 right-0 z-20 flex items-center justify-between pointer-events-none select-none ${color === 'dark' ? 'text-neutral-900' : 'text-white'
      }`}
    style={{ top: '1.5%', height: '4.1%', paddingLeft: '9%', paddingRight: '8%' }}
  >
    <span
      className="font-semibold"
      style={{ fontSize: '3.9cqw', lineHeight: 1, letterSpacing: '-0.02em' }}
    >
      {time}
    </span>
    <div className="flex items-center" style={{ gap: '1.4cqw' }}>
      {/* cellular */}
      <svg viewBox="0 0 18 12" style={{ height: '3cqw' }} fill="currentColor">
        <rect x="0" y="8" width="3" height="4" rx="1" />
        <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
        <rect x="10" y="3" width="3" height="9" rx="1" />
        <rect x="15" y="0" width="3" height="12" rx="1" opacity="0.4" />
      </svg>
      {/* wifi */}
      <svg viewBox="0 0 16 12" style={{ height: '3cqw' }} fill="currentColor">
        <path d="M8 11.2 5.6 8.5a3.6 3.6 0 0 1 4.8 0L8 11.2Z" />
        <path d="M8 6.1c-1.6 0-3.1.6-4.2 1.6L2.4 6.3A8 8 0 0 1 8 4.1a8 8 0 0 1 5.6 2.2l-1.4 1.4A6 6 0 0 0 8 6.1Z" />
        <path d="M8 1.6c-2.7 0-5.2 1-7 2.7L-.3 2.9A12 12 0 0 1 8 -.4a12 12 0 0 1 8.3 3.3L15 4.3A10 10 0 0 0 8 1.6Z" />
      </svg>
      {/* battery */}
      <svg viewBox="0 0 27 13" style={{ height: '3.1cqw' }}>
        <rect x="0.5" y="0.5" width="22" height="12" rx="3.8" fill="none" stroke="currentColor" strokeOpacity="0.4" />
        <rect x="2" y="2" width="17" height="9" rx="2.4" fill="currentColor" />
        <path d="M24.5 4.4c1.1.4 1.7 1.2 1.7 2.1s-.6 1.7-1.7 2.1V4.4Z" fill="currentColor" fillOpacity="0.4" />
      </svg>
    </div>
  </div>
);

/* ----------------------------- device ------------------------------ */

export interface Iphone16ProProps {
  finish?: Iphone16ProFinish;
  /** Y-axis rotation in degrees (-180 → 180). */
  rotate?: number;
  /** Slow 3D float + rotation loop. Overrides `rotate`. */
  autoRotate?: boolean;
  src?: string;
  videoSrc?: string;
  /** Tailwind classes painted behind the screen content. */
  wallpaper?: string;
  showIsland?: boolean;
  showStatusBar?: boolean;
  statusBarColor?: 'light' | 'dark';
  glassReflection?: boolean;
  shadow?: boolean;
  time?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Iphone16Pro: React.FC<Iphone16ProProps> = ({
  finish = 'natural',
  rotate = 0,
  autoRotate = false,
  src,
  videoSrc,
  wallpaper = 'bg-gradient-to-tr from-slate-950 via-indigo-950 to-slate-900',
  showIsland = true,
  showStatusBar = true,
  statusBarColor = 'light',
  glassReflection = true,
  shadow = true,
  time = '9:41',
  className = '',
  children,
}) => {
  useKeyframes();
  const isDark = useIsDark();
  const key = finish === 'theme' ? (isDark ? 'black' : 'white') : finish;
  const m = FINISHES[key];
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => { });
  }, [videoSrc]);

  const band = useMemo(() => railGradient(m), [m]);

  // The specular sweep on the front glass tracks the viewing angle.
  const sweep = Math.max(-40, Math.min(140, 50 - rotate * 0.62));

  return (
    <div
      className={`relative w-full ${className}`}
      style={{ containerType: 'inline-size', perspective: '2400px' }}
    >
      {/* contact shadow on the ground plane */}
      {shadow && (
        <div
          aria-hidden
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            bottom: cq(-4),
            width: '78%',
            height: cq(9),
            borderRadius: '50%',
            background:
              'radial-gradient(ellipse at center, rgba(0,0,0,0.38), rgba(0,0,0,0) 70%)',
            filter: `blur(${cq(2)})`,
          }}
        />
      )}

      <div
        className={autoRotate ? 'ip16-float' : ''}
        style={{
          transformStyle: 'preserve-3d',
          transition: autoRotate ? undefined : 'transform 420ms cubic-bezier(0.16,1,0.3,1)',
          transform: autoRotate
            ? undefined
            : `rotateY(${rotate}deg) rotateX(${-rotate * 0.06}deg)`,
        }}
      >
        {/* ── titanium band ── */}
        <div
          className="relative w-full"
          style={{
            aspectRatio: '71.45 / 149.6',
            borderRadius: cq(R_DEV),
            background: band,
            boxShadow: shadow
              ? `0 ${cq(5)} ${cq(12)} ${cq(-2.5)} rgba(0,0,0,0.34),
                 0 ${cq(1.4)} ${cq(4)} rgba(0,0,0,0.22),
                 0 0 0 0.5px rgba(0,0,0,0.45)`
              : '0 0 0 0.5px rgba(0,0,0,0.4)',
          }}
        >
          {/* top/bottom rail lighting, blended through the corners */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: 'inherit',
              background: RAIL_SHADING,
              mixBlendMode: 'overlay',
            }}
          />
          {/* polished chamfer lip */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: 'inherit',
              border: `${cq(0.11)} solid rgba(255,255,255,0.30)`,
              mixBlendMode: 'overlay',
            }}
          />

          {/* antenna inlays */}
          <AntennaBand y={7.4} m={m} />
          <AntennaBand y={91.2} m={m} />

          {/* hardware buttons — geometry taken off the real device */}
          <HardwareButton m={m} side="left" top={17.8} height={4.6} label="Action Button" />
          <HardwareButton m={m} side="left" top={25.9} height={6.2} label="Volume Up" />
          <HardwareButton m={m} side="left" top={34.2} height={6.2} label="Volume Down" />
          <HardwareButton m={m} side="right" top={26.8} height={12.6} label="Side Button" />

          {/* ── black glass border ── */}
          <div
            className="absolute"
            style={{
              inset: cq(RAIL),
              borderRadius: cq(R_BEZ),
              background: '#08080a',
              boxShadow: `inset 0 0 0 ${cq(0.12)} rgba(255,255,255,0.09),
                inset 0 ${cq(0.15)} ${cq(0.6)} rgba(0,0,0,0.95)`,
            }}
          >
            {/* ── display ── */}
            <div
              className="absolute overflow-hidden"
              style={{ inset: cq(BEZEL), borderRadius: cq(R_SCR), isolation: 'isolate' }}
            >
              {/* media / wallpaper layer */}
              {videoSrc ? (
                <video
                  ref={videoRef}
                  src={videoSrc}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : src ? (
                <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
              ) : (
                <div className={`absolute inset-0 ${wallpaper}`} />
              )}

              {/* app content */}
              <div className="absolute inset-0 z-10">{children}</div>

              {showStatusBar && <StatusBar time={time} color={statusBarColor} />}

              {/* home indicator */}
              <div
                aria-hidden
                className="absolute left-1/2 -translate-x-1/2 z-30 rounded-full pointer-events-none"
                style={{
                  bottom: '0.85%',
                  width: '35%',
                  height: '0.52%',
                  minHeight: '2px',
                  background: 'rgba(255,255,255,0.88)',
                  boxShadow: '0 0 2px rgba(0,0,0,0.35)',
                }}
              />

              {/* panel edge falloff under the cover glass */}
              <div
                aria-hidden
                className="absolute inset-0 z-30 pointer-events-none"
                style={{ boxShadow: `inset 0 0 ${cq(3)} rgba(0,0,0,0.42)` }}
              />
            </div>

            {showIsland && <DynamicIsland />}

            {/* cover glass reflection — spans bezel + display, as real glass does */}
            {glassReflection && (
              <>
                <div
                  aria-hidden
                  className="absolute inset-0 z-40 pointer-events-none ip16-sheen"
                  style={{
                    borderRadius: 'inherit',
                    background: `linear-gradient(${118 + rotate * 0.22}deg,
                      rgba(255,255,255,0.16) 0%,
                      rgba(255,255,255,0.07) ${Math.max(4, sweep * 0.28)}%,
                      rgba(255,255,255,0.015) ${Math.max(12, sweep * 0.52)}%,
                      rgba(255,255,255,0) 62%,
                      rgba(255,255,255,0.035) 86%,
                      rgba(255,255,255,0.10) 100%)`,
                  }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 z-40 pointer-events-none"
                  style={{
                    borderRadius: 'inherit',
                    background: `radial-gradient(120% 60% at ${sweep}% -12%,
                      rgba(255,255,255,0.20), rgba(255,255,255,0) 62%)`,
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iphone16Pro;
