<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://capsule-render.vercel.app/api?type=waving&color=0:020202,60:0a0a0c,100:020202&height=160&section=header&text=portfolio&fontColor=4a4a52&fontSize=32&fontAlignY=45&fontFamily=monospace&animation=fadeIn">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:020202,60:0a0a0c,100:020202&height=160&section=header&text=portfolio&fontColor=4a4a52&fontSize=32&fontAlignY=45&fontFamily=monospace&animation=fadeIn" alt="header" width="100%">
</picture>

```
a collection of things that probably didn't need to be built — but were anyway
```

![Next.js](https://img.shields.io/badge/Next.js_16-020202?style=flat-square&logo=next.js&logoColor=4a4a52&labelColor=0a0a0c)
![React](https://img.shields.io/badge/React_19-020202?style=flat-square&logo=react&logoColor=4a4a52&labelColor=0a0a0c)
![TypeScript](https://img.shields.io/badge/TypeScript-020202?style=flat-square&logo=typescript&logoColor=4a4a52&labelColor=0a0a0c)
![Three.js](https://img.shields.io/badge/Three.js-020202?style=flat-square&logo=three.js&logoColor=4a4a52&labelColor=0a0a0c)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-020202?style=flat-square&logo=framer&logoColor=4a4a52&labelColor=0a0a0c)
![TailwindCSS](https://img.shields.io/badge/Tailwind_v4-020202?style=flat-square&logo=tailwindcss&logoColor=4a4a52&labelColor=0a0a0c)
![WebGL](https://img.shields.io/badge/WebGL-020202?style=flat-square&logo=webgl&logoColor=4a4a52&labelColor=0a0a0c)

</div>

---

## `[ 01 / SPACE PARTICLE FIELD ]`

The background is a live WebGL scene — not a video, not a GIF, not a CSS trick. A `@react-three/fiber` canvas sits fixed behind the entire site at `z-index: 0` and never unmounts across page navigation.

**5,000 points** are distributed volumetrically inside a sphere using `Math.cbrt(Math.random())` for the radius. Most people use `Math.random()` directly which clusters points toward the center. Cube root distribution gives true volumetric uniformity — the same density at the core as at the edges.

```ts
const r = 12 * Math.cbrt(Math.random());
const theta = Math.random() * 2 * Math.PI;
const phi = Math.acos(2 * Math.random() - 1);
```

The sphere rotates slowly on two axes simultaneously. A `CameraRig` component runs inside the canvas loop and lerps the camera position against two inputs at once:

- **Scroll progress** — as you scroll down the page, the camera moves forward through the field (`z: 6 → z: 2`), giving the sensation of moving deeper into space
- **Cursor position** — the camera drifts toward the cursor with a lazy `0.05` lerp factor, like the field is breathing around your mouse

Both inputs are combined with a slow sinusoidal sway so the scene never feels static even when nothing is moving.

---

## `[ 02 / WAVE FILL ON PROJECT TITLES ]`

Each project title on the homepage is rendered twice, stacked exactly on top of each other. The bottom layer is dim. The top layer is full brightness — but masked by a SVG `clipPath` containing an animated wave path.

On hover, the wave rises from below the text to above it via a spring animation, "filling" the title like liquid. The wave itself runs on an infinite horizontal loop so it always looks natural regardless of where in the cycle the hover starts.

```tsx
<motion.path
  d="M -1 0 Q -0.75 -0.04, -0.5 0 T 0 0 Q 0.25 -0.04, 0.5 0 T 1 0 ..."
  animate={{
    x: [0, -1],           // infinite horizontal loop
    y: isHovered ? -0.15 : 1.15,  // rises on hover
  }}
  transition={{
    x: { repeat: Infinity, ease: "linear", duration: 4 },
    y: { type: "spring", stiffness: 70, damping: 14 }
  }}
/>
```

The `clipPathUnits="objectBoundingBox"` means the path coordinates are relative to the element — so the wave scales perfectly regardless of the title's rendered size at any viewport width.

---

## `[ 03 / CUSTOM CURSOR WITH BLEND MODE ]`

The system cursor is hidden globally via `cursor: none`. A `motion.div` replaces it — a small white circle tracking the mouse with spring physics (`stiffness: 150, damping: 15, mass: 0.1`).

The cursor runs on `mix-blend-mode: difference`. Against the near-black background it appears white. Against white text it inverts to black — the text appears to cut through it. No color logic needed anywhere.

Three states:

| State | Trigger | Behavior |
|---|---|---|
| `none` | Default | 16px dot |
| `default` | Links, buttons | Scales to 2.5x |
| `project` | `.project-hover-trigger` | Scales to 6x, near-transparent with a border, backdrop blur |

The project state essentially creates a magnifying lens over the title. The cursor becomes the hover effect.

---

## `[ 04 / SCROLL-SEQUENCED PROJECT REVEALS ]`

The work section is a `300vh` tall container with a sticky inner panel. As you scroll through 300vh of space, three projects appear and disappear in sequence — each one entering, holding, then exiting — all without any JavaScript scroll listeners in the traditional sense.

`useScroll` from Framer Motion tracks the container's scroll progress as a `MotionValue` from `0 → 1`. Each project maps to a window of that range and has four animated properties derived from it:

```ts
const y      = useTransform(progress, [in0, in1, out0, out1], [200, 0, 0, -200]);
const opacity = useTransform(progress, [in0, in1, out0, out1], [0, 1, 1, 0]);
const blur    = useTransform(progress, [in0, in1, out0, out1], ["blur(30px)", "blur(0px)", "blur(0px)", "blur(30px)"]);
const scale   = useTransform(progress, [in0, in1, out0, out1], [0.8, 1, 1, 1.2]);
```

Each project comes in from below with blur, holds perfectly still while you scroll past, then exits upward and slightly oversized. The whole thing is GPU-composited — no layout thrashing.

---

## `[ 05 / CINEMATIC NOISE OVERLAY ]`

A fixed `div` covers the entire viewport at `z-index: 9999` with `pointer-events: none`. Its background is an inline SVG data URI using `feTurbulence` with `fractalNoise`:

```css
background-image: url("data:image/svg+xml,...feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'...");
mix-blend-mode: overlay;
opacity: 0.06;
```

No image asset. No external dependency. The grain exists entirely as a mathematical noise function rendered at paint time, blended over everything at 6% opacity. It makes the flat black background feel like film.

---

## `[ 06 / BLUR PAGE TRANSITIONS ]`

Every route change runs through `app/template.tsx` — Next.js's per-page animation wrapper. Each page enters from `opacity: 0, blur(15px)` and exits to the same. Duration is 1.5s on a custom ease `[0.16, 1, 0.3, 1]` — fast acceleration, long smooth tail.

The result is that navigating between pages feels like a lens pulling focus rather than a screen cutting or sliding.

---

## `[ 07 / SCROLL-DRIVEN TEXT REVEAL ]`

The about page renders a paragraph split into individual `<span>` elements — one per word. Each word has its own `opacity` derived from scroll position via `useTransform`, mapped to a small window of the overall scroll range.

As you scroll, words light up from left to right in sequence. The text is always fully rendered in the DOM — nothing is hidden or injected. Only opacity changes, so it's fully accessible and indexable.

---

## `[ 08 / LENIS SMOOTH SCROLL ]`

Lenis replaces the browser's native scroll with a configurable spring-damped version. The settings are tuned toward weight:

```ts
duration: 2.0,
easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
wheelMultiplier: 0.8,
```

The exponential easing means the scroll decelerates very slowly — content drifts to a stop rather than snapping. The `0.8` wheel multiplier adds friction. The combined effect is that the page feels heavier than it is, which makes the spatial scale of the typography feel earned.

---

## `[ 09 / PRELOADER ]`

On first load, a full-screen overlay fades in with the text `INITIALIZING ARCHITECTURE` — blurring in from nothing, then the entire overlay fading out after 2.5 seconds. It runs entirely in CSS-driven Framer Motion. Its only job is to give the WebGL scene time to initialize before the page content arrives.

---

## `[ RUNNING IT ]`

```bash
git clone https://github.com/Somay-kousis/portfolio.git
cd portfolio
npm install
npm run dev
```

`http://localhost:3000` — preloader runs on first hit, skip it on subsequent navigations.

---

<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://capsule-render.vercel.app/api?type=waving&color=0:020202,60:0a0a0c,100:020202&height=100&section=footer&text=location%3A+global+%C2%B7+status%3A+active&fontColor=2a2a2e&fontSize=10&fontAlignY=65&fontFamily=monospace">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:020202,60:0a0a0c,100:020202&height=100&section=footer&text=location%3A+global+%C2%B7+status%3A+active&fontColor=2a2a2e&fontSize=10&fontAlignY=65&fontFamily=monospace" alt="footer" width="100%">
</picture>

</div>
